const password = "Hello123!";

let score = 0;

// Check password length
if (password.length >= 8) {
  console.log("Good length");
  score++;
} else {
  console.log("Password too short");
}

// Check if password has uppercase letters

let hasUppercase = false;

for (let i = 0; i < password.length; i++) {
  let bit = password[i];

  if (bit === bit.toUpperCase() && bit == !bit.toLowerCase()) {
    hasUppercase = true;
    break;
  }
}

if (hasUppercase) {
  console.log("Contains uppercase");
  score++;
} else {
  console.log("No uppercase letter");
}

// Check lowercase letters

let hasLowercase = false;

for (let i = 0; i < password.length; i++) {
  let bit = password[i];

  if (bit === bit.toLowerCase() && bit == !bit.toUpperCase()) {
    hasLowercase = true;
    break;
  }
}
if (hasLowercase) {
  console.log("Contains lowercase");
  score++;
} else {
  console.log("no lowwercase letter");
}

// Check numbers

let hasNumbers = false;

for (let i = 0; i < password.length; i++) {
  let bit = password[i];

  if (bit === "/[0-9]/") {
    hasNumbers = true;
    break;
  }
}

if (hasNumbers) {
  console.log("Contains number");
  score++;
} else {
  console.log("no numbers");
}

// // Check special characters
// if () {
//   console.log('Contains special character')
//   score++
// } else {
//   console.log('No special character')
// }

// // Final password strength
// if (score <= 2) {
//   console.log('Weak Password')
// } else if (score <= 4) {
//   console.log('Medium Password')
// } else {
//   console.log('Strong Password')
// }
