setTimeout(() => console.log('Timeout'), 0)

function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n)
        }
        setImmediate(() =>
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
                resolve(fib1 + fib2)
            )
        )
    })
}

//Heap out of memory
fib(10).then((res) => console.log(res))
