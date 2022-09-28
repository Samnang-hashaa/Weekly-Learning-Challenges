/*
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct) */

/*let samnang ={
    name : "Samnang",
    sayHi: function(){
        alert("Hello Samnang!");
    }
};
Samnang.sayHi();*/

/*let str = "Hello";

alert( str.toUpperCase() );*/

/*let n=2.3445;

alert (n.toFixed(2) );*/

/*let str =" Hello ";
str.test = 5;
alert(str.test);*/

/*let million = 1e8 ;
alert(1.3e8 );*/

// string :single and double quotes are essentially the same.

/*function sum(a, b){
    return a+b;
}
alert(`4 + 3 =${sum(4,3)}`);*/

//another advantage of using backticks is that they allow a string to span multiple lines:

/*let guestList=`Guests:
* Samnang
* Dara
* Nara
* Hashaa

`;
alert (guestList);*/

// Ex with Unicode
//alert("\u{1F60D}");
 
//To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos). 

/*let str = `Hello`;

// the first character
alert( str[0] );// H
alert( str.charAt(0) ); // H

//the last character 
alert( str[str.length -1 ]);// o */

 /*for (let char of "Samnang"){
        alert(char);
    }*/

/*let motos=["Honda", "click","Cbr"];

alert( motos[0] );
alert( motos[1] );
alert( motos[2] );*/

/*let fruits= ["Apple","Orange","Plum"];

alert ( fruits.length );//3*/

/*let fruits= ["Apple","Orange","Plum"];

alert ( fruits );*/
// let sum =   0 ;
// while (true) {
//     let value = +prompt("Enter the number ",'');
//     if (!value) break;
//         sum +=value;
// }
// alert ('Sum: '+ sum );

let Markheight=prompt("What is Mark's height? ");
let MarkMass=prompt("What is Mark's mass?");
let Johnheight=prompt("What is John's height?")
let JohnMass=prompt("What is John's mass?")

let MarkBMI= MarkMass / (Markheight * Markheight);
let JohnBMI= JohnMass / (Johnheight * Johnheight);

let markhigherBMI= MarkBMI>JohnBMI;

alert(MarkBMI,JohnBMI);

if(MarkBMI > JohnBMI){
    alert(" Mark's "+MarkBMI+" is bigger than John");
  }
  else {
    alert("John's "+JohnBMI+" is bigger than Mark");
  }


