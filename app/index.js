import Entity from './entity';

class Hobbit extends Entity {
    constructor(name, height) {
        super(name, height);
    }

    greet() {
        console.log(`Hello, I am ${this.name} and I am from Shire`);
    }
}

var Frodo = new Hobbit('Frodo', 4.5);

console.log(Entity);

Frodo.greet();