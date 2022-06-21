var imgs = ["https://a.d-cd.net/7e94eecs-1920.jpg","https://a.d-cd.net/9fa790cs-1920.jpg", "https://a.d-cd.net/53a790cs-1920.jpg"];
var i = 0;
var img = document.getElementById('pic');
img.src = imagesList[i];

function change_src() {
    img.src = imgs[i+1];
       i = i+1;
       if(i == imgs.length){
         i = 0;
         img.src = imgs[i];
       }
}
