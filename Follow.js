var x=new Array(10),y=new Array(10),x1=new Array(10000),y1=new Array(10000);
var l=10,k=0;
var j=0;
window.onload=function()
{
	obj=document.getElementById('tik');
	ctx=obj.getContext('2d');
	for(var i=0;i<10;i++)
	{
		x[i]=(2*i+1)*5;
		y[i]=10;
	}
	x1[0]=10;
	pop();
};
window.onkeydown=function(event)
{
if(k!=0)
{
if(event.keyCode==37)
{	
	l=-10;
	k=0;
}
if(event.keyCode==39)
{	
	l=10;
	k=0;
}
}
if(l!=0)
{
if(event.keyCode==38)
{	
	l=0;
	k=-10;
}
if(event.keyCode==40)
{	
	l=0;
	k=10;
}
}
};
function pop()
{
	ctx.clearRect(0,0,1000,600);
	for(var i=0;i<10;i++)
	{
		ctx.beginPath();
		ctx.arc(x[i],y[i],5,0,2*Math.PI);
		ctx.fill();
		if(i!=9)
		{
		x[i]=x[i+1];
		y[i]=y[i+1];
		}
	}
	x[9]+=l;
	y[9]+=k;
	setTimeout("pop()",100);
}