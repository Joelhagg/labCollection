console.log("From promise"); // Log a message to the console

// Function that returns a promise which resolves after a specified delay
function delay(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        // If the delay is less than 1000ms, reject the promise with an error message
        if(ms < 1000) {
            reject('Delay must be greater than 0');
        } else {
            // Otherwise, resolve the promise with 'Done' after the specified delay
            setTimeout(() => {
                resolve('Done');
            }, ms);
        }
    });
}

// Call the delay function with a 5000ms delay
delay(5000)
    .then(message => console.log(message)) // Log the resolved message if the promise is fulfilled
    .catch(error => console.log(error)); // Log the error message if the promise is rejected
