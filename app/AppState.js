import { Character } from './models/Character.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {




  // REVIEW Step 2 - Create a collection of your data
  characters = [
    new Character('Slate Slabrock', 'Dwarf', 'Fighter', 5),
    new Character('Flint Swiftstick', 'Elf', 'Ranger', 5),
    new Character('Thudd', 'Ogre', 'Barbarian', 7)
  ]





  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())

// REVIEW Step 3 - look at your data in the console
console.table(AppState.characters)