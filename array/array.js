// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    //definimos las propiedades
    this.length = 0; //cuantos elemento s posee el array
    this.data = {}; // donde almacenamos los elementos
  }

  //metodo para acceder a un elemento del array
  get(index) {
    return this.data[index];
  }

  //metodo que nos permite agregar un elemento al array
  push(item) {
    //indicamos la posicion donde se almacenará el nuevo item
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  //eliminamos el ultimo elemento del array
  pop() {
    //recuperamos el ultimo elemento del array
    const lastItem = this.data[this.length - 1];
    //utilizamos el keyword delete de JS para eliminar un elemento del array
    delete this.data[this.length - 1];
    this.length--; //reducimos la longitud del array
    return lastItem;
  }

  //creamos un metodo personalizado para eliminar une elemento en el de array
  delete(index) {
    const item = this.data[index];
    //hacemos la re-asignacion de indices
    this.shiftIndex(index);

    return item;
  }

  //re-asignamos los indices una vez que se eliminar un elemento del array
  shiftIndex(index) {
    //recorremos todos los elementos del array para encontrar nuestro item a eliminar
    for (let i = index; i < this.length - 1; i++) {
      //el indice a eliminar obtiene el elemento siguiente
      this.data[i] = this.data[i + 1];
    }
    //eliminamos el ultimo elemento
    delete this.data[this.length - 1];
    //reducimos el tamaño del array
    this.length--;
  }
}

const myArray = new MyArray();
