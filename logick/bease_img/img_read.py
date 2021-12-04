import gzip
import os
import numpy as np
import matplotlib.pyplot as plt
from eolearn.core import SaveTask, LoadTask, FeatureType, LinearWorkflow, EOPatch, EOTask
from eolearn.mask import AddValidDataMaskTask
from eolearn.features import SimpleFilterTask

import pickle

def form_patch(dir_path):
    patch = form_start_patch(dir_path)
    add_valid_mask = AddValidDataMaskTask(predicate=calculate_valid_data_mask)
    patch = add_valid_mask.execute(patch)
    add_coverage = AddValidDataCoverageTask(patch)
    patch = add_coverage.execute(patch)
    cloud_coverage_threshold = 0.50
    remove_cloudy_scenes = SimpleFilterTask((FeatureType.MASK, 'VALID_DATA'),
                                            ValidDataCoveragePredicate(cloud_coverage_threshold))
    patch = remove_cloudy_scenes.execute(patch)
    my_mas = []
    for i in range(patch.data["L2A_data"].shape[0]):
        if 0.2 < np.mean(patch.data["L2A_data"][i, ...]) < 0.90:
            my_mas.append(i)
    patch.data["L2A_data"] = patch.data["L2A_data"][my_mas]
    patch.data["L2A_data_full"] = patch.data["L2A_data_full"][my_mas]
    return patch


def form_start_patch(dir_path):
    patch = EOPatch()
    with gzip.open(os.path.join(dir_path, "data", "L2A.npy.gz"), "r") as f:
        patch[FeatureType.DATA]['L2A_data_full'] = np.load(f)
        patch[FeatureType.DATA]['L2A_data'] = patch.data['L2A_data_full'][:][..., [3, 2, 1]]
    for i in ["CLM", "IS_DATA"]:
        with gzip.open(os.path.join(dir_path, "mask", i + ".npy.gz"), "r") as f:
            patch[FeatureType.MASK][i] = np.load(f)
    with gzip.open(os.path.join(dir_path, "timestamp.pkl.gz"), "r") as f:
        patch[FeatureType.TIMESTAMP] = pickle.load(f)
    with gzip.open(os.path.join(dir_path, "bbox.pkl.gz"), "r") as f:
        patch[FeatureType.BBOX] = pickle.load(f)
    with gzip.open(os.path.join(dir_path, "meta_info.pkl.gz"), "r") as f:
        patch[FeatureType.META_INFO] = pickle.load(f)
    return patch


def calculate_valid_data_mask(eopatch):
    """Получаем нужную маску?"""
    is_data_mask = eopatch.mask['IS_DATA'].astype(np.bool_)
    cloud_mask = ~eopatch.mask['CLM'].astype(np.bool_)
    return np.logical_and(is_data_mask, cloud_mask)
    #return eopatch.mask['dataMask'].astype(bool) & ~(eopatch.mask['CLM'].astype(bool))


def calculate_coverage(array):
    return 1.0 - np.count_nonzero(array) / np.size(array)


class AddValidDataCoverageTask(EOTask):

    def execute(self, eopatch):

        valid_data = eopatch.get_feature(FeatureType.MASK, 'VALID_DATA')
        time, height, width, channels = valid_data.shape

        coverage = np.apply_along_axis(calculate_coverage, 1,
                                       valid_data.reshape((time, height * width * channels)))
        eopatch[FeatureType.SCALAR, 'COVERAGE'] = coverage[:, np.newaxis]
        return eopatch


class ValidDataCoveragePredicate:

    def __init__(self, threshold):
        self.threshold = threshold

    def __call__(self, array):
        return calculate_coverage(array) < self.threshold