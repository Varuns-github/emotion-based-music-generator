import cv2
import numpy as np
from tensorflow.keras.preprocessing import image
import warnings
from tensorflow.keras.models import  load_model
import numpy as np

model = load_model("fer7_model.h5")

# import image file
img = cv2.imread('test.png')
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img = cv2.resize(img, (48, 48))
img_pixels = image.img_to_array(img)
img_pixels = np.expand_dims(img_pixels, axis=0)
img_pixels /= 255
predictions = model.predict(img_pixels)

max_index = np.argmax(predictions[0])
emotions = ["Angry", "Disgust", "Fear", "Happy", "Neutral", "Sad", "Surprise" ]
predicted_emotion = emotions[max_index]

print(predicted_emotion, "is the predicted_emotion")