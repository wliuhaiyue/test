var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentHeight=470;
var titleHeight=60;
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
				ctbox[i].style.top=i*titleHeight+'px';
			}else{
// ctbox序号大于n的时候
// ctbox的left值计算公式为 序号*titleWidth+contentWidth
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
}
