console.log('Hello, Welcome to De La Salle University!');

function computeSupply(age, amountPerDay) {
  const maxAge = 100;
  const amountPerYear = amountPerDay * 365.25;
  const yearsRemaining = maxAge - age;
  const amountRequired = amountPerYear * yearsRemaining;
  const roundedAmountRequired = Math.round(amountRequired);
  console.log(`You need ${roundedAmountRequired} to last you until the ripe old age of ${maxAge}`);
}

// Example calls to the computeSupply function
computeSupply(25, 2.5); // You need 6892 to last you until the ripe old age of 100
computeSupply(40, 1.8); // You need 2560 to last you until the ripe old age of 100
computeSupply(60, 0.5); // You need 7305 to last you until the ripe old age of 100
