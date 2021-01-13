class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //metodo que seleccionar el elemento que esta arriba que fue el ultimo en entrar y el primero en salir
  peek() {
    return this.top;
  }

  //metodo para agregar un elemento hasta el final
  push(value) {
    const newNode = new Node(value);
    //validamos si el stack está vacio
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      /**
       * al agregar un nuevo elemento, el node que en este momento esta en el top debe dejar de ser el top y el nuevo elemento
       * se convertirá en el top
       */
      const holdingPointer = this.top;
      //el newNode se convierte en el top del stack
      this.top = newNode;
      //top.next representa al nodo que está debajo del top
      this.top.next = holdingPointer;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
}

const myStack = new Stack();
