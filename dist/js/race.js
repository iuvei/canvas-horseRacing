'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var BgTrack = function () {
    function BgTrack(ctx, count, FPS) {
        _classCallCheck(this, BgTrack);

        this.ctx = ctx;
        this.count = count;
        this.FPS = FPS;
        this.timeout = null;
        this.i = 0;
    }

    _createClass(BgTrack, [{
        key: 'move',
        value: function move() {
            var _this = this;

            var img = new Image();
            this.ctx.clearRect(0, 0, img.width, img.height);
            img.width = canvas.width;
            img.height = canvas.height;
            img.onload = function () {
                return _this.ctx.drawImage(img, 0, 0, img.width, img.height);
            };
            img.src = './images/bg_track/bg_track_' + this.i + '.jpg';
            this.i++;
            if (this.i > this.count) {
                clearTimeout(this.timeout);
                return;
            }
            this.timeout = setTimeout(this.move.bind(this), this.FPS);
        }
    }]);

    return BgTrack;
}();

var bgTrack = new BgTrack(context, 396, 100);
bgTrack.move();
//# sourceMappingURL=race.js.map