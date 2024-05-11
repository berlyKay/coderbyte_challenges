function LongestWord(sen) { 
    const senArr = sen.split(" ")
  
    let newArr = [];
    function search(arr) {
      for (let i = 0; i<arr.length; i++){
        let word = arr[i].split("");
  
        let wordle = true;
  
        for (let j = 0; j< word.length; j++) {
  
         if (word[j] === ";" || word[j] === ":" || word[j] === ":" || word[j] === ","|| word[j] === "<"|| word[j] ==="/"|| word[j] ==="?"|| word[j] ==="-"||word[j] === "~"||word[j] === "0"|| word[j]==="!"|| word[j]=== "@"||word[j]=== "#"|| word[j]==="$"||word[j]=== "%"|| word[j] === "^"|| word[j] === "&"|| word[j] === "*"){wordle = false};
        }
        if (wordle === true){newArr.push(arr[i])}
  
      }
    }
    search(senArr)
  
  
    let count = newArr[0].length
    let answer = newArr[0]
    for (let i = 0; i<newArr.length; i++){
      if (count < newArr[i].length){
        count = newArr[i].length;
        answer = newArr[i];
      }
    }
  
     
    return answer; 
  }
  console.log(LongestWord("fun&!! time"))