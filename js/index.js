var listpage = $('.list_page');
var bottomContainer = $('.bottom_container');
listpage.on('click', function () {

    listpage.removeClass('active');
    $(this).addClass('active');

    var tag = $(this).attr('ceshi');
    bottomContainer.removeClass('active');
    $('#' + tag).addClass('active');
})

// function gethash() {
//     var hash = window.location.hash;
//     var hahss = hash.split('#')[1];
//     if (hahss == undefined) {
//         hahss = 'shouye';
//     }
//     console.log(hahss);
//     $('li[ceshi="' + hahss + '"]').trigger('click');
// }

//收费服务
var shoufeifuwuList = $('.shoufeifuwu_list');
var shoufeifuwuContainer = $('.shoufeifuwu_container');
var ss = '#quantao';
shoufeifuwuList.on('click', function () {
    shoufeifuwuList.removeClass('active');
    $(this).addClass('active');

    var tianjia = $(this).attr('tianjia');
    shoufeifuwuContainer.removeClass('active');
    $('#' + tianjia).addClass('active');
  if(tianjia=='shenqing')
  {
      ss = '#shenqing';
       lanshou(ss);
  }
  if(tianjia=='quantao')
  {
      ss='#quantao';
      lanshou(ss);
      
  }
  console.log(ss);
})

var contentSelectSchool = 1;
var demoSelectSchool = '';
var contentshow = 1;
   // var shoufeiId = s.id;
    function addSelectSchool() {
        if (contentSelectSchool <= 10) {
            contentshow++;
            contentSelectSchool++;
            console.error(contentshow);
            console.error(contentSelectSchool);
            if ($(ss + " .mubiaoxuexiao-list-" + contentSelectSchool).length > 0) {
                contentSelectSchool++;
            }
            demoSelectSchool = `
    <div class="mubiaoxuexiao-select-container mubiaoxuexiao-list-` + contentSelectSchool + `" style="margin-left:82px;">
        <select class="charge_select">
            <option value="1" class="selectCountry" disabled selected>请选择国家</option>
            <option value="china">中国</option>
            <option value="us">美国</option>
            <option value="uk">英国</option>
            <option value="fr">法国</option>
         </select>
    <span class="select-down">∨</span>
    <input type="text" placeholder="请填写学校名" class="targetSchool">
    <span class="glyphicon glyphicon-minus-sign minus-` + contentSelectSchool + `" onclick="minusSelectSchool(` + contentSelectSchool + `)"></span>
    <span class="glyphicon glyphicon-plus-sign plus-` + contentSelectSchool + `" onclick="addSelectSchool()"></span>
    </div>
    `
            $(ss + ' .SelectSchool').append(demoSelectSchool);

            $(ss + ' .plus-' + (contentSelectSchool - 1) + '').css('display', 'none');
        }
        if (contentSelectSchool == 10) {
            $(ss + ' .plus-' + contentSelectSchool + '').css('display', 'none');
        }

    }

    function minusSelectSchool(e) {

        if ($(ss + " .plus-" + e).css("display") == "inline-block" || e == 10) {
            for (var i = contentSelectSchool - 1; i > 1; i--) {
                if ($(ss + " .plus-" + i).css("display") == "none") {
                    $(ss + " .plus-" + i).css("display", "inline-block");
                    break;
                }
            }
        }
        if (e != 1) {
            $(ss + " .mubiaoxuexiao-list-" + e).remove();
            contentshow--;
            contentSelectSchool--;
        }
        if (contentshow == 1) {
            console.log('xx');
            contentSelectSchool = 1;
            $(ss + " .plus-1").css("display", "inline-block");
        }
    }
    $(ss + ' .select-down1').click(function () {
        $(ss + ' .charge-select-1').click();
    })
    //添加本地文件
    function lanshou(ss){
console.log(222);
    $(ss+' .tianjia').click(function () {
    console.log(1111);
        const father = $(this).parent().parent()[0];
        console.log(father);
        const LocalFileName = $(father).find('.Local-file-name');
        const tianjiaziliao = $(father).find('.tianjiaziliao');
        const shanchu = $(father).find('.shanchu');
        const tianjia = $(father).find('.tianjia');
        tianjiaziliao.click();
        $(tianjiaziliao).on('change', function (e) {

            const files = e.target.files[0].name;
            console.log(files);
            $(LocalFileName).html(files);
            console.log($(this));
            $(tianjia).css('display', 'none');
            $(shanchu).css('display', 'block');

        })
        //console.log(LocalFileName);

    })
    $(ss + ' .shanchu').click(function () {
        const father = $(this).parent().parent()[0];
        const LocalFileName = $(father).find('.Local-file-name');
        const tianjiaziliao = $(father).find('.tianjiaziliao');
        const shanchu = $(father).find('.shanchu');
        const tianjia = $(father).find('.tianjia');
        $(shanchu).css('display', 'none');
        $(tianjia).css('display', 'block');
        $(LocalFileName).html('本地文件名');
        $(tianjiaziliao).val('');

    })

    $(ss + ' .bendiliulan-input-2').click(function () {
        $(ss+' .bendiliulan-file-2').click();
        $(ss+' .bendiliulan-file-2').on('change',function(e){
            const files = e.target.files[0].name;
            $('.bendiliulan-input-2').val(files);
            console.log(files);
        })

    })

    $(ss + ' .bendiliulan-input-1').click(function () {
        $(ss+' .bendiliulan-file-1').click();
        $(ss+' .bendiliulan-file-1').on('change', function (e) {
            const files = e.target.files[0].name;
            $('.bendiliulan-input-1').val(files);
            console.log(files);
        })
        console.log(1);
    })
        
}
lanshou(ss);


//免费服务
// var canvas1 = document.getElementsByClassName('canvas')[0];
// var context = canvas1.getContext('2d');
// var cw = canvas1.width = 500;
// var ch = canvas1.height = 50;
// canvas1.style.backgroundColor = "black";
// function drawLittleSquare(x,y,side){
//     context.beiginPath();
//     context.moveTo(x,y);
//     context.lineTo()
//     context.closePath();
// }
// drawLittleSquare();

//留学指南
var StudyGuideDirection = $('.study_guide_direction');
var StudyGuideArticle = $('.study_guide_container_content_article')
StudyGuideDirection.on('click',function(){
    StudyGuideDirection.removeClass('active');
    $(this).addClass('active');

    const demo = $(this).attr('xuanze');
    StudyGuideArticle.removeClass('active');
    $("#"+demo).addClass('active');
})

//文章件数详情部分
//就是完美 无敌 帅气 这个很有用
 $('.details').on('click',function(){
     const details = $(this);
    const h5Details =  $(this).parent().find('h5');
    h5Details.css('overflow','visible');
    h5Details.css('white-space','normal');
    $(this).css('display','none');
//    console.log(h5Details.after());
   h5Details.addClass('detailsText');
   const detailsText = $(this).parent().find('.detailsText');
   $(detailsText).on('click',function(){
    //    console.log(h5Details);
       h5Details.css('overflow','hidden');
       h5Details.css('white-space','nowrap');
       $(details).css('display','inline-block');
   })
 })

var GuideArticleH4 = $('.GuideArticleTitle');
var SchoolArticle = $('.schoolArticle')
GuideArticleH4.on('click',function(){
    const GuideArticle = $(this).attr('guidearticle');
    //console.log(GuideArticle);
   $('#'+GuideArticle).addClass('active');
    $('.study_guide_article_list').css('display','none');
    $('.liuxuezhinan').on('click',function(){
        $('.study_guide_article_list').css('display','block');
        $('#'+GuideArticle).removeClass('active');
    })
})