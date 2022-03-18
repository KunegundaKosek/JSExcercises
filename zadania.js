let plane = {
    model: "BlackBird",
    country: "USA",
    printInfo: function() {
        console.log(this.model, this.country)
    }
}

plane.year = 1999;

plane.printInfo = function() {
    console.log(this.model, this.country, this.year);
}

plane.printInfo()

function creatPlane(planeModel, planeYear, planeBrand) {
    return {
        model: planeModel,
        year: planeYear,
        brand: planeBrand,
        printInfo: function() {
            console.log(this.model, this.brand, this.year)
        }
    }
}


let a = creatPlane("AN-225", 1990, "Antonov");
a.printInfo()

let date = new Date(2020, 12, 20)
date.toDateString();

console.log(date)

let s = new String(57683)
s.toString();
console.log(s)

let array = new Array(10, 20, 30)
let samolot = new Object();
samolot.brand = "Audi";
samolot.year = 2020
console.log(samolot.brand, samolot.year)

function Car(carBrand, carModel, carYear) {
    if((this instanceof Car) === false)
    return new Car(carBrand, carModel, carYear);

    this.brand = carBrand;
    this.model = carModel;
    this.Year = carYear;
    this.printInfo = function() {
        console.log(this.brand, this.model, this.year);
    }
}

let car1 = new Car("Audi", "A4", 2021)
car1.printInfo();
let car2 = new Car("Seat", "Ibiza", 2004)
car2.printInfo();


console.log(car2 instanceof Car)

let obj = Object.create( {a: 5, b: 10} )

console.log(obj.a, obj.b)

let obj2 = Object.create(null);

console.log(car2["brand"])
let propName = " new prop "
car2[propName] = 99;

console.log(car2[propName])

if("model" in car2) {
    console.log("jest")
}

if(car2.hasOwnProperty("brand")) {
    console.log("jest")
}

let wyswielt = {a: 12, b: "sdf", c: 87};

for(numb in wyswielt) {
    console.log(numb + ": " + wyswielt[numb])
}

for (numb in wyswielt) {
    if(wyswielt.hasOwnProperty(numb))
    console.log(numb + ": " + wyswielt[numb])
}

Car.prototype.test = 10
let someCar = new Car ("dfg", "df", 1999)
console.log(someCar)

for (numb in someCar) {
    console.log(numb)
}

let wartosci = {a: 32, b: 465, c: 2453};
let keysArr = Object.keys(wartosci)

console.log(keysArr)

for(let i = 0; i < keysArr.length; i++) {
    let name = keysArr[i];
    console.log(name + ": " + wartosci[name])
}

let valuesArr = Object.values(wartosci)
console.log(valuesArr)

for(let i = 0; i < valuesArr.length; i++) {
    let v = valuesArr[i];
    console.log(v)
}

let objEntries = Object.entries(wartosci)

for([key, value] of objEntries) {
    console.log(key + ": " + value)
}

let source = {a: 43, b: 6};
let result = Object.assign({}, source)
source === result //false

let source2 = {str: "text", num: 10, arr: [1,2,3], date: new Date(2020, 11, 20), obj: {a: 1, b: 2, c: 3}}
let copy = JSON.stringify(source2)
console.log(copy)

copy = JSON.parse(JSON.stringify(source2))
console.log(copy)



let person = {
    firstName: null,
    lastName: null,
    get fullName () {
        return this.firstName + " " + this.lastName
    },
    set fullName(newName) {
        let splited = newName.split(" ")
        this.fistName = splited[0]
        this.lastName = splited[1]
    }
}

person.fullName = "Ania Kowalska"

let obiekt = {a: 10}

Object.defineProperty( obiekt, "newProp", {
    value: 99,
    writebale: true,
    enumerable: true
} )

console.log(obiekt)

let szukaj = {
    num: 10,
    str: "text",
    flag: true,
    arr: [1, 2, 3],
    date: new Date(2021, 10, 20),
    obj: {a: 9, b: "txt"}
}

let wynik = deepCopy(szukaj)

function deepCopy(obj) {
    if(obj instanceof Object) {
        for (key in obj) {
            console.log(key + " " + obj[key])
        }
    }
}

console.log(wynik)