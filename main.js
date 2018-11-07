var yyy=document.getElementById('xxx');
var context=yyy.getContext('2d');


changeSize();

var using=false;
var lastPoint={"x":undefined,"y":undefined};
context.lineWidth=3;
//���������¼�
            window.onresize=function(){
                changeSize()
            };

//���Լ�⣨����������꣩
            if(document.body.ontouchstart !==undefined){   //�����豸
                                                           //���ص�������¼�
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
//���ص���ƶ��¼�
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
//���ص���ɿ��¼�
    yyy.ontouchend=function(aaa){
        using=false;
    };
}else{                                          //�Ǵ����豸
    //��갴���¼�
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
//����ƶ��¼�
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
//����ɿ��¼�
    document.onmouseup=function(){
        using=false;
    };
}


//���������¼�
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineCap = "square";
    //context.lineWidth=3;
    context.stroke();
}
//��Բ�¼�
function drawCircle(x,y,redius){
    context.beginPath();
    context.arc(x,y,redius,0,Math.PI*2);
    context.fill();
}
//�ı仭�崰���¼�
function changeSize(){
    var pegeWidth=document.documentElement.clientWidth;/* ��ȡ�ӿڿ��*/
    var pegeHidth=document.documentElement.clientHeight;

    yyy.width=pegeWidth;
    yyy.height=pegeHidth;
}
//��Ƥ������¼�
var eraserEnbled=false; //��Ƥ��Ĭ��״̬

//���ʵĵ���¼�
pen.onclick=function(){
    eraserEnbled=false;
    pen.classList.add('active');
    eraser.classList.remove('active')
};
//��Ƥ���ĵ���¼�
eraser.onclick=function(){
    eraserEnbled=true;
    eraser.classList.add('active');
    pen.classList.remove('active')

};
//����  ����¼�
download1.onclick=function(){
    var url=yyy.toDataURL("img/png");
    var a=document.createElement('a');
    document.body.appendChild(a);
    a.href=url;
    a.download='�ҵĻ�';
    a.target='_blank';
    a.click();
};

//������ɫ�ĸı�
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

//���ʵĴ�ϸ

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
//����
clear1.onclick=function(){
    context.clearRect(0,0,yyy.clientWidth,yyy.clientHeight)
};


