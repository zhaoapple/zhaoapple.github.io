window.onload=function()
{
    //网站打开页面第一页
    var ohead_left=document.getElementById("head_left");
    var ohead_right=document.getElementById("head_right");
    var ohead_lamp=document.getElementById("head_lamp");
    var ohead_bird=document.getElementById("head_bird");
    var ofirst_page_text=document.getElementById("first_page_text");
    function head_left()
    {
        ohead_left.style.opacity="1";
        ohead_left.style.left="-50px";
    }
    function head_right()
    {
        ohead_right.style.opacity="1";
        ohead_right.style.right="-50px";
    }
    function head_lamp()
    {
        ohead_lamp.style.opacity="1";
        ohead_lamp.style.left="370px";
    }
    function head_bird()
    {
        ohead_bird.style.opacity="1";
        ohead_bird.style.right="376px";
    }
    function first_page_text()
    {
        ofirst_page_text.style.opacity="1";
        ofirst_page_text.style.transform="scale(1)";
    }

    // 设置开篇左右两幅图、故事背景模块、人物简介模块的右边背景图 随鼠标移动
    var oall_page=document.getElementById("all_page");
    oall_page.onmousemove=function()
    {
        var x;
        // 故事背景模块的右边背景图
        let oani_huajuan=document.getElementById("ani_huajuan");
        // 人物简介左边背景图
        let oani_light=document.getElementById("ani_light");
        var e = e||window.event; 
        x = e.clientX;
        ohead_left.style.marginLeft=''+(x/70)+'px';
        ohead_right.style.marginRight=''+(-x/70)+'px';
        oani_huajuan.style.marginRight=''+(-x/70)+'px';
        oani_light.style.marginLeft=''+(x/70)+'px';
    }
    head_left();
    head_right();
    head_lamp();
    head_bird();
    first_page_text()


    // 故事背景
    var background_story_flag = new Array()
    for(let i=0;i<5;i++)
        background_story_flag[i]=0;
    background_story_flag[0]=1;
    var content_ul=document.getElementById("content_ul");
    var oul=content_ul.getElementsByTagName("li");
    for(let i=0;i<5;i++)
    {
        oul[i].onmouseout=function()
        {
            if(background_story_flag[i]==1)
                oul[i].style.backgroundImage='url(../img/background_story/ul_backg/spr_b'+(i+1)+'.png)';
            else 
                oul[i].style.backgroundImage='none';
                oul[i].style.transform="scale(1)";
        }
        
        // 设置图片
        oul[i].onmouseover=function()
        {
            oul[i].style.transform="scale(1.15)";
            var ocontentAll=document.getElementsByClassName("contentAll");
            if(background_story_flag[i]==0)//当前li处于没有显示状态，点击这个li就应该让图片飞入
            {
                for(let j=0;j<5;j++)
                {
                    // 让所有图片的位置恢复至最右边
                    ocontentAll[j].style.opacity='0';
                    ocontentAll[j].style.right="760px";
                    oul[j].style.backgroundImage='none';
                    oul[j].style.color='black';
                    background_story_flag[j]=0;
                }
                // 点击当前li后处理当前li和图片
                background_story_flag[i]=1;  //标志当前li处于显示状态
                ocontentAll[i].style.opacity='1';
                ocontentAll[i].style.right="0";
                oul[i].style.color='white';
                oul[i].style.backgroundImage='url(../img/background_story/ul_backg/spr_b'+(i+1)+'.png)';
            }
        }
    }

    // 人物简介

    var oprofile_contentAll=document.getElementsByClassName("profile_contentAll");
    var oprofile_content_ul=document.getElementById("profile_content_ul");
    // 每个人头像
    var oprofile_li=oprofile_content_ul.getElementsByTagName("li");
    var oprofile_li_img=oprofile_content_ul.getElementsByTagName("img");
    // 总的简介大部分
    var oprofile_content=document.getElementById("profile_content");
    // 每个人的简介大部分
    var profile_contentAll=document.getElementById("profile_contentAll");

    // 每个人的半身图
    var oportrait_bust=oprofile_content.getElementsByClassName("portrait_bust");
    // 每个人的语录
    var oprofile_content_h3=oprofile_content.getElementsByTagName("h3");
    // 每个人的名字图片
    var ofigure_name=oprofile_content.getElementsByClassName("figure_name");
    // 每个人的简介
    var oprofile_content_p=oprofile_content.getElementsByTagName("p");
    // 每个人的两行诗句
    var oprofile_content_h4=oprofile_content.getElementsByTagName("h4");

    for(let i=0;i<9;i++)
    {
        // 人物头像移入移出动画
        oprofile_li[i].onmouseover=function()
        {
            oprofile_li_img[i].style.animation="zoom_in_on 0.8s cubic-bezier(0.42,-0.01, 1, 1) 1  normal none";
        }
        oprofile_li[i].onmouseout=function()
        {
            oprofile_li_img[i].style.animation="none";
        }

        // 人物简介动画
        oprofile_li[i].onclick=function()
        {
            for(let j=0;j<9;j++)
            {
                oprofile_li_img[j].style.borderColor="rgb(219,111,99,0)";
                oprofile_li_img[j].style.backgroundColor="transparent";
                // 人物半身照
                oportrait_bust[j].style.opacity="0";
                oportrait_bust[j].style.transform="rotateY(180deg)";
                // h3
                oprofile_content_h3[j].style.opacity="0";
                oprofile_content_h3[j].style.transform="rotateY(180deg)";
                // 人物名字
                ofigure_name[j].style.opacity="0";
                ofigure_name[j].style.transform="rotateY(180deg)";
                // 人物简介
                oprofile_content_p[j].style.opacity="0";
                oprofile_content_p[j].style.transform="rotateY(180deg)";
                // 两行诗句
                oprofile_content_h4[j].style.opacity="0";
                oprofile_content_h4[j].style.transform="rotateY(180deg)";
            }
            oprofile_li_img[i].style.borderColor="rgb(219,111,99,1)";
            oprofile_li_img[i].style.backgroundColor="white";
            // 人物半身照
            oportrait_bust[i].style.opacity="1";
            oportrait_bust[i].style.transform="rotateY(0deg)";
            // h3
            oprofile_content_h3[i].style.opacity="1";
            oprofile_content_h3[i].style.transform="rotateY(0deg)";
            // 人物名字
            ofigure_name[i].style.opacity="1";
            ofigure_name[i].style.transform="rotateY(0deg)";
            // 人物简介
            oprofile_content_p[i].style.opacity="1";
            oprofile_content_p[i].style.transform="rotateY(0deg)";
            // 两行诗句
            oprofile_content_h4[i].style.opacity="1";
            oprofile_content_h4[i].style.transform="rotateY(0deg)";
        }
    }

    // 下滑到当前页面特效
    let oani_huajuan=document.getElementById("ani_huajuan");
    var oani_light=document.getElementById("ani_light");
    var background_story_ocontent=document.getElementById("content");
    var otext1=document.getElementById("text1");
    var otext2=document.getElementById("text2");
    
    function dynamicBackground()
    {
        var oani_huajuan_ToTop = oani_huajuan.getBoundingClientRect().top;
        var oani_light_ToTop = oani_light.getBoundingClientRect().top;
        var ohead_left_ToTop = ohead_left.getBoundingClientRect().top;
        // 开篇第一页
        if(ohead_left_ToTop>-380)
        {
            head_left();
            head_right();
            first_page_text()
            ohead_lamp.style.opacity="1";
            ohead_bird.style.opacity="1";
        }
        else if(ohead_left_ToTop<-680)
        {
            ohead_left.style.opacity="0";
            ohead_left.style.left="-200px";
            ohead_right.style.opacity="0";
            ohead_right.style.right="-200px";
            ofirst_page_text.style.opacity="0";
            ofirst_page_text.style.transform="scale(0.7)";
            ohead_lamp.style.opacity="0";
            ohead_bird.style.opacity="0";
        }

        // 故事背景
        if(oani_huajuan_ToTop<650&&oani_huajuan_ToTop>-550)
        {
            oani_huajuan.style.right="0";
            oani_huajuan.style.opacity="1";
            background_story_ocontent.style.opacity="1";
            content_ul.style.opacity="1";
            content_ul.style.left="11%";
            // 文字标题
            otext1.style.opacity="1";
            otext1.style.left="160px";
        }else
        {
            oani_huajuan.style.right="-150px";
            oani_huajuan.style.opacity="0";
            background_story_ocontent.style.opacity="0";
            content_ul.style.opacity="0";
            content_ul.style.left="-5%";
            // 文字标题
            otext1.style.opacity="0";
            otext1.style.left="-50px";
        }

        // 人物简介
        if(oani_light_ToTop<600)
        {
            oani_light.style.left="-70px";
            oani_light.style.opacity="1";
            profile_content.style.opacity="1";
            profile_content.style.top="80px";
            profile_content_ul.style.opacity="1";
            profile_content_ul.style.right="45px";
            // 文字标题
            otext2.style.opacity="1";
            otext2.style.right="155px";
        }else
        {
            oani_light.style.left="-200px";
            oani_light.style.opacity="0";
            profile_content.style.opacity="0";
            profile_content.style.top="250px";
            profile_content_ul.style.opacity="0";
            profile_content_ul.style.right="-250px";
            // 文字标题
            otext2.style.opacity="0";
            otext2.style.right="-100px";
        }
    }
    setInterval(dynamicBackground, 50);
}