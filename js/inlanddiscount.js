$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getinlanddiscount',
    dataType:'json',
    type:'get',
    success:function(info){
      console.log(info);
      var arr = info.result;
      console.log(arr);
      var str = arr.splice(0,4);//截取前4个li
      console.log(str);
      info.obj = str;
      console.log(info.obj);
      $('.product ul').html(template('discount-Tmp',info));
      // 注册windowscroll事件
      $(window).on('scroll',function(){
        var movelength=$('.product').height()+$('.product').offset().top-$(window).height()-$(window).scrollTop();
        //div盒子高度加盒子距离document的高度减去window的高度和卷曲的距离
        console.log(movelength);
        if(movelength < -100){
          var str =arr.splice(0,2);
          info.obj = str;
          $('.product ul').append(template('discount-Tmp',info));//继续往后添加
        }
      })
    }
  })








})