class zelda extends Phaser.Scene {
    constructor() {
        super("zelda");
    }
	
	init(){
		var cursors;
		var player;
		var flai;
		var game;
		var boutonFeu;
		var groupeBullets;
		var tir = 2;
		var house;
		var platforms;
		var door;
		var maFonction;
		var vie = 3;
		var cibles;
		var aideTir;
		var ver;
		var pic;
		

	}

	preload(){

		this.load.image('background','assets/back1.png');
		this.load.image('bullet','assets/Bullet.png');
		this.load.spritesheet('perso', 'assets/Snay.png',{frameWidth: 28, frameHeight:26});
		this.load.spritesheet('flai', 'assets/Flai.png',{frameWidth: 13, frameHeight:16});
		this.load.image('house','assets/house.png');
		this.load.image('invi','assets/Invi.png');
		this.load.image('invi2','assets/Invi2.png');
		this.load.image('invi3','assets/Invi3.png');
		this.load.image('invi4','assets/Invi4.png');
		this.load.image('invi5','assets/Invi5.png');
		this.load.image('invi6','assets/Invi6.png');
		this.load.image('invi7','assets/Invi7.png');
		this.load.image('invi8','assets/Invi8.png');
		this.load.image('invi9','assets/Invi9.png');
		this.load.image('invi10','assets/Invi10.png');
		this.load.image('invi11','assets/Invi11.png');
		this.load.image('invi12','assets/Invi12.png');
		this.load.image('invi13','assets/Invi13.png');
		this.load.image('invi14','assets/Invi14.png');
		this.load.image('door','assets/door.png');
		this.load.image('inte','assets/maison.png');
		this.load.image('vie1','assets/vie1.png');
		this.load.image('vie2','assets/vie2.png');
		this.load.image('vie3','assets/vie3.png');
		this.load.image('cible','assets/cible.png');
		this.load.image('ver','assets/ver.png');

	}



