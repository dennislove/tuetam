import React, { Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes} from './routes'
import DefautComponent from './components/DefautComponent/DefautComponent';
import 'firebase/database';  // Nếu dùng Realtime Database
import 'firebase/storage'; 
import { getDatabase, ref,get, set, push, serverTimestamp } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import PageTitleManager from './routes/PageTitleManager';
import { AuthProvider, withAuthProtected } from './admin/Account/ProtectedAuth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNIksUj3FIO-_mwa-JjXiKysOF5DFSsk",
  authDomain: "tuetam-tuetam.firebaseapp.com",
  databaseURL: "https://tuetam-tuetam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tuetam-tuetam",
  projectId: "tuetam-tuetam",
  storageBucket: "tuetam-tuetam.appspot.com",
  messagingSenderId: "332025812432",
  appId: "1:332025812432:web:764d5beb56eb8ecb7195d5",
  measurementId: "G-YQ9V6G2489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

function App() {
  return (
    <Router>
      <AuthProvider> 
      <PageTitleManager/>
    <Routes>
      {routes.map((routes) => {
        const Page = routes.element
        const Layout = routes.isShowHeader ? DefautComponent : Fragment
        const ProtectedPage = routes.protected ? withAuthProtected(Page) : Page;


        return (
          <Route key={routes.path} path={routes.path} element={
          <Layout>
           {/* <Page/> */}
           <ProtectedPage/>
          </Layout>
       }/>
        )
      })}
      
    </Routes>
    </AuthProvider>
   </Router>
  );
}
export { database, storage, ref, set,get, push, storageRef, uploadBytes, getDownloadURL, serverTimestamp };
// Trong file App.js, sửa dòng export cho auth
export const auth = getAuth(app);

export default App;
