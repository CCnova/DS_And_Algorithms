class StaticAllocationHashElement {
  key: number;
  value: unknown;
  nextIndex: number | null;

  constructor(key: number, value: unknown) {
    this.key = key;
    this.value = value;
    this.nextIndex = null;
  }
}

class StaticAllocationHashTable {
  public size: number;
  public elements: (StaticAllocationHashElement | undefined)[];
  public nextFreeIndex: number;

  constructor(size: number) {
    this.size = size;
    this.elements = Array(size);
    this.nextFreeIndex = size - 1;
  }

  public hash(key: number) {
    return key % this.size;
  }

  public insert(element: StaticAllocationHashElement): boolean {
    const index = this.hash(element.key);

    if (this.elements[index] !== undefined) {
      while (
        this.elements[this.nextFreeIndex] !== undefined &&
        this.nextFreeIndex >= 0
      ) {
        this.nextFreeIndex = this.nextFreeIndex - 1;
      }

      if (this.nextFreeIndex === -1) {
        throw new Error("Hash table is full");
      }

      this.elements[this.nextFreeIndex] = element;

      let traverser = index;
      while (this.elements[traverser]?.nextIndex) {
        traverser = this.elements[traverser]?.nextIndex!;
      }
      this.elements[traverser]!.nextIndex = this.nextFreeIndex;

      return true;
    }

    this.elements[index] = element;
    return true;
  }

  public search(key: number) {
    const index = this.hash(key);

    if (this.elements[index]?.key === key) return this.elements[index];

    if (!this.elements[index]) return undefined;

    let traverser: number | null | undefined = index;
    while (
      traverser &&
      this.elements[traverser] &&
      this.elements[traverser]!.key !== key
    ) {
      traverser = this.elements[traverser]?.nextIndex;
    }

    if (!traverser || !this.elements[traverser]) return undefined;

    if (this.elements[traverser]!.key === key) return this.elements[traverser];

    return undefined;
  }

  public print() {
    let output = "";
    for (let element of this.elements) {
      output += `{ key: ${element?.key}, nextIndex: ${element?.nextIndex} }\n`;
    }
    console.log(output);
  }
}

const staticAllocationHashTable = new StaticAllocationHashTable(11);

staticAllocationHashTable.insert(new StaticAllocationHashElement(27, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(18, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(29, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(43, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(77, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(16, 1));

staticAllocationHashTable.insert(new StaticAllocationHashElement(40, 1));

staticAllocationHashTable.print();

console.log(staticAllocationHashTable.search(43));
