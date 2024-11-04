import { AppState } from "../AppState.js";


// REVIEW Step 6 - Change the data in your service
class CharactersService {
  increaseOrder(characterName) {
    console.log('service time', characterName);
    // change takes place
    // NOTE passing the name, down, we can use it to find the original, in our appstate
    const clickedCharacter = AppState.characters.find(char => char.name == characterName)
    clickedCharacter.order++
    console.log('clicked on ', clickedCharacter); // NOTE after the data changes, don't forget to draw again
  }
}

export const charactersService = new CharactersService()