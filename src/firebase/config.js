import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
	apiKey: "AIzaSyCPCyNq-zU2JRUrOmNSe6ARml7YIMWFmUc",
	authDomain: "pcgram-photo-gallery.firebaseapp.com",
	projectId: "pcgram-photo-gallery",
	storageBucket: "pcgram-photo-gallery.appspot.com",
	messagingSenderId: "636216836291",
	appId: "1:636216836291:web:1ce4243edb18ed50a22276"
}

firebase.initializeApp(firebaseConfig)

const imageStorage = firebase.storage()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {imageStorage, firestore, timestamp}