class Entity {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greet(additional){
        console.log(`Hi, I'm ${this.name} from Middle Earth`);
        additional && console.log('also, I want to say "' +additional+'"')
    }
}

export default Entity;