  
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

var cursors;
var player;
var game;
var boutonFeu;
var groupeBullets;
var tir = 2;
var house;

function preload(){

	this.load.image('background','assets/backM.png');
	this.load.image('bullet','assets/Bullet.png');
	this.load.spritesheet('perso', 'assets/Snay.png',{frameWidth: 28, frameHeight:26});
	this.load.image('house','assets/house.png');

	
}

function create() {

   this.add.image(512,385,'background');

   this.cursors = this.input.keyboard.createCursorKeys();
   boutonFeu = this.input.keyboard.addKey('A');


   // Perso 

		this.player = this.physics.add.sprite(500,700,'perso');
		this.player.direction = 'right';
		this.player.setBounce(0.02);
		this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player,this.platforms);

	// anims perso

		this.anims.create({
		    key: 'left',
		    frames: this.anims.generateFrameNumbers('perso', { start: 2, end: 3 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'right',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 1 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'stop',
		    frames: [ { key: 'perso', frame: 6 } ],
		    frameRate: 20
		});

		this.anims.create({
		    key: 'up',
		    frames: this.anims.generateFrameNumbers('perso', { start: 0, end: 1 }),
		    frameRate: 10,
		    repeat: -1
		});

		this.anims.create({
		    key: 'down',
		    frames: this.anims.generateFrameNumbers('perso', { start: 2, end: 3 }),
		    frameRate: 10,
		    repeat: -1
		});

		//tir Snay 

		var direction = 'right';
		this.groupeBullets = this.physics.add.group(); 

		//House 

		this.house = this.physics.add.group(); 
		this.house = this.physics.add.sprite(120,100,'house');
		this.house.setBounce(0.02);
		this.house.setCollideWorldBounds(true);
		this.physics.add.collider(this.house,this.player);



}


function update() {

 // Deplacement perso

		if (this.cursors.left.isDown){

			this.player.setVelocityX(-200);

			this.player.setFlipX(true);

			this.player.anims.play('left', true);

			this.player.direction = 'left';



		   
		}
		else if (this.cursors.right.isDown){
		    this.player.setVelocityX(200);

		    this.player.setFlipX(false);

		    this.player.anims.play('left', true);

		    this.player.direction = 'right';


		}
		else{
		    this.player.setVelocityX(0);

		    this.player.anims.play('stop');

		}

		if (this.cursors.up.isDown){
               this.player.setVelocityY(-200);

               this.player.anims.play('up', true);
        }

        else if (this.cursors.down.isDown){
                this.player.setVelocityY(400);
                this.player.setFlipX(true);
        }
        else{
                this.player.setVelocityY(0);

        }

		if (this.cursors.down.isDown){
		   this.player.setVelocityY(200);

		   this.player.anims.play('down', true);

		   this.player.direction = 'down';
		}

	//tir Snay 

	if ( Phaser.Input.Keyboard.JustDown(boutonFeu)) {
	   if (this.player.direction == 'left') { 
            this.coefDir = -1; 
        } 
       else{ 
            this.coefDir = 1 
        }
                // on crée la balle a coté du joueur
                var bullet = this.groupeBullets.create(this.player.x + (25 * this.coefDir), this.player.y - 4, 'bullet');
                // parametres physiques de la balle.
                bullet.body.allowGravity =false;
                bullet.setVelocity(1000 * this.coefDir, 0);
	}
	
	

}

