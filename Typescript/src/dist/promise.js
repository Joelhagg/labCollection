console.log("From promise");
function delay(ms) {
    return new Promise(function (resolve, reject) {
        if (ms < 1000) {
            reject('Delay must be greater than 0');
        }
        else {
            setTimeout(function () {
                resolve('Done');
            }, ms);
        }
    });
}
delay(5000)
    .then(function (message) { return console.log(message); })
    .catch(function (error) { return console.log(error); });
