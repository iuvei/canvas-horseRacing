let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let i = 0;
let bgTimeout = null;
function bgTrack() {
    let img = new Image();
    img.width = canvas.width;
    img.height = canvas.height;
    img.onload = function () {
        context.drawImage(this,0,0,img.width,img.height);
    };

    img.src = `./images/bg_track/bg_track_${i}.jpg`;
    i++;
    if(i>396){
        clearTimeout(bgTimeout);
        return;
    }
    bgTimeout = setTimeout(bgTrack,100);
}
bgTrack();