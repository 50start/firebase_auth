import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq1nOedD5tAVj1etvALzT_TzhtVYR8A_8",
  authDomain: "fir-auth-24a19.firebaseapp.com",
  projectId: "fir-auth-24a19",
  storageBucket: "fir-auth-24a19.appspot.com",
  messagingSenderId: "1039420048196",
  appId: "1:1039420048196:web:b083e60775a2a04f0ccd11",
};

firebase.initializeApp(firebaseConfig);

export const singuprWithEmailAndPassword = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await firebase.auth().currentUser.sendEmailVerification();

    alert("登録成功");

    return user;
  } catch (error) {
    alert("登録失敗");
    console.log(error);
  }
};
