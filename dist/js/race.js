'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var BgTrack = function () {
    //背景类
    function BgTrack(ctx, count, FPS) {
        _classCallCheck(this, BgTrack);

        this.ctx = ctx; //画笔
        this.count = count; //背景图片张数
        this.FPS = FPS; //更新频率
        this.timeout = null; //定时器
        this.i = 0; //累加，每个序号对应不同图片
    }

    _createClass(BgTrack, [{
        key: 'move',
        value: function move() {
            var _this = this;

            var img = new Image();
            this.ctx.clearRect(0, 0, img.width, img.height); //清除上一张图片释放内存
            img.width = canvas.width;
            img.height = canvas.height;
            img.onload = function () {
                return _this.ctx.drawImage(img, 0, 0, img.width, img.height);
            }; //画入背景图片
            img.src = './images/bg_track/bg_track_' + this.i + '.jpg';
            this.i++;
            if (this.i > this.count) {
                //图片个数超过背景图总数后停止画入图片
                clearTimeout(this.timeout);
                return;
            }
            this.timeout = setTimeout(this.move.bind(this), this.FPS); //不断画入图片
        }
    }]);

    return BgTrack;
}();

var bgTrack = new BgTrack(context, 396, 100);
// bgTrack.move();

var Horse = function () {
    //马类
    function Horse() {
        _classCallCheck(this, Horse);
    }

    _createClass(Horse, [{
        key: 'run',
        value: function run() {}
    }, {
        key: 'forward',
        value: function forward() {}
    }]);

    return Horse;
}();
//# sourceMappingURL=race.js.map