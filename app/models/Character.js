
let slateSlabRock = {
  name: 'Slate Slabrock',
  race: 'Dwarf',
  class: 'Fighter',
  level: 5,
  order: 2
}
let flint = {
  name: 'Flint ironswift',
  species: 'Elf',
  class: 'Ranger',
  lvl: 5,
  initiative: 1
}

// REVIEW STEP 1, start with the data you want to work with. Imagine your model and the members it might need
export class Character {
  constructor(name, race, classType, level) {
    // NOTE this means "THIS" instance, this one character, not all characters
    this.name = name
    this.race = race.toUpperCase() // we can transform the data as it comes in
    this.class = classType // parameters don't need to match with class members
    this.level = level
    this.order = Math.round(Math.random() * 20) // we can completely make it up too
  }

  // NOTE classes can have Methods (functions)
  roleCall() {
    if (this.race == 'DWARF') {
      console.log(`${this.name}, Good to meet 'ya, Ima' ${this.class}`)
    } else {
      console.log(`Hail, I am ${this.name}, the ${this.class}`)
    }
  }
}