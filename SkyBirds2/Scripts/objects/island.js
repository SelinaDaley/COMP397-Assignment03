var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS +++++++++++++++++++++++++++++++++++++
    var Island = (function (_super) {
        __extends(Island, _super);
        // PRIVATE INSTANCE VARIABLES
        //CUNSTROCTOR METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this._speed.y = 5; // 5 pixels per frame
            this._reset(this._topBounds);
            this.name = "island";
        }
        // PROTECTED METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function (value) {
            //check to see if the top of the island is outside the view port
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        //reset the island offscreen
        Island.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map