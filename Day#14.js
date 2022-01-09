/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
 const convertDigitsToAskedBase = (digits, baseA, baseB) => {
     let numStr = Number(digits.join('')).toString(baseB);
	let arr = [];
    for(i=0; i< numStr.length; i++){
        if(Number(numStr[i])){
            arr.push(Number(numStr[i]))
        }else{
            arr.push(parseInt(numStr[i],baseB))
        }
    }
	return arr
}

console.log(convertDigitsToAskedBase([5, 8], 10, 16));