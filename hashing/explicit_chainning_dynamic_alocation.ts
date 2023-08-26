class HashElement {
  key: number;
  value: unknown;
  next: HashElement | null;
  previous: HashElement | null;

  constructor(key: number, value: unknown) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class HashTable {
  public elements: (HashElement | undefined)[];
  public size: number;

  constructor(size: number) {
    this.elements = Array(size);
    this.size = size;
  }

  public hash(key: number) {
    return key % this.size;
  }

  public insert(element: HashElement) {
    const elementIndex = this.hash(element.key);
    if (this.elements[elementIndex] === undefined) {
      this.elements[elementIndex] = element;
      return true;
    }

    this.elements[elementIndex]!.previous = element;
    element.next = this.elements[elementIndex]!;
    this.elements[elementIndex] = element;
    return true;
  }

  public search(key: number): HashElement | null {
    const elementIndex = this.hash(key);
    if (this.elements[elementIndex] === undefined) return null;
    if (this.elements[elementIndex]!.key === key)
      return this.elements[elementIndex] as HashElement;

    let traverser: HashElement | null = this.elements[elementIndex]!;
    while (traverser) {
      if (traverser.key === key) return traverser;
      traverser = traverser.next;
    }

    return null;
  }

  public print() {
    let output = "";
    for (let element of this.elements) {
      output += ` ${element?.key}`;
      if (!element) continue;
      let traverser = element.next;
      while (traverser !== null) {
        output += `->${traverser.key}`;
        traverser = traverser.next;
      }
    }
    console.log(output);
  }
}

const hashTable = new HashTable(11);

hashTable.print();

const element1 = new HashElement(23, 1);

hashTable.insert(element1);

hashTable.print();

const element2 = new HashElement(33, 1);

hashTable.insert(element2);

hashTable.print();

const element3 = new HashElement(43, 1);

hashTable.insert(element3);

hashTable.print();

const element4 = new HashElement(43, 1);

hashTable.insert(element4);

hashTable.print();

console.log(hashTable.search(43));
console.log(hashTable.search(41));
