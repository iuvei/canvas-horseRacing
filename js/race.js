let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

class BgTrack {
    constructor(ctx,count,FPS){
        this.ctx = ctx;
        this.count = count;
        this.FPS = FPS;
        this.timeout = null;
        this.i = 0;
    }
    move(){
        let img = new Image();
        this.ctx.clearRect(0,0,img.width,img.height);
        img.width = canvas.width;
        img.height = canvas.height;
        img.onload = () => this.ctx.drawImage(img,0,0,img.width,img.height);
        img.src = `./images/bg_track/bg_track_${this.i}.jpg`;
        this.i++;
        if(this.i>this.count){
            clearTimeout(this.timeout);
            return;
        }
        this.timeout = setTimeout(this.move.bind(this),this.FPS);
    }
}

let bgTrack = new BgTrack(context,396,100);
bgTrack.move();