$(function(){
  var url = new UrlSearch();
  var brandtitleid = url.brandtitleid;
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrand',
    dataType:'json',
    type:'get',
    data:{
      brandtitleid:brandtitleid,
    },
    success:function(info){
      console.log(info);
      $('.product-detail ul').html(template('hot-pro',info));
      $(".product-detail ul .num").eq(0).css("backgroundColor", "#f10f0f");
      $(".product-detail ul .num").eq(1).css("backgroundColor", "#ff9315");
      $(".product-detail ul .num").eq(2).css("backgroundColor", "#8adf5b");
    }
  })

  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    dataType:'json',
    type:'get',
    data:{
      brandtitleid:brandtitleid,
      pagesize:4,
    },
    success:function(info){
      console.log(info);
      $('.product ul').html(template('product-num',info));
      var firstId = $('.product ul li').eq(0).data('id');
      var proImg = $('.product ul li:eq(0) img').attr('src');//获取第一个产品的图片地址
      var proTxt=$('.product ul li:eq(0) .info .title').text();//获取第一个产品的内容
      $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        type:'get',
        dataType:'json',
        data:{
          productid:firstId,
        },
        success:function(info){
          console.log(info);
          // 把值给到info,判断info
          if(info){
            var result = info.result;
            console.log(result);//遍历数组
            result.forEach(function(v,i){
              v.txt=proTxt;
              v.img=proImg;
            })
          }
          // 渲染
          $('.new-comment ul').html(template('comm-Tmp',info));
        }
      })
    }
  })

  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandtitle',
    dataType:'json',
    type:'get',
    success:function(info){
      console.log(info);
      var str = info.result[brandtitleid].brandTitle;
      var name =str.substring(0,str.length-4);
      console.log(name);
      $('.hot-pro p span').text(name);
    }
  })

})