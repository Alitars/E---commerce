$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcoupon',
    dataType:'json',
    type:'get',
    success:function(info){
      console.log(info);
      $('.coupon ul').html(template('couponTmp',info));
    }
  })
})