/**
 * Created by Saniac on 2016/3/26.
 */
$(document).ready(function(){
    $('.menu li').bind("mouseenter",function(){showName(this);});
    $('.menu li').bind("mouseleave",function(){showBack(this);});
    $(".room").hide();
    $(".menu li").bind("click",function(){$('.rule').hide();})
    $(".menu li").bind("click",function(){showItem(this);})
    $("#rule").bind("mouseenter",function(){$('.rule').fadeIn(500);});
    $("#rule").bind("mouseleave",function(){$('.rule').fadeOut(500);});
});

//鼠标悬浮显示标签
function showName(obj){
    $(obj).html($(obj).attr("labName"));
}

function showBack(obj){
    $(obj).html($(obj).attr("id"));
}

function showItem(obj){
    $(".room").hide();
    $("#"+$(obj).attr("id")+"i").fadeIn(500);
}