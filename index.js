function isPalindrome(word) {
  // Write your algorithm here
  let tempWord =[];
  word.split('').forEach(c => {
    tempWord.unshift(c)
  });
  return word === tempWord.join('')
}

/* 
  Add your pseudocode here
  takes input
  character comparison on reverse of letters
  returns true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
