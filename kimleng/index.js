// test console
// let name; 
// name = 'john';
// console.log(name);  

// console.log(` I\'m the Walrus`); 

// let str = "Hello";
// console.log( str[0]);
// console.log( str.charAt(0));
// console.log( str[str.length -1]);

// for (let char of 'Hello'){
//     console.log(char)
// }

// let str = 'Hi';
// str = 'h' + str[1];
// console.log(str);

// console.log('interface'.toUpperCase());
// console.log('interface'.toLowerCase());
// console.log('interface'[0].toUpperCase());

// let str = 'Wiget with id';
// console.log(str.indexOf('Wiget'));
// console.log(str.indexOf('wiget'));
// console.log(str.indexOf("id") );

// let str = 'Wiget with id';
// console.log(str.indexOf('id',2) );

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while (true){
//     let foundpos = str.indexOf(target,pos);
//     if (foundpos == -1) break;
//     console.log(`Found at ${foundpos}`);
//     pos = foundpos + 1;
// }

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1){
//     console.log(pos);
// }

// console.log( ~2 ); 
// console.log( ~1 ); 
// console.log( ~0 ); 
// console.log( ~-1 ); 

// let str = "Widget";
// if(~str.indexOf("Widget"));
// console.log('Found it!');

// console.log("Widget with id".includes("Widget") );
// console.log("Hello".includes("Bye"));

// console.log("Widget".includes("id"));
// console.log("Widget".includes("id", 3));

// console.log("Widget".startsWith('Wid'));
// console.log("Widget".endsWith('get'));

// let str = "stringify";
// console.log(str.slice(0,5));
// console.log(str.slice(0,1));

// let str = "stringify";
// console.log(str.slice(2));

// let str = "stringify";
// console.log(str.slice(-4,-1));

// let str = "stringify";
// console.log(str.substring(2,6));
// console.log(str.substring(6,2));
// console.log(str.slice(2,6));
// console.log(str.slice(6,2));

// let str = "stringify";
// console.log(str.substr(2,4));
// console.log(str.substr(-4,2));

// console.log( 'a' >' Z' );

// console.log('z'.codePointAt(0));
// console.log('Z'.codePointAt(0));

// console.log(String.fromCodePoint(90));
// console.log(String.fromCodePoint(122));

// let str = '';
// for (let i = 65 ; i <= 220; i++) {
//     str += String.fromCodePoint(i) ;
// }
// console.log( str );

// function ucFirst(str){
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("john"));

// function checkspam(str){
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// console.log(checkspam('buy ViAgRA now'));
// console.log(checkspam('free xxxxx'));
// console.log(checkspam("innocent rebbit"));

// function truncate(str, maxlength){
//     return ( str.maxlength > maxlength) ?
//     str.slice(0, maxlength -1) + '...' ;
//      str;
// } (Note write html and only open html)

//Array topice
// let fruits = ["Apple" , "Orange" , "Plum" ]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// square bracket,replace,add,length,alert
// let fruits = ["Apple", "Orange", "Plum"]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2] = 'Pear');
// console.log(fruits[3] = 'Lemon');
// console.log(fruits.length);
// console.log(fruits);

// let arr = [ 'Apple', {name: 'John' } , true , function() { 
//     console.log('hello');}];
// console.log( arr[1].name);
// arr[3]();

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
// ];
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[fruits.length-1]);

// let fruits = [ "Apple", "Orange", "Plum"];
// console.log(fruits.at(-1));

// let fruits= ["Apple", "Orange", "Pear"];
// console.log(fruits.pop());
// console.log(fruits);

// let fruits = ["Apple", "Orange"];
// fruits.push("Pear");
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift());
// console.log(fruits);

// let fruits = ["Orange", "Pear"];
// fruits.unshift('Apple');
// console.log(fruits);

// let fruits = ["Banana"];
// fruits.push("Orange", "Peach");;
// fruits.unshift("Pineapple" ,"Lemon");
// console.log(fruits);

// let fruits = ["Banana"]
// let arr = fruits;
// console.log( arr === fruits );
// arr.push("Pear");
// console.log(fruits);

// Code 1 Challenge 
// let mark = 'name';
//     john = 'name';
//     weight = 78;
//     tall = 1.69;
//     BMO = weight / (tall * tall);
//     weight = 92;
//     tall = 1.95;
//     BMI = weight / (tall * tall);
//     markHeighterBMI = BMO > BMI ;
// console.log(BMO , BMI);
// console.log(markHeighterBMI)

// let Mark = 'name',
//     John = 'name';

//     weight = 95;
//     tall = 1.88;
//     BMO = weight / (tall * tall);
//     weight = 85;
//     tall = 1.76;
//     BMI = weight / (tall * tall);
// let markHighterBMT = BMO > BMI ;
// console.log( BMO , BMI);
// console.log(markHighterBMT);

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn= 85;
// let heightJohn= 1.76;

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn= 92;
// let heightJohn= 1.95;
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let MarkHeighterBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, MarkHeighterBMI);


// let fruits = ["Apple" ,"Orange","Plum" ,"Lemon"];
// console.log(fruits.length);

// let arr = ["Apple", "Orange", "Pear"]
// for (let i = 0; i < arr.length ; i++) {
//     console.log(arr[i]);
// }

// let fruits = ["Apple", "Orange" ,"Pear"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// let arr = ["Apple", "Orange" , "Pear"];
// for ( let key in arr){
//     console.log(arr[key]);
// }

// let fruit =[];
// fruit [123] = "Apple";
// console.log(fruit.length);

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2;
// console.log(arr);
// arr.length = 5;
// console.log(arr[3]);

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr.length);

// let matrix = [
//     [ 1 , 2 , 3 ],
//     [ 4 , 5 , 6 ],
//     [ 7 , 8 , 9 ]
// ];
// console.log(matrix[0][0]);

// let arr = [1 , 2, 3];
// console.log(arr);
// console.log(String(arr) === '1,2,3');

// console.log( [] + 1);
// console.log( [1] + 1);
// console.log( [1,2] + 1);

// console.log( "" + 1);
// console.log( "1" + 1);
// console.log( "1,2" + 1);

// console.log( 0 == []);

// console.log( 0 == '');

// console.log( 2 > 1);
// console.log( 2 == 1);
// console.log( 2 != 1);

// let result = 5 > 4 ;
// console.log( result);

// console.log( 'Z' > 'A');
// console.log( 'Glow' > 'Glee');
// console.log( 'Bee' > 'Be');

// console.log( '2' > 1 );
// console.log( '01' == 1);

