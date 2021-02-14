import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

import { BUILD_LEVEL as buildlevel } from './config.json';

export const BUILD_LEVEL =
  process.env.NODE_ENV === 'production' ? 'production' : buildlevel;

const REGION = 'europe-west1';
const DEV_PORT = 5001;

const productionConfig = {
  apiKey: 'AIzaSyA8FFWoOifdusbuoYB2ksneSlPl-GwoLJo',
  authDomain: 'timetospare-123.firebaseapp.com',
  storageBucket: 'timetospare-123.appspot.com',
  projectId: 'timetospare-123',
};

const stagingConfig = {
  apiKey: 'AIzaSyAwnCvJCDBf7AyOp-2iu17bPQy7Cvwb8lY',
  projectId: 'timetospare-staging',
  storageBucket: 'timetospare-staging.appspot.com',
  authDomain: 'timetospare-staging.firebaseapp.com',
};

let config;
if (process.env.NODE_ENV === 'production') {
  config = productionConfig;
} else if (BUILD_LEVEL === 'staging') {
  config = stagingConfig;
} else if (BUILD_LEVEL === 'dev') {
  config = stagingConfig;
} else if (BUILD_LEVEL === 'production') {
  config = productionConfig;
}

const fire = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const fireFunctions = fire.functions(REGION);
const fireDb = fire.firestore();
if (BUILD_LEVEL === 'dev') {
  fireDb.settings({
    host: 'localhost:8080',
    ssl: false,
  });
  fireFunctions.useFunctionsEmulator(`http://localhost:${DEV_PORT}`);
}
fire.functions = () => fireFunctions;
fire.firestore = () => fireDb;

export default fire;
