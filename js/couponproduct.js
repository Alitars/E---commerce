$(function(){
var url = new UrlSearch();
var couponid = url.couponid;

$.ajax({
  url:'http://127.0.0.1:9090/api/getcouponproduct',
  dataType:'json',
  type:'get',
  data:{
    couponid:couponid,
  },
  success:function(info){
    console.log(info);
    $('.info ul').html(template('cou-proTmp',info));
    var infolength = info.result.length;//ajax返回的result数组长度
    // 给li注册点击事件显示遮罩层
    $('.info ul').on('click','li',function(){
      var index= $(this).index();//获取当前下标
      var img = info.result[index].couponProductImg;
      // 获取点击的li的图片
      // 显示遮罩层
      $('.mask').css('display','block');
      $('.i-back').on('click',function(){
        $('.mask').css('display','none');
      });
      $('.mask div').html(img);//根据点击的li更换图片
      // 给右箭头注册点击事件
      $(".mask .i-right").on("click", function () {
        if (index < infolength - 1) {
          index++;
          img = info.result[index].couponProductImg;
          $(".mask div").html(img);
        }
        return false;
      })
      $(".mask .i-left").on("click", function () {
        if (index > 0) {
          index--;
          img = info.result[index].couponProductImg;
          $(".mask div").html(img);
        }
        return false;
      })
    })
  }
})
})