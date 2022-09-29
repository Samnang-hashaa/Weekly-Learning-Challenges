// function printName(person: {
//         first:string; 
//         last:string;}
//     ){
//     console.log(`${person.first} ${person.last}`);
// }

// printName({first:"Thomas",last:"Jenkins"});

// let coordinate: {x: number; y: number} = { x:34, y:2};

// function randomCoordinate():{x:number, y:number} {
//     return {x: Math.random(),y:Math.random()};
// }

// printName({first:"Nara", last:"Vin",age: 123})
// let singer={first:"Nara", last:"Vin",age:123, isAlive: true}
// printName(singer)

//type Alias
// type Point ={
//     x:number;
//     y:number;
// }

// let coordinate: Point = { x: 34, y: 2};

// function randomCoordinate():{x:number, y:number} {
//     return {x: Math.random(),y:Math.random()};
// }

// function doublePoint(point:Point):
// Point {
//     return { x: point.x *2, y: point.y*2};
// }

//Nested Objects
// type Song ={
//     title: string;
//     artist: string;
//     numStreams: number;
//     credit: { producer: string; writer:string};
// }

// function calculatePayout(song:Song): number{
//     return song.numStreams*0.0033;

// }
// function printSong(song: Song):void{
//     console.log(`${song.title}-${song.artist}`)
// }
// const mySong : Song ={
//     title:"Unchained Melody",
//     artist:"Righteous Brothers",
//     numStreams: 128231232,
//     credits:{
//         producer:"Phil Spector",
//         writer:"Alex North",    
//     }
// }
// let earings:number = calculatePayout(mySong);
// console.log(earings);
// printSong(mySong);

//Intersection Types

type Circle ={
    radius : number;
};

type Colorful={
    color: string;
}

type ColorfulCircle= Circle & Colorful;

const happyFace: ColorfulCircle ={
    radius:4,
    color:"yellow",
};

type Cat={
    numLives: number
};

type Dog ={
    breed: string
};

type CatDog = Cat & Dog &{
    age:number;
};

const christy: CatDog ={
    numLives:7,
    breed:"Husky",
    age:9 
}