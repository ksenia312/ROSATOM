import matplotlib.pyplot as plt
import datetime
import numpy as np
from sentinelhub import DataCollection, Band, Unit

from aenum import MultiValueEnum
from matplotlib.colors import ListedColormap, BoundaryNorm

from sentinelhub import BBox, CRS, DataCollection, MimeType, SentinelHubRequest, SHConfig

from eolearn.core import SaveTask, LoadTask, FeatureType, LinearWorkflow
from eolearn.io import SentinelHubInputTask, SentinelHubDemTask, SentinelHubEvalscriptTask, get_available_timestamps
# In case you put the credentials into the configuration file you can leave this unchanged

CLIENT_ID = '83dcb0df-e7b0-43a6-a852-883f39dc466a'
CLIENT_SECRET = 'eYvN|IWyNnZx6*s]uQAYihe0@qdWH[{lIOmu.F|F'

config = SHConfig()

if CLIENT_ID and CLIENT_SECRET:
    config.sh_client_id = CLIENT_ID
    config.sh_client_secret = CLIENT_SECRET

if config.sh_client_id == '' or config.sh_client_secret == '' or config.instance_id == '':
    print("Warning! To use Sentinel Hub services, please provide the credentials (client ID and client secret).")


# region of interest
roi_bbox = BBox(bbox=[5.60, 52.68, 5.75, 52.63], crs=CRS.WGS84)

# time interval of downloaded data
time_interval = ('2018-04-01', '2018-04-04')

# maximal cloud coverage (based on Sentinel-2 provided tile metadata)
maxcc = .8

# resolution of the request (in metres)
resolution = 20

# time difference parameter (minimum allowed time difference; if two observations are closer than this, they will be mosaicked into one observation)
time_difference = datetime.timedelta(hours=2)


fixed_metabands = []
for metaband in DataCollection.SENTINEL2_L2A.metabands:
    if metaband.name == 'SCL':
        fixed_metaband = Band('SCL', (Unit.DN,), (np.uint8,))
        fixed_metabands.append(fixed_metaband)
    elif metaband.name == 'CLD':
        fixed_metaband = Band('CLD', (Unit.PERCENT,), (np.uint8,))
        fixed_metabands.append(fixed_metaband)
    else:
        fixed_metabands.append(metaband)

fixed_collection = DataCollection.SENTINEL2_L2A.define_from(
    'SENTINEL2_L2A_FIXED',
    metabands=fixed_metabands
)

# Now use the fixed collection in the eo-learn task
input_task = SentinelHubInputTask(
    data_collection=fixed_collection,
    bands=['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B8A', 'B09', 'B11', 'B12'],
    bands_feature=(FeatureType.DATA, 'BANDS-S2-L2A'),
    additional_data=[(FeatureType.MASK, 'dataMask', 'IS_DATA'),
                     (FeatureType.MASK, 'SCL'),
                     (FeatureType.DATA, 'viewZenithMean'),
                     (FeatureType.DATA, 'sunZenithAngles'),
                     (FeatureType.DATA, 'viewAzimuthMean'),
                     (FeatureType.DATA, 'sunAzimuthAngles')],
    resolution=resolution,
    maxcc=maxcc,
    time_difference=time_difference,
    config=config,
    max_threads=3
)
workflow = LinearWorkflow(input_task)



def catch_patch():
    result = workflow.execute({
        input_task: {'bbox': roi_bbox, 'time_interval': time_interval}
    })
    eopatch = result.eopatch()
    print(eopatch)
    return eopatch