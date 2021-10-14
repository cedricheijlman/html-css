const objectOne = {
  firstName: "Henk",
  lastName: "de Vries",
  job: "Fighter",
  getJobAndName: function () {
    return `My name is ${this.firstName} ${this.lastName} and I am a ${this.job}.`;
  },
};

console.log(objectOne.getJobAndName());
