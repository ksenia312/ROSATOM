import gzip
import os
import numpy as np
import matplotlib.pyplot as plt
from eolearn.core import SaveTask, LoadTask, FeatureType, LinearWorkflow, EOPatch, EOTask
from eolearn.mask import AddValidDataMaskTask
from eolearn.features import SimpleFilterTask
from img_read import *
from Sentinel_import.sentinel import *
import pickle
"""
patch[FeatureType.MASK]["CLD"] = np.load(gzip.open(os.path.join("РН-ННП-2020-149", "mask", "CLD" + ".npy.gz"), "r"))

"""

"""
TODO
разобраться с облачностью
найти картинку с наименьшей облачностью
понеслись machine-learning
"""

""" Кастомный вывод изображений"""


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


def define_NDVI(patch, name):
    """Показатель для растительности. Чем ниже, тем хуже с зелёными насаждениями"""
    index_mas = []
    for i in range(patch.data["L2A_data_full"].shape[0]):
        B8 = patch.data["L2A_data_full"][i][..., 7]
        B4 = patch.data["L2A_data_full"][i][..., 3]
        NDVI = (B8-B4)/(B8+B4)
        index_mas.append(NDVI)

    return index_mas, name


def define_NDWI(patch, name):
    index_mas = []
    for i in range(patch.data["L2A_data_full"].shape[0]):
        B8 = patch.data["L2A_data_full"][i][ ..., 7]
        B3 = patch.data["L2A_data_full"][i][ ..., 2]
        NDWI = (B3-B8)/(B3+B8)
        index_mas.append(NDWI)

    return index_mas, name


def default_imgs_flow():
    dir_path = os.path.join("..", "2021-01")
    for dir in os.listdir(dir_path):
        try:
            patch = form_patch(dir_path=os.path.join(dir_path, dir))
        except:
            print("error")
            continue
        #show_combo(patch, 3, 2, 1)
        mas, name = define_NDWI(patch, dir)
        save_index_NDWI(mas, name)


def oil_imgs_flow():

    dir_path = os.path.join("..", "..", "2021-01")
    for dir in os.listdir(dir_path):
        try:
            patch = form_patch(dir_path=os.path.join(dir_path, dir))
        except:
            print("error")
            continue
        # show_combo(patch, 3, 2, 1)
        mas, name = define_NDWI(patch, dir)
        save_index_NDVI(mas, name)


def save_index_NDWI(index_mas, index_name):
    for i, array in enumerate(index_mas):
        try:
            np.save(os.path.join("..", "..", "saved_oil_NDWI", index_name + str(i) + ".npy"), array)
        except:
            print("ошибка")
            pass


def save_index_NDVI(index_mas, index_name):
    for i, array in enumerate(index_mas):
        try:
            np.save(os.path.join("..", "..", "saved_oil_NDVI", index_name + str(i) + ".npy"), array)
        except:
            print("ошибка")
            pass

if __name__=="__main__":
    oil_imgs_flow()

