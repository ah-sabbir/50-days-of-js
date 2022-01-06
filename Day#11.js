function fibonacci(n) {
	// write your solution here
    let [a,b] = [0,1];
    while(--n > 0){
        [a,b] = [b,a+b]
    }
    return b;
}

console.log(`fibonacci value at position 5: ${fibonacci(1000)}`)
