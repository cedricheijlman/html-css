const objectOne = {
  name: "Piet Janssens",
  job: "teacher",
  birthYear: 2000,
  age: 20,
  woonPlaats: "almere",
};

const objectTwo = {
  name: "Cedric",
  job: "student",
  birthYear: 2005,
  age: 16,
  woonPlaats: "almere",
};

function leeftijd() {
  console.log(objectOne.age, objectTwo.age);
}

function oudstePersoon() {
  if (objectOne.age > objectTwo.age) {
    console.log(objectOne.name);
  } else {
    console.log(objectTwo.name);
  }
}

function almereCheck() {
  let almere = "";
  if (objectOne.woonPlaats.includes("almere")) {
    almere += `${objectOne.name} `;
  }

  if (objectTwo.woonPlaats.includes("almere")) {
    almere += objectTwo.name;
  }

  console.log(almere);
}

leeftijd();
oudstePersoon();
almereCheck();
