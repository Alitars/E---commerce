$(function(){
  var url = new UrlSearch();
  var productid = url.productid;
  console.log(productid);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    type:'get',
    dataType:'json',
    data:{
      productid:productid ,
    },
    success:function(info){
      console.log(info);
      $('.main-container').html(template('main-Tmp',info));
    }
  })
})