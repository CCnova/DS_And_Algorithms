/**
 * This function accepts a word and return the first characted
 * that is not duplicated inside the word.
 */
function findFirstNonDuplicatedChar(word: string) {
  const hashTable = new Map();
  for (let char of word) {
    hashTable.set(char, (hashTable.get(char) || 0) + 1);
  }

  for (let [char, occurrences] of hashTable) {
    if (occurrences === 1) return char;
  }

  return null;
}

console.log(findFirstNonDuplicatedChar("minimum"));
