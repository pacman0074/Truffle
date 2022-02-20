var prenom = 'Archibald';

function afficher() {
  console.log('prenom vaut ' + this.prenom);
}

function f1(){
    return this;
}

function f2(){
    "use strict"; // on utilise le mode strict
    return this;
}
  
console.log(f2()); // undefined

console.log(f1().toString()); // [object global]
console.log(this.toString()); // [object Object]
afficher.call(); // prenom est Archibald