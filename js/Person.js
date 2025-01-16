class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; // _age is meant to be "private" by convention
    }

    // Getter
    get age() {
        return this._age;
    }

    // Setter
    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative");
        } else {
            this._age = value;
        }
    }
}


