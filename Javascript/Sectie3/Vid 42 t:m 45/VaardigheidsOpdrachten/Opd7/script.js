const objectOne = {
  firstName: "Piet",
  lastName: "Janssens",
  job: "Fighter",
  birthYear: 2000,
  getAge: function (name, job) {
    if (!this.age) this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};

console.log(objectOne.getAge());

// De name, en job worden in de functie niet gebruikt dus die moeten weg.