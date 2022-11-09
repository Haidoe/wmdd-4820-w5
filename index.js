// tool4OutputArea
const ageOfMajority = 19;

let myAge;

const myArr = [
  {
    drink: "Diet Coke",
    size: "20oz",
    ageRestricted: 0,
  },
  {
    drink: "Vodka",
    size: "24oz",
    ageRestricted: 1,
  },
  {
    drink: "Orange Soda",
    size: "20oz",
    ageRestricted: 0,
  },
  {
    drink: "Beer",
    size: "8oz",
    ageRestricted: 1,
  },
  {
    drink: "Root Beer",
    size: "20z",
    ageRestricted: 0,
  },
];

for (item of myArr) {
  console.log(item.drink);
}

displayInfo.addEventListener("click", () => {
  //Resets
  tool4OutputArea.style.color = "#000";
  tool4OutputArea.innerHTML = "";

  myAge = userAge.value;

  //Check if the number is valid
  //Check if it has no decimal
  if (myAge % 1 !== 0) {
    output = "Please enter a valid number";

    tool4OutputArea.innerHTML = output;
    tool4OutputArea.style.color = "red";
    //End of the event
    return;
  }

  myAge = parseInt(myAge);

  let result = myArr.filter((item) =>
    ageOfMajority <= myAge ? true : item.ageRestricted === 0
  );

  const display = result.map((item) => `${item.drink}(${item.size})`);

  tool4OutputArea.innerHTML = `
    <b>Drinks Available for you:</b> <br /><br />
    ${display.join("<br />")}
  `;
});

const soda = myArr.find((item) => item.drink === "Orange Soda");
console.log(soda.drink);
