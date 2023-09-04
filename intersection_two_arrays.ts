/**
 * Given two arrays, return their intersection.
 * This is O(N + M) where N = size(arr1) and M = size(arr2)
 */
function buildIntersection<T>(arr1: T[], arr2: T[]) {
  const hashTable = new Map();
  for (let element of arr1) {
    hashTable.set(element, true);
  }

  const intersection: Array<T> = [];
  for (let element of arr2) {
    if (hashTable.get(element)) intersection.push(element);
  }

  return intersection;
}

console.log(buildIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));
