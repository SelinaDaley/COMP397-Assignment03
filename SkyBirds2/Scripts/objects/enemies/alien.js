var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ALIEN CLASS ++++++++++++++++++++++++++++++++++++
    var Alien = (function (_super) {
        __extends(Alien, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Alien(num) {
            _super.call(this, "alien");
            this._firstSet = true;
            this._num = num;
            this._speed.x -= 5; //alien speed
            this._reset(this._rightBounds);
            this.name = "alien";
            //this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Alien.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Alien.prototype._reset = function (value) {
            if (this._firstSet) {
                this.x = value + (this._num * 250);
                this.y = Math.floor(Math.random() * 310) + 55;
                this._firstSet = false;
            }
            else {
                this.x = value;
                this.y = Math.floor(Math.random() * 310) + 55;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Alien.prototype.update = function () {
            // scroll the alien -5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Alien;
    })(objects.GameObject);
    objects.Alien = Alien;
})(objects || (objects = {}));
