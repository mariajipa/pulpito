import Firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOa7-_3LSuhtVEKhQ3yJAcFIEf4VPdkws",
  authDomain: "pulpo-92eb8.firebaseapp.com",
  projectId: "pulpo-92eb8",
  storageBucket: "pulpo-92eb8.appspot.com",
  messagingSenderId: "1025488892901",
  appId: "1:1025488892901:web:b6e71d5be02bbde21eb50c"
};

// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);


// exportamos los módulos que utilizaremos
export const Auth = firebaseApp.auth()
export const Storage = firebaseApp.storage()
export const Database = firebaseApp.firestore()
export const GroupsList = Database.collection('groups')
export const CategoriesList = Database.collection('service')

