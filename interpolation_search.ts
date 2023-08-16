/**
 * Interpolation Search
 * The idea is to split the sorted array by interpolation and compare the target
 * with the split point, if the target is smaller than the split point we
 * search in the left side of the array, if the target is bigger than the
 * split point we search in the right side of the array.
 */
function interpolationSearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;

  while (arr[right] >= target && target > arr[left]) {
    const mid = Math.ceil(
      left + ((target - arr[right]) * (right - left)) / (arr[right] - arr[left])
    );

    if (arr[mid] === target) left = mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }

  if (arr[left] === target) return left;

  return -1;
}

console.log(interpolationSearch([1, 2, 3, 4, 5], 5));
console.log(interpolationSearch([1, 2, 3, 4, 5], 6));
