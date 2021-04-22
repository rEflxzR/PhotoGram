import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import "firebase/auth"

var firebaseConfig = {
	apiKey: "AIzaSyCPCyNq-zU2JRUrOmNSe6ARml7YIMWFmUc",
	authDomain: "pcgram-photo-gallery.firebaseapp.com",
	projectId: "pcgram-photo-gallery",
	storageBucket: "pcgram-photo-gallery.appspot.com",
	messagingSenderId: "636216836291",
	appId: "1:636216836291:web:1ce4243edb18ed50a22276"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const imageStorage = firebase.storage()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth, imageStorage, firestore, timestamp}