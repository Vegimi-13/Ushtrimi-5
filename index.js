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




//dETYRA 6

let min = 1;
let max = 10;0
let numriRastesishem = Math.floor(Math.random() * (max - min + 1)) + min;


if(numriRastesishem > 50){
    console.log("Numri me i madh se 50");
}else if(numriRastesishem <50){
    console.log("Numri me i vogel se 50");
}else{
    console.log("Numri i barabarte me 50")
}


// detyra 7


let numri = 10;

if(numri > 0){
    console.log("Numri eshte pozitiv");
}else{
    console.log("Numri eshte negativ");
}



let temperatura = 20;


if(temperatura > 30){
    console.log("Moti është shumë i nxehtë.");
}else if(temperatura >=20  && temperatura <30){
    console.log("Moti është i ngrohtë.");
}else if(temperatura >10 && temperatura<=19){
    console.log("Moti eshte i fresket");
}else if(temperatura <=10){
    console.log("Moti eshte i ftohte");
}









