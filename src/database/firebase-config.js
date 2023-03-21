import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD-5NyjH29HNrxq0lUcEVBlbx44c19x-zM",
  authDomain: "burger-app-2f955.firebaseapp.com",
  projectId: "burger-app-2f955",
  storageBucket: "burger-app-2f955.appspot.com",
  messagingSenderId: "65726675017",
  appId: "1:65726675017:web:27d688a316a54d9172a798",
  measurementId: "G-JRMVF2GYJ5"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, db, collection, query, where, getDocs, setDoc, doc }
