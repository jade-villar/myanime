import { collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, 
  serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export function handleGetMyList(userId, setMyList) {
  const colRef = collection(db, "users", userId, "myList");
  const q = query(colRef, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setMyList(list);
  });
}

export function handlePostToMyList(userId, anime) {
  const colRef = collection(db, "users", userId, "myList");

  return addDoc(colRef, {
    mal_id: anime.data.mal_id,
    image: anime.data.images.jpg.large_image_url,
    title: anime.data.title,
    titleEnglish: anime.data.title_english,
    synopsis: anime.data.synopsis,
    myStatus: "Plan to Watch",
    myScore: 0,
    createdAt: serverTimestamp(),
  });
}

export function handleUpdateMyList(userId, id, updates) {
  const docRef = doc(db, "users", userId, "myList", id);
  return updateDoc(docRef, updates);
}

export function handleDeleteFromMyList(userId, id) {
  const docRef = doc(db, "users", userId, "myList", id);
  return deleteDoc(docRef);
}
