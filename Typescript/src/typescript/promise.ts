console.log("From promise");

function delay(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if(ms < 1000) {
            reject('Delay must be greater than 0');
        } else {
            setTimeout(() => {
                resolve('Done');
            }, ms);
        }
    })
}

delay(5000)
    .then(message => console.log(message))
    .catch(error => console.log(error));
