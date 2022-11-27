
/*EX 1.0
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
*/

/*EX 1.1*/
let firstName = "Mathilde";

console.log(firstName);


/*let name = 'Mathilde';
let firstName = 'Cornelis';
let city = 'Ransart';
console.log("Your name is "+name+' '+firstName+' and you live in '+city+'.');*/

/*EX 2.1
let age = prompt("Enter your age here.");

if (age >= 18){
    console.log("You are an adult");
}
*/

/*EX 2.2
let min = prompt("min");
let max = prompt("max");
let current = prompt("current");

if ((min <= current) && (max >= current)){
   console.log(current);
}
if (min>max){
    alert("Unfortunately the answer entered does not match.");
}
*/

/*EX 2.3
let nbre = 0;

for(i=1; i<50; i=i+2){
    nbre = i;
    console.log(nbre);
}

let i = 0;

while (i < 100) {
    i++;
    if ((i%2) == 0){
        console.log(i);
    };
}
*/

/*EX 2.4
let n = 1;

while (n <= 100) {
    console.log(n);
    n += 1;
    if (n%2 == 0){
        console.log(n/2);
    };
    if (n%2 != 0){
        console.log(n*3);
    };
}
*/

/*EX 2.5

while (prompt("Enter your preferred number here.") != 42){
    console.log('Are you sure?');
};
*/

/*EX 2.6
let jour = prompt('Enter a number between 1 and 7.');
if (jour == 1){
    console.log('Lundi');
};
if (jour == 2){
    console.log('Mardi');
};
if (jour == 3){
    console.log('Mercredi');
};
if (jour == 4){
    console.log('Jeudi');
};
if (jour == 5){
    console.log('Vendredi');
};
if (jour == 6){
    console.log('Samedi');
};
if (jour == 7){
    console.log('Dimanche3');
};
*/

/*EX 2.7
let n = prompt('Enter a number.');
let o = parseInt(prompt ('Enter a number.'));
let p = parseInt(prompt ('Enter a number.'));
let q = parseInt(prompt ('Enter a number.'));
console.log (o+p+q)
*/

/*EX 3.0
const array= ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
for (const element of array) {
    console.log(element);
}
*/

/*EX 3.1
function sumArray(array){
    let sum = 0
    for (let i = 0; i < array.length; i += 1) {
    sum += array[i]
    }
    console.log(sum)
    return sum
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

/*EX 3.2
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);
*/

/*EX 3.3
const array = ["apple", "peach", "stawberrie", "cherry", "banana", "pear", "melon"]; 
const array2 = [...array];
array.push("orange");
console.log(array);
console.log(array2);

const array3 = ["apple", "peach", "stawberrie", "cherry", "banana", "pear", "melon"]; 
const array4 = [];
array2.push("apple", "peach", "stawberrie", "cherry", "banana", "pear", "melon");
console.log(array3);
console.log(array4);
*/

/*EX 3.4
let arrayOfNumbers = [4, 122, 62, 1, 70, -40];
console.log(Math.max(...arrayOfNumbers));
console.log(Math.min(...arrayOfNumbers));
*/

/*EX 4.1
let a = parseInt(prompt('Length of the rectangle.'));
let b = parseInt(prompt('Witdh of the rectangle.'));
function calcSurface(a, b) {
    return a * b;
}
console.log("The multiplication is " + parseInt(calcSurface(a, b)));
*/

/*EX 4.2
function rand10() {
        return Math.floor(Math.random() *10) + 1;
}
console.log(rand10());
*/

/*EX 4.3
function rand10() {
    return Math.floor(Math.random() *10) + 1;
}
function multiRand(n) {
    let arr =[];
    for (let i=1; i<=n; i++) {
        arr.push(rand10())
    }
    return arr
}
let n = prompt('How many random numbers do you want to generate')
console.log(multiRand(n));

1) la fonction rand10() génère aléatoirement des chiffres de 1 à 10.
2) la fonction multiRand(n) génère aléatoirement n chiffres.
    2.1) let arr = [] crée un tableau.
    2.2) for (let i=1; i<=n; i++){} initialise la variable i avec une valeur de 1, lui donne une condition et une incrémentation.
        2.2.1) arr.push(rand10()) injecte la variable i dans la fonction rand10.
    2.3) return arr arrête la fonction
3) let n = prompt('How many random numbers do you want to generate') demande combien de nombre le programme doit générer.
4) console.log(multiRand(6)) affiche dans la console la fonction multirand() avec un nombre de répétitions donné. 
*/

/*EX 4.4
let inputAr= ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];
let n = prompt('Enter a number between 1 and 23')

function pickLearner(inputAr, n) {  
    let arr = []
    for (i=1; i<=n; i++){
        arr.push(inputAr[Math.floor(Math.random() *24)]);
    };
    return arr
}
console.log(pickLearner(inputAr, n))
*/

/*EX 4.5
let x1 = prompt('The latitude of A');
let x2 = prompt('The longitude of A');
let y1 = prompt('The latitude of B');
let y2 = prompt('The longitude of B');
function calcDistance (x1, x2, y1, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt((x * x) + (y * y));
};
console.log('The difference between A and B is ' + calcDistance (x1, x2, y1, y2));
*/

/*EX 4.6
let a = prompt('Enter a number.');

function factorial(a){
    let answer = 1;
    if (a == 0 || a == 1){
      return answer;
    }else{
      for(var i = a; i > 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  console.log("The factorial of " + a + " is " + factorial(a));
  */

/*EX 5.1
function askTvSerie() {
    let mySerie = {
        name : prompt('Enter the name of your favorite TV serie.'),
        year : prompt('Enter the year of your favorite serie.'),
        cast : []
    }
    let choose = true;
    while (choose) {
        let useradd = prompt ('Enter cast members names.');
        choose = useradd.length !== 0;
        if(choose){
            mySerie.cast.push(useradd);
        }
    }
    return mySerie;
}
console.log(JSON.stringify(askTvSerie()));
*/

/*EX 5.2
function askTvSerie() {
    let mySerie = {
        name : prompt('Enter the name of your favorite TV serie.'),
        year : prompt('Enter the year of your favorite serie.'),
        castmember : []
    }
    let choose = true;
    while (choose) {
        let useradd = prompt ('Enter cast members names.');
        choose = useradd.length !== 0;
        if(choose){
            mySerie.castmember.push(useradd);
        }
    }
    return mySerie;
}

function randomizeCast(tvSerie){
    let cast = tvSerie.castmember;
    for (let i=0; i< cast.length; i++){
        let temp = cast[i];
        let randIndex = Math.floor(Math.random() * cast.length)
        cast[i] = cast[randIndex]
        cast[randIndex] = temp
    }
    return cast; 
}

console.log(randomizeCast(askTvSerie()));
*/

/*EX 6.1
class Circle{
    constructor(xPas, yPas, radius){
        this.xPas = xPas;
        this.yPas = yPas;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPas += xOffset;
        this.yPas += yOffset;
    }
    get surface(){
        return this.radius * this.radius * Math.PI;
    }
}

let circle1 = new Circle(12, 24, 2);
circle1.move(1, 0);
console.log(`x : ${circle1.xPas}\ny : ${circle1.yPas}\nsurface : ${circle1.surface}`);
*/