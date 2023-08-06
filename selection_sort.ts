import { swap } from "./util";

/**
 * Selection sort Algorithm
 * The main idea is to find the smallest element in the array
 * and swap it with the first element, then find the next smallest
 * element and swap with the second element, and so on.
 *
 * @param arr Unsorted array to be sorted
 */
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let lowerestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowerestNumberIndex]) {
        lowerestNumberIndex = j;
      }
    }

    if (lowerestNumberIndex !== i) {
      swap(arr, i, lowerestNumberIndex);
    }
  }

  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