// console.log( true == 1);
// console.log( false == 0);

// let a = 0;
// console.log( Boolean(a) );
// let b = "0" ;
// console.log( Boolean(b) );
// console.log( a == b );

// console.log( '2' == 2);

// console.log( 0 == false);
// console.log( '' == false);

// console.log( null > 0);
// console.log( null == 0);
// console.log( null >= 0);

// // console.log( undefined > 0);
// // console.log( undefined < 0);
// // console.log( undefined == 0);
// console.log( undefined == null);

// // console.log( "2" > "12");

// let i = 0 ;
// while ( 1 < 3 ){
//     console.log( i );
// i++;
// }

// let i= 3;
// while (i){
//     console.log(i);
//     i--;
// }

// let i = 3;
// while (i)
// console.log(i--);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (let i= 0; i <3 ; i++ ){
//     console.log(i);
// }

// let i = 0;
// for (; i< 3 ; i++){
//     console.log(i);
// }

// let i = 0;
// for(; i < 3 ; ){
//     console.log(i++)
// }

// let i = 0;
// for (let i = 0 ; i < 10 ; i++){
//     if ( i % 2 == 0 ) continue;
//     console.log(i);
// }

// let i = 0;
// for ( i = 0 ; i < 10 ; i++ ){
//     if ( i % 2 ){
//         console.log(i);
//     }
// }

// for (let i = 0 ; i < 3 ; i++ ){
//     for ( let j= 0 ; j < 3 ; j++ ){
//         console.log(`vale at coord(${i},${j})`, '');
//     }
// }
// console.log('Done!');

//this code continue isn't allowed here 
// if (i > 5 ){
//     console.log(i);
// } else {
//     continue;
// }

// can't run code
// outer: for (let i = 0 ; i < 3 ; i++ ) {
//     for (let j = 0 ; j  < 3 ; j++ ) {
//         let input = prompt (`Value at coords (${i},${j})`, '');
//         if (!input) break outer;
//     }
// }
// console.log('Done!');

// let i = 3 ;
// while (i){
//     console.log(i--);
// }

//unlimited
// let i = 3;
// while (i) {
//     console.log(i++);
// }

// let i = 3 ;
// console.log(i--);
// console.log(i--);
// console.log(i--);

// let i = 0;
// while (i++ < 5) 
// console.log( i );

// let i = 0;
// while (++i < 5) console.log( i );

// for (let i = 0 ; i < 5 ; ++i) console.log(i);
// for (let i = 0 ; i < 5 ; i++)console.log(i);

// for (i = 2 ; i <= 10 ; i++ ){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0 ; i < 3 ; i++){
//     console.log(`Number is ${i}!` );
// }

// let i = 0;
// while (i < 3){
//     console.log(`Number is ${i}!`);
//     i++;
// }

// let num;
// do{
//     num = prompt("Enter a number gteater than 100!", 0);
// } while (num <=100 && num);

// let n = 10 ; 
// nextprime:
// for (let i = 2; i <= n ; i++) {
//     for (let j = 2 ; j < i ; j++) {
//         if ( i % j == 0) continue nextprime;
//     }
//     console.log(i);
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// Code 2 Challenge2
// let Mark = 'name';
// let John = 'name';
// let massmark = 78;
// let heightmark = 1.69;
// let massjohn = 92;
// let heightjohn = 1.95;

// let massmark = 95;
// let heightmark = 1.88;
// let massjohn = 85;
// let heightjohn = 1.76;

// let BMImark = massmark / (heightmark * heightmark);
// let BMIjohn = massjohn / (heightjohn * heightjohn);
// let BMIBOTH = BMImark > BMIjohn;
// if ( BMImark > BMIjohn){
//     console.log("Mark's BMI is higher than John's!");
//     console.log("Mark's BMI is ",BMImark, "is higher than John's" ,BMIjohn);
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
//     console.log("John's BMI is ", BMIjohn, "is higher than Mark's",BMImark);
// }
// console.log(BMIBOTH);

// Code 2 challenge mend
// let massmark = 78;
// let heightmark = 1.69;
// let massjohn = 92;
// let heightjohn = 1.95;

// // let massmark = 95;
// // let heightmark = 1.88;
// // let massjohn = 85;
// // let heightjohn = 1.76;

