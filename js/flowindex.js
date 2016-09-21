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
    //密码验证
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

    //
})();