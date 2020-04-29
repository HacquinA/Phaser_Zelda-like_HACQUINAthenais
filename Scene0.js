class Scene0 extends Phaser.Scene{
	constructor (){
		super("Scene_0");
	}

	init(){
		
   	}

	preload(){
		this.load.image('inte','assets/maison.png');
	}

	create(){

		this.physics.world.setBounds(0, 0, 2000, 600);

		//monde 

		this.add.image(1000,300,'inte');


		// Camera scrolling 

		
		this.cameras.main.startFollow(this.player);
		this.cameras.main.setBounds(0, 0, 2000, 600);
		
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(){
		/*if (this.cursors.up.isDown) {
			this.scene.start('Scene_0',{nombreVie: this.nombreVie, score: this.score});
		}*/
	}
}