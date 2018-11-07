var yyy=document.getElementById('xxx');
var context=yyy.getContext('2d');


changeSize();

var using=false;
var lastPoint={"x":undefined,"y":undefined};
context.lineWidth=3;
//拉动窗口事件
            window.onresize=function(){
                changeSize()
            };

//特性检测（触屏还是鼠标）
            if(document.body.ontouchstart !==undefined){   //触屏设备
                                                           //触控点击按下事件
                yyy.ontouchstart=function(aaa){
                    var x=aaa.touches[0].clientX;
                    var y=aaa.touches[0].clientY;
                    if(eraserEnbled){
                        using=true;
                        context.clearRect(x-10,y-10,20,20)
                    }else{
                        using=true;
            drawCircle(x,y,0.5);
            lastPoint={"x":x,"y":y};
        }
    };
//触控点击移动事件
    yyy.ontouchmove=function(aaa){
        var x=aaa.touches[0].clientX;
        var y=aaa.touches[0].clientY;
        if(eraserEnbled){
            if(using){
                context.clearRect(x-10,y-10,20,20)
            }
        }else{
            if (using){
                drawCircle(x,y,0.5);
                var newPoint={"x":x,"y":y};
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint=newPoint;
            }
        }
    };
//触控点击松开事件
    yyy.ontouchend=function(aaa){
        using=false;
    };
}else{                                          //非触屏设备
    //鼠标按下事件
    document.onmousedown=function(aaa){
        var x=aaa.clientX;
        var y=aaa.clientY;
        if(eraserEnbled){
            using=true;
            context.clearRect(x-10,y-10,20,20)
        }else{
            using=true;
            drawCircle(x,y,0.5);
            lastPoint={"x":x,"y":y};
        }
    };
//鼠标移动事件
    document.onmousemove=function(aaa){
        var x=aaa.clientX;
        var y=aaa.clientY;
        if(eraserEnbled){
            if(using){
                context.clearRect(x-10,y-10,20,20)
            }
        }else{
            if (using){
                drawCircle(x,y,0.5);
                var newPoint={"x":x,"y":y};
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint=newPoint;
            }
        }
    };
//鼠标松开事件
    document.onmouseup=function(){
        using=false;
    };
}


//两点连线事件
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineCap = "square";
    //context.lineWidth=3;
    context.stroke();
}
//画圆事件
function drawCircle(x,y,redius){
    context.beginPath();
    context.arc(x,y,redius,0,Math.PI*2);
    context.fill();
}
//改变画板窗口事件
function changeSize(){
    var pegeWidth=document.documentElement.clientWidth;/* 获取视口宽高*/
    var pegeHidth=document.documentElement.clientHeight;

    yyy.width=pegeWidth;
    yyy.height=pegeHidth;
}
//橡皮擦点击事件
var eraserEnbled=false; //橡皮擦默认状态

//画笔的点击事件
pen.onclick=function(){
    eraserEnbled=false;
    pen.classList.add('active');
    eraser.classList.remove('active')
};
//橡皮擦的点击事件
eraser.onclick=function(){
    eraserEnbled=true;
    eraser.classList.add('active');
    pen.classList.remove('active')

};
//下载  点击事件
download1.onclick=function(){
    var url=yyy.toDataURL("img/png");
    var a=document.createElement('a');
    document.body.appendChild(a);
    a.href=url;
    a.download='我的画';
    a.target='_blank';
    a.click();
};

//画笔颜色的改变
colorBlack.onclick=function(){
    context.strokeStyle='black';
    context.fillStyle='black';

    colorBlack.classList.add('active');
    colorRed.classList.remove('active');
    colorGreen.classList.remove('active');
    colorYellow.classList.remove('active');
    colorBlue.classList.remove('active');
    colorPurple.classList.remove('active');
};
colorRed.onclick=function(){
    context.strokeStyle='red';
    context.fillStyle='red';

    colorBlack.classList.remove('active');
    colorRed.classList.add('active');
    colorGreen.classList.remove('active');
    colorYellow.classList.remove('active');
    colorBlue.classList.remove('active');
    colorPurple.classList.remove('active');
};
colorGreen.onclick=function(){
    context.strokeStyle='green';
    context.fillStyle='green';

    colorBlack.classList.remove('active');
    colorRed.classList.remove('active');
    colorGreen.classList.add('active');
    colorYellow.classList.remove('active');
    colorBlue.classList.remove('active');
    colorPurple.classList.remove('active');
};
colorYellow.onclick=function(){
    context.strokeStyle='yellow';
    context.fillStyle='yellow';

    colorBlack.classList.remove('active');
    colorRed.classList.remove('active');
    colorGreen.classList.remove('active');
    colorYellow.classList.add('active');
    colorBlue.classList.remove('active');
    colorPurple.classList.remove('active');
};
colorBlue.onclick=function(){
    context.strokeStyle='blue';
    context.fillStyle='blue';

    colorBlack.classList.remove('active');
    colorRed.classList.remove('active');
    colorGreen.classList.remove('active');
    colorYellow.classList.remove('active');
    colorBlue.classList.add('active');
    colorPurple.classList.remove('active');
};
colorPurple.onclick=function(){
    context.strokeStyle='purple';
    context.fillStyle='purple';

    colorBlack.classList.remove('active');
    colorRed.classList.remove('active');
    colorGreen.classList.remove('active');
    colorYellow.classList.remove('active');
    colorBlue.classList.remove('active');
    colorPurple.classList.add('active');
};

//画笔的粗细

line1.onclick=function(){
    context.lineWidth=3;
};
line2.onclick=function(){
    context.lineWidth=6;
};
line3.onclick=function(){
    context.lineWidth=10;
};
line4.onclick=function(){
    context.lineWidth=15;
};
//清屏
clear1.onclick=function(){
    context.clearRect(0,0,yyy.clientWidth,yyy.clientHeight)
};


