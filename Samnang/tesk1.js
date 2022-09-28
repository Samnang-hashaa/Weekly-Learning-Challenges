//Mark and john are tying to compare their BMI (body mas Index),
//which is calculated using the formula:BMI =mass / (height*height).
//Mass(mass in kg , height in metter)

//1.Store Mark's and John's mass and height in varibles
//2.Calculate both their BMIs using formula (you can even implement both versions)
//3.Create a boolean variable 'markhigherBMI' containing information about whether 
//  Mark has a higher BMI than John.

//Test Data 1:Marks weights 78kg and is 1.69 m tall.John weight 92kg and is 1.95m tall.
//Test Data 2:Marks weights 95kg and is 1.88 m tall.John weight 85kg and is 1.176m tall.
let Markheight=prompt("What is Mark's height? ");
let MarkMass=prompt("What is Mark's mass?");
let Johnheight=prompt("What is John's height?")
let JohnMass=prompt("What is John's mass?")

let MarkBMI= MarkMass / (Markheight * Markheight);
let JohnBMI= JohnMass / (Johnheight * Johnheight);

let markhigherBMI= MarkBMI>JohnBMI;

console.log(MarkBMI,JohnBMI);

if(MarkBMI > JohnBMI){
    console.log(" Mark's"+MarkBMI+" is bigger than John");
  }
  else {
    console.log("John's "+JohnBMI+" is bigger than Mark");
  }

  

    