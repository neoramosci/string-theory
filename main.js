/******************
 * YOUR CODE HERE *
 ******************/


functions onlyVowels(str){
  let output = '';
  for (const char of str){
    const lowerCaseChar = char.toLowerCase();
    if(
      lowerCaseChar === 'a' ||
      lowerCaseChar === 'e' ||
      lowerCaseChar === 'o' ||
      lowerCaseChar === 'u' ||
      lowerCaseChar === 'i' ||
    ) {
      output += char;
    }
    return output;
  }
}

function crazyCase(str){
  let output = '';
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    // Is index even? Lower case the char
    if ( i % 2 === 0){
      output += char.toLowerCase();
    }
    else {
      output += char.toUpperCase();
    }
  }
  return output;
}

function titleCase (str){
  let output = '';
  let shouldCapNextLetter = true;
  for (const char of str){
    
    // we should we cap the char
    if (shouldCapNextLetter){
      output += char.toUpperCase();
    }

    // we should lower case the char 
    else{
      output += char.toLowerCase();
    }

    if (char === ' '){
      shouldCapNextLetter = true;
    } else {
      shouldCapNextLetter = false;
    }
    

    // simple above if statement 
    // shouldCapNextLetter = char === ' ';
  }
  return output ;
}

function camelCase(str){
  let output = '';
  let shouldCapNextLetter = false;
  for (const char of str) {

    // TODO
    // Add character to output string,unless its a space
    if (char !== ' ') {
      // if 'shouldCapnextlette is true, cap otherwise, lower the char
     if (shouldCapNextLetter){
       output += char.toUpperCase();
     } else {
       output += char.toLowerCase();
     }
    }
    //TODO
    // if the character is a space, cap next letter
    // otherwise lowercase the next letter 
    // ssimplification : change to else statement 


    if (char === ' '){
      shouldCapNextLetter = true;
    } else {
      shouldCapNextLetter = false;
    }

  }
  return output;
}


function crazyCase2ReturnOfCrazyCase(str){
  let output = '';
  let shouldCapNextLetter = false;
  for (const char of str){
    // Add current char to output string, cap, or lowercase as appropriate
    if (shouldCapNextLetter){
      output += char.toUpperCase();
    } else {
      output += char.toLowerCase();
    }

    // Toggle `shouldcapnext letter` if the current char is not a space

    if (char !== ' '){
      shouldCapNextLetter = !shouldCapNextLetter;
    }
  }
  return output;
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
