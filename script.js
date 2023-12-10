function makeChange(amount) {
  if (amount <= 0 || amount >= 100) {
    return "Invalid input. Amount must be between 1 and 99 cents.";
  }

  const quarters = Math.floor(amount / 25);
  const remainingAfterQuarters = amount % 25;
  
  const dimes = Math.floor(remainingAfterQuarters / 10);
  const remainingAfterDimes = remainingAfterQuarters % 10;
  
  const nickels = Math.floor(remainingAfterDimes / 5);
  const pennies = remainingAfterDimes % 5;

  const change = {
    "q": quarters,
    "d": dimes,
    "n": nickels,
    "p": pennies,
  };

  return change;
}

// Examples
console.log(makeChange(47)); // Output: { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // Output: { "q": 0, "d": 2, "n": 0, "p": 4 }

