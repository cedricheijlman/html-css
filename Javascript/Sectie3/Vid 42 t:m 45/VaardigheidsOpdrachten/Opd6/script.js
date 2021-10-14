const objectOne = {
  firstName: "Bob",
  lastName: "borrel",
  job: "Fighter",
  birthYear: 2000,
  drieProperties: function () {
    return `${this.firstName}, ${this.lastName}, ${this.job}`;
  },
};

console.log(objectOne.firstName, objectOne.lastName, objectOne.job);
console.log(objectOne.drieProperties());
