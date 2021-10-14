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

console.log(objectOne.friends.length);

// Het werkt omdat je vraagt om de lengte van de array van objectone
