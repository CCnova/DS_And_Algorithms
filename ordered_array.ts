class OrderedArray {
  constructor(public items: number[]) {
    this.items = items.sort();
  }

  /**
   *                          Read:
   * The same as a classical array, takes at max 1 step given the index
   */
  read(index: number): number {
    return this.items[index];
  }

  /**
   *                        Insert:
   * Takes at max n + 2 steps, including comparisons to find the right spot
   * and the shifting of elements to insert in the right spot
   */
  insert(value: number): boolean {
    for (let i = 0; i < this.items.length; i++) {
      // Search for the first bigger element
      if (this.items[i] > value) {
        this.items = [...this.items.slice(0, i), value, ...this.items.slice(i)];
        return true;
      }
    }

    // If no bigger element is found, insert in the end of the array
    this.items.push(value);
    return true;
  }

  /**
   *                        Delete:
   * The same as a classical array, takes at max n steps (deleting and shifting elements)
   */
  delete(index: number): boolean {
    this.items = [
      ...this.items.slice(0, index),
      ...this.items.slice(index + 1),
    ];
    return true;
  }

  /**
   *                      Search:
   * This is where the ordered array shines, using linear search we can stop the search if
   * a bigger element is found, this means that the element does not exists on the array.
   * However, on the worst case, this is still equal to a classical array because we would've
   * to search for every element in the array until we found the one we are looking for. So,
   * in the worst case scenario it would take N steps.
   */
  search(value: number): number {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > value) return -1;
      if (this.items[i] === value) return i;
    }

    return -1;
  }

  /**
   *                  Binary Search:
   * This is the real advantage of a ordered array over a classical array, we have the possibility
   * of a binary search. We can use Binary Search to speed up insertion in a ordered array, as
   * insertion requires a search beforehand.
   */
  binarySearch(value: number): number {
    let leftBound = 0;
    let rightBound = this.items.length - 1;

    while (leftBound <= rightBound) {
      const mid = Math.floor((rightBound + leftBound) / 2);

      if (this.items[mid] === value) return mid;
      if (this.items[mid] < value) leftBound = mid + 1;
      if (this.items[mid] > value) rightBound = mid - 1;
    }

    return -1;
  }
}

const orderedArray = new OrderedArray([5, 3, 4, 1]);

console.log(orderedArray.items);

orderedArray.insert(0);

console.log(orderedArray.items);

orderedArray.insert(6);

console.log(orderedArray.items);

orderedArray.insert(2);

console.log(orderedArray.items);

orderedArray.delete(3);

console.log(orderedArray.items);

console.log(orderedArray.search(4));

console.log(orderedArray.binarySearch(4));
