var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentWidth=590;
var titleWidth=60;
var n=0;
for (var i=0;i<title.length;i++) {
	// 把序号保存到自定义的idx属性中
	title[i].idx=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			// 点击的序号记为n
				n=this.idx;
	// ctbox序号小于等于n的时候
 // ctbox的left值计算公式为 序号*titleWidth
			if(i<=n){
				ctbox[i].style.left=i*titleWidth+'px';
			}else{
// ctbox序号大于n的时候
// ctbox的left值计算公式为 序号*titleWidth+contentWidth
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}
// 点击的序号记为n
// 则ctbox序号小于等于n的时候
// ctbox的left值计算公式为 序号*titleWidth
// 则ctbox序号大于n的时候
// ctbox的left值计算公式为 序号*titleWidth+contentWidth
// 点击第0个标题  0*titleWidth=0
// 0 | 650px 710px 770px
// 点击第1个标题  1*titleWidth=60
// 0 60px | 710px 770px
// 点击第2个标题   2*titleWidth=120
//  0 60px 120px  | 770px
//  点击第3个标题  3*titleWidth=180
//  0 60px 120px 180px |