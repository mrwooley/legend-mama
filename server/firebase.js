import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

admin.initializeApp({
    storageBucket: 'legend-mama-tavern.appspot.com',
});
const firestore = admin.firestore();
const firebaseAuth = admin.auth();
const firebaseStorage = admin.storage();

export {firestore, firebaseAuth, firebaseStorage};