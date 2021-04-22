let promise = new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                resolve(
                    console.log('DONE')
                )
            }, 3000
        )
    }
)