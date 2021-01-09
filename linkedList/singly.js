// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null

//Representacion del singly linkedlist (de una sola direccion) de arrib
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

/**
 * Cada un de los elementos en el singly linkedlist tienen un nodo
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    //forzamos al momento de crear la instancia, agregar un primer valor y el tail va a apuntar al head
    this.tail = this.head;

    //llevamos el conteo de los elementos que existen
    this.length = 1;
  }

  /**
   * Metodo para agregar un elemento al final, que se convierte en la nueva cola
   * @param {} value del nuevo elemento (nueva cola)
   * @returns
   */
  append(value) {
    //nuevo node que insertamos en el tail
    const newNode = new Node(value);

    //logica para convertir el nuevo nodo en la cola
    //la cola.next es igual al nuevo nodo, es decir agrega al nuevo nodo que ya posee un .next -> null
    this.tail.next = newNode;

    //posicionamos el nuevo nodo en la cola
    this.tail = newNode;
    //aumentamos la longitud de la lista
    this.length++;

    //retornamos el objeto
    return this;
  }

  /**
   * Metodo para agregar un nueo head
   * @param {*} value
   * @returns
   */
  prepend(value) {
    //nuevo node que insertamos en el tail
    const newNode = new Node(value);

    //el nuevo nodo.next se convierte en el nuevo head, de esta forma agregamos al nuevo nodo a la lista
    newNode.next = this.head;
    //el head de la lista va a ser el nuevo nodo creado
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
    const holdingPointer = firstPointer.next;
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
}

let myLinkedList = new MySinglyLinkedList(1);
