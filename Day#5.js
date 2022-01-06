const str = 'JavaScript';

function getTheGapX(str) {
    // write your solution here
    let txt = str[0];
    let lastIndex = str.lastIndexOf(txt)
    let counter = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            counter++;
        }
    }
    
    if(lastIndex){
        return lastIndex
    }else if(counter>1){
        return -1
    }
    return 0
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
