let firstName = prompt('What is your name?')

let state = prompt('What state are you in?')
state = state.toUpperCase()

let temp = prompt('What is the temperature in Fahrenheit?')

let messages = ['wear a warm coat, hat, scarf and gloves', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

switch(true) {
  case (temp < 32 && state == 'NE'):
    console.log(`${firstName}, ${messages[0]}`)
    break
  case (50 > temp && temp >= 32 && state == 'NE'):
    console.log(`${firstName}, ${messages[0]}`)
    break
case (50 > temp && temp >= 32 && state == 'FL'):
    console.log(`${firstName}, ${messages[0]}`)
    break
case (70 > temp && temp > 50 && state == 'FL'):
    console.log(`${firstName}, ${messages[0]}`)
    break
}