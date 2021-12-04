import keras.engine.training
from keras.preprocessing.image import load_img, ImageDataGenerator
import os
from keras.applications import vgg16 as vgg
# Модуль, с помощью которого мы будем "сшивать" последовательные модели
from keras.engine.training import Model
# Импортируем Pooling по всему слою входных данных и нормализацию батчей
from keras.layers import GlobalAveragePooling2D, BatchNormalization
# Импортируем полносвязный слой, слои активации и слой, превращающий картинку в вектор
from keras.layers import Dense, Activation, Flatten
# Импортируем сверточный слой, max-пулинг слой и слой, выключающий часть нейронов
from keras.layers import Conv2D, MaxPooling2D, Dropout
import matplotlib as plt
import numpy as np
base_dir = 'dataset'

train_dir = os.path.join(base_dir, 'train')

test_dir = os.path.join(base_dir, 'test')

mode_file = os.path.join(base_dir, "model.h5py")

train_datagen = ImageDataGenerator(rescale=1./255)
test_datagen = ImageDataGenerator(rescale=1./255)


def load_special_images():
    """
      Эта функция загружает 3 картинки для темы бинарной классификации кошек
      и собак
      Returns
      ----------
      im1, im2, im3 : array
          Three images in a form of numpy array
    """
    import requests
    from PIL import Image

    image_url_1 = 'https://preview.redd.it/4j8gx4ztzex01.png?width=960&crop=smart&auto=webp&s=5e80ab0071d56cc042f7b709648de8cde394832a'
    image_url_2 = 'https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Viral-cat-sensation-715546.jpg'
    image_url_3 = 'https://www.sunnyskyz.com/uploads/2016/12/hmm9j-dog-or-cat-2.jpg'

    im1 = Image.open(requests.get(image_url_1, stream=True).raw)
    im1 = np.array(im1)
    im2 = Image.open(requests.get(image_url_2, stream=True).raw)
    im2 = np.array(im2)
    im3 = Image.open(requests.get(image_url_3, stream=True).raw)
    im3 = np.array(im3)

    return im1, im2, im3


def image_to_batch(img, size=150):
    """
      Эта функция переводит картинку размером (img_width,img_height, 3) в батч
      размером (1,size,size,3)
      Parameters
      ----------
      img : array
          Image of size (img_width,img_height, 3)
      size : int
          Size of image in batch
      Returns
      ----------
      img_resized : array
          Batch of one image with shape (1,size,size,3)
    """
    import cv2
    img_resized = cv2.resize(img, (size, size)).reshape(1, size, size, img.shape[2])
    return img_resized


im1, im2, im3 = load_special_images()
im1_224 = image_to_batch(im1,224)
im2_224 = image_to_batch(im2,224)
im3_224 = image_to_batch(im3,224)


im1_224 = im1_224/255.
im2_224 = im2_224/255.
im3_224 = im2_224/255.


train_generator = train_datagen.flow_from_directory(
        train_dir,  # Путь к директории с трейновой выборкой
        target_size=(224, 224),  # Размер изображений, к которому нужно привести все данные
        batch_size=4,
        #Генератор автоматически расставит бинарные лейблы для классов cat и dog
        class_mode='binary')


test_generator = test_datagen.flow_from_directory(
        test_dir,
        target_size=(64, 64),
        batch_size=16,
        class_mode='binary')


vgg_model = vgg.VGG16(weights='imagenet',
                       include_top=False)


last = vgg_model.get_layer('block5_pool').output


# Добавим новые GAP (вместо FLatten) и BatchNormalization слои
x = GlobalAveragePooling2D()(last)
x = BatchNormalization()(x)

# Привычные полносвязные слои
x = Dense(512, activation='relu')(x)
x = Dense(256, activation='relu')(x)
x = Dropout(0.5)(x)
pred = Dense(1, activation='sigmoid')(x)

fin_model = Model(vgg_model.input, pred)


for layer in vgg_model.layers:
     layer.trainable = False


# Скомпилируем модель с функцией ошибки binary crossentropy, оптимизатором Адам
# (оптимизатор, который со стандартным набором параметров может обучить эффективную
# нейросеть), и метрикой - количеством правильно угаданных картинок.
fin_model.compile(loss='binary_crossentropy',
                  optimizer='adam',
                  metrics=['accuracy'])


fin_model.summary()


keras.models.save_model(
    fin_model,
    mode_file,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None,
    save_traces=True,
)


# Поставим модель обучаться 5 эпох при помощи модуля fit_generator
history_cnn = fin_model.fit_generator(train_generator,
              epochs=5,
              validation_data=test_generator,
              shuffle=True)


keras.models.save_model(
    fin_model,
    mode_file,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None,
    save_traces=True,
)


pred1 = fin_model.predict(im1_224)
pred2 = fin_model.predict(im2_224)
pred3 = fin_model.predict(im3_224)
print(pred1, pred2, pred3)


keras.models.save_model(
    fin_model,
    mode_file,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None,
    save_traces=True,
)