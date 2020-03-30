// 添加这种字节点
var box = document.getElementById('box');
var slider = document.createElement('div');
slider.setAttribute('class', 'slider');
slider.setAttribute('id', 'slider');
box.appendChild(slider);

var slide1 = document.createElement('div');
slide1.setAttribute('class', 'slide');
slider.appendChild(slide1);
var slide2 = document.createElement('div');
slide2.setAttribute('class', 'slide');
slider.appendChild(slide2);
var slide3 = document.createElement('div');
slide3.setAttribute('class', 'slide');
slider.appendChild(slide3);
var slide4 = document.createElement('div');
slide4.setAttribute('class', 'slide');
slider.appendChild(slide4);
var slide5 = document.createElement('div');
slide5.setAttribute('class', 'slide');
slider.appendChild(slide5);
var slide6 = document.createElement('div');
slide6.setAttribute('class', 'slide');
slider.appendChild(slide6);
var slide7 = document.createElement('div');
slide7.setAttribute('class', 'slide');
slider.appendChild(slide7);

var img1 = document.createElement('img');
img1.setAttribute('src', 'img/b5.png');
slide1.appendChild(img1);
var img2 = document.createElement('img');
img2.setAttribute('src', 'img/b1.png');
slide2.appendChild(img2);
var img3 = document.createElement('img');
img3.setAttribute('src', 'img/b2.png');
slide3.appendChild(img3);
var img4 = document.createElement('img');
img4.setAttribute('src', 'img/b3.png');
slide4.appendChild(img4);
var img5 = document.createElement('img');
img5.setAttribute('src', 'img/b4.png');
slide5.appendChild(img5);
var img6 = document.createElement('img');
img6.setAttribute('src', 'img/b5.png');
slide6.appendChild(img6);
var img7 = document.createElement('img');
img7.setAttribute('src', 'img/b1.png');
slide7.appendChild(img7);

var left = document.createElement('span');
left.setAttribute('id','left');
box.appendChild(left);
var right = document.createElement('span');
right.setAttribute('id','right');
box.appendChild(right);

var nav = document.createElement('ul');
nav.setAttribute('id','navs');
nav.setAttribute('class','nav');
box.appendChild(nav);

for(var i=1;i<=5;i++){
    var li = document.createElement('li');
    li.innerHTML=i;
    nav.appendChild(li)
}
var oNavlist = nav.children;

//定义动画函数
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
