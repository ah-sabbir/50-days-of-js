/**
 *
 * @param {number[]} inputArray Array of numbers
 */


 const arr = [4, 6, 9, 1, 2, 8, 5, 3, -1];
 const consecutiveSequence = (arr = []) => {
    const consecutiveRight = {};
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
       let curr = arr[i];
       if (consecutiveRight[curr] !== undefined) 
          continue; // We already have this number.
          consecutiveRight[curr] = 1 + (consecutiveRight[curr + 1] || 0);
          while (consecutiveRight[curr - 1] !== undefined) {
             consecutiveRight[curr - 1] = consecutiveRight[curr] + 1;
             curr -= 1;
          }
          max = Math.max(max, consecutiveRight[curr]);
          console.log(consecutiveRight)
       
    }
       return max;
 };

 console.log(consecutiveSequence(arr));




// const getSubsequences = (arr)=>{
//     let subSequences = new Set();
//     arr.map((x,i)=> {
//         let sequences = arr.slice(i);
//         return sequences.forEach((y, r) => {
//             console.log(sequences.slice(0, r+1))
//             subSequences.add(sequences.slice(0, r+1))
//           })
//       })

//     return subSequences
// }

//  const longestConsecutiveSequence = (inputArray) => {

//     let arr = inputArray.sort((a,b)=> a-b)
//     let sum = 0;
//     for(let i=0;i<=arr.length;i++){
//         for(let j = i; j<=arr.length;j++){
//             if(arr[j] + arr[j+1] == arr[j+2]){
//                 console.log(`${arr[i]}  ${arr[j]}  ${arr[j+1]}`)
//             }
//         }
//     }

// 	return sum;
// }


// console.log(getSubsequences([100,4,200,1,3,2].sort((a,b)=>a-b)))