// let BMIMark = massmark / heightmark ** 2;
// let BMIJohn = massjohn / heightjohn ** 2;
// console.log( BMIMark , BMIJohn );

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else if (BMIMark < BMIJohn){
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

// Code 3 challenge do 
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// console.log("scoreDolpins",scoreDolphins,"\nscoreKoalas",scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log("The winner of the competition  is scoreDolphins", scoreDolphins);
// }
// else {
//     console.log("The winner of the competition is scoreKoalas", scoreKoalas);
// }

//Code 3 challenge result
// let scoreDolphins = (96 + 108+ 89) / 3 ;
// let scoreKoalas = ( 88 + 91 + 110) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if ( scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins ){
//     console.log('Koalas the win trophy');
// } else if (scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy');
// }

//BONUS 1
// let scoreDolphins = (97 + 112 + 80) / 3 ;
// let scoreKoalas = (109 + 95 + 50) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy XD');
// }

//BONUS 2
// let scoreDolphins = (97 + 112 + 101) / 3 ;
// let scoreKoalas = (109 + 95 + 106) / 3 ;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins> scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas & scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No one win the trophy XD');
// }

// let sum = 0 ;
// while (true) {
//     let vale = +prompt ('Enter the number', '');
//     if (!value) break ;
//     sum += value;
// }
// console.log('Sum' + sum);

// let year = prompt('In which year was ECMAscripte-2015 specification published?', '');
// if ( year == 2015)
//     console.log('You are right!' );

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if ( year == 2015){
//     console.log("That's correct!");
//     console.log('You are smart!');
// }

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if (year == 2015){
//     console.log("You guessed it right!");
// } else {
//     console.log("How can you be so wrong?");
// }

// let year = prompt ('In which year was ECMAscripte-2015 specification published?', '');
// if (year < 2015 ){
//     console.log('To early ...');
// } else if (year > 2015) {
//     console.log('To late');
// } else {
//     console.log('Exactly!');
// }

// let accessAllowed;
// let age = prompt('How old are you?', '');
// if ( age > 18 ) {
//     accessAllowed = true ;
// } else{
//     accessAllowed = false ;
// }
// console.log(accessAllowed);

// let age = prompt ('age?', '');
// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello! ' :
//     (age < 100) ? 'Greetings!' :
//     'What an unsual age!';
// console.log(message);

// let message;
// let age = prompt ('age!', '');
// if (age < 3 ){
//     message = 'Hi, Baby!';
// } else if (age < 18 ) {
//     message = 'Hello!';
// } else if (age < 100 ) {
//     message = 'Greeting!';
// } else {
//     message = 'What an unsual age!';
// }
// console.log(message);

// let company = prompt('Which company created JavaScript','');
// (company == 'Netscape') ?
// console.log('Right!') : alert ('Wrong.') ;

// let company = prompt ( 'Which company created JavaScript', '');
// if ( company == 'Netscape') {
//     console.log('Right!');
// } else {
//     console.log('Wrong.');
// }

// if ("0"){
//     console.log('Hello');
// }

// let value = ("Which is the 'Official' name if JavaScript", '');
// if (value == 'ECMAScript') {
//     console.log('Right!');
// } else {
//     console.log("You don't know ECMAScript1");
// }

// let value = prompt ('Try a number', 0);
// if (value > 0) {
//     console.log(1);
// } else if (value < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

// let result;
// if (a + b < 4 ) {
//     console.log('Below');
// } else {
//     console.log('Over');
// }

// let result = (a + b < 4) ? true : false ;

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let login = prompt ('Login','');
// let message = (login == 'Employee') ? 'Hello!' :
//     (login == 'Director') ? 'Greeting' :
//     (login == '') ? 'No login' :
//     '';
// console.log(message);

// function showMessage () {
//     console.log('Hello eveyone!');
// }
// showMessage();

// function showMessage(){
//     let message = "Hello, I'm JavaScript!";
//     console.log(message);
// }
// showMessage();

// let userName = 'John';
// function showMessage (){
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }
// showMessage();

// let userName = 'John';
// function showMessage(){
//     userName = 'Bob';
//     let message = 'Hello, ' + userName ;
//     console.log(message);
// }
// showMessage();

// function showMessage (from , text ){
//     console.log(from + ': ' + text);
// }
// showMessage('Ann','Hello!');
// showMessage('Ann', "What's up!");

// function showMessage( from , text){
//     from = '*' + from + '*';
//     console.log(from + ': ' + text);
// }
// let from = 'Ann';
// showMessage(from, 'Hello!');
// console.log(from);

// Simple test
// function showMessage (from ,text) {
//     from = '*' + from + '*';
//     console.log(from + ': ' +text);
// }
// let from = 'Crush';
// showMessage(from, "Hello");
// showMessage(from, "What are you doing?")
// showMessage(from, "Work hard na, Please Take care ^^")
// console.log(from);

// function showMessage(from , text = "No text given"){
//     console.log(from + ': ' + text);
// }
// showMessage("Ann");

// function showMessage (from , text ) {
//     if (text == undefined ) {
//         text = "no text given";
//     }
//     console.log(from + ': ' + text);
// }
// showMessage()

// function showMessage (from , text ) {
//     text = text || 'no text given';
//     console.log(from + ': ' + text);
// }
// showMessage()

// function showMessage( text ) {
//     if( text == undefined){
//         text = 'empty given';
//     }
//     console.log(text);
// }
// showMessage();

// function showMessage(text){
//     text = text || 'empty given';
//     console.log(text);
// }
// showMessage();

// function showCount ( count){
//     console.log(count ??  "unknown");
// }
// showCount(0);
// showCount(null);
// showCount();

// function sum(a,b){
//     return a + b ;
// }
// let result = sum (1,2);
// console.log(result);

// function checkAge(age){
//     if (age >= 18){
//         return true;
//     } else {
//         return confirm ('Do you have permission from youe parents?');
//     }
// }
// let age = prompt('How old are you', 18);
// if (checkAge(age)){
//     console.log('Access granted' );
// } else {
//     console.log('Access denied' );
// }

// Not Working
// function showMovie (age){
//     if (!check(age)){
//         return;
//     }
//     console.log("showing you the movie");
// }

// function doNothing(){ /* empty */}
// console.log(doNothing() === undefined);

// function doNothing(){
//     return;
// }
// console.log(doNothing() === undefined);

// Not Working
// function showPrimes(n){
//     nextPrime: for (let i = 2 ; i < n ; i++) {
//         for (let j = 2 ; j < i ; i++) {
//             if ( i % j == 0) continue nextPrime;
//         }
//         console.log(i);
//     }
// }

// Not Working
// function showPrimes(n){
//     for (let i = 2 ; i < n ; i++){
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }
// function isPrime(n) {
//     for (let i = 2 ; i < n ; i++) {
//         if (n % i == 0 ) return false;
//     }
//     return true;
// }

// Not Working
// function checkAge(){
//     if ( age > 18){
//         return true;
//     } else {
//         return confirm('Did your parents allow you?');
//     }
// }

// Not Working
// function checkAge(){
//     if (age > 18){
//     }
//     return confirm ('Did your parents allow you?');
// }

// Not Working
// function checkAge(){
//     return (age < 18 ) ? true : confirm ('Did your parents allow you?');
// }

// Not working
// function checkAge(){
//     return (age < 18 ) || confirm ('Did your parents allow you?');
// }

// Not Working
// min (2 , 5) == 2
// min (3 , -1) == -1
// min (1, 1) == 1
// function min (a, b) {
//     if (a < b ){
//         return(a);
//     } else {
//         return(b);
//     }
// }

// Not Working
// function min (a, b){
//     return a < b ? 'a' : 'b';
// }

// function pow( x, n ){
//     let result = x ;
//     for (let i = 1 ; i < n ; i++){
//         result *= x;
//     }
//     return result ;
// }
// let x = prompt ("x?", '');
// let n = prompt ("n?", '');
// if (n < 1 ){
//     console.log(`Power ${n} is not supported, use a positive integer`);
// } else {
//     console.log(pow(x , n));
// }

// code 4 challenge
// let MarkMiller = 'fullname';
// let massmark = 78;
// let heightmark = 1.69;
// let BMImark = massmark / (heightmark * heightmark);
// let JohnSmith = 'fullname';
// let massjohn = 92;
// let heightjohn = 1.95;
// let BMIjohn = massjohn / (heightjohn * heightjohn);
// function calcBMI () {
//     if (BMIjohn > BMImark){
//         console.log("John Smith's BMI ", BMIjohn ," is higher than Mark Miller's " , BMImark ,"!" );
//     } else {
//         console.log("Mark MIller's BMI ", BMImark ," is higher than John Smith's " , BMIjohn ,"!" );
//     };    
// }
// calcBMI();

// Answer code 4 Challenge
// let mark = {
//     fullname : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
// };
// let john = {
//     fullname : 'john Smith',
//     mass : 92,
//     height : 1.95,
// };
// function calcBMIMark() {
//     return mark.mass / (mark.height ** 2);
// }
// function calcBMIJohn() {
//     return john.mass / (john.height ** 2);
// }
// if (calcBMIMark() > calcBMIJohn()) {
//     console.log(`${mark.fullname}'s BMI (${calcBMIMark()}) is higher than ${john.fullname}'s BMI (${calcBMIJohn()})`);
// } else if (calcBMIJohn() > calcBMIMark()) {
//     console.log(`${john.fullname}'s BMI (${calcBMIJohn()}) is higher than ${mark.fullname}'s BMI (${calcBMIMark()})`);
// }

// let sum = (a,b) => a + b ;
// console.log(sum(1,2));

// let double = n => n * 2;
// console.log(double(3));

// let sayhi= () => console.log('Hello!');
// sayhi();

// let age = prompt("What's your age", 18);
// let welcome = (age < 18)?
//  () => console.log('Hello!') :
//  () => console.log('Greeting');
//  welcome();

// let sum = (a,b) => {
//     let result = a + b ;
//     return result;
// };
// console.log(sum(1,2));

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(2 ,1));

