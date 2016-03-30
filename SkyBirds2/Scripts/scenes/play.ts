// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // set cloud count
            this._cloudCount = 3;
            // Instantiate the array
            this._clouds = new Array<objects.Cloud>();

            // add ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);     
            
            // add island to the scene      
            this._island = new objects.Island();
            this.addChild(this._island);

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add cloud to the scene
            for (var cloud: number = 0; cloud < this._cloudCount; cloud++)
            {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }

            // add collision manager to scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });

            this._collision.check(this._island);

            /*for (var cloud in this._clouds) {
                this._clouds[cloud].update();
            }*/
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}