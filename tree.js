//      10
//   4     20
// 2  8  17  170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    //definimos el primer nodo
    this.root = null;
  }

  insert(value) {
    //creamos el nuevo nodo
    const newNode = new Node(value);
    //validamos si existe un nodo, si no existe el root sera nuestro nuevo nodo
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      //validamos si ya existe un root
      while (true) {
        //validamos si el valor es menor al valor del nodo actual. Si es menor se debe ir al lado izquierdo y si no es asi
        //es decir el valor es mayor, todo los valores mayores deben ir al nodo del lado derecho
        if (value < currentNode.value) {
          //validamos si no existe un nodo actual en el lado izquierdo
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; //salimos del while
          }
          //si ya existe un valor en el nodo left del nodo actual, hacemos que el nodo actual tome el valor left del current node
          currentNode = currentNode.left;
        } //si el valor es mayor que el valor de nuestro current node
        else {
          //empezamos la validación del lado derecho del tree
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          //si ya existe un nodo en el nodo actual, hacemos que el current node tenga el valor de nodo actual
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (true) {
      //verificamos que el nodo exista
      if (!currentNode) {
        return null;
      }

      //comparamos si es el valor buscado
      if (currentNode.value === value) {
        return currentNode;
      }

      //si no encontramos el valor deseado, pasamos al siguente nodo
      //dependiendo del valor,si es menor vamos a la izquierda, si es mayor a la derecha
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

//generamos nuestra instancia
const tree = new BinarySearchTree();
