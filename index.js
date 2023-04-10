/*----------------------------Number 1----------------------------*/
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
      reversed = (num%10)+(reversed*10);
      num = Math.floor(num/10);
  }
  return reversed;
}


const num = 32243;
const reversedNum = reverseNumber(num);
console.log(reversedNum); // Output: 34223



/*----------------------------Number 2----------------------------*/
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

  // Compare the cleaned string's characters from both ends
  for (let i = 0, j = cleanedStr.length - 1; i < j; i++, j--) {
    if (cleanedStr[i] !== cleanedStr[j]) {
      return false;
    }
  }

  // If the loop completes, the string is a palindrome
  return true;
}

// Example usage
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('nurses run')); // true
console.log(isPalindrome('hello')); // false


/*----------------------------Number 3----------------------------*/
function getAllCombinations(str) {
  const combinations = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j <= str.length; j++) {
          combinations.push(str.slice(i,j));
      }
  }
  return combinations;
}

// Example usage
const inputString = 'dog';
const output = getAllCombinations(inputString);
console.log(output); // ["d", "do", "dog", "o", "og", "g"]


/*----------------------------Number 4----------------------------*/

class Sorting {
  static quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const partitionIndex = this.partition(arr, low, high);

      this.quickSort(arr, low, partitionIndex - 1);
      this.quickSort(arr, partitionIndex + 1, high);
    }

    return arr;
  }

  static partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        this.swap(arr, i, j);
      }
    }

    this.swap(arr, i + 1, high);
    return i + 1;
  }

  static swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function sortStringAlphabetically(str) {
  const charArray = str.split("");
  
  Sorting.quickSort(charArray, 0, charArray.length-1);

  // Join the sorted array of characters back into a string
  const sortedStr = charArray.join('');

  return sortedStr;
}

// Example usage
const inputString = 'webmaster';
const output = sortStringAlphabetically(inputString);
console.log(output); // 'abeemrstw'



/*----------------------------Number 5----------------------------*/

function capitalizeWords(str) {
  var words = str.split(' '); // split the input string into an array of words
  var capitalizedWords = []; // create an empty array to hold the capitalized words
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord); // add the capitalized word to the array
  }
  var capitalizedStr = capitalizedWords.join(' '); // join the array of capitalized words back into a string
  return capitalizedStr;
}

var input = 'the quick brown fox';
var output = capitalizeWords(input);
console.log(output); // 'The Quick Brown Fox'


/*----------------------------Number 6----------------------------*/
function findLongestWord(str) {
  var words = str.split(' '); // split the input string into an array of words
  var longestWord = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

var input = 'Web Development Tutorial';
var output = findLongestWord(input);
console.log(output); // 'Development'


/*----------------------------Number 7----------------------------*/

function countVowels(str) {
  var vowels = 'aeiouAEIOU'; // define a string of vowels
  var vowelCount = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (vowels.indexOf(char) !== -1) { // check if the character is a vowel
      vowelCount++;
    }
  }
  return vowelCount;
}

var input = 'The quick brown fox';
var output = countVowels(input);
console.log(output); // 5


/*----------------------------Number 8----------------------------*/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true


/*----------------------------Number 9----------------------------*/  

function getType(value) {
  return typeof value;
}

// Example usage
console.log(getType(42)); // 'number'
console.log(getType('hello')); // 'string'
console.log(getType(true)); // 'boolean'
console.log(getType({ key: 'value' })); // 'object'
console.log(getType(function() {})); // 'function'
console.log(getType(undefined)); // 'undefined'


/*----------------------------Number 10----------------------------*/

function createIdentityMatrix(n) {
  var matrix = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0); // add 1 to the diagonal elements and 0 elsewhere
    }
    matrix.push(row); // add the row to the matrix
  }
  return matrix;
}

var output = createIdentityMatrix(3);
console.log(output); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]


/*----------------------------Number 11----------------------------*/

function secondLowestAndGreatest(arr) {
  // Remove duplicates and sort the array
  const sortedUniqueArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  // Get the second lowest and second greatest numbers
  const secondLowest = sortedUniqueArr[1];
  const secondGreatest = sortedUniqueArr[sortedUniqueArr.length - 2];

  return [secondLowest, secondGreatest];
}


// Example usage
const sampleArray = [1, 2, 3, 4, 5];
const result = secondLowestAndGreatest(sampleArray);
console.log(result); // [2, 4]


/*----------------------------Number 12----------------------------*/

function isPerfectNumber(number) {
  let sumOfDivisors = 0;

  for (let i = 1; i <= number/2; i++) {
      if (number % i === 0) {
          sumOfDivisors += i;
      }
  }
  return sumDivisors === number;
}

// Example usage
console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(496)); // true
console.log(isPerfectNumber(8128)); // true
console.log(isPerfectNumber(10)); // false


