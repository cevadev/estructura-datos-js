class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    //generamos la primera instancia de nuestra clase
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  //agregamos un nuevo nodo a la cola de la lista
  append(value) {
    const newNode = new Node(value);
    //el póinter prev del nuevo nodo apunta al tail actual de la lista
    newNode.prev = this.tail;
    //enlanzamos el pointer next del tail al nuevo nodo
    this.tail.next = newNode;
    //indicamos que el nuevo tail de la lista es el nuevo nodo
    this.tail = newNode;

    //aumentamos la longitud de la lista
    this.length++;

    return this;
  }

  //metodo que nos permite agregar un nuevo head
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    newNode.prev = firstPointer;
    const holdingPointer = firstPointer.next;
    holdingPointer.prev = newNode;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      console.error("index is out of limits of the array");
    } else if (index == 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    } else if (index === this.length - 1) {
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;

      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const pointerToRemove = firstPointer.next;
      const nextToPointerToRemove = pointerToRemove.next;
      nextToPointerToRemove.prev = firstPointer;
      firstPointer.next = nextToPointerToRemove;
      this.length--;
    }
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
