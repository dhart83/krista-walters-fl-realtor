import firebase from './FirebaseConfig'
import {
    collection as fsCollection,
    addDoc,
    getDoc,
    doc,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    startAfter,
    updateDoc,
    deleteDoc
} from 'firebase/firestore'

const db = firebase.db

const createDocument = (collection, document) => {
    const collectionRef = fsCollection(db, collection)

    return addDoc(collectionRef, document)
}

const readDocument = (collection, id) => {
    const collectionRef = fsCollection(db, collection)
    const desiredDoc = doc(collectionRef, id)

    return getDoc(desiredDoc)
}

const readDocuments = async ({
    collection,
    queries,
    orderByField,
    orderByDirection,
    perPage,
    cursorId
}) => {
    const queryConstraints = []

    if (queries && queries.length > 0) {
        queries.forEach((query) => {
            queryConstraints.push(
                where(query.field, query.condition, query.value)
            )
        })
    }

    if (orderByField && orderByDirection) {
        queryConstraints.push(orderBy(orderByField, orderByDirection))
    }

    if (perPage) {
        queryConstraints.push(limit(perPage))
    }

    if (cursorId) {
        const document = await readDocument(collection, cursorId)
        queryConstraints.push(startAfter(document))
    }

    const collectionRef = fsCollection(db, collection)
    const dbQuery = query(collectionRef, ...queryConstraints)

    return getDocs(dbQuery)
}

const updateDocument = (collection, id, document) => {
    const collectionRef = fsCollection(db, collection)
    const documentRef = doc(collectionRef, id)

    return updateDoc(documentRef, document)
}

const deleteDocument = (collection, id) => {
    const collectionRef = fsCollection(db, collection)
    const documentRef = doc(collectionRef, id)

    return deleteDoc(documentRef)
}

const FirebaseFirestoreService = {
    createDocument,
    readDocument,
    readDocuments,
    updateDocument,
    deleteDocument
}

export default FirebaseFirestoreService
