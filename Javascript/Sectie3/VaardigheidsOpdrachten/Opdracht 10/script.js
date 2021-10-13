const nameCheck = (name) => {
  switch (name) {
    case "Jorn":
      return "great";
    default:
      return "okish";
  }
};

const money = (money) => money * 2;

const sentence = (name, salary) => {
  const wordOne = nameCheck(name);
  const wordTwo = money(salary);
  console.log(
    `The name is ${name} and I'm ${wordOne} and my salary is ${wordTwo} and it just got doubled!`
  );
};

sentence("Jorn", 3000);
