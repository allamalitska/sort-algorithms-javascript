
const insertionSort = (arr)=>{
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    } return arr
}

console.log(insertionSort([2, 10, 9, 7, 5, -5]))

