let promise = new Promise(
    (resolve, reject) => setTimeout(() => resolve('DONE'), 3000)
)

promise.then(
    (val) => console.log(val)
)