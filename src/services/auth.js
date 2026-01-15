import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function registerUser(email, password, username) {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const user = response.user;

  await setDoc(doc(db, "users", user.uid), {
    username,
    email,
    createdAt: serverTimestamp(),
  });

  return user;
}

export async function loginUser(email, password) {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response.user;
}

export async function logoutUser() {
  await signOut(auth);
}
