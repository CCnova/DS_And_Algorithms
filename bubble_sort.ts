import { swap } from "./util";
/**
 * Bubble sort algorithm
 * The main idea is to compare each element with the next one
 * and swap them if the next one is smaller (out of order). We
 * also keeps track if a swap was done in the current iteration
 * this indicates that a new iteration is necessary. Each iteration
 * moves the biggest element in this iteration to the right most
 * position.
 *
 * @param arr Unsorted array to be sorted
 */
function bubbleSort(arr: number[]): number[] {
  let lastElementPositioned = arr.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < lastElementPositioned; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    lastElementPositioned--;
  }

  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
