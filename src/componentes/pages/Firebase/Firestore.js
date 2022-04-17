import {collection, addDoc} from "firebase/firestore";
import {db} from "./Firebase";


export const getCollection = (collectionName) => {
    return collection(collectionName, ref => ref.orderBy('createdAt', 'desc'));
}


export const addDocument = (collectionName, data) => {
    return addDoc(collectionName, data);
}


