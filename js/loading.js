/**
 * Created by ym-zrl on 16/6/12.
 */

function processerbarq(time){

    $("#line").each(function(i,item){
        var a=parseInt($(item).attr("w"));
        $(item).animate({
            width: a+"%"
        },time);
    });
    var si = window.setInterval(
        function(){
            a=$("#line").width();
            if(window.screen.width<=1200){
                b=(a/100*100).toFixed(0);
            }else {
                b=(a/600*100).toFixed(0);
            }
            document.getElementById('percent').innerHTML=b+"%";
            $('.load-precess').text(b+"%")
            document.getElementById('percent').style.left=a-30+"px";
            // document.getElementById('msg').innerHTML="上传中";
            // if(document.getElementById('percent').innerHTML=="100%") {
            //     clearInterval(si);
            //     document.getElementById('msg').innerHTML="&nbsp;&nbsp;成功";
            // }
        },70);
};


function processerbarh(time){

    $("#line").each(function(i,item){
        var a='100'
        $(item).animate({
            width: a+"%"
        },time);
    });
    var si = window.setInterval(
        function(){
            a=$("#line").width();
            if(window.screen.width<=1200){
                b=(a/100*100).toFixed(0);
            }else {
                b=(a/600*100).toFixed(0);
            }
            document.getElementById('percent').innerHTML=b+"%";
            $('.load-precess').text(b+"%")
            document.getElementById('percent').style.left=a-30+"px";
            // document.getElementById('msg').innerHTML="上传中";
            // if(document.getElementById('percent').innerHTML=="100%") {
            //     clearInterval(si);
            //     document.getElementById('msg').innerHTML="&nbsp;&nbsp;成功";
            // }
        },70);
};



function progressset() {
    setTimeout(
        function(){
            $('.jiazai-flow').fadeOut()
        },0);
}
function progresssetbody() {
    $('#alldelete').css('display','none')
    setTimeout(
        function(){
            $('#alldelete').css('display','block')
        },6000);
}
