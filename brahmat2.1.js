 

// Synchronous function
function greeting(name) {
    console.log(`Hey, ${name}`);
    console.log(`hi, ${name}!`);
}

greeting("bramha");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "bramha", age: 25 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});


// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "bramha", age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "bramha", age: 255 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();





