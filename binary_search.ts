/**
 * Binary Search
 * The idea is to split the sorted array by half and compare the target
 * with the split point, if the target is smaller than the split point we
 * search in the left side of the array, if the target is bigger than the
 * split point we search in the right side of the array.
 */
function binarySearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
