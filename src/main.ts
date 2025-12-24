let x: string = "Samar";
x = "Sara";
console.log(x);
// x = 5; // "Type 'number' is not assignable to type 'string'.",
let userAge: number = 22;
let isAdmin: boolean = true;
let src: null = null;
let product: undefined = undefined;
let friends: string[] = ["ali", "ahmed", "sara"];
//object => we don't Prefer to use this type
let employee: object = {
  name: "samar",
  age: 10,
};

//Union
let demo: string | number | boolean = 5;
demo = "5";
// let demo2: string | number | boolean = null; //Type 'number' is not assignable to type string | number | boolean

//Tuple
let mixArr: [string, number] = ["samar", 5];

//Grouping
let groupingArr: (string | number)[] = ["dgsa", "gdgd", 55, "d", 1, 4];

// Type Literal
// ex.1
let xLiteral: "hello" = "hello";
xLiteral = "hello"; //Ok
// xLiteral = "howdy"; //Type '"howdy"' is not assignable to type '"hello"'.

// ex.2
let gender: "male" | "female" = "female";
gender = "male";
// gender="s" ; // Type '"s"' is not assignable to type '"male" | "female"'

// Custom type
type mixTypes = string | number | boolean;
let mixVarTypes: mixTypes = true;

//any
let anyVar: any = 11;
anyVar = "ss";
anyVar = true;

//Function
///Ex.1
function Hello(name: string, age: number): string {
  return "My name is " + name + " My Age is " + age;
}
console.log(Hello("Ali", 14));
// Hello(); // Expected 2 Arguments , but got 0;
// Hello("s", 1, 5); //Expected 2 Arguments , but got 3;

///Ex.2 With Default Params
function Hello2(name: string = "ali", age: number = 10): string {
  return "My name is " + name + " My Age is " + age;
}
console.log(Hello2("Ali", 14));
console.log(Hello2());
// Hello2("s", 1, 5); //Expected 2 Arguments , but got 3;

/********************************* Generics *************************/
// Same implementation but Different Data type
// we determine data type when we Calling the function
function useGeneric<t>(list: t[]): t[] {
  return list;
}
console.log(useGeneric<string>(["Ali", "ahmed", "sara"]));
console.log(useGeneric<number>([1, 5, 14, 20]));

function useGeneric2<t1, t2>(list: t1[], list2: t2[]): t1[] {
  return list;
}
console.log(
  useGeneric2<string, boolean>(["Ali", "ahmed", "sara"], [true, false, false])
);

console.log(useGeneric2<number, boolean>([1, 5, 14, 20], [true, false, false]));

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
enum userEnum {
  x, // default data type is number => x=0
  y, // default data type is number => y=1
  name = "Ahmed",

  age = 10,
  z,
  // isAdmin = true,// Type 'boolean' is not assignable to type 'number' as required for computed enum member values
}
//  userEnum.name = "ff"; //Cannot assign to 'name' because it is a read-only property
console.log(userEnum.name);
console.log("z = " + userEnum.z); // z = 11

/********************************* Interface *************************/
//حاجة بتحددلى شكل -هيئة- ال object  هيكون عامل ازاى

////The problem with Object Data type
let empObj: Object = {
  name: "ahmed",
  salary: 10000,
};
// console.log(empObj.salary); // Property 'salary' does not exist on type 'Object' => بيدور على الbuilt-in objectاللى موجود فعليا property جوا ال

interface Iproduct {
  name: string;
  price: number;
  cat: string;
  img?: string; //Optional
  readonly store: string; // Can't Edit the Property Value outside the object scope
  demoFun?(x: string): string;
}

// لو احنا مش عاوزين حد يوصل لل Property برا حيز ال object ويعدل عليها
// هنخليها تكون  readonly
let productList: Iproduct[] = [
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
/************** Interface With Class (implements)  ************ */
interface IPerson {
  name: string;
  employee(job: string): void;
}

class Employee implements IPerson {
  name: string = "Ahmed";
  employee(job: string): void {
    console.log(job);
  }
}
class Student implements IPerson {
  name: string = "Ali";
  employee(job: string): void {
    if (job === "student") {
      console.log(job);
    } else {
      console.log("Not Known");
    }
  }
}

class Young implements IPerson {
  name: string = "Omar";
  employee(job: string): void {
    if (job === "young") {
      console.log(job + "=> Doesn't Work ");
    } else {
      console.log("not young he is Employee");
    }
  }
}
/************** Interface With interface inheritance (extends) ************ */
// One interface can inherit from multiple other interfaces
interface IPerson2 {
  name: string;
  age: number;
}
interface IEmail {
  mail: string;
}
interface IEmp extends IPerson2, IEmail {
  salary: number;
}

let emp1: IEmp = {
  name: "Ali",
  age: 10,
  mail: "jaa",
  salary: 1000,
};
