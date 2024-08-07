abstract class Animal {
  name: string;

  emitirSom(): void {
    console.log("fazendo som");
  }

  mover(): void {
    console.log("O animal está se movendo");
  }
}

class Cachorro extends Animal {}

class Gato extends Animal {}

const cachorro = new Cachorro();


cachorro.emitirSom();
cachorro.mover();

const gato = new Gato();
gato.emitirSom();
gato.mover();
