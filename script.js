
let a = prompt('Ваше имя?')
    let b  = a.slice(0,1).toUpperCase()+a.slice(1)
    
console.log(b)


//Первая часть кода 

function rNd(max,min){
   return Math.max(2,5) 

   
}
console.log(rNd());

function mNd(max,min){
    return Math.max(3,-1) 
 
    
 }
 console.log(mNd());

 function kNd(max,min){
    return Math.max(1,1) 
 
    
 }
 console.log(kNd());

 // Вторая часть кода
let two = 7;
let one = 1;
 function getRandom(){
     return Math.floor(Math.random() * (two - one) + one);
    
 }
 console.log(getRandom());

 function getRandom(){
    return Math.floor(Math.random() * (two - one) + one);
    
}
console.log(getRandom());

// Игральные кости

let randomNum = Math.round(Math.random());
if(randomNum == 0){
    console.log('orel')
}
else{
    console.log('reshka')
}
// Орел или решка


let y = prompt('Ваше число');
let l = 1
function randomY(){
    return Math.floor(Math.random() * (y - l) + l);
}
console.log(randomY());

Случайное число

let v = prompt('Введите первое число');
let p = prompt('Введите второе число');

function twoNum(){
    
    
         return Math.floor(Math.random() * (p - v) + v) ;
    
         
    
}
for( let i=0;i<10;i++)
console.log(i);
console.log(twoNum());


