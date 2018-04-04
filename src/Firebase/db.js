import fire from './firebase.js';

const db = {};

db.Rooms = fire.database().ref('rooms');

export default db;
