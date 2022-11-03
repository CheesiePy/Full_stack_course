// Objects

const car = {type:"Volvo",
             price:18000,
             color:"red", 
             fual:10,
             run:function() {
                while( this.fual > 0){
                    console.log("driving..");
                    this.fual--;
                }
                console.log("out of fual");
             },
             print_val:function(){console.log(this.price)}
            };
 

car.run()
 
 
 
            
// objects have properys
// console.log(car.type);
// console.log(car["type"]);


// objects can have methods too
// car.fual = 100;


// let jelly = car.price;


// let mystr = "hello my name \nis may nice to meet you!";
// let x = mystr.split("\n");


// console.log(typeof(mystr));
// console.log(car);




// //car.run();

// const date = new Date();

// console.log(date);



class Car {
    constructor(name="Volvo", year=1999){
        this.year = year;
        this.name = name;
    }

    show(){
        return this.name + " " + this.year;
    }
}

const car1 = new Car();
const car2 = new Car("BMW");
const car3 = new Car("Bugati", 2022);
console.log(car1.show());
console.log(car2.show());
console.log(car3.show());