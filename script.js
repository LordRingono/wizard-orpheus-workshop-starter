var myGame = new WizardOrpheus('', `You are a dwarf in the untiverse of D&D. You are fighting a hord of dark mages and necromancers. You are with other heroes who fight alongside you. If you are able to defeat your enemies, you arrive in a city where you find the demon chtulu. Chtulu is an ancient god of the underworld. He is your true opponent and the sake of the world lie in your hands. You must defeat him and save the world.
`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})
myGame.variable('HP', 'Current health. player starts with 100. If equal or below 0, player die.', 100)
myGame.variable('SP', 'Current stamina. player starts with 100. If equal or below 0, player must rest.', 100)
myGame.botAction('respond', 'Send a text response to the user', { message: 'What happened. Update HP if player got attacked (-) or healed (+). update SP if player moved (-) or rested (-).' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('HP').innerHTML = data.currentVariables.HP.value

document.getElementById('SP').innerHTML = data.currentVariables.SP.value
})