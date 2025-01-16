class Car{


    constructor(name, year){
        this.name= name
        this.year= year;
        console.log("super class constructer called");
    }

    getName(){
        return this.name;
    }
   getYear(){
        return this.year;
    }
}

class Nano extends Car{
    constructor(name, year){
        super(name,year);
        this.fuel = 'Disel';
        console.log(" Nano sub class constructer called");
    }
}

class Ola extends Car{
    constructor(name, year, mode){
        super(name,year);
        this.mode = mode;
        this.fuel ='Electricity';
        console.log(" Ola sub class constructer called");
    }
}

class Maruti extends Car{
    constructor(name, year, fuel){
        super(name,year);
        this.fuel = fuel;
        console.log(" Maruti sub class constructer called");
    }
}

