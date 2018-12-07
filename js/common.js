// 点击返回顶部
$('.toTop').click(function () {
  $('html,body').animate({
    scrollTop: '0px'
  }, 500);
});

// 截取地址栏的函数
function UrlSearch(){
  var name ,value;
  var str = location.href;//获取地址栏
  var num = str.indexOf('?');//indexof 判断传的值的位数，从第0项开始算
  str = str.substr(num + 1);//截取第num+1开始后的字符串

  var arr=str.split("&")//如果字符串中有&截取 ，放入数组

  for(var i = 0; i < arr.length ; i++) {
      num = arr[i].indexOf('=');//需要判断是否有num
      //如果num大于0表示有=  如果是-1就是没有
      if(num>0){
        name = arr[i].substring(0,num);//第0位截取到num-1的字符
        value = arr[i].substr(num+1);//截取第num+1开始后的字符串
        this[name]= value;
      }
  }
  

}

