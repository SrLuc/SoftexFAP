abstract class Animal {
  abstract name: string;
  abstract emitirSom(): void;

  mover(): void {
    console.log("O animal está se movendo");
  }
}

class Cachorro extends Animal {
  name: string;
  emitirSom(): void {
    console.log("O cachorro late");
  }
}

class Gato extends Animal {
  name: string;
  emitirSom(): void {
    console.log("O gato mia");
  }
}

const cachorro = new Cachorro();
cachorro.emitirSom();
cachorro.mover();

const gato = new Gato();
gato.emitirSom();
gato.mover();
