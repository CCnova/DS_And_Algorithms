/**
 * This function accepts a phrase containing all letters of alphabet
 * except one, the function returns the missing letter.
 */
function defineMissingLetter(phrase: string) {
  const hashTable = new Map();
  for (let char of phrase) {
    hashTable.set(char, true);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet) {
    if (!hashTable.get(char)) return char;
  }
}

console.log(defineMissingLetter("the quick brown box jumps over a lazy dog"));
