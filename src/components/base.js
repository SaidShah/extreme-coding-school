
import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}
