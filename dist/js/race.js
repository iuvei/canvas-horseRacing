'use strict';

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var i = 0;
var bgTimeout = null;
function bgTrack() {
    var img = new Image();
    img.width = canvas.width;
    img.height = canvas.height;
    img.onload = function () {
        context.drawImage(this, 0, 0, img.width, img.height);
    };

    img.src = './images/bg_track/bg_track_' + i + '.jpg';
    i++;
    if (i > 396) {
        clearTimeout(bgTimeout);
        return;
    }
    bgTimeout = setTimeout(bgTrack, 100);
}
bgTrack();
//# sourceMappingURL=race.js.map