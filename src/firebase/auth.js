import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

export const singuprWithEmailAndPassword = async (email, password) => {
  try {
    //catchがあると失敗もあるのでtryを入れる
    const user = await firebase
      .auth() //成功したらuser情報が手に入る　変数userに代入される
      //登録時ははこのメソッドを呼び出す
      .createUserWithEmailAndPassword(email, password);
    //登録が成功すればcurrentUserにuser情報が入る　sendEmailVerification=> mail認証　メールが届いて登録処理が完了したら続きに行く
    await firebase.auth().currentUser.sendEmailVerification();

    alert("登録成功");

    return user;
  } catch (error) {
    alert("登録失敗");
    console.log(error);
  }
};

export const singinrWithEmailAndPassword = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password); //await firebase.auth().currentUser.sendEmailVerification();
    //サインインはこのメソッドを呼び出す　正しければuserにuser情報を受け取れる
    //認証機能は登録時だけ

    alert("サインイン成功");

    return user;
  } catch (error) {
    //失敗したらerrorを受け取る
    alert("サインイン失敗");
    console.log(error);
  }
};

export const signout = async (email, password) => {
  //currentUserがあるかどうかのチェック
  const user1 = await firebase.auth().currentUser;
  console.log("サインアウト前 :", user1);
  await firebase.auth().signOut();
  const user2 = await firebase.auth().currentUser;
  console.log("サインアウト後 :", user2);
};
