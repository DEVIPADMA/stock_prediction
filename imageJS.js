var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'DOTNET.png';

imgArray[1] = new Image();
imgArray[1].src = 'JAVA.png';

imgArray[2] = new Image();
imgArray[2].src = 'python.png';

imgArray[3] = new Image();
imgArray[3].src = 'php.png';

imgArray[4] = new Image();
imgArray[4].src = 'JAVA.png';

function nextImage(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[4].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}
function validate(){
var td=document.getElementById("data");
var t=new Array("dotnet","java","python","php","java");
for(var j=0;j<=4;j++)
{
if(td==t[j])
{
alert(td+"VALIDATED");
break;
}
else
{
alert(td+"Not Validated");
break;
}
}
}