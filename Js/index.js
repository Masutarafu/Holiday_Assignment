// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS
// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS// NUMBER OF VOWELS
function countVowels() {
    let userInput = document.getElementById("myInput")
    finalInput = userInput.value;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < finalInput.length; i++) {
      if (vowels.includes(finalInput[i].toLowerCase())) {
        count++;
      }
    }
    
    let bishbish = document.getElementById("bish");
    let h4 = document.createElement('h4')
    h4.append('The number of vowels in ' + finalInput + ' is = ' + count)
    bishbish.appendChild(h4)

}


//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD
//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD//LONGEST WORD
function findLongestWord() {
  let wordInput = document.getElementById("sentenceInput");
  let sentence = wordInput.value;

  let words = sentence.split(' ');

  let longestWord = '';
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    // Remove any punctuation marks
    let word = words[i].replace(/[^\w\s]/g, '');

    if (word.length > longestLength) {
      longestWord = word;
      longestLength = word.length;
    }    
  }

  let biashbiash = document.getElementById("biash");
  let h4 = document.createElement('h4');
  h4.textContent = 'The longest word in the sentence is: ' + longestWord;
  biashbiash.appendChild(h4);
}


// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER
// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER// LARGEST NUMBER
function findLargestNumber() {
  let numberInput = document.getElementById("numInput");
  let inputValues = numberInput.value;
  let numbers = inputValues.split(',').map(Number);

  let largest = numbers[0]; //first number protocol

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // Update the largest number
    }
  }

  let bashbash = document.getElementById("bash");
  let resultElement = document.getElementById("result");

  if (resultElement) {
    resultElement.textContent = 'The largest number is: ' + largest;
  } else {
    let h4 = document.createElement('h4');
    h4.textContent = 'The largest number is: ' + largest;
    bashbash.appendChild(h4);
  }
}

// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX
// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX// SQUARE MATRIX
function isSquareMatrix() {
  let matrixInput = document.getElementById("matInput");
  let matrix = JSON.parse(matrixInput.value); 

  const rows = matrix.length;
  const columns = matrix[0].length;

  if (rows !== columns) {
    let squareup = document.getElementById("square");
    let h4 = document.createElement('h4');
    h4.textContent = 'The matrix is not a square matrix.';
    squareup.appendChild(h4);
    return false; 
  }

  for (let i = 0; i < rows; i++) {
    if (matrix[i].length !== columns) {
      let squareup = document.getElementById("square");
      let h4 = document.createElement('h4');
      h4.textContent = 'The matrix is not a square matrix.';
      squareup.appendChild(h4);
      return false; 
    }
  }

  let squareup = document.getElementById("square");
  let h4 = document.createElement('h4');
  h4.textContent = 'The matrix is a square matrix.';
  squareup.appendChild(h4);
}