import firebase from './FirebaseConfig'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject
} from 'firebase/storage'
import { async } from '@firebase/util'

const storage = firebase.storage

const uploadFile = (file, filePath, progressCallback) => {
    const uploadRef = ref(storage, filePath)
    const uploadTask = uploadBytesResumable(uploadRef, file)

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            progressCallback(progress)
        },
        (error) => {
            throw error
        }
    )

    const downloadUrl = uploadTask.then(async () => {
        return await getDownloadURL(uploadTask.snapshot.ref)
    })

    return downloadUrl
}

const deleteFile = (fileDownloadUrl) => {
    const decodedUrl = decodeURIComponent(fileDownloadUrl)
    const startIndex = decodedUrl.indexOf('/o/') + 3
    const endIndex = decodedUrl.indexOf('?')
    const filePath = decodedUrl.substring(startIndex, endIndex)
    const fileRef = ref(storage, filePath)

    return deleteObject(fileRef)
}

const FirebaseStorageService = {
    uploadFile,
    deleteFile
}

export default FirebaseStorageService
