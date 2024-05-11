function LongestWord(sen) { 
    const senArr = sen.split(" ")
  
    let newArr = [];
    function search(arr) {
      for (let i = 0; i<arr.length; i++){
        let word = arr[i].split("");
  
        let wordle = true;
  
        for (let j = 0; j< word.length; j++) {
  // This looks to me what the includes() method would basically do. I like that you solved it without using the method. Nice!!
         if (word[j] === ";" || word[j] === ":" || word[j] === ":" || word[j] === ","|| word[j] === "<"|| word[j] ==="/"|| word[j] ==="?"|| word[j] ==="-"||word[j] === "~"||word[j] === "0"|| word[j]==="!"|| word[j]=== "@"||word[j]=== "#"|| word[j]==="$"||word[j]=== "%"|| word[j] === "^"|| word[j] === "&"|| word[j] === "*"){wordle = false};
        }
        if (wordle === true){newArr.push(arr[i])}
  
      }
    }
//kudos on using a function inside a function
    search(senArr)
  
  
    let count = newArr[0].length
    let answer = newArr[0]
    for (let i = 0; i<newArr.length; i++){
      if (count < newArr[i].length){
        count = newArr[i].length;
        answer = newArr[i];
      }
    }
  //Do you already use short-cuts like ctrl + shft + k?  That one deletes whatever line you're on. I use it alot!!
  // Shift + Alt + down arrow is another favorite of mine.
     
    return answer; 
  }
  console.log(LongestWord("fun&!! time"))
