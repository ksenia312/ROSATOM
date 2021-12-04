import gzip
import os
import numpy as np
import matplotlib.pyplot as plt
from eolearn.core import SaveTask, LoadTask, FeatureType, LinearWorkflow, EOPatch, EOTask
from eolearn.mask import AddValidDataMaskTask
from eolearn.features import SimpleFilterTask
from img_read import *
import pickle
from PIL import Image


def show_images(images) -> None:
    n = len(images)
    f = plt.figure()
    for i in range(n):
        # Debug, plot figure
        f.add_subplot(1, n, i + 1)
        plt.imshow(images[i])
    plt.show(block=True)


def show_combo(patch, a, b, c, data_name="L2A_data_full"):

    show_images(np.clip(patch.data[data_name][..., [a, b, c]], 0, 1))



def default_imgs_flow():
    dir_path = os.path.join("..", "clear_dataset")
    for dir in os.listdir(dir_path):
        try:
            patch = form_patch(dir_path=os.path.join(dir_path, dir, "sentinel2-l2a", "patches", "64x64-10", "2021",))
        except:
            continue
        save_rgb(patch, dir)


def save_rgb(patch, name):
    for i, data in enumerate(patch.data["L2A_data"]):

        img = Image.fromarray(np.clip(data[:, :]*255, 0, 255).astype('uint8'), 'RGB')
        img.save(os.path.join('clear', name+ str(i) + ".png"))


if __name__=="__main__":
    default_imgs_flow()

