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

/* FORM */

const form = document.querySelector("form");
console.log(form);

form.onsubmit = function (e) {
  e.preventDefault();
  const formData = new formData(form);

  /* ASSEGNA DATI FORM */

  const petName = formData.get("petName");
  const ownerName = formData.get("ownerName");
  const species = formData.get("species");
  const breed = formData.get("breed");

  class Pets {
    constructor(/* template literals? */)
  }

};

/* class Pets {
    constructor()
} */
