window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    var bouncy;
    var house1;
    var house2;
    var mailbox;
    var bed;
    var bed2;
    var car;
    var car2;
    var house12;
    var house22;
    var mailbox2;
    var score = 0;
    var style = null;
    var gametext = null;
   

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'Tornado', 'assets/Tornado.png' );
        game.load.image( 'bed', 'assets/Bed.png');
        game.load.image( 'car', 'assets/Car.png');
        game.load.image( 'house1', 'assets/house1.png');
        game.load.image( 'house2', 'assets/House2.png');
        game.load.image( 'mailbox', 'assets/Mailbox.png');
        // load a tilemap and call it 'map'.
        // from .json file
        game.load.tilemap('map', 'assets/tilemap_example.json', null, Phaser.Tilemap.TILED_JSON);
        // alternatively, from .csv file
        //game.load.tilemap('map', 'assets/tilemap_example.csv', null, Phaser.Tilemap.CSV);
        
        //load tiles for map
        game.load.image('tiles', 'assets/tiles.png');
    }
    
    var map;
    var layer1;
    
    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Create the map.
        map = game.add.tilemap('map');
        // for csv files specify the tile size.
        //map = game.add.tilemap('map', 32, 32);
        //add tiles
        map.addTilesetImage('tiles');
        
        // Create a layer from the map
        //using the layer name given in the .json file
        layer1 = map.createLayer('Tile Layer 1');

        //for csv files
        //layer1 = map.createLayer(0);
        //  Resize the world
        layer1.resizeWorld();

        house1 = game.add.sprite(1236, 364, 'house1');
        house12 = game.add.sprite(532, 403, 'house1');

        house2 = game.add.sprite(695, 1018, 'house2');
        house22 = game.add.sprite(169, 900, 'house2');

        mailbox = game.add.sprite(100, 200, 'mailbox');
        mailbox2 = game.add.sprite(599, 1225, 'mailbox');

        car = game.add.sprite(834, 1234, 'car');
        car2 = game.add.sprite(1043, 293, 'car');

        bed = game.add.sprite(391, 284, 'bed');
        bed2 = game.add.sprite(723, 1352, 'bed');

        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'Tornado' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        gametext = game.add.text( 400, 15, "Score: 0", style );
        gametext.fixedToCamera = true;
        gametext.anchor.setTo( 0.5, 0.0 );
        game.camera.follow(bouncy);

    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
        
        if (checkOverlap(bouncy, car))
        {
            car.kill();
            score += 0;
            gametext.setText('Score: ' + score);
            
        }
        else if(checkOverlap(bouncy, car2))
        {
            car2.destroy();
            score += 1;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, bed))
        {
            bed.destroy();
            score += 1;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, bed2))
        {
            bed2.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, house1))
        {
            house1.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, house12))
        {
            house12.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, house2))
        {
            house2.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, house22))
        {
            house22.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, mailbox))
        {
            mailbox.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else if (checkOverlap(bouncy, mailbox2))
        {
            mailbox2.destroy();
            score += 0;
            gametext.setText('Score: ' + score);
        }
        else{
        }
    }

    function checkOverlap(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};
