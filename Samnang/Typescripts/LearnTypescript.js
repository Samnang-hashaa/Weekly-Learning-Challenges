//TypeScript is a language that aims at easing development of large scale applications written in JavaScript.
//There are 3 basic types in TypeScript
// let isDone: boolean=true;
// let lines: number= 42;
// let name: string="Samnang";
//But you can omit the type annotation if the variables are derived
//from explicit literals
// let isDone =false;
// let lines =42;
// let name ="Samnang";
//When it's impossible to know, there is the "Any" type
// let notSure: any=4;
// notSure="maybe a string instead";
// notSure= false // okay, definitely a boolean
// Use const keyword for constants
// const numLivesForDog =10;
// numLivesForDog = 1;// Error
// For collections, there are typed arrays and generic arrays
// let list: number[]=[1,2,3];
// Alternatively, using the generic array type
// let list: Array<number> =[1,2,3];
//For enumerations:
// enum color{Red,Green,Blue};
// let c: Color=Color.Green;
// console.log(color[c]);//"Green"
//lastly "Void" is used in the special case of a function returning nothing 
// function bigHorribleAlert():void {
//    console.log("I'm a little annoying box!")
// }
//Functions are first class citizens, support the lambda"fat arrow" syntax and
//use type inference
// following are equivalent, the same siginature will be inferred by the 
//compiler, and same JavaScript will be emitted
// let f1 = function(i: number):number{ return i* i;}
// Reture type inferred 
// let f2 = function(i:number){return i* i ; }
//"Fat arrow" syntax
// let f3=(i:number): number=>{return i* i ;}
//"Fat arrow" syntax with return type inferred
// let f4 =(i:number) =>{return i* i ;}
//"Fat arrow" syntax with return type inferred, braceless means no return
//keyword neef
// let f5 =(i:number) => i*i;
//Interfaces are structural, anything that has the properties is compliant with
// the interface
//  interface Person {
//     name: string;
// Optional properties, marked wtih a"?"
// age?: number;
// And of course Fuctions
//     move():void;
// }
// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
// let p: Person = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
// let validPerson : Person = { name: "Bobby", age: 42, move: () => { } };
// Is not a person because age is not a number
// let invalidPerson: Person = { name: "Bobby", age: true };
//Interfaces can also describe a function type
// interface SearchFuc{
//     (source:string , subString: string): boolean;
// }
//onlt the parameters 'type are important, names are not importan.
// let mySearch: SearchFuc;
// mySearch = function(src: string, sub:string){
//     return src.search(sub) !=-1;
// }
// Classes -members are publice by default 
// class Point{
//Properties
// x:number;
// Constructor -the public/private keywords in this context wil generate
// the boiler plate code for the property and the property and the initialization in the Constructor.
// In the example,"y" will be defined just like "x" is,but with less code
// Default values are also supported
// constructor(x:number, public y:number =0){
//     this.x=x;
// }
//functions
// dist():number {return Math.sqrt(this.x * this.x +this.y * this.y);} 
//static members
//     static origin = new Point(0,0);
// }
//Classes can be explicitly marked as implementing an interface.
//Any missing properties will then cause an error at compile-time.
// class PointPerson implememts person {
//     namme:string
//     move () {}
// }
// let p1=new Point(10,20);
// let p2=new Point(25); //y will be 0 
//Interiance
// class Point 3D extends Point{
//     constructor(x: number, y:number, public z: number =0){
//         super(x,y);// Expicit call to eh super class constructor is mandatory
//     }
//     //Overwrite
//     dist():number {
//         let d= super.dist():
//         return math.sqrt(d*d+this.z *this.z);
//     }
// }
//Modules, "." can be used as seperator for sub modules
// module Geometry {
//     export class Square {
//         constructor (public sideLength: number =0){
//         } area (){
//             return Math.pow(this.sideLength,2);
//         }
//     }
// }
// let s1 =new Geometry.Square(5);
// //local alias for referencing a module
// import G= Geometry;
// let s2 =new G.Square(10);
//Generics
//Classes
// class Tuple<T1, T2>{
//     constructor(public item1: T1, public item2:T2){}
// }
//Interfaces
// interface Pair<T>{
//     item1: T;
//     item2: T;
// }
// And functions 
// let pairToTuple = function<T>(p: Pair<T>){
//     return new Tuple(p.item1, p.item2);
// };
// let tuple= pairToTuple({item1:"hello",item2:"world"});
// Including references to a definition file:
//<reference path="jaquery.d.ts"/>
//Template Strings(strings that use backticks)
//String Interpolation with Template Strings
// let name='Tyrone';
// let greeting =`Hi ${name},how are you?`
//Multiline Strings with Template Strings
// let multiline=`This is an example
// of a multiline string`;
//READONLY: New Feature in Typescript 3.1
// interface Person {
//     readonly name: string;
//     readonly age:number;
// }
// var p1: Person={name:"Tyrone",age:42};
// p1.age = 25;// Erroe p1.age is read-only
// var p2={name:"Samnang", age:30 };
// var p3:Person=p2;//Ok, read-only alias for p2
// p3.age =35;//Error, p3.age is read only 
// p2.age=45;
// class Car{
//     readonly make:string;
//     readonly model:string;
//     readonly year:2020;
//     constructor() {
//         this.make="Unknown Make";// Assignment permitted in construtor
//         this.model="Unknown Model";//Assignment permitted in constructor
//     }
// }
// let numbers: Array<number>=[0,1,2,3,4];
// let moreNumbers: ReadonlyArray<number> =numbers;
// moreNumbers[5]=5;// Error, elements are read-only
// moreNumbers.push(5);// Error, no push method (because it mutates array)
// moreNumbers.length =3;//Error, lengthis read-only
// numbers = moreNumbers;//Error, mutaling methods are missing
// //Tagged Union Types for modelling state that can be in one of many shapes
// type State =
// | { type: "loading" }
// | { type: "success", value: number }
// | { type: "error", message: string };
// declare const state: State;
// if (state.type === "success") {
//     console.log(state.value);
// } else if (state.type === "error") {
//     console.error(state.message);
// }
//Template Literal Types
//Use to create complex string types
// type OrderSize="regular" | "large";
// type OrderItem="Espresso" | "Cappuccino";
// type Order =`A ${OrderSize} ${OrderItem}`;
// let order1: Order ="A regular Cappuccino";
// let order2: Order ="A large Espresso";
// let order3: Order="A small Espresso"; //Error 
// //Iterators and Generators
// //For... of statement
// //iterate over the list of values on the object being iterated
// let arrayofAnyType=[1."String",false];
// for(const val of arrayofAnyType){
//     console.log(val); // 1. "String",false
// }
// let list=[4,5,6];
// for(const i of list){
//     console.log(i);//4,5,6
// }
// //for..in statement
// //iterate over the list of keys on the object being iterated
// for (const i in list){
//     console.log(i);//0,1,2
// }
// Type Assertion 
var foo = {}; //Creating foo as an empty object
foo.bar = 123; //Error: property 'bar'does not exist on'{}'
foo.baz = 'Hello World'; //Error: property 'baz'does not exist on'{}'
var foo = {}; //Type assertion here
foo.bar = 123;
foo.baz = "Hello World";
