import tensorflow as tf
import keras
import os
import numpy as np
from keras.preprocessing.image import load_img, ImageDataGenerator
import matplotlib as plt
def get_test_predictions(test_generator, model, dataset_len=20000):
    labels = []
    preds = []
    datas = []

    samples = 0
    for i, batch in enumerate(test_generator):
        data, label = batch
        labels.append(label)
        preds.append(model.predict(data))
        datas.append(data)
        samples += len(data)
        if samples >= dataset_len:
            break

    labels_vec = np.hstack(labels)
    preds_vec = np.hstack([pred.reshape(-1, ) for pred in preds])
    datas_vec = np.vstack(datas)
    preds_labels = preds_vec.copy()
    preds_labels[preds_labels < 0.5] = 0
    preds_labels[preds_labels >= 0.5] = 1

    return preds_labels, preds_vec, labels_vec, datas_vec


def display_errors(errors_index,img_errors,pred_errors, obs_errors):
    """
    Эта функция показывает 6 картинок с предсказанными и настоящими классами
    """
    label_dict={0.:'cat',1.:'dog'}
    n = 0
    nrows = 5
    ncols = 5
    fig, ax = plt.subplots(nrows,ncols,sharex=True,sharey=True,figsize=(15,10))
    for row in range(nrows):
        for col in range(ncols):
            error = errors_index[n]
            ax[row,col].imshow((img_errors[error]).reshape((64,64,3)),cmap='gray')
            ax[row,col].set_title("Predicted label :{}\nTrue label :{}".format(label_dict[pred_errors[error]],label_dict[obs_errors[error]]))
            n += 1
    plt.tight_layout()


base_dir = 'dataset'
mode_file = os.path.join(base_dir, "model.h5py")
test_dir = os.path.join(base_dir, 'test')
my_test_dir = os.path.join(base_dir, 'my_test')
test_datagen = ImageDataGenerator(rescale=1./255)
mymodel = keras.models.load_model(
    mode_file, custom_objects=None, compile=True, options=None
)


# Создадим генератор картинок из тестовой выборки
test_generator = test_datagen.flow_from_directory(
        test_dir,
        target_size=(64, 64),
        batch_size=8,
        class_mode='binary',shuffle=False)


my_test_generator = test_datagen.flow_from_directory(
        my_test_dir,
        target_size=(64, 64),
        batch_size=6,
        class_mode='binary', shuffle=False)

"""указать dataset_len равным общему количеству изображений в двух папках"""
preds_labels, preds_vec, labels_vec, avc = get_test_predictions(my_test_generator, mymodel, dataset_len=21)

"""1 - наличие разлива"""
print(preds_labels)
print(preds_vec)
print(labels_vec)