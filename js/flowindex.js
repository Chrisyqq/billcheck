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
    //mouth-histogram star

    var mouthNumber=[120,565,2000,10,52,110]; //six mouth phone fee
    var mouthNo=[12,1,2,3,4,5]; //one by one mouth
    var level=100; //level phone fee
    var maxN=Math.max.apply(null,mouthNumber); //max among number
    // web
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
            var onemaxH=Math.ceil(mouthNumber[0]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-one .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-one .level').css({'display':'block','height':levelHeight});
            }else{
                $('.mouth-one .more').css({'height':onemaxH,'background':'#ff1e3e'});
                $('.mouth-one .level').css({'display':'block','height':levelHeight});
            }
        }else {
            var onemaxH=Math.ceil(mouthNumber[0]/maxHeight*100)*1.6;
            $('.mouth-one .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[1]>level){
            var onemaxH=Math.ceil(mouthNumber[1]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-two .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-two .level').css({'display':'block','height':levelHeight});
            }else {
                $('.mouth-two .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-two .level').css({'display':'block','height':levelHeight});
            }
        }else {
            var onemaxH=Math.ceil(mouthNumber[1]/maxHeight*100)*1.6;
            $('.mouth-two .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[2]>level){
            var onemaxH=Math.ceil(mouthNumber[2]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-three .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-three .level').css({'display':'block','height':levelHeight});
            }else {
                $('.mouth-three .more').css({'height':onemaxH,'background':'#ff1e3e'});
                $('.mouth-three .level').css({'display':'block','height':levelHeight});
            }
        }else {
            var onemaxH=Math.ceil(mouthNumber[2]/maxHeight*100)*1.6;
            $('.mouth-three .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[3]>level){
            var onemaxH=Math.ceil(mouthNumber[3]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-four .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-four .level').css({'display':'block','height':levelHeight});
            }else{
                $('.mouth-four .more').css({'height':onemaxH,'background':'#ff1e3e'});
                $('.mouth-four .level').css({'display':'block','height':levelHeight});
            }

        }else {
            var onemaxH=Math.ceil(mouthNumber[3]/maxHeight*100)*1.6;
            $('.mouth-four .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[4]>level){
            var onemaxH=Math.ceil(mouthNumber[4]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-five .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-five .level').css({'display':'block','height':levelHeight});
            }else {
                $('.mouth-five .more').css({'height':onemaxH,'background':'#ff1e3e'});
                $('.mouth-five .level').css({'display':'block','height':levelHeight});
            }
        }else {
            var onemaxH=Math.ceil(mouthNumber[4]/maxHeight*100)*1.6;
            $('.mouth-five .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
        if(mouthNumber[5]>level){
            var onemaxH=Math.ceil(mouthNumber[5]/maxHeight*100)*1.6;
            if(onemaxH==levelHeight){
                $('.mouth-six .more').css({'height':onemaxH+1,'background':'#ff1e3e'});
                $('.mouth-six .level').css({'display':'block','height':levelHeight});
            }else {
                $('.mouth-six .more').css({'height':onemaxH,'background':'#ff1e3e'});
                $('.mouth-six .level').css({'display':'block','height':levelHeight});
            }
        }else {
            var onemaxH=Math.ceil(mouthNumber[5]/maxHeight*100)*1.6;
            $('.mouth-six .more').css({'height':onemaxH,'background':'#12b7f5'});
        }
    }else {
        //wap
        var maxWidth=Math.ceil(maxN/0.9);
        var maxWidthscreenW=Math.ceil($(window).width()*0.8*0.9);
        var levelWidth=Math.ceil(level/maxWidth*160);
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
            var onemaxW=Math.ceil(mouthNumber[0]/maxWidth*maxWidthscreenW);
            $('.mouth-one .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-one .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[0]/maxWidth*maxWidthscreenW);
            $('.mouth-one .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
        if(mouthNumber[1]>level){
            var onemaxW=Math.ceil(mouthNumber[1]/maxWidth*maxWidthscreenW);
            $('.mouth-two .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-two .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[1]/maxWidth*maxWidthscreenW);
            $('.mouth-two .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
        if(mouthNumber[2]>level){
            var onemaxW=Math.ceil(mouthNumber[2]/maxWidth*maxWidthscreenW);
            $('.mouth-three .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-three .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[2]/maxWidth*maxWidthscreenW);
            $('.mouth-three .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
        if(mouthNumber[3]>level){
            var onemaxW=Math.ceil(mouthNumber[3]/maxWidth*maxWidthscreenW);
            $('.mouth-four .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-four .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[3]/maxWidth*maxWidthscreenW);
            $('.mouth-four .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
        if(mouthNumber[4]>level){
            var onemaxW=Math.ceil(mouthNumber[4]/maxWidth*maxWidthscreenW);
            $('.mouth-five .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-five .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[4]/maxWidth*maxWidthscreenW);
            $('.mouth-five .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
        if(mouthNumber[5]>level){
            var onemaxW=Math.ceil(mouthNumber[5]/maxWidth*maxWidthscreenW);
            $('.mouth-six .more').css({'width':onemaxW,'background':'#ff1e3e'});
            $('.mouth-six .level').css({'display':'block','width':levelWidth});
        }else {
            var onemaxW=Math.ceil(mouthNumber[5]/maxWidth*maxWidthscreenW);
            $('.mouth-six .more').css({'width':onemaxW,'background':'#12b7f5'});
        }
    }
    //password yanzheng
    $('.select-serve-password .serve').click(function () {
        $('.servepassword').css('display','block');
        $('.suijipassword').css('display','none');
        if($(this).hasClass('active')){
            $('#suiji').css('display','block')
        }else{
            $('.select-serve-password .random').removeClass('active');
            $('.select-serve-password .serve').addClass('active');
        }
    });
    $('.select-serve-password .random').click(function () {
        $('.servepassword').css('display','none');
        $('.suijipassword').css('display','block');
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
    $('#flow-search-number').focus(function () {
        if($('.search-xiala').css('display')=="none"){
            $('.search-xiala').css('display','block');
        }else{
            
        }
    });
    $('#flow-search-number').blur(function () {
        setTimeout(function () {
            $('.search-xiala').css('display','none');
        },250);
    });
    $('.search-xiala p').click(function () {
        alert($(this).text());
    });
    // $('#flow-search-number').blur(function () {
    //     if($('.search-xiala').css('display')=="none"){
    //
    //     }else{
    //
    //     }
    // });

    //bill-check-chose
    var herflink;
    $('#voicedetail').click(function () {
        if($('.right-detail-bill').css('display')=="none"){
            $('.right-detail-bill').css('display','block');
            $('.right-bill-check').css('display','none')
            $('#detailverify').css('display','block');
        }else {
            $('#detailverify').css('display','block');
        }
        herflink="http://www.baidu.com";
    });
    $('#internetdetail').click(function () {
        if($('.right-detail-bill').css('display')=="none"){
            $('.right-detail-bill').css('display','block');
            $('.right-bill-check').css('display','none');
            $('#detailverify').css('display','block');
        }else {
            $('#detailverify').css('display','block');
        }
        herflink="index.html";
    });
    $('#messagedetail').click(function () {
        if($('.right-detail-bill').css('display')=="none"){
            $('.right-detail-bill').css('display','block');
            $('.right-bill-check').css('display','none');
            $('#detailverify').css('display','block');
        }else {
            $('#detailverify').css('display','block');
        }
        herflink="urgentstart.html";
    });
    $('#billsearch').click(function () {
        if($('.right-bill-check').css('display')=="none"){
            $('.right-bill-check').css('display','block');
            $('.right-detail-bill').css('display','none');

        }
    });
    $('#detailbill').click(function () {
        if( $('.right-detail-bill').css('display')=="none"){
            $('.right-detail-bill').css('display','block');
            $('.right-bill-check').css('display','none');
        }
    });

    //inquiry goto page
    $('#inquiry').click(function () {
        var a=1;
       if(a==1){
           window.iframecucc.window.location.href=herflink;
       }
    });

    // close
    $('.close').click(function () {
        $('.close').parent().parent().css('display','none')
    });
    processerbarq(6000);
    processerbarh(3000);
    //    
})();