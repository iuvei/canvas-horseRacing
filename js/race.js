let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

class BgTrack {//背景类
    constructor(ctx,count,FPS){
        this.ctx = ctx;//画笔
        this.count = count;//背景图片张数
        this.FPS = FPS;//更新频率
        this.timeout = null;//定时器
        this.i = 0;//累加，每个序号对应不同图片
    }
    move(){
        let img = new Image();
        this.ctx.clearRect(0,0,img.width,img.height);//清除上一张图片释放内存
        img.width = canvas.width;
        img.height = canvas.height;
        img.onload = () => this.ctx.drawImage(img,0,0,img.width,img.height);//画入背景图片
        img.src = `./images/bg_track/bg_track_${this.i}.jpg`;
        this.i++;
        if(this.i>this.count){//图片个数超过背景图总数后停止画入图片
            clearTimeout(this.timeout);
            return;
        }
        this.timeout = setTimeout(this.move.bind(this),this.FPS);//不断画入图片
    }
}

let bgTrack = new BgTrack(context,396,100);
// bgTrack.move();

class Horse {//马类
    constructor(){

    }
    run(){

    }
    forward(){
        
    }
}