const isUpperCase = (str) => {
    let result = str
      .split('')
      .map(letter => /[A-Z]/.test(letter))
      .reduce((a, b) => a + b);
  
    return result === str.length;
  }


function hey(message) {

    let purestr = "";

    message.split("").forEach(char => {
        if(/[a-zA-Z]/.test(char)){
            purestr += char;
        }
    });

    if(isUpperCase(purestr) && message.trim().charAt(message.length-1) === "?" ){
        return "Calm down, I know what I'm doing!"
    } 
    else if(isUpperCase(purestr)){
        return "'Whoa, chill out!"
    }
    else if(message.trim().charAt(message.length-1) === "?"){
        return "Sure."
    }
    else if(message === ''){
        return "Fine. Be that way!"
    }
    
    return "Whatever."
}



// console.log(hey("how are"));
