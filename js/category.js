$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorytitle',
    type:'get',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template('category-title',info);
      $('.c-title').html(htmlStr);
      // 注册点击事件显示info;
      $('.c-title').on('click','a',function(){
        var id =$(this).data('titleId');
        // console.log(id);
        // 切换类名
        $(this).next().toggleClass('move');
        var content = $(this).next();
        // 再次发送Ajax请求
        $.ajax({
          url:'http://127.0.0.1:9090/api/getcategory',
          type:'get',
          dataType:'json',
          data:{
            titleid:id,
          },
          success:function(info){
            console.log(info);
            content.html(template('category-info',info))
          }
        })
      })
    }
  })



})