// http://sorting.at

const arr = [1, 2, 3, 0, 10, 9]


function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log('i: ', i)

        for (let j = 0; j < (arr.length - i - 1); j++) {
            console.log('j=: ', j)

            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                console.log('lesser: ', lesser)

                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }

        }

    }

    return arr;
}

console.log(bubbleSort(arr));