// function ask(question, yes,no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Do you agree?",
//     function () {console.log("You agree.");},
//     function () {console.log("You canceled the execution.");}
// );

// function ask(question , yes , No){
//     if(confirm(question)) yes();
//     else No();
// }
// ask(
//     "Do you agree?",
//     () => console.log("You agree."),
//     () => console.log("You canceled the execution.")
// );

// function func(a,b){
//     let sum = a + b ;
//     return sum; 
// }
// console.log(func(1,2));

// let array1 =[1, 4, 9, 16];
// let map1= array1.map(x => x * 2);
// console.log(map1);

// let number =[1, 4, 9];
// let roots = number.map((num) => Math.sqrt(num));
// console.log(number);
// console.log(roots);

// let kvarray = [
//     {key: 1 , value: 10},
//     {key: 2 , value: 20},
//     {key: 3 , value: 30},
// ];
// let reformattedArray = kvarray.map (({key, value}) => ({[key]: value}));
// console.log(reformattedArray);
// console.log(kvarray);

// let number = [ 1 ,4 , 9];
// let double = number.map((num) => num * 2);
// console.log(number);
// console.log(double);

// async function f (){
//     return 1;
// }
// f().then(console.log);

// async function f(){
//     return Promise.resolve(1);
// }
// f ().then(console.log);

// async function f() {
//     let promise = new Promise ((resolve , reject) => {setTimeout(() => resolve("done!"), 1000)});
//     let result = await promise;
//     console.log(result);
// }
// f();

// Not winking
// function f(){
//     let promise = promise.resolve(1);
//     let result = await.promise;
// }

// class Thenable {
//     constructor(num){
//         this.num = num;
//     }
//     then(resolve, reject) {
//         console.log(resolve);
//         setTimeout(() => resolve(this.num * 2),1000);
//     }
// }
// async function f() {
//     let result = await new Thenable (1);
//     console.log(result);
// }
// f();

// class Waiter {
//     async wait () {
//         return await Promise.resolve(1);
//     }
// }
// new Waiter()
//     .wait()
//     .then(console.log);

// const fetchData = () => 'hello world';

// console.log(fetchData());

// class Waiter {
//     async  wait (){
//         return await Promise.resolve(1);
//     }
// }
// new Waiter()
//     .wait()
//     .then(console.log)

// async function f() {
//     try {
//         let response = await fetch('http://no-such-url');
//     } catch (err) {
//         console.log(err);
//     }
// }
// f();

// async function f() {
//     try {
//         let response = await fetch ('/no-user-here')
//         let user = await response.json();
//     } catch (err) {
//         console.log(err);
//     }
// }
// f();

// async function f() {
//     let response = await fetch ('http//no-such-url');
// }
// f().catch(console.log);

// function loadJson(url) {
//     return fetch (url)
//     .then(response => {
//         if (response.status == 200) {
//             return response.json();
//         } else {
//             throw new Error (response.status);
        
// }
//     });
// }
// loadJson('http:javascript.info/no-such-user.json')
//     .catch(console.log);

// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(response.status);
// }
// loadJson('http://javascript.info/no-such-user.json')
//     .catch(console.log);

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
// function loadJson(url) {
//     return fetch(url)
//     .then(response => {
//         if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
//     });    
// }
// function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
//     return loadJson(`https://api.github.com/user/${name}`)
//     .then(user => {
//         console.log(`Full name: ${user.name}.`);
//         return user;
//     })
//     .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//             console.log("No such user, please reenter.");
//             return demoGithubUser();
//         } else {
//             throw err;
//         }
//     });
// }
// demoGithubUser();

// Not Working
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.statue} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }
// async function demoGithubUser() {
//     let user;
//     while(true) {
//         let name = prompt("Enter a name?", "iliakan");
//         try {
//             user = await loadJson(`http://qpi.github.com/user/${name}`);
//             break;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.statue == 404) {
//                 console.log("No such user, please reenter.");
//             } else {
//                 throw err;
//             }
//         }
//     }
//     console.log(`Full name: ${user.name}.`);
//     return user;
// }
// demoGithubUser();

// No Working
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve,1000));
//     return 10;
// }
// function f(){
//     wait().then(result => console.log());
// }
// f();

// Not working here
// try {
//     console.log('Start of try run');
//     console.log('End of try run');
// } catch (err){
//     console.log('catch is ignored, because there is no errors');
// }

// Not working here
// try {
//     console.log('Start of try run');
//     lalala;
//     console.log('End of try (never reach)');
// } catch (err) {
//     console.log(`Error has occurred!`);
// }

// Not working here
// try {
//     sfsfdfgsfhsfgjtgar
// } catch (err) {
//     console.log("The engine can't understand this code, it's invalid");
// }

// Not working here
// try {
//     setTimeout (function() {
//         noSuchVariable;
//     } , 1000);
// } catch (err) {
//     console.log("Won't work");
// }

// Not working here
// try {
// }  catch (err) {
//     console.log()
// }

// Not working here
// try {
//     lalala;
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//     console.log(err);
// }

// Not working here
// let json = '{"name" : "john" , "age" : 30 }';
// let user = JSON.parse(json);
// console.log(user.name);
// console.log(user.age);

