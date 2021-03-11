const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolve data');
    reject('error');
  }, 1500);
});

console.log('before');
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log('after');
