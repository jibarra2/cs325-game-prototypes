window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    let bouncy
    let house1
    let house2
    let mailbox
    let cars
    let beds
   

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'Tornado', 'assets/Tornado.png' );
        game.load.image( 'Bed', 'assets/Bed.png');
        game.load.image( 'Car', 'assets/Car.png');
        game.load.image( 'House1', 'assets/house1.png');
        game.load.image( 'House2', 'assets/House2.png');
        game.load.image( 'Mailbox', 'assets/Mailbox.png');
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
        game.physics.startSystem(Phaser.Physics.ARCADE)
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

        //house1 = game.add.group()
        //for (var i = 0; i < 3; i++) {
          //  const house = house1.create(i * Math.random, i + 100, 'House1')
        //}
        
        house1 = game.add.image( 1236, 364, 'House1');
        game.physics.enable( house1, Phaser.Physics.ARCADE );

        house2 = game.add.image( 695, 1018, 'House2');
        game.physics.enable( house2, Phaser.Physics.ARCADE );

        mailbox = game.add.image( 100, 784, 'Mailbox');
        game.physics.enable( mailbox, Phaser.Physics.ARCADE );

        cars = game.add.image( 893, 500, 'Car');
        game.physics.enable( cars, Phaser.Physics.ARCADE);

        beds = game.add.image( 391, 284, 'Bed');
        game.physics.enable( beds, Phaser.Physics.ARCADE );

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
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( 400, 15, "WATCH OUT FOR THE TWISTER!", style );
        text.fixedToCamera = true;
        text.anchor.setTo( 0.5, 0.0 );
        
        game.camera.follow(bouncy);
        
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
    
    }

};