// Not working here
// let json = "{bad john}";
// try {
//     let user = JSON.parse(json);
//     console.log(user.name);
// } catch (err) {
//     console.log("Our apologies, the data has error, we'll try to request it one more time.");
//     console.log(err.name);
//     console.log(err.message);
// }

// Not working here
// let json = '{"age" : 30}';
// try {
//     let user = JSON.parse(json);
//     console.log(user.name)
// } catch (err) {
//     console.log("doesn't execute");
// }

// Not working here
// let error = new Error ("Things happen o_0");
// console.log(error.name);
// console.log(error.message);

// Not working here
// try {
//     JSON.parse("{bad json o_0}");
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
// }

// Not working here
// let json = '{"age":  30}';
// try {
//     let user = JSON.parse(json);
//     if (!user.name){
//         throw new SyntaxError("Imcomplete data: no name");
//     }
//     console.log(user.name);
// } catch (err) {
//     console.log ("json Error: " + err.message);
// }

// try {
//     user ={ /*...*/ };
// } catch (err) {
//     console.log('RefernceError');
// }

// let json = '{"age": 30}';
// try {
//     let user = JSON.parse (json);
//     if (!user.name) {
//         throw new SyntaxError("Imcompete data: no name");
//     }
//     blabla();
//     console.log(user.name);
// } catch (err) {
//     if (err instanceof SyntaxError) {
//         console.log("JSON Error: "+ err.message);
//     } else {
//         throw err;
//     }
// }

// function readData() {
//     let json = '{"age": 30}';
//     try {
//         blabla();
//     } catch (err) {
//         if (!(err instanceof SyntaxError)) {
//             throw err;
//         }
//     }
// }
// try {
//     readData();
// } catch (err) {
//     console.log("External catch got: " + err );
// }

// try {
//     console.log('try');
//     if (confirm('Make an error?')) BAD_CODE();
// } catch (err) {
//     console.log('catch');
// } finally {
//     console.log('finally');
// }

// let num = +prompt("Enter a positive integer number?", 35)
// let diff, result;
// function fib(n) {
//     if(n<0 || Math.trunc(n) !=n) {
//         throw new Error("Must not be negative, and also an integer.");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// let start =Date.now();
// try {
//     result = fib(num);
// } catch(err) {
//     result = 0;
// } finally {
//     diff =Date.now() - start;
// }
// console.log(result || "error occurred");
// console.log(`execution took ${diff}ms`);

// function func() {
//     try{
//         return 1;
//     } catch (err) {
//         /*...*/
//     } finally {
//         console.log('finally');
//     }
// }
// console.log(func());

// window.onerror = function(message, url ,line ,col, error) {
//     console.log(`${message}\n At ${line}:${col} of ${url}`);
// };
// function readData(){
//     badFunc();
// }
// readData();

// function f() {
//     try {
//         console.log('Start');
//         return "result";
//     } catch (err) {
//         /////
//     } finally {
//         console.log('cleanup!');
//     }
// }
// f();

// function f() {
//     try {
//         console.log('start');
//         throw new Error("an Error");
//     } catch (err) {
//         if("Can't handle the error") {
//             throw err;
//         }
//     } finally {
//         console.log('Cleanup');
//     }
// }
// f();

// let array1 = [1, 4, 9, 16];
// let map1 = array1.map(x => x * 2);
// console.log(map1);

// let sum = (a,b) => a + b ;
// console.log(sum(1,2));

// let array1 = [1, 4, 9, 16];
// let map1 = array1.map( x => x * 2);
// console.log(map1);

// let numbers = [1 ,4 ,9];
// let roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots);
// console.log(numbers);

// let kvarray = [
//     {key: 1 , value : 10 },
//     {key: 1 , value : 20 },
//     {key: 1 , value : 30 },
//     {key: 1 , value : 40 },
// ];
// let reformattedArry =kvarray.map(({key ,value}) => ({ [key]: value}));
// console.log(kvarray);

// let number = [ 1, 4, 9];
// let roots = number.map((num) => Math.sqrt(num));
// console.log(number);
// console.log(roots);

// let kvarray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ];
// let reformattedArray = kvarray.map(({key ,value}) => ({ [key]: value}));
// console.log(kvarray);
// console.log(reformattedArray);

// let number = [ 1, 4, 9];
// let double = number.map((num) => num * 2);
// console.log(double);
// console.log(number);

// let map = Array.prototype.map;
// let charcodes = map.call('Hello World', (x) => x.charcodes)

//Not Working
// let map = Array.prototype.map;
// let charcodes = map.call('Hello World', (x) => x.charcodeAt(0));
// console.log(charcodes);

//Not Working
// let elems = document.querySelectorAll('select option:check');
// let value = Array.prototype.map.call(elems, ({value}) => value);

// let numbers = [ 1,2 ,3,4];
// let filterredNumber = numbers.map((num, index) => {
//     if (index < 3) {
//         return num;
//     }
// });
// console.log(numbers);
// console.log(filterredNumber);


//Not Working
// export function sayHi(user) {
//     console.log('Hello, ${user}');
// }

//Not Working
// import {sayHi} from './sayHi.js';
// console.log(sayHi);
// sayHi('john');

// export function sayHi(user) {
//     return `Hello, ${user}!`;
// }

// import {admin} from './admin.js';
// admin.name = "Pete";
// import {admin} from './admin.js';
// console.log(admin.name);

//Not Working
// export let months = ['jan','feb','mar','apr', 'aug', 'sep','out', 'nov','dec'];
// export let MODULES_BECAME_STANDARD_YEAR = 2015;
// export class User {
//     constructor(name){
//         this.name = name;
//     }
// }

//Not Working
// function sayHi(user) {
//     console(`Hello, ${user}!`);
// }
// function sayBye(user) {
//     console(`Bye, ${user}!`);
// }
// export {sayHi, sayBye};

//Now Working
// import * as say from './say.js';
// say.sayHi('John');
// say.sayBye('John');

//Not Working
// import {login,logout} from '/helpers.js';
// export {login,logout};
// import User from './user.js';
// export {User};

//Not Working
// export function hi () {
//     console.log(`hello`);
// }
// export function bye () {
//     console.log(`Bye`);
// }

//Start from the beginner
// let user = 'john',
//     age = 25,
//     message = 'Hello';
// console.log(user,age,message);

// let user = 'john';
// let age = 25 ;
// let message = 'Hello';
// console.log(user,age,message);

// let user = 'john'
//     ,age =25
//     ,message = 'Hello';
// console.log(user,age,message);

// let message;
// message = 'Hello';
// message = 'World';
// console.log(message);

// let hello = 'Hello World';
// let message;
// message = hello;
// console.log(hello);
// console.log(message);

