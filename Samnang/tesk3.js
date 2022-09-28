// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations!
// Remember: BMI = mass / height ** 2 = mass / (height * height).
// (mass in kg and height in meter)

// 1. For each of them, create an object with properties
// for their full name, mass, and height (Mark Miller and John Smith).
// 2. Create a 'calcBMI' function and also return BMI from the function.
// 3. Log to the console who has the higher BMI,together with the full name and the repective BMI 
// Example "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Mark weights 78 kg and is 1.69 meters tall. John weights 92 kg 
// and is 1.95 meters tall.

let mark= {
    fullname    : "Mark Miller",
    height      : 1.69,
    mass        : 78,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }
    };
let john= {
    fullname    : "John Smith",
    height      : 1.95,
    mass        : 92,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi,john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`)    
} else if (john.bmi > mark.bmi ){
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`)
}