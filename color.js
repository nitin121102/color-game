var colors=ranomarray(6);

var square=document.querySelectorAll(".square");


var rgb=document.querySelector("#rgb");
var message=document.querySelector("#message");

var colorx=myFunction();
rgb.textContent=colorx;
var reset=document.querySelector("#reset");


reset.addEventListener("click",function(){
	colors=ranomarray(6);
	colorx=myFunction();
	rgb.textContent=colorx;
	for(var i=0;i<square.length;i++)
		{ square[i].style.background=colors[i];   }
	var h1=document.querySelector("h1");
	h1.style.background="steelblue";

})

for(var i=0;i<square.length;i++)
{

	square[i].style.background=colors[i];

	square[i].addEventListener("click",function(){
		var clicked_Color=(this.style.background);
		if(clicked_Color===colorx)
		{
			
			message.textContent="You made it";
			reset.textContent="play again ?";
			var head=document.querySelector("h1");
			head.style.background=colorx;
			changeallcolor(clicked_Color);

		}
		else{
			this.style.background="#232323";
			message.textContent="Try again";
		}

	})
}


function changeallcolor(color)
{
	for(i=0;i<colors.length;i++)
	{
		square[i].style.background=color;

	}


}
function myFunction() {
	var x = Math.floor(Math.random() * colors.length);
	return colors[x];
}
function ranomarray(numcolor){
	var arrcolor=[];
	for(var i=0;i<numcolor;i++)  
	{
		arrcolor.push(newcolorarray());
	}
	return arrcolor;

}
function newcolorarray()
{
	var r= Math.floor(Math.random() * 255);

	var g= Math.floor(Math.random() * 255);

	var b= Math.floor(Math.random() * 255);

	return "rgb(" +r+","+" " +g+","+" " +b+ ")";
	

}