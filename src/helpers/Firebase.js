import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCvmfOevirM5wgM8_3uuAyqftlityaxGBM",
  authDomain: "milestoneproj-blog-f9323.firebaseapp.com",
  projectId: "milestoneproj-blog-f9323",
  storageBucket: "milestoneproj-blog-f9323.appspot.com",
  messagingSenderId: "658542546992",
  appId: "1:658542546992:web:df0291130fad76f7f39df5",
});

export const auth = app.auth()
export default app