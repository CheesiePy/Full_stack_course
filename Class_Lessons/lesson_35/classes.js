// Class in JavaScript

// class Point{
//     static counter = 0;
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//         Point.counter++;
//         this.id = Point.counter;
//     }

// }

// let p = new Point(5,6);
// let b = new Point(3,2);
// let b2 = new Point(3,2);
// let b3 = new Point(3,2);


// console.log(p);
// console.log(b);

// console.log(Point.counter)
// console.log(b)


class Person{

    constructor(...args){
        this.name = args[0];
        this.last_name = args[1];
        this.id = args[2];
    }

    get fullName(){
        return this.name + " " + this.last_name;
    }

    static compare(first, second){
        if(first.id > second.id){
            return first;
        }else{
            return second;
        }
    }
}


let older_person = new Person("ish", "man", 200);
let yunger_person = new Person("yungster", "yung", 3001);


console.log(Person.compare(older_person,yunger_person));



// console.log(f(1, 3));

class Student extends Person{
    constructor(grade){
        super("may", "lindeberg",1);
        this.grade = grade;
    }
}

let s = new Student(100);
console.log(s)

class Professor extends Student{

}