/**
 * Created by ym-zrl on 16/6/12.
 */
$(document).ready(function () {
    $("#flow-search-number").val("输入需要查询的手机号");
    $("#flow-search-number").click(function () {
        if ($("#flow-search-number").val() == "输入需要查询的手机号") {
            $("#flow-search-number").val("");
        }
    });


});
(function () {
    //mouth-histogram
    var mouthNumber=[120,565,200,2,52,36];
    var mouthNo=[12,1,2,3,4,5];
    var level=100;
    var maxN=Math.max.apply(null,mouthNumber);
    var zhuLen=$('.phone-fee-top').children.length;
    if($(window).width()>=1170){
        var maxHeight=Math.ceil(maxN/0.9);
        var levelHeight=Math.ceil(level/maxHeight*160);
        $('.mouth-one .phone-fee-money span').text(mouthNumber[0]);
        $('.mouth-two .phone-fee-money span').text(mouthNumber[1]);
        $('.mouth-three .phone-fee-money span').text(mouthNumber[2]);
        $('.mouth-four .phone-fee-money span').text(mouthNumber[3]);
        $('.mouth-five .phone-fee-money span').text(mouthNumber[4]);
        $('.mouth-six .phone-fee-money span').text(mouthNumber[5]);

        $('.mouth-one .mouth-number span').text(mouthNo[0]);
        $('.mouth-two .mouth-number span').text(mouthNo[1]);
        $('.mouth-three .mouth-number span').text(mouthNo[2]);
        $('.mouth-four .mouth-number span').text(mouthNo[3]);
        $('.mouth-five .mouth-number span').text(mouthNo[4]);
        $('.mouth-six .mouth-number span').text(mouthNo[5]);
        if(mouthNumber[0]>level){
            var onemaxH=Math.ceil(mouthNumber[0]/maxHeight*160);
            $('.mouth-one .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-one .level').css({'display':'block','height':levelHeight});
        }else {
            var onemaxH=Math.ceil(mouthNumber[0]/maxHeight*160);
            $('.mouth-one .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[1]>level){
            var onemaxH=Math.ceil(mouthNumber[1]/maxHeight*160);
            $('.mouth-two .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-two .level').css({'display':'block','height':levelHeight});
        }else {
            var onemaxH=Math.ceil(mouthNumber[1]/maxHeight*160);
            $('.mouth-two .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[2]>level){
            var onemaxH=Math.ceil(mouthNumber[2]/maxHeight*160);
            $('.mouth-three .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-three .level').css({'display':'block','height':levelHeight});
        }else {
            var onemaxH=Math.ceil(mouthNumber[2]/maxHeight*160);
            $('.mouth-three .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[3]>level){
            var onemaxH=Math.ceil(mouthNumber[3]/maxHeight*160);
            $('.mouth-four .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-four .level').css({'display':'block','height':levelHeight});
        }else {
            var onemaxH=Math.ceil(mouthNumber[3]/maxHeight*160);
            $('.mouth-four .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[4]>level){
            var onemaxH=Math.ceil(mouthNumber[4]/maxHeight*160);
            $('.mouth-five .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-five .level').css({'display':'block','height':levelHeight});
        }else {
            var onemaxH=Math.ceil(mouthNumber[4]/maxHeight*160);
            $('.mouth-five .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[5]>level){
            var onemaxH=Math.ceil(mouthNumber[5]/maxHeight*160);
            $('.mouth-six .more').css({'height':onemaxH,'background':'#ff1e3e'});
            $('.mouth-six .level').css({'display':'block','height':levelHeight});
        }else {
            $('.mouth-six .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
    }else {

    }
    //password yanzheng
    $('.select-serve-password .serve').click(function () {
        if($(this).hasClass('active')){
            $('#suiji').css('display','block')
        }else{
            $('.select-serve-password .random').removeClass('active');
            $('.select-serve-password .serve').addClass('active');
            $('#servePassword').css('display','block');
            $('#suijiPassword').css('display','none')
        }
    });
    $('.select-serve-password .random').click(function () {
        if($(this).hasClass('active')){
            $('#suijiPassword').css('display','block')
        }else{
            $('.select-serve-password .random').addClass('active');
            $('.select-serve-password .serve').removeClass('active');
            $('#servePassword').css('display','none');
            $('#suijiPassword').css('display','block');
        }
    });
    //search
    $('#flow-search-number').click(function () {
        if($('.search-xiala').css('display')=="none"){
            $('.search-xiala').css('display','block');
        }else{
            $('.search-xiala').css('display','none');
        }
    });
    $('.search-xiala').click(function () {
        if($('.search-xiala').css('display')=="none"){

        }else {
            $('.search-xiala').css('display', 'none');
        }
    });
    //    
})();