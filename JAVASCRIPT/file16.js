//promise
/*
const f1 = () => {
  setTimeout(() => {
    return 5;
  }, 1000);
};
const f2 = (x) => {
  console.log(x + 6);
};
const n = f1();
f2(n);
*/

/*
const f1 = () => {
  return new Promise((resolve,reject) => {
    resolve(5);
  });
};

const f2 = (x) => {
  console.log(x + 6);
};
f1().then((n) => f2(n));
*/

/*
const f1 = () => {
  return new Promise((resolve,reject) => {
    // resolve(5);
    reject("Something went wrong");
  });
};

const f2 = (x) => {
  console.log(x + 6);
};
f1()
    .then((n) => f2(n))
    .catch((err) => console.log(err));
*/

/*
const f1 = (a) => {
  return new Promise((resolve,reject) => {
    if(a<0){
        reject("Negative number not allowed");
    }
    resolve(a);
  });
};

const f2 = (x) => {
    console.log(x + 6);
};
f1(-5)
    .then((n) => f2(n))
    .catch((err) => console.log(err));
*/


/*
// Fetching data from an API and logging user names
// This code fetches user data from a public API and logs each user's name to the console
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((value) => {
        console.log(value.name, value.email);
        });
    })
    .catch((err) => console.log(err));
*/


const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.forEach((value) => {
        console.log(value.name);
    });
}
fetchData()
    // .catch((err) => console.log(err));


  
  