// let $ = 2;
// let _ = 1;
// console.log($ + _);

// num = 5;
// console.log(num);    

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_ORANGE;
// console.log(color);

// let admin , name;
// name = "john";
// admin = name;
// console.log(name);

//Not Working
// function showPrimes (n) {
//     nextPrimes:
//     for (let i = 2; i < n ; i++) {
//         for (let j = 2 ; j < i ; j++) {
//             if ( i % j == 0) continue nextPrimes;;
//         }
//         console.log(i);
//     }
// }

//Not Working
// function showPrimes (n) {
//     for (let i =2 ; i < n ; i++) {
//         if (!isPrimes(i)) continue;
//         console.log(i);
//     }
// }
// function isPrime(n) {
//     for (let i = 2 ; i < n ; i++) {
//         if (n % i == 0) return false;
//     }
// }

// for (let i = 0 ; i < 10 ; i++) {
//     let drop = getWhiskey();
//     smell(drop);
//     add(drop,glass);
// }
// for(let t = 0 ; t , 3 ; t++) {
//     let tomato = getTomato();
//     examine(tomato);
//     let juice = press(tomato);
//     add
// }

//Not Working
// addWhiskey(glass);
// addJuice(glass);
// function addWhiskey(container) {
//     for (let i = 0 ; i < 10 ; i++) {
//         let drop = addWhiskey ();
//     }
// }
// function addJuice(container) {
//     for (let t = 0 ; t < 3 ; t++) {
//         let tomato =getTomato();
//     }
// }

// let message = 'Hello';
// message = 123456;
// console.log(message);

// let n = 1.23;
// n = 1.2345
// console.log(n);

// console.log( 1 / 0);
// console.log(Infinity);
// console.log('Not a number' / 2);
// console.log(NaN + 1);
// console.log(3 * NaN);
// console.log("Not a number" / 2 -1 );

// console.log(9007199254740991 + 1);
// console.log(9007199254740991 + 2);

// let name = 'john';
// console.log(`Hello, ${name}`);
// console.log(`the result is ${1 + 2}`);

// let nameFieldChecked = true ;
// let ageFieldChecked = false ;
// console.log(nameFieldChecked);
// console.log(ageFieldChecked);

// let isGreater = 4 > 1;
// console.log(isGreater);

// let age;
// console.log(age);

// let age = 100;
// age = undefined;
// console.log(age);

// let name = "Ilya";
// console.log(`hello ${1 + 2}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);

// let fruit = ["Apple" , "Orange", "Plum"];
// fruit [2] = 'Pear';
// fruit [3] = 'Lemon';
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit.length);
// console.log(fruit);

// let arr = ['Apple', {name : 'John'}, true ,function() {console.log('Hello');}];
// console.log(arr[1].name);
// arr[3]();

// let fruit = [
//     "Apple",
//     "Orange",
//     "Plum"
// ];
// console.log(fruit);

// let fruit = ["Apple" , "Orange" , "Plum"];
// console.log(fruit[fruit.length-1]);

// let fruit = ["Apple", "Orange", "plum" ];
// console.log(fruit.at(-1));

// let fruits = ["Apple" , "Orange" , "Pear"];
// console.log(fruits.pop());
// console.log(fruits);

// let fruits = ["Apple" , "Orange"];
// fruits.push("Pear");
// console.log(fruits);

// let fruits = ["Apple", "Orange"];
// fruits[fruits.length] = "Pear";
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.shift());
// console.log(fruits);

// let fruit = ["Orange", "Pear"];
// fruit.unshift('Apple');
// console.log(fruit);

// let fruit = ["Apple"];
// fruit.push("Orange", "Peach");
// fruit.unshift("Pineapple", "Lemon");
// console.log(fruit);

// let fruits = ["Banana"];
// let arr = fruits;
// console.log(arr === fruits);
// arr.push("Pear");
// console.log(fruits);

// let fruits = ["Apple", "Orange", "Pear"];
// console.log(fruits.length);

//  let arr = ["Apple" , "Orange", "Pear"];
//  for (let i=0 ; i < arr.length ; i++) {
//     console.log(arr[i]);
//  }

// let fruits = ["Apple", "Orange", "Pear"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let arr = ["Apple", "Orange", "Pear"];
// for (let key in arr) {
//     console.log(arr[key]);
// }

// let fruit = [];
// fruit[123] = "Apple";
// console.log(fruit.length);

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2;
// console.log(arr);
// arr.length = 5;
// console.log (arr [3]);

// let arr = new Array (2);
// console.log(arr[0]);
// console.log(arr.length);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[1][1]);

// let arr = [1,2,3];
// console.log(arr);
// console.log(String(arr) === '1,2,3');

// console.log( [] + 1);
// console.log( [1] + 1);
// console.log( [1,2] + 1);
// console.log( "" + 1);
// console.log( "1" + 1);
// console.log( "1,2" + 1);

// console.log( [] == []);
// console.log( [0] == [0]);
// console.log( 0 == []);
// console.log( '0' == []);
// console.log( 0 == '');
// console.log( '0' == '');

// let fruit = ["Apple", "Orange" , "Pear"];
// console.log(fruit.at(-1));

//Not Working
// let arr = [item1 , item2];
// console.log(arr);

//Not Working
// let arr = new Array (item1 , item2);
// console.log(arr.length);

// let fruit = ["Apple","Orange","Pear"];
// let ShoppingCart = fruit ;
// ShoppingCart.push("Banana");
// console.log(fruit.length);

// let style = ["jazz", "Blues"];
// style.push("Rock-n-roll");
// style[Math.floor((style.length -1) / 2)] = "Classic";
// console.log(style.shift());
// style.unshift("Rap","Reggae");

// let arr = ["a","b"];
// arr.push(function() {
//     console.log( this );
// })
// arr[2]();

// function sumInput () {
//     let numbers = [];
//     while (true) {
//         let value = prompt ("A number please" , 0);
//         if ( value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumInput());

//Slow solution
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for (let i = 0; i < arr.length ; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++ ) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//     return maxSum;
// }
// console.log( getMaxSubSum([-1, 2, 3, -9]));
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log( getMaxSubSum([-2, -1, 1, 2]));
// console.log( getMaxSubSum([1, 2, 3]));
// console.log( getMaxSubSum([100, -9, 2, -3, 5]));

// Fast solution
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
// }
// console.log( getMaxSubSum([-1, 2, 3, -9]));
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log( getMaxSubSum([-2 , -1, 1, 2]));
// console.log( getMaxSubSum([100 , -9 , 2 ,-3 , 5]));
// console.log( getMaxSubSum([1 ,2 ,3]));
// console.log( getMaxSubSum([-1, -2, -3]));

