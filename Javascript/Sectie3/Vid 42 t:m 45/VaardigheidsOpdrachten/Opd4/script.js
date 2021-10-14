const objectOne = {
  firstName: "Henk",
  lastName: "de Vries",
  age: 2021 - 1988,
  job: "teacher",
  friends: ["Koe", "Vos"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

objectOne.nummerAcht = 8;

console.log(objectOne.nummerAcht);
