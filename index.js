let emri1 = "Vegim";
let emri2 = "Arber";
let emri3 = "Erion";
let emri4 = "James";
let emri5 = "Bond";



let emriconcat = emri1.concat(emri2,emri3,emri4,emri5);
console.log(emriconcat);



// Detyra 2


let numri1 = 1;
let numri2 = 2;
let numri3 = 3;
let numri4 = 4;
let numri5 = 5;


let mesatarja = (numri1+numri2+numri3+numri4+numri5)/5;
console.log("Mesatarja eshte " + mesatarja)


// Detyra 4

let qyteti1 = "Istog";
let qyteti2 = "Peja";
let qyteti3 = "Prishtina";

let emriMeIgjate = qyteti1;


if(qyteti2.length > emriMeIgjate.length){
    emriMeIgjate = qyteti2;
}

if(qyteti3.length > emriMeIgjate.length){
    emriMeIgjate = qyteti3;
}

console.log( "Emri me i gjate eshte: " + emriMeIgjate);




//Detyra 5


let nota1 = 1;
let nota2 = 2;
let nota3 =3;
let nota4 = 4;

let performanca = "";

let average = (nota1+nota2+nota3+nota4) /4;


if(average >= 4.5){
    performanca = "Shkelqyeshem";
}else if(average>=3.5){
    performanca = "i mesem";
}else{
    performanca = "I ulet";
}

console.log("Perfomanca eshte: " + performanca)













