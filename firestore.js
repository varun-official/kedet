import {firebaseApp} from "./firebaseApp";

const db = firebaseApp().firestore();
db.settings({ experimentalForceLongPolling: true });
  
export default db;

