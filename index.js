const password = 'Hello123!'

let score = 0

// Check password length
if (password.length >= 8) {
  console.log('Good length')
  score++
} else {
  console.log('Password too short')
}

// Check uppercase letters
if () {
  console.log('Contains uppercase')
  score++
} else {
  console.log('No uppercase letter')
}

// Check lowercase letters
if () {
  console.log('Contains lowercase')
  score++
} else {
  console.log('No lowercase letter')
}

// Check numbers
if () {
  console.log('Contains number')
  score++
} else {
  console.log('No number found')
}

// Check special characters
if () {
  console.log('Contains special character')
  score++
} else {
  console.log('No special character')
}

// Final password strength
if (score <= 2) {
  console.log('Weak Password')
} else if (score <= 4) {
  console.log('Medium Password')
} else {
  console.log('Strong Password')
}