	create(){
		this.physics.world.setBounds(0, 0, 2000, 600);

		//monde 

	   	this.add.image(1000,300,'background');


	   	/*this.platforms = this.physics.add.staticGroup(); 
	   	this.add.image(200,500,'invi');
	   	this.physics.add.collider(this.platforms,this.player);*/



	   	//Vie

			this.vie3 = this.add.image(70,50,'vie3').setScale(1.25).setScrollFactor(0);

	   // Perso 

			this.player = this.physics.add.sprite(100,400,'perso');
			this.player.direction = 'right';
			this.player.setCollideWorldBounds(true);

		// anims perso
			this.anims.create({
			    key: 'left',
			    frames: this.anims.generateFrameNumbers('perso', { start: 2, end: 3 }),
			    frameRate: 10,
			    repeat: -1
			});


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

			this.anims.create({
				key: 'pic',
				frames: this.anims.generateFrameNumbers('perso', { start: 5, end: 5 }),
				frameRate: 10,
				repeat: -1
			});


		//tir Snay 

			this.boutonFeu = this.input.keyboard.addKey('A');
			var direction = 'right';
			this.groupeBullets = this.physics.add.group(); 

		// pic Snay 

			this.pic = this.input.keyboard.addKey('E');
			var direction = 'right';
			

		//House 

			this.door = this.physics.add.sprite(480,215,'door');

			this.house = this.physics.add.staticGroup(); 
	        this.house = this.house.create(480,150,'house');
	        this.physics.add.collider(this.house,this.player);


		// Camera scrolling 

			this.cameras.main.startFollow(this.player);
			this.cameras.main.setBounds(0, 0, 2000, 600);


		// door et chgt de scene
			this.physics.add.overlap(this.player, this.door, maFonction, null, this);


			function maFonction(){
			    this.scene.start('Scene0');
			    console.log("Transition");
			}


		// collision 

			this.platforms = this.physics.add.staticGroup(); 
	        this.platforms.create(1195,575,'invi');
	        this.platforms.create(10,400,'invi2');
	        this.platforms.create(218,400,'invi3');
	        this.platforms.create(350,400,'invi3');
	        this.platforms.create(110,205,'invi4');
	        this.platforms.create(190,300,'invi5');
	        this.platforms.create(542,400,'invi6');
	        this.platforms.create(705,210,'invi7');
	        this.platforms.create(805,259,'invi8');
	        this.platforms.create(865,80,'invi9');
	        this.platforms.create(95,60,'invi10');
	        this.platforms.create(1420,30,'invi11');
	        this.platforms.create(1980,300,'invi12');
	        this.platforms.create(1400,430,'invi13');
	        this.platforms.create(1400,120,'invi14');

	        this.physics.add.collider(this.platforms,this.player);

		//Flai 

			this.flai = this.physics.add.sprite(100,100,'flai');
			this.flai.setCollideWorldBounds(true);
			this.physics.add.collider(this.flai,this.platforms);
			this.physics.add.collider(this.flai,this.house);


		// anims flai
			this.anims.create({
			    key: 'leftF',
			    frames: this.anims.generateFrameNumbers('flai', { start: 4, end: 7 }),
			    frameRate: 10,
			    repeat: -1
			});

			this.anims.create({
			    key: 'rightF',
			    frames: this.anims.generateFrameNumbers('flai', { start: 0, end: 3 }),
			    frameRate: 10,
			    repeat: -1
			});


		//cible

		var scoreR = 0 ;
		

			this.cibles = this.physics.add.staticGroup();
	          	this.cibles.create(100,575,'cible');
	          	this.cibles.create(700,200,'cible');
	          	this.cibles.create(500,30,'cible');
	          	this.cibles.create(65,150,'cible');
	          	this.cibles.create(1000,500,'cible');
	          	this.cibles.create(1500,100,'cible');
	          	this.cibles.create(1900,400,'cible');
       		

			function hit (bullet, cible) {
			    bullet.destroy();
			    cible.destroy(); 
			    this.scoreR += 1;
				this.scoreTexte.setText('Rocher détruit: '+ this.scoreR);  
			}

			this.physics.add.overlap(this.groupeBullets, this.cibles, hit, null,this);


		// Texte

			this.aideTir = this.add.text(10, 350, "Pour tirer une boule de feu appuie sur A !", {'font': '14px', fill: '#fff'});
			this.aideTir.visible = false;

			this.scoreText = this.add.text(25,100, 'Ver: 0', {fontsize: '32px', fill: '#000'}).setScale(1.25).setScrollFactor(0);
			this.scoreTexte = this.add.text(25,130, 'Rocher detruit:  0', {fontsize: '32px', fill: '#000'}).setScale(1.25).setScrollFactor(0);

		// Ver	

		var score = 0 ;


			this.ver = this.physics.add.group();
				this.ver.create(500,250,'ver');
				this.ver.create(90,200,'ver');
				this.ver.create(280,50,'ver');
				this.ver.create(500,500,'ver');
				this.ver.create(1500,500,'ver');
				this.ver.create(1900,150,'ver');


			this.physics.add.collider(this.ver, this.platforms);
			this.physics.add.collider(this.ver, this.sol);
			this.physics.add.overlap(this.ver, this.player, collectVer, null, this);

		//Fonction récupération Vers

			function collectVer(player, ver){
				ver.disableBody(true,true);
				this.score += 1;
				this.scoreText.setText('Ver: '+ this.score);
				
			}



			this.cursors = this.input.keyboard.createCursorKeys();

}


  	update(){

  		console.log(this.score =0);
  		//console.log(this.scoreR =0); 

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

			if ( Phaser.Input.Keyboard.JustDown(this.boutonFeu)) {
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
				
		// pic 

			if ( Phaser.Input.Keyboard.JustDown(this.pic)) {
			   	if (this.player.direction == 'left') { 
		            this.coefDir = -1; 
		    	} 
		       	else{ 
		            this.coefDir = 1 
		        }
		            this.player.anims.play('pic', true);
		            
			}
				


		//Perte de vie

			/*if (this.vie == 2){
				this.vie2 = this.add.image(70,35,'vie2');
				this.vie3.destroy(true);
			}
			else if (this.vie == 1){
				this.vie1 = this.add.image(70,35,'vie1');
				this.vie2.destroy(true);
			}
			else if (this.vie == 0){
				this.vie1.destroy(true);
				this.physics.pause();
				this.player.setTint(0xff0000);
				this.player.anims.play('turn');
				this.gameOverText.visible = true;
				this.gameOver = true;
				this.score = 0;
				this.vie = 3;
				
			}
			if(this.vie == 3){
				this.vie3 = this.add.image(70,35,'vie3');
	}*/

		// déplacement flai

			if (this.flai.x >= 300){
	    		this.tweens.add({
			    	targets: this.flai,
			   	 	x : -100,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 5000,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			this.flai.anims.play('leftF', true);
			this.flai.setFlipY(false);
			}
			
			if (this.flai.x <= 100){
				this.tweens.add({
			    	targets: this.flai,
					x : 520,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 5000,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
				this.flai.anims.play('rightF', true);
				this.flai.setFlipY(false);

			}
	}
}