"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game',
        scene: {
            preload: preload,
            create: create,
            update: update
        },
        physics: {
            default: 'arcade'
        }
    };
    
    var game = new Phaser.Game(config);

    function preload() {
        game.load.image( 'paddle', 'assets/paddle1.png');
    }

    function create() {
          //  Enable world bounds, but disable the floor
          this.physics.world.setBoundsCollision(true, true, true, false);

          paddle = game.add.sprite(400, 550, 'paddle');

    }

    function update() {

    }
};
