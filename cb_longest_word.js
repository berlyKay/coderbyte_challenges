function LongestWord(sen) { 

    // Create var that includes all valid chars
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz 0123456789' 
    
    // Modify sen into an array
    const senArr = sen.split("")
    
    // Create vars to hold the current longest word and length
    let longestWord = ''
    let longestLength = 0

    // Create var for array of valid chars
    const validArr = senArr.reduce((acc, char) => {
        if (alphaNum.includes(char)) {
            acc.push(char)
        }
        return acc
    }, []).join('').split(' '); 

    // Determine the longest word
    const answer = validArr.map((word) => {
        if (word.length > longestLength) {
            longestLength = word.length
            longestWord = word
        }
        
    })
    
    return longestWord

  }
  console.log(LongestWord("I love dogs"))

