let firstName = prompt("Enter your first name: ")
let lastName = prompt("Enter your last name: ")

let fullName = firstName.concat(lastName)

i = 0
while (i < fullName.length) {
  console.log(`Letter ${i+1} is: ${fullName[0+i]}.`)
  i++
  }