// //Return a number between 0 the 1
// let random = Math.random();
// console.log(random);

//Return a number between 1 the 10
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

//numbers
// let amount = 6;
// let price = 4.99;
// console.log(amount, price);

//String.length
// let message = 'good nite';
// console.log(message.length);
// console.log('Hello'.length);

//boolean
// let lateToWork = true;
// console.log(lateToWork);

// console.log(Math.random());

// let x = null;
// console.log(x);

// let single = 'Wheres my bandit hat';
// let double = "Wheres my bandit hat";
// console.log(single);
// console.log(double);

// // addition 
// let a1 = 5 + 5;
// // subtraction
// let a2 = 10 - 5;
// // multiplication
// let a3 = 5 * 10;
// // division
// let a4 = 10 / 5;
// // modulo
// let a5 = 10 % 5;
// console.log(a1, a2, a3, a4, a5);

// let baseUr1 = 'localhost/taxwebapp/country';
// console.log(baseUr1);

// let weekINYear = Math.floor(365/7);
// let daysLeftOver = 365 % 7;
// console.log(" A year has " + weekINYear + " week and " + daysLeftOver + " days ");

// let number = 100;
// number = number + 10;
// number += 10;
// console.log(number);

// let number = 100;
// number = number - 10;
// number -= 10;
// console.log(number);

// let number = 100;
// number = number * 10;
// number *= 10;
// console.log(number);

// let number = 100;
// number = number / 10;
// number /= 10;
// console.log(number);

// let age = 7;
// console.log("Tommy is " + age + " year old");
// console.log(`Tommy is ${age} year old`);

// const currency = '$';
// let userIncome = 85000;
// console.log(currency + userIncome + ' is more than the average income.');

// var a;
// console.log(a);

// let name = "Tammy";
// const found = false;
// var age = 3;
// console.log(name , found , age);

// var age = 17;
// let weight = 50;
// const numberOfFinger = 20;
// console.log(age , weight ,numberOfFinger);

// let name = "Codecademy";
// console.log(`Hello, ${name}`);
// console.log(`billy is ${6+8} year old`);

// let count;
// console.log(count);
// count = 10 ;
// console.log(count);

//Not Working
// const numberOfColumns = 4;
// numberOfColumns = 8;
// console.log(numberOfColumns);

// let service = 'creatid card';
// let month ='May 30th';
// let displayText = 'Your ' + service + ' bill is due on ' + month + '.';
// console.log(displayText);

// console.log(true || false);
// console.log(10 > 5 || 10 > 20);
// console.log(false || false) ;
// console.log(10 > 100 || 10 > 20);

// let price = 10.5;
// let day = "Monday";
// day === "Monday" ? price -=1.5 : price += 1.5;
// console.log(day ,price)

// let isTaskCompleted = false;
// if (isTaskCompleted) {
//     console.log('Task completed');
// } else {
//     console.log('Task incompleted');
// }

// console.log(true && true);
// console.log(1 > 2 && 2 > 1);
// console.log(true && false);
// console.log(true && false);
// console.log(4 === 4 && 3 > 1);

// let food = 'salad';
// switch (food) {
//     case 'oyster':
//         console.log('The taste of the sea');
//         break;
//     case 'pizza':
//         console.log('A delicious pie');
//         break;
//     default:
//         console.log('Enjoy your meal');
// }

// let drink = 'water';
// switch (drink) {
//     case 'beer':
//         console.log('Greet to part');
//         break;
//     case 'koi':
//         console.log('Enjor with friend');
//         break;
//     default:
//         console.log('Just drink it')
// }

// let isMailSent = true;
// if (isMailSent) {
//     console.log('Mail sent to recipient');
// }

// let lateToWork = true;
// let oppositeValue = !lateToWork;
// console.log(oppositeValue);

// console.log(1 > 3);
// console.log(3 > 1);
// console.log(250 >= 250);
// console.log(1 === 1);
// console.log(1 === 2);
// console.log(1 === '1');

// let size = 10;
// if (size > 100) {
//     console.log('Big');
// } else if (size > 20) {
//     console.log('Medium');
// } else if (size > 4) {
//     console.log('Small');
// } else {
//     console.log('Tiny');
// }

// Arrow function with two arguments
// let sum = (firstParam, secondParam) => {
//     return firstParam + secondParam;
// };
// console.log(sum(2,5))

//Arrow function with no arguments
// let printHello = () => {
//     console.log('hello');
// };
// printHello();

//Arrow function with a single argument
// let checkWeight = weight => {
//     console.log(`Baggage weight : ${weight} kilograms.`);
// };
// checkWeight(25);

//concise arrow function
// let multiply = (a, b) => (a * b);
// console.log(multiply(2,30)); 

// Functions
// function sum (num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(3,6));

// function rockeToMars() {
//     return 'BOOM!';
// }
// console.log(rockeToMars());

// let rockeToMars = function () {
//     return 'BOOM';
// }
// console.log(rockeToMars());

// let dog = function () {
//     return 'Woof!';
// }
// console.log(dog());

// The parameter is nam
// function sayHello(name) {
//     return `Hello, ${name}!`;
// }
// console.log(sayHello());

// function sum(num1 , num2 ) {
//     return num1 + num2;
// }
// console.log(sum(1,2))

// function add(num1 , num2) {
//     return num1 + num2;
// }
// console.log(add(1,4));

// function sum (num1 , num2) {
//     return num1 + num2;
// }
// console.log(sum(2,4));

// function myFunction () {
//     let pizzaName = "Volvo";
//     console.log(pizzaName);
// }
// myFunction();

//Block Scoped Variables
//Not Working
// let isLoggedIn = true;
// if (isLoggedIn == true) {
//     let statusMessage = 'User is logged in.';
// }
// console.log(statusMessage);

// let color = 'blue';
// function printColor() {
//     console.log(color);
// }
// printColor();

// let numbers = [1, 2, 3, 4];
// console.log(numbers.length);

// let myArray = [100, 200, 300];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// let cart = ['apple', 'orange'];
// cart.push('pear');
// console.log(cart);
// let numbers = [1, 2];
// numbers.push(3, 4, 5);
// // console.log(numbers);

// let ingredients = ['egg', 'flour', 'chocolate'];
// let popedIngredient = ingredients.pop();
// console.log(ingredients);

// let name = ['Alice', 'Bob'];
// name.push('carl');
// console.log(name);

