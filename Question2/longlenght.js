function getNumberWithLongestWordLength(arr) {
   
    function numberToWords(num) {
      const ones = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
      ];
      const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
      ];
  
      if (num < 20) {
        return ones[num];
      } else {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
      }
    }
  
    let maxLength = 0;
    let numberWithLongestWord = null;
  
    for (let i = 0; i < arr.length; i++) {
      const wordLength = numberToWords(arr[i]).replace(/ /g, "").length;
      if (wordLength > maxLength) {
        maxLength = wordLength;
        numberWithLongestWord = arr[i];
      }
    }
  
    return numberWithLongestWord;
  }
  
  
  const arr = [10, 12, 38, 62, 90];
  const result = getNumberWithLongestWordLength(arr);
  console.log("Number with longest word length:", result); 
  