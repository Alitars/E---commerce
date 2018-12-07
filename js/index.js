$(function(){

// 发送Ajax请求渲染菜单导航
$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getindexmenu',
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr = template('navTmp',info);
    $('.nav ul').html(htmlStr);
    var more = $(".row li[data-id='7']");
    more.on('click',function(){
      // console.log(1);
      //点击切换隐藏
      $('.row li[data-type="1"]').toggle();
    })
  }
})

// 产品发送ajax请求
$.ajax({
  url:'http://127.0.0.1:9090/api/getmoneyctrl',
  type:'get',
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr = template('proTmp',info);
    $('.product ul').html(htmlStr);
  }



})






})