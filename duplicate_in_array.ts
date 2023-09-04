/**
 * Given an array of values, it return the value that is duplicated
 * inside the array. This is O(N) where N = size(arr)
 */
function findDuplicate<T>(arr: T[]) {
  const hashTable = new Map();
  for (let element of arr) {
    if (hashTable.get(element)) return element;
    hashTable.set(element, true);
  }

  return null;
}

console.log(findDuplicate(["a", "b", "c", "d", "c", "e", "f"]));
