import Phaser from "phaser";
import Game from "../src/scenes/Game.js";
import GameOver from "../src/scenes/GameOver.js";

export default new Phaser.Game({
  type: Phaser.AUTO,
  audio: {
    disableWebAudio: true,
  },
  width: 480,
  height: 640,

  scene: [Game, GameOver],
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: { y: 500 },
      debug: false,
    },
  },
});
