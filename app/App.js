import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { AppState } from './AppState.js';
import { CharactersController } from './controllers/CharactersController.js';
const USE_ROUTER = false
// REVIEW Step 5 - Register the controller with the app

// NOTE App's purpose is to act as the entry point into our code. It collects all of our controllers (The layer that interacts with the DOM) and adds them to the window through 'app'
class App {

  HomeController = new HomeController()
  CharactersController = new CharactersController()

  banana = 'sandwhich'

  AppState = AppState // how to make appstate accessible from window console, You will have to open [[Target to see it though]]


  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

// NOTE app is connected to the window
const app = new App()
// @ts-ignore
window.app = app
