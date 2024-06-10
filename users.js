class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compAge(uToComp) {
    if (this.age > uToComp.age) {
      return `${this.firstName} ${this.lastName} è più grande di ${uToComp.firstName} ${uToComp.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName} è più giovane di ${uToComp.firstName} ${uToComp.lastName}`;
    }
  }
}

/* crea istanze */

const u1 = new User("Rolando", "Bianchi", 40, "Roma");
const u2 = new User("Paolo", "Rossi", 60, "Milano");
const u3 = new User("Simone", "Verdi", 30, "Torino");
console.log(u1);
console.log(u2);

console.log(u2.compAge(u1));

//////////////////////////////////////////////////////
/* ESERCIZIO 2 */

const petList = [];
console.log(petList);
/* Definisco struttura oggetto */
class Pets {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  compareOwner(pet2) {
    if (this.ownerName === pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const showList = function () {};

/* FORM */

const form = document.querySelector("form");
console.log(form);

form.onsubmit = function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  /* CREO OGGETTO */

  let pet = new Pets(petName, ownerName, species, breed);

  petList.push(pet);
  form.reset();
  /* INSERISCI IN OGGETTO */
};

/* class Pets {
    constructor()
} */
