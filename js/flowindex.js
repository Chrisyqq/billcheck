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

//nouseflow page
    function nouseflow() {
        // $('#timouth').css('display', 'none');
        // $('.flow-timeline').css('display', 'none');
        // $('#leftVersion').css('display', 'none');
        // $('#leftVersion').css('display', 'none');
        // $('.histogram-flow').css('display', 'none');
        // $('.flow-line-chart').css('display', 'none');
        // $('.cucc-noflow').css('display', 'none');
        $('.flow-no-produce').css('display', 'block')
        $('#alldelete').css('display','none')
    }
    function haveuseflow() {

        $('.flow-no-produce').css('display', 'none')
        $('#alldelete').css('display','block')
    }
    // 无流量办理就为1
    var noUse=2;
    if(noUse==1){
        nouseflow();

    }else{

    }

    //nouseflow page
    function jindu() {
        // $('#timouth').css('display', 'none');
        // $('.flow-timeline').css('display', 'none');
        // $('#leftVersion').css('display', 'none');
        // $('#leftVersion').css('display', 'none');
        // $('.histogram-flow').css('display', 'none');
        // $('.flow-line-chart').css('display', 'none');
        // $('.cucc-noflow').css('display', 'none');
        // $('.flow-no-produce').css('display', 'none')


    }

    $("#count-touch-one").click(function () {
        $("#count-list-one").toggle();
        if ($("#count-list-one").is(":hidden")) {
            $("#count-touch-one").removeClass("fa-chevron-circle-up");
            $("#count-touch-one").addClass("fa-chevron-circle-down")
        } else {
            $("#count-touch-one").removeClass("fa-chevron-circle-down");
            $("#count-touch-one").addClass("fa-chevron-circle-up")
        }
    });
    $("#count-list-two").hide();
    $("#count-touch-two").click(function () {
        $("#count-list-two").toggle();
        if ($("#count-list-two").is(":hidden")) {
            $("#count-touch-two").removeClass("fa-chevron-circle-up");
            $("#count-touch-two").addClass("fa-chevron-circle-down")
        } else {
            $("#count-touch-two").removeClass("fa-chevron-circle-down");
            $("#count-touch-two").addClass("fa-chevron-circle-up")
        }
    });
    $("#count-list-three").hide();
    $("#count-touch-three").click(function () {
        $("#count-list-three").toggle();
        if ($("#count-list-three").is(":hidden")) {
            $("#count-touch-three").removeClass("fa-chevron-circle-up");
            $("#count-touch-three").addClass("fa-chevron-circle-down")
        } else {
            $("#count-touch-three").removeClass("fa-chevron-circle-down");
            $("#count-touch-three").addClass("fa-chevron-circle-up")
        }
    });
    //alert flow
    $('#go-whatmouth').click(function () {
        $('#flow-dingou').css('display', 'none');
        $('#flow-whatmouth').css('display', 'block')
    });
    $('#go-whatadd').click(function () {
        $('#flow-dingou').css('display', 'none');
        $('#flow-whatadd').css('display', 'block')
    });
    $('#backone-dingou').click(function () {
        $('#flow-whatmouth').css('display', 'none');
        $('#flow-dingou').css('display', 'block')
    });
    $('#backtwo-dingou').click(function () {
        $('#flow-whatadd').css('display', 'none');
        $('#flow-dingou').css('display', 'block')
    });
    $('.alert-close').click(function () {
        $('.flow-cucc-alert').css('display', 'none')
    });
    $('#flow-banli').click(function () {
        $('#flow-dingou').css('display', 'block')
    });
    $('#go-dingouover').click(function () {
        $('#flow-dingouover').css('display', 'block');
        $('#flow-dingou').css('display', 'none')
    });
    $('#go-flow-dingou').click(function () {
        $('#flow-dingou').css('display', 'block')
    });
    $('.btn-primary-cuccnopro').click(function () {
        $('#flow-dingou').css('display', 'block')
    });
    $('#searchm').click(function(){
        if(a=1){
            $('.flow-cucc-mmyz').css('display','block')
        }else{
            $('.flow-cucc-sjmyz').css('display','block')
        }
    })

    //柱状图
    $('#zhuone').click(function () {
        var choseMouth = $('#zhuone .histogram-flow-neicm').text();
        $('.count-one')[0].innerHTML = choseMouth + "国内手机上网流量";
        $('.count-one')[1].innerHTML = choseMouth + "省内手机上网流量";
        $('.count-one')[2].innerHTML = choseMouth + "本地手机上网流量";
    });
    $('#zhutwo').click(function () {
        var choseMouth = $('#zhutwo .histogram-flow-neicm').text();
        $('.count-one')[0].innerHTML = choseMouth + "国内手机上网流量";
        $('.count-one')[1].innerHTML = choseMouth + "省内手机上网流量";
        $('.count-one')[2].innerHTML = choseMouth + "本地手机上网流量";
    });
    $('#zhuthree').click(function () {
        var choseMouth = $('#zhuthree .histogram-flow-neicm').text();
        $('.count-one')[0].innerHTML = choseMouth + "国内手机上网流量";
        $('.count-one')[1].innerHTML = choseMouth + "省内手机上网流量";
        $('.count-one')[2].innerHTML = choseMouth + "本地手机上网流量";
    });

    //timeline
    $('#leftVersion').click(function (event) {
        alert($('.xq-numberleft').text());
        event.preventDefault();
        $('#vertical-timeline').toggleClass('center-orientation');
        if ($('#vertical-timeline').hasClass('center-orientation')) {
            $('#timeone .vertical-timeline-iconm').html("");
            $('#timethree .vertical-timeline-iconduanxin').html("");
            $('#timefour .vertical-timeline-iconm').html("")
        } else {
            var aa = $('#timeone .vertical-timeline-tou').text();
            var cc = $('#timethree .vertical-timeline-tou').text();
            var dd = $('#timefour .vertical-timeline-tou').text();
            $('#timeone .vertical-timeline-iconm').html(aa);
            $('#timethree .vertical-timeline-iconduanxin').html(cc);
            $('#timefour .vertical-timeline-iconm').html(dd)
        }

    });

//select flow
//     $('#positionGroup <label>').click(function () {
//
//         $('#positionGroup <label>').css('background','#5ebadd')
//         $('#positionGroup <label>').css('color','#ffffff')
//
//     });

//phonenumber hide
    $('.flow-login-hl').click(function () {
        if ($('.flow-login-hl').hasClass('flow-login-active')) {

        } else {
            $('.flow-login-hl').addClass('flow-login-active');
            $('.flow-login-hr').removeClass('flow-login-active');
            $('.m-flow-gnfw').css('display', 'block');
            $('.m-flow-gnsuiji').css('display', 'none')
        }
    });


//chats
    $('.flow-line-tishiyc').click(function(){
        $('canvas' ).css('width','1300px')
        $('canvas' ).css('left','0px')
        $('.flow-line-tishi').css('display','none')
    })

//jindutiao
    var jiazaih=$(window).height()-150

    if($(window).width()>='1170'){
        $('.jiazai-flow').css('height','710px')
    }else{

        $('.jiazai-flow').css('height',jiazaih)
    }
    // processerbarq(3000)
    // processerbarh(2000)
    // progresssetbody()
    //点击select
    $('#pid').bind('change',function () {
        $('.jiazai-flow').css('display','block')
        $("#line").css('width','0px')
        processerbarq(3000)
        processerbarh(2000)
        progressset();
        progresssetbody();

    })
});
