$(function(){

  $.ajax({
    url:'http://127.0.0.1:9090/api/getsitenav',
    dataType:'json',
    type:'get',
    success:function(info){
      console.log(info);
      $('.nav-info .content ul').html(template('nav-infoTmp',info));
    }
  })
})