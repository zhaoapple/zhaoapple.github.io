window.onload=function()
{
    // 人物简介
    var oprofile_content_ul=document.getElementById("profile_content_ul");
    // 每个人头像
    var oprofile_li=oprofile_content_ul.getElementsByTagName("li");
    var oprofile_li_img=oprofile_content_ul.getElementsByTagName("img");
    // 总的简介大部分
    var oprofile_content=document.getElementById("profile_content");
    // 每个人的简介大部分

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
    var oani_light=document.getElementById("ani_light");
    var otext2=document.getElementById("text2");
    
    function dynamicBackground()
    {
        var oani_light_ToTop = oani_light.getBoundingClientRect().top;
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
            // 文字标题
            otext2.style.opacity="0";
            otext2.style.right="-100px";
        }
    }
    setInterval(dynamicBackground, 50);
}
