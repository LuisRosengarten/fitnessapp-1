import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const getGroups = async () => {
    //Store array
    const docs = []

    //Collection reference
    const querySnapshot = await getDocs(collection(db, "groups"));

    //Get docs of collection
    querySnapshot.forEach((doc) => {

        docs.push({
            id: doc.id,
            title: doc.data().title,
            members: doc.data().members
        })
    })

    return docs
}

const getTypes = async (id) => {
    //Store array
    const docs = []

    //Collection reference
    const querySnapshot = await getDocs(collection(db, 'groups/' + id + '/types'))

    //Get docs of Collection
    querySnapshot.forEach((doc) => {
        docs.push({
            id: doc.id,
            title: doc.data().title,
            time: doc.data().time,
            color: doc.data().color
        })
    })

    return docs
}

export { getGroups, getTypes }