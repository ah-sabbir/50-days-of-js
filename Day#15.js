// Determine if a sentence is a pangram
// Instructions
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.

// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.


const isPangram = (input) => {
	// Code here
 let regex = /([a-z])(?!.*\1)/gi;
  return (input.match(regex)).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

