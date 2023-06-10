import firebase from './FirebaseConfig'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

const auth = firebase.auth

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logoutUser = () => {
    return signOut(auth)
}

const loginWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider())
}

const subscribeToAuthChanges = (handleAuthChange) => {
    onAuthStateChanged(auth, (user) => {
        handleAuthChange(user)
    })
}

const FirebaseAuthService = {
    registerUser,
    loginUser,
    logoutUser,
    loginWithGoogle,
    subscribeToAuthChanges,
    sendPasswordResetEmail: (email) => {
        sendPasswordResetEmail(auth, email)
    }
}

export default FirebaseAuthService
