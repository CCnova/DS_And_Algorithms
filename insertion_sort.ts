/**
 * Insertion sort algorithm
 * The main idea is to store a value in a temp variable
 * and begin comparing elements and shifting this elements
 * until a smaller element is found.
 *
 * @param arr Array to be sorted
 */
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const tempValue = arr[i];
    let position = i - 1;

    while (position >= 0) {
      if (arr[position] > tempValue) {
        arr[position + 1] = arr[position];
        position = position - 1;
      } else break;
    }

    arr[position + 1] = tempValue;
  }

  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
