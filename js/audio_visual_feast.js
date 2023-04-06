window.onload=function()
{
    
    // 背景随鼠标移动效果
    var oall_page=document.getElementById("all_page");
    var oani_fox=document.getElementById("ani_fox");
    oall_page.onmousemove=function()
    {
        var x;
        var e = e||window.event; 
        x = e.clientX;
        oani_tree.style.marginRight=''+(-x/70)+'px';
        oani_fox.style.marginLeft=''+(x/70)+'px';
    }

    //轮播图的动画
    var img_number=3;
    var time_length=10000;
    var pre_next=1;

    var count=0;
    var ooriginal_painting_img=document.getElementById("original_painting_img");
    var ooriginal_painting_img_img=ooriginal_painting_img.getElementsByTagName("img");
    var ooriginal_painting_name=document.getElementById("original_painting_name"); 
    var ooriginal_painting_name_div=ooriginal_painting_name.getElementsByClassName("name");
    function fade()
    {
        for(let j=0;j<img_number;j++)
        {
            ooriginal_painting_img_img[j].style.opacity="0";
            ooriginal_painting_name_div[j].style.opacity="0";
        }
        if(pre_next)
            count++;
        else
            count--;
        if(count>=img_number)
            count=0;
        else if(count<0)
            count=img_number-1;
        ooriginal_painting_img_img[count].style.opacity="1";
        ooriginal_painting_name_div[count].style.opacity="1";
    }

    var ogoPre=document.getElementById("goPre");
    var goNext=document.getElementById("goNext");
    ogoPre.onclick=function()
    {
        pre_next=0;
        fade();
        pre_next=1;
        window.clearInterval(timer)
        timer=setInterval(fade,time_length);
    }
    goNext.onclick=function()
    {
        fade();
        window.clearInterval(timer)
        timer=setInterval(fade,time_length);
    }
    var timer=setInterval(fade,time_length);

    // 视频观看
    var ovideo=document.querySelector("video");
    var size=0.52;
    ovideo.addEventListener('canplay', function () {
        this.width = this.videoWidth*size;
        this.height = this.videoHeight*size;
    });


    //页面滑动动画
    var ooriginal_painting_text=document.getElementById("text1");
    var oani_tree=document.getElementById("ani_tree");
    var otext2=document.getElementById("text2");
    var ovideo_play=document.getElementById("video_play");
    function dynamicBackground()
    {
        //原画欣赏
        var ooriginal_painting_text_top=ooriginal_painting_text.getBoundingClientRect().top;
        if(ooriginal_painting_text_top>-500)
        {
            // 文字标题
            ooriginal_painting_text.style.opacity="1";
            ooriginal_painting_text.style.left="160px";
            // 人物人名
            ooriginal_painting_name.style.opacity="1";
            ooriginal_painting_name.style.left="1100px";
            // 原画图片
            ooriginal_painting_img.style.opacity="1";
            ooriginal_painting_img.style.left="-25px";
            //背景图片
            oani_tree.style.opacity="1";
            oani_tree.style.right="-50px";
        }
        else
        {
            // 文字标题
            ooriginal_painting_text.style.opacity="0";
            ooriginal_painting_text.style.left="0px";
            // 人物人名
            ooriginal_painting_name.style.opacity="0";
            ooriginal_painting_name.style.left="1000px";
            // 原画图片
            ooriginal_painting_img.style.opacity="0";
            ooriginal_painting_img.style.left="-250px";
            //背景图片
            oani_tree.style.opacity="0";
            oani_tree.style.right="-250px";
        }

        //视频观看
        var otext2_top=otext2.getBoundingClientRect().top;
        if(otext2_top<670)
        {
            //文字标题
            otext2.style.opacity="1";
            otext2.style.right="140px";
            //视频
            ovideo_play.style.opacity="1";
            ovideo_play.style.left="385px";
            //背景
            oani_fox.style.opacity="1";
            oani_fox.style.left="-25px";
        }
        else
        {
            //文字标题
            otext2.style.opacity="0";
            otext2.style.right="-50px";
            //视频
            ovideo_play.style.opacity="0";
            ovideo_play.style.left="700px";
            //背景
            oani_fox.style.opacity="0";
            oani_fox.style.left="-200px";
        }
        
    }
    setInterval(dynamicBackground, 50);
}