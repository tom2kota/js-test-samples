let promise = new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                resolve(
                    'DONE'
                )
            }, 3000
        )
    }
)

promise.then(
    function (val) {
        console.log(val)
    }
)