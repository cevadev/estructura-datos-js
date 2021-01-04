class HashTable {
  constructor(size) {
    //inicializamos la propiedad data como un array
    this.data = new Array(size);
  }

  //metodo que trabaja como el hash function
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //metodo para agregar elementos en el hash table
  set(key, value) {
    //el key se convierte en el address donde vamos a almacenar el valor
    const address = this.hashMethod(key);
    //validamos si el address (hash) ya existe
    if (!this.data[address]) {
      //no existe el address entonces lo generamos como un nuevo array
      this.data[address] = [];
    }
    //ya existe el address, lo que significa que ya hay una direccion con un valor alli, es decir vamos a tener una colisión
    //lo agregamos como array para evitar que el key/value elimine el elemento que ya está almacenado.
    this.data[address].push([key, value]);
    return this.data;
  }

  //cuando le pasemetos un key, el metodo get retorna el valor de esa key
  get(key) {
    //obtenemos el hash del key
    const address = this.hashMethod(key);
    //obtenemos el currentBucket que es un array (key/value) donde se encuentra la informacion
    const currentBucket = this.data[address];
    //validamos si existe el address o es true
    if (currentBucket) {
      //recorremos cada uno de los buckets del hash table(ver imagen)
      for (let i = 0; i < currentBucket.length; i++) {
        //iniciamos desde el primer bucket: currentBucket[0][key]==key, si son iguales retornamos el value
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    //retornamos undefined cuando pasamos un key que no existe
    return undefined;
  }

  //obtenemos todas las keys del hash table
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  //eliminamos un key/value del hash table
  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }
}

//generamos la instancia de la clase, el objeto myHashTable posee 50 buckets disponibles.
const myHashTable = new HashTable(50);
