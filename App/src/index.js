import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import opencv from 'opencv.js';
import * as tf from '@tensorflow/tfjs';
import { CameraFeed } from './components/camera';

import './styles.css';

// Upload to local seaweedFS instance
const uploadImage = async file => {
    const model = await tf.loadLayersModel('https://varuns-github.github.io/emotion/fer7_model.h5');
    console.log(file, "uploading image", model);
};

function App() {
    return (
        <div className="App">
            <h1>Image capture test</h1>
            <p>Capture image from USB webcamera and upload to form</p>
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
