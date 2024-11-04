


// REVIEW Step 4 - create your controller

import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharactersService.js";

// NOTE the controller will host all actions for characters, bundles them and exports them together
export class CharactersController {
  constructor() {
    // NOTE the controllers constructor runs when the app loads
    console.log('Ready to Roll🎲');
    this.drawCharacters()
  }

  // REVIEW Step 5 - Draw the data

  drawCharacters() {
    let charsElm = document.getElementById('characters')
    charsElm.innerHTML = ''
    for (let i = 0; i < AppState.characters.length; i++) {
      const character = AppState.characters[i]
      charsElm.innerHTML += `
      <p>${character.name}|| ${character.order}
      <button 
      onclick="app.CharactersController.increaseOrder('${character.name}')" class="btn btn-outline-primary">+ order</button>
      </p>`
    }
  }
  // REVIEW Step 6 - Add interaction

  increaseOrder(characterName) {
    console.log("chagning order", characterName)
    charactersService.increaseOrder(characterName)
    this.drawCharacters()
  }


  // these are examples you don't need to make these
  killCharacter() {

  }

  reviveCharacter() {

  }

  createNewCharacter() {

  }
}