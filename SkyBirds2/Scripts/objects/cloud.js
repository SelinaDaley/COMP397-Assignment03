var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS +++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // PRIVATE INSTANCE VARIABLES
        //CUNSTROCTOR METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++
        function Cloud() {
            _super.call(this, "cloud");
            this._speed.y = 5; // 5 pixels per frame
            this._reset(this._topBounds);
            this.name = "cloud";
        }
        // PROTECTED METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function (value) {
            //check to see if the top of the island is outside the view port
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        //reset the island offscreen
        Cloud.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map