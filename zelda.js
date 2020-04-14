  
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game= new Phaser.Game(config);



function preload(){
	this.load.image('background','assets/backM.png');
	this.load.spritesheet('perso', 'assets/Vaisseau.png',{frameWidth: 27.6, frameHeight:20});
	
}

function create() {

   this.add.image(512,385,'background');
   this.cursors = this.input.keyboard.createCursorKeys();


   // Perso 

		this.player = this.physics.add.sprite(500,700,'perso');
		this.player.direction = 'right';
		this.player.setBounce(0.02);
		this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player,this.platforms);

	// anims perso

		this.anims.create({
		    key: 'left',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'turn',
		    frames: [ { key: 'perso', frame: 1 } ],
		    frameRate: 20
		});

		this.anims.create({
		    key: 'right',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'up',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'down',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 2 }),
		    frameRate: 10,
		    repeat: -1
		});

	

}


function update() {

 // Deplacement vaisseau 

		if (this.cursors.left.isDown)
		{
		   this.player.setVelocityX(-200);

		   this.player.anims.play('left', true);

		   this.player.direction = 'left';
		}
		else if (this.cursors.right.isDown)
		{
		    this.player.setVelocityX(200);

		    this.player.anims.play('right', true);

		    this.player.direction = 'right';
		}
		else
		{
		    this.player.setVelocityX(0);

		    this.player.anims.play('turn');
		}

		if (this.cursors.up.isDown)
		{
		   this.player.setVelocityY(-200);

		   this.player.anims.play('up', true);

		   this.player.direction = 'up';
		}
		if (this.cursors.down.isDown)
		{
		   this.player.setVelocityY(200);

		   this.player.anims.play('down', true);

		   this.player.direction = 'down';
		}

		

}

