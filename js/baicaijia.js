$(function(){
  render(0);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType:'json',
    type:'get',
    success:function(info){
      console.log(info);
      $('.con-pro .topper .pro-title ul').html(template('pro-title',info));
      ;
      var lis = $('.con-pro .topper .pro-title ul li');
      lis.eq(0).children("a").addClass("active");
      var liwidth= 0;
      lis.each(function(i,v){
        liwidth += $(this).width();
        $(this).on('click',function(){
          $(this).siblings().children().removeClass('active');
          $(this).children('a').addClass('active');

          // 获取自定义id
          var id = $(this).data('id');
          render(id);
        })
      })
      $('.con-pro .topper .pro-title ul').width(liwidth+1)
      // 插件
      new IScroll('.pro-title', {
        scrollY: false,
        scrollX: true
      })
    }
  })

  function render(id){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      dataType:'json',
      type:'get',
      data:{
        titleid:id,
      },
      success:function(info){
        console.log(info);
        $('.pro-content ul').html(template('pro-detail',info))
      }
    })
  }
})