let x = "Samar";
x = "Sara";
console.log(x);
// x = 5; // "Type 'number' is not assignable to type 'string'.",
let userAge = 22;
let isAdmin = true;
let src = null;
let product = undefined;
//Union
let demo = 5;
// let demo2: string | number | boolean = null; //Type 'number' is not assignable to type string | number | boolean
let friends = ["ali", "ahmed", "sara"];
//Tuple
let mixArr = ["samar", 5];
//Grouping
let groupingArr = ["dgsa", "gdgd", 55, "d", 1, 4];
//object
let employee = {
    name: "samar",
    age: 10,
};
//any
let anyVar = 11;
anyVar = "ss";
anyVar = true;
//Function
///Ex.1
function Hello(name, age) {
    return "My name is " + name + " My Age is " + age;
}
console.log(Hello("Ali", 14));
// Hello(); // Expected 2 Arguments , but got 0;
// Hello("s", 1, 5); //Expected 2 Arguments , but got 3;
///Ex.2 With Default Params
function Hello2(name = "ali", age = 10) {
    return "My name is " + name + " My Age is " + age;
}
console.log(Hello2("Ali", 14));
console.log(Hello2());
// Hello2("s", 1, 5); //Expected 2 Arguments , but got 3;
/********************************* Generics *************************/
// Same implementation but Different Data type
// we determine data type when we Calling the function
function useGeneric(list) {
    return list;
}
console.log(useGeneric(["Ali", "ahmed", "sara"]));
console.log(useGeneric([1, 5, 14, 20]));
function useGeneric2(list, list2) {
    return list;
}
console.log(useGeneric2(["Ali", "ahmed", "sara"], [true, false, false]));
console.log(useGeneric2([1, 5, 14, 20], [true, false, false]));
/********************************* Enum *************************/
// Can't Edit the enum properties outside enum.
// Enum => is group of const related members
// Default Data type to enum members is => number
// only allow string & number Data types to its members
// Recommended => all members to be string datatype OR all members to be number datatype
// Enum member must have initializer,if it comes after string member directly
let user = {
    // =>> Object عادى بنقدر نعدل عليه من برا
    name: "Ahmed",
    age: 10,
};
user.age = 12;
console.log(user);
// Enum
var userEnum;
(function (userEnum) {
    userEnum[userEnum["x"] = 0] = "x";
    userEnum[userEnum["y"] = 1] = "y";
    userEnum["name"] = "Ahmed";
    userEnum[userEnum["age"] = 10] = "age";
    userEnum[userEnum["z"] = 11] = "z";
    // isAdmin = true,// Type 'boolean' is not assignable to type 'number' as required for computed enum member values
})(userEnum || (userEnum = {}));
//  userEnum.name = "ff"; //Cannot assign to 'name' because it is a read-only property
console.log(userEnum.name);
console.log("z = " + userEnum.z); // z = 11
/********************************* Interface *************************/
//حاجة بتحددلى شكل -هيئة- ال object  هيكون عامل ازاى
////The problem with Object Data type
let empObj = {
    name: "ahmed",
    salary: 10000,
};
// لو احنا مش عاوزين حد يوصل لل Property برا حيز ال object ويعدل عليها
// هنخليها تكون  readonly
let productList = [
    { name: "nokia", price: 5000, cat: "l", img: "j", store: "Alex" },
    {
        name: "nokia",
        price: 6000,
        cat: "2",
        store: "Cairo",
        demoFun: function (na) {
            let userName = "Ali";
            na = userName;
            return na;
        },
    },
];
class Employee {
    name = "Ahmed";
    employee(job) {
        console.log(job);
    }
}
class Student {
    name = "Ali";
    employee(job) {
        if (job === "student") {
            console.log(job);
        }
        else {
            console.log("Not Known");
        }
    }
}
class Young {
    name = "Omar";
    employee(job) {
        if (job === "young") {
            console.log(job + "=> Doesn't Work ");
        }
        else {
            console.log("not young he is Employee");
        }
    }
}
let emp1 = {
    name: "Ali",
    age: 10,
    mail: "jaa",
    salary: 1000,
};
//# sourceMappingURL=main.js.map