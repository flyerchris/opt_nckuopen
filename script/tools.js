window.onload=function(){preprocess();}
document.onwheel = function() {window.cancelAnimationFrame(scrollFun);}
window.onscroll=function(){changeNav();}

function navMark(){
	document.getElementById("navscroll").innerHTML=document.getElementById("navori").innerHTML;
	if(document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		document.getElementById("navori").style.display="none";
		document.getElementById("navscroll").style.display="block";
	}else{
		document.getElementById("navori").style.display="block";
		document.getElementById("navscroll").style.display="none";
	}
	
}
function preprocess(){
	navMark();
	var headnews=document.getElementById("headnews");
	var other=document.getElementById("othernews");
	headnews.children[0].children[0].children[0].children[0].innerHTML='<i class="fa fa-spinner fa-pulse fa-1x fa-fw margin-bottom"></i> Loading';
	for(i=0;i<4;i++){
		other.children[0].children[Math.floor(i/2)].children[i%2].children[0].innerHTML='<i class="fa fa-spinner fa-pulse fa-1x fa-fw margin-bottom"></i> Loading';
	}
	
}

function changeNav(){
	var html = document.documentElement;
	if(document.body.scrollTop!=0 || html.scrollTop!=0){
		document.getElementById("navori").style.display="none";
		document.getElementById("navscroll").style.display="block";
	}else{
		document.getElementById("navori").style.display="block";
		document.getElementById("navscroll").style.display="none";
	}
}
var scrollFun;
function moveTo(pos){
	var sy = document.documentElement.scrollTop;
	if(sy<document.body.scrollTop)sy=document.body.scrollTop;
	var speed=1;
	var delta=(pos-sy);
	if(Math.abs(delta)<speed || pos<0){
		document.body.scrollTop=pos;
		document.documentElement.scrollTop=pos;
		return;
	}
	if(sy<pos){
		document.body.scrollTop+=delta/20+speed;
		document.documentElement.scrollTop+=delta/20+speed;
	}else if(sy>pos){
		document.body.scrollTop+=delta/20-speed;
		document.documentElement.scrollTop+=delta/20-speed;
	}
	console.log("scrolling");
	scrollFun=requestAnimationFrame(function(){moveTo(pos)});
}

function scrollGoTo(pos){
	if(pos>document.body.scrollHeight-window.innerHeight){
		pos=document.body.scrollHeight-window.innerHeight;
	}
	window.cancelAnimationFrame(scrollFun);
	scrollFun=requestAnimationFrame(function(){moveTo(pos)});
}
