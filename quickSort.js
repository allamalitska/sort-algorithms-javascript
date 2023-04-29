const quickSortArr = function(arr){
    if (arr.length <= 1) return arr
    const pivot = arr[arr.length - 1] // value of a last element
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i]< pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0){
        return [...quickSortArr(leftArr), pivot, ...quickSortArr(rightArr) ]
    }else if(leftArr.length > 0 ){
        return [...quickSortArr(leftArr), pivot]
    }else{
        return [pivot, ...quickSortArr(rightArr)]
    }
}

console.log(quickSortArr([1,7,4,66,89,4,5,333,334,789,8,21]))

