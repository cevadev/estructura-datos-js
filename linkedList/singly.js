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

  /**
   * Metodo para agregar un nodo intermedio
   * @param {*} index -> donde agregaremos el nuevo nodo
   * @param {*} value  -> valor que vamos a agregar
   * @returns
   */
  insert(index, value) {
    //si pasamos un indice mayor a la cantidad de elementos en la lista
    if (index >= this.length) {
      //agregamos el valor del nodo al final de la lista
      return this.append(value);
    }

    if (index === 0) {
      return this.append(value);
    }

    //creamos un nuevo node
    const newNode = new Node(value);

    //firstPointer -> es el nodo anterior o previo del indice que pasamos
    const firstPointer = this.getTheIndex(index - 1);

    //holdingPointer -> es el nodo que no queremos que se borre por el GC sino que se quede en hold (espera) hasta puntearlo
    const holdingPointer = firstPointer.next;

    //empezamos a mover lo nodos, el nodo firstPointer apunta al nuevo nodo
    firstPointer.next = newNode;

    //el nuevo nodo apunta al nodo en espera o holding que es el indice donde queremos insertar el nuevo nodo
    newNode.next = holdingPointer;

    //al agregar un nuevo nodo incrementamos la longitud del nuevo nodo
    this.length++;

    return this;
  }

  /**
   * Metodo que permite buscar el índice que pasamos
   * @param {*} index -> indice de la lista donde queremos agregar el nuevo nodo
   * @returns
   */
  getTheIndex(index) {
    //contador que se actualiza con los nodos que se recorre
    let counter = 0;
    //nodo actual será siempre el nodo donde estamos posicionados dentro de la lista, empezamos en el head
    let currentNode = this.head;

    //recorremos cada uno de los nodos hasta encontrar el índice que queremos buscar
    while (counter !== index) {
      //actualizamos el nodo actual
      currentNode = currentNode.next;
      counter++;
    }

    //retornamos el nodo actual
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      console.error("Index is out of limits of the array");
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index === this.length - 1) {
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;

      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getTheIndex(index - 1);
      const pointerToRemove = firstPointer.next;
      firstPointer.next = pointerToRemove.next;
      this.length--;
    }
  }
}

let myLinkedList = new MySinglyLinkedList(1);