/*----------------------------Number 13----------------------------*/

function findFactors(num) {
  var factors = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

var input = 12;
var output = findFactors(input);
console.log(output); // [1, 2, 3, 4, 6, 12]


/*----------------------------Number 14----------------------------*/

function minCoins(amount, coins) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChange(amount, coins) {
  const minCoinCount = minCoins(amount, coins);
  if (minCoinCount === -1) {
    return [];
  }

  const result = [];
  let remainingAmount = amount;
  coins.sort((a, b) => b - a);

  for (const coin of coins) {
    while (remainingAmount >= coin && minCoins(remainingAmount, coins) === minCoins(remainingAmount - coin, coins) + 1) {
      result.push(coin);
      remainingAmount -= coin;
    }
  }

  return result;
}

// Example usage
const amount = 46;
const coinDenominations = [25, 10, 5, 2, 1];
const output = coinChange(amount, coinDenominations);
console.log(output); // [25, 10, 10, 1]


/*----------------------------Number 15----------------------------*/

function power(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

var base = 2;
var exponent = 3;
var result = power(base, exponent);
console.log(result); // 8


/*----------------------------Number 16----------------------------*/

function extractUniqueCharacters(str) {
  var uniqueChars = new Set();
  for (var i = 0; i < str.length; i++) {
    uniqueChars.add(str.charAt(i)); // add the character to the set
  }
  return Array.from(uniqueChars).join(''); // convert the set to an array and join the characters
}

var input = 'thequickbrownfoxjumpsoverthelazydog';
var output = extractUniqueCharacters(input);
console.log(output); // 'thequickbrownfxjmpsvlazydg'


/*----------------------------Number 17----------------------------*/

function countOccurrences(str) {
  var charCount = {};
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

var input = 'the quick brown fox jumps over the lazy dog';
var output = countOccurrences(input);
console.log(output);


/*----------------------------Number 18----------------------------*/
function binarySearch(arr, val) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

var input = [1, 3, 5, 7, 9];
var value = 5;
var index = binarySearch(input, value);
console.log(index); // 2


/*----------------------------Number 19----------------------------*/
function getElementsGreaterThan(arr, num) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
}


var input = [1, 3, 5, 7, 9];
var num = 4;
var output = getElementsGreaterThan(input, num);
console.log(output); // [5, 7, 9]


/*----------------------------Number 20----------------------------*/
function generateRandomId(length, characters) {
  var result = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

var length = 8;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var id = generateRandomId(length, characters);
console.log(id); // "R2QcGY8F"


/*----------------------------Number 21----------------------------*/

function getSubsetsOfSize(arr, subsetLength) {
  var result = [];
  var subset = new Array(subsetLength);
  function backtrack(startIndex, subsetIndex) {
    if (subsetIndex === subsetLength) {
      result.push(subset.slice());
    } else {
      for (var i = startIndex; i < arr.length; i++) {
        subset[subsetIndex] = arr[i];
        backtrack(i + 1, subsetIndex + 1);
      }
    }
  }
  backtrack(0, 0);
  return result;
}

var input = [1, 2, 3];
var subsetLength = 2;
var output = getSubsetsOfSize(input, subsetLength);
console.log(output); // [[1, 2], [1, 3], [2, 3]]


/*----------------------------Number 22----------------------------*/

function countLetterOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}

var input = 'microsoft.com';
var letter = 'o';
var count = countLetterOccurrences(input, letter);
console.log(count); // 3


/*----------------------------Number 23----------------------------*/

function firstNonRepeatedChar(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (const char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatedChar("abacddbec")); // "e"

/*----------------------------Number 24----------------------------*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/*----------------------------Number 25----------------------------*/

function longestCountryName(countries) {
  return countries.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // "United States of America"

/*----------------------------Number 26----------------------------*/

function longestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  const charIndexMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }
    charIndexMap[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3 (abc)

/*----------------------------Number 27----------------------------*/

function longestPalindrome(str) {
  if (str.length < 2) return str;

  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 2; j <= 3; j++) {
      let left = i;
      let right = i + j - 1;

      while (str[left] === str[right] && left >= 0 && right < str.length) {
        if (right - left + 1 > longest.length) {
          longest = str.slice(left, right + 1);
        }
        left--;
        right++;
      }
    }
  }

  return longest;
}

console.log(longestPalindrome("babad")); // "bab" or "aba"

/*----------------------------Number 28----------------------------*/

function greet() {
  return "Hello!";
}

function callFunction(func) {
  console.log(func());
}

callFunction(greet); // "Hello!"

/*----------------------------Number 29----------------------------*/

function getFunctionName(func) {
  return func.name;
}

function exampleFunction() {}

console.log(getFunctionName(exampleFunction)); // "exampleFunction"