// let numberArray = [0, 1, 2, 3];
// let mixedArray = [1, 'chicken', false];
// console.log(numberArray);
// console.log(mixedArray);

// Just example while (condition) {} 
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let item = ['apricot' , 'banana', 'cherry'];
// for (let i = item.length -1 ;i >=0 ; i -=1 ) {
//     console.log(`${i}, ${item[i]}`);
// }

// x = 0
// i = 0
// do {
//     x = x + i;
//     console.log(x);
//     i++;
// } while (i < 5);

// for (let i =0 ; i < 4  ; i+= 1 ) {
//     console.log(i);
// };

//Not Working
// for (let i = 0 ; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let i = 0 ; i < 99; i+= 1) {
//     if (i > 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let outer = 0 ; outer < 2 ; outer += 1) {
//     for (let inner = 0 ; inner < 3 ; inner += 1) {
//         console.log(`${outer}-${inner}`);
//     }
// }

//Not Working
// let plusFive = (number) => {
//     return number + 5;
// };
// let f = plusFive;
// plusFive(3);
// f(9);

// let isEven = (n) => {
//     return n % 2 == 0;
// }
// let printMsg = (evenFunc, num) => {
//     let isNumEven = evenFunc(num);
//     console.log(`The number ${num} is an even number: ${isNumEven},`)
// }
// printMsg(isEven, 4);

//Working but Nothing
// let originalFunc = (num) => { return num + 2};
// let newFunc = originalFunc;
// newFunc.name;
// newFunc.toString();
// newFunc.isMathFunction = true;
// let functionNameLength = (func) => {
//     return func.name.length
// };
// functionNameLength(originalFunc);
// let returnFunc = () => {
//     return newFunc
// };
// returnFunc();

// let arrayOfNumbers = [1, 2, 3, 4];
// let sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(sum);

// let numbers = [28, 77, 45, 99, 27];
// numbers.forEach(number => {
//     console.log(number);
// });

// let randomNumbers = [4, 11, 42, 14, 39];
// let filteredArray = randomNumbers.filter(n => {
//     return n > 5;
// })
// console.log(filteredArray);

// let finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// let announcements = finalParticipants.map(member => {
//     return member + ' Joined the contest.';
// })
// console.log(announcements);

//Wrong Code not Working
// let trainSchedule = {
//     platform num : 10,
//     40 - 10 + 2: 30,
//     +Comparttment: 'C'
// }

// let apple = { 
//     color: 'Green',
//     price: {
//         bulk: '$3/kg',
//         smallQty: '$4/kg'
//     }
// };
// console.log(apple.color);
// console.log(apple.price.bulk);

// let classElection = {
//     data: 'Januart 12'
// };
// console.log(classElectio.place);

// let student = {
//     name: 'Sheldon',
//     score: 100,
//     grade: 'A'
// }
// console.log(student);
// delete student.score
// student.grade = 'F'
// console.log(student)
// student = {}

// let mobile = {
//     brand: 'Samsung',
//     model: 'Galaxy Note 9'
// };
// for (let key in mobile) {
//      console.log(`${key}: ${mobile[key]}`);
// }

// let classof2018 = {
//     students: 38,
//     year: 2018
// }
// console.log(classof2018);

// let person = {
//     firstName: "Matilda",
//     age: 27,
//     hobby: "knitting",
//     goal: "learning JavaScript"
// };
// delete person.hobby;
// console.log(person);

// let origNum = 8;
// let origObj = {color: 'blue'};
// let changeItUp = (num, obj) => {
//     num = 7;
//     obj.color = 'red';
// };
// changeItUp(origNum, origObj);
// console.log(origNum);
// console.log(origObj.color);

// let engine = {
//     start(adverb) {
//         console.log(`The engine starts up ${adverb}...`);
//     },
//     sputter: () => {
//         console.log('The engine sputters...');
//     },
// };
// engine.start('noisilt');
// engine.sputter();

// let rubiksCubeFacts = { 
//     possiblePermutations: '43,252,003,274,489,856,000',
//     invented: '1974',
//     largestCube: '17x17x17'
// };
// let {possiblePermutations, invented , largestCube} = rubiksCubeFacts;
// console.log(possiblePermutations);
// console.log(invented);
// console.log(largestCube);

// let activity = 'Surfing';
// let beach = { activity };
// console.log(beach);

// let cat = {
//     name: 'Pipey',
//     age: 8,
//     whatName() {
//         return this.name
//     }
// };
// console.log(cat.whatName());

// let restaurant = {
//     numCustomers: 45,
//     seatCapacity: 100,
//     availableSeats() {
//         return this.seatCapacity - this.numCustomers;
//     }
// }
// console.log(restaurant);

// let myObj = {
//     data: 'abc',
//     loggerA: () => { console.log(this.data);},
//     loggerB() {console.log(this.data);},
// };
// myObj.loggerA();
// myObj.loggerB();

//Work but show nothing
// let myCat = {
//     _name: 'Snickers',
//     get more(){
//         return this._name
//     },
//     set name(newName){
//         if(typeof newName === 'string' && newName.length > 0){
//             this._name = newName;
//         } else {
//             console.log("ERROR: name must be a non-empty string");
//         }
//     }
// }

//Work but show nothing
// let dogFactory = (name, age, breed) => {
//     return {
//         name: name,
//         age: age,
//         breed: breed,
//         bark() {
//             console.log('Woof!');
//         }
//     };
// };

// let myCat = {
//     _name: 'Dottie',
//     get name() {
//         return this._name;
//     },
//     set name(newName) {
//         this._name = newName;
//     }
// };
// console.log(myCat.name);
// myCat._name = 'Yankee';

// Coding Challenge Review

// # Return "Hello World" from hello function.
// function hello() {
//     return 'Hello World';
// }
// console.log(hello());

// # Create a function that takes two numbers as arguments and returns their sum.
// function addition(num1 , num2) {
//     return num1 + num2;
// }
// console.log(addition(3,2));

// # Create a function that takes a numbers as its only aargument and returns true if
// it's less than or equal to zero, otherwise return false.
// function lessThanOrEqualToZero (a) {
//     if ( a <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// } 
// console.log(lessThanOrEqualToZero(5));

// # Create a function that returns true when num1 is equal to num2; otherwse return false.
// function isSameNum (a , b) {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isSameNum(2,2));

// # Create a function that make takes a number as an argument. Add up all the numbers
// from 1 to the number you passed to the function. For example, if the input is 4
// then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// function numbers (a) {
//     let sum = 0;
//     for (let i = 1 ; i <= a ; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(numbers(4))

// # Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
