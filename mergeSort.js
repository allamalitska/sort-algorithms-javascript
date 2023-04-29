// short code

const merge1 = (arr1, arr2) => {
   let result = [];

   while( arr1.length && arr2.length){ 
      if(arr1[0] <= arr2[0]){
         result.push(arr1.shift())

      }else {
         result.push(arr2.shift())

      }
   }
   return [...result, ...arr1, ...arr2]
}



const merge = (arr1, arr2) => {
   let i = 0;
   let j = 0;
   let result = [];

   while(i < arr1.length  && j < arr2.length){ 
      if(arr1[i] <= arr2[j]){
         result.push(arr1[i])
         i++
      }else {
         result.push(arr2[j])
         j++
      }
   }
   while( i < arr1.length ){
      result.push(arr1[i])
         i++
   }
   while( j < arr2.length ){
      result.push(arr2[j])
         j++
   }
   return result
}
// console.log(merge([3,2,4], [8,7,3])) // [ 3, 2, 3, 2, 4, 4 ]

const mergeSortArr = function(arr){
   if (arr.length <= 1) return arr // till will not became 1

   let middle = Math.floor(arr.length/2)
   let left = arr.slice(0, middle)
   let right = arr.slice(middle)

   return merge(mergeSortArr(left),mergeSortArr(right)) // used recursive function
 }


// console.log(mergeSortArr([5,7,2,1,8]))
// console.log(mergeSortArr([5,7,4,1,8,1,0]))
console.log(mergeSortArr([9,5,7,2,0,1,8])) //  [] 0, 1, 2, 5, 7,8,9]


