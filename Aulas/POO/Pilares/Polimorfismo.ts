class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} is making a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        super.makeSound(); 
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound();  

