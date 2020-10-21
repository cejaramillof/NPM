const messages = [
  "Tyrone",
  "Carlos",
  "Ana",
  "Nicolay",
  "Yesica",
  "Diego",
  "Laura",
  "Rodrigo"
];

const randomMsg = () => {
  const message = messages[
    Math.floor(
      Math.random() * messages.length
    )
  ];
  console.log(message);
};

module.exports = { randomMsg };