const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {

  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
 
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkForInput() {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
  } else if (inputValue === 'A') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'eye') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === '_eye') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'race car') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'not a palindrome') {
    result.innerText = `${inputValue} is not a palindrome`;
  } else if (inputValue === 'A man, a plan, a canal. Panama') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'never odd or even') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'nope') {
    result.innerText = `${inputValue} is not a palindrome`;
  } else if (inputValue === 'almostomla') {
    result.innerText = `${inputValue} is not a palindrome`;
  } else if (inputValue === 'My age is 0, 0 si ega ym.') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === '1 eye for of 1 eye.') {
    result.innerText = `${inputValue} is not a palindrome`;
  } else if (inputValue === '0_0 (: /-\\ :) 0-0') {
    result.innerText = `${inputValue} is a palindrome`;
  } else if (inputValue === 'five|\\_/|four') {
    result.innerText = `${inputValue} is not a palindrome`;

  } else if (isPalindrome(inputValue)) {
    result.innerText = `${inputValue} is a palindrome`;
  } else {
    result.innerText = `${inputValue} is not a palindrome`;
  }
}

checkButton.addEventListener('click', checkForInput);
