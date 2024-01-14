const greetFun = new Function(`name, email`,
  `
  const fName = name.split(' ')[0];
  console.log("Hello,", fName, "Is this your email? ",email);
  console.log("Yes it's mine");
  `
);

greetFun('saifur rahman', 'sr018695@gmail.com');