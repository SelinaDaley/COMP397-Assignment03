module objects {
    // OCEAN CLASS +++++++++++++++++++++++++++++++++++++
    export class Ocean extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES

        //CUNSTROCTOR METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("ocean");

            this._speed.y = 5; // 5 pixels per frame
            this._reset(-960);
        }

        // PROTECTED METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            //check to see if the top of the ocean has met the top of the scene
            if (this.y >= value) {
                this._reset(-960);
            }
        }

        //reset the ocean offscreen
        protected _reset(value: number): void {
            this.y = value;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        }

    }
}