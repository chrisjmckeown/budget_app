import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses').on(
//   'value',
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log('Error with data fetching', e);
//   }
// );

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val(),
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log('Failed to find data!', e);
//   });

// add
// database.ref('expenses').push({
//   desciption: 'Rent',
//   amount: 1000,
//   note: 'This is my note',
//   createdAt: 0,
// });
// database.ref('expenses').push({
//   desciption: 'Coffee',
//   amount: 1000,
//   note: 'This is my note',
//   createdAt: 0,
// });
// database.ref('expenses').push({
//   desciption: 'Food',
//   amount: 1000,
//   note: 'This is my note',
//   createdAt: 0,
// });

// add
// database.ref('notes').push({
//   title: 'Another note',
//   body: 'This is my note',
// });

// update
// database.ref('notes/-MVUOXjHHX_fDWYoO20L').update({
//   body: 'Buy Food',
// });

// delete
// database.ref('notes/-MVUOXjHHX_fDWYoO20L').remove();

// get
// database
//   .ref('notes')
//   .once('value')
//   .then((snapshot) => {
//     console.log('Data found!', snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Failed to find data!', e);
//   });

// const firebaseNotes = {
//   notes: {
//     12: {
//       title: 'First note',
//       body: 'This is my note',
//     },
//     sdfg: {
//       title: 'Another note',
//       body: 'This is my note',
//     },
//   },
// };

// const notes = [
//   {
//     id: '12',
//     title: 'First note',
//     body: 'This is my note',
//   },
//   {
//     id: 'sdfg',
//     title: 'Another note',
//     body: 'This is my note',
//   },
// ];

// database.ref('notes').set(notes);

// database
//   .ref()
//   .set({
//     name: 'chris mckeown',
//     age: 42,
//     isSingle: false,
//     job: 'Software Developer',
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Melbourne',
//       country: 'Australia',
//     },
//   })
//   .then(() => {
//     console.log('Connected!');
//   })
//   .catch((e) => {
//     console.log('Failed to connect!', e);
//   });

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log('Data found!', snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Failed to find data!', e);
//   });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is at ${val.job.title} at ${val.job.company}`);
//   },
//   (e) => {
//     console.log('Error with data fetching', e);
//   }
// );

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// },(e)=>{
//     console.log('Error with data fetching', e);
// });
// database.ref().off(onValueChange);

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);

// const get = async () => {
//   const wordsSnapshot = await database.ref().once('value');
//   console.log(wordsSnapshot.val());
// };
// get();

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
//   .then(() => {
//     console.log('Data updated!');
//   })
//   .catch((e) => {
//     console.log('Failed to update data!', e);
//   });

// database
//   .ref('isSingle')
//   .set(null)
//   .then(() => {
//     console.log('Data remove!');
//   })
//   .catch((e) => {
//     console.log('Failed to remove data!', e);
//   });

// database.ref('isSingle').remove()
// .then(() => {
//   console.log('Data remove!');
// })
// .catch((e) => {
//   console.log('Failed to remove data!', e);
// });

// database.ref('location/city').set('Sydney');
//database.ref().set('This is my data');

// const setData = async () => {
//   const result = await database
//     .ref('attributes')
//     .set({
//       weight: 93,
//       height: 178,
//     })
//     .once('value');
// };

// setData;
