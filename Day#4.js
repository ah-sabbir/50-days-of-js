const time = "11:8PM";

function convertTo24HrsFormat(time) {
    // write your solution here
    let ftime;
    if(time.endsWith("AM") && Number(time.split(":")[0]) == 12){
        ftime = "00:"+time.split(":")[1] ;
    }else if(time.endsWith("PM") && Number(time.split(":")[0]) < 12 ){
        ftime = Number(time.split(":")[0])+12+":"+time.split(":")[1];
    }else{
        ftime = time.split(":")[0].length <2 ? "0"+time : time;
    }

    return ftime.slice(0,-2).split(":")[1].length < 2 ? ftime.slice(0,-2).split(":")[0]+":"+"0"+ftime.slice(0,-2).split(":")[1] : ftime.slice(0,-2);
    
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)