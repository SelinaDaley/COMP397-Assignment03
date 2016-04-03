module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _leftBounds: number;
        private _rightBounds: number;
        private _topBounds: number;
        private _bottomBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super(assets.getResult("hero"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 1.2);

            //this.y = 430;
            
            // assign and play the engine sound
            this.engineSound = createjs.Sound.play("engine");
            // Loop engine sound forever
            this.engineSound.loop = -1;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }

            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}