$(function () {
  var url = new UrlSearch();
  var id = url.categoryid;
  var productid = url.productid;
  //  2级导航栏
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    type: 'get',
    dataType: 'json',
    data: {
      categoryid: id,
    },
    success: function (info) {
      console.log(info);
      $('.two').html(template('two-Tmp', info));
    }
  })
  // 3级导航 商品标题图片 tab栏
  $.ajax({
    dataType: 'json',
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: productid
    },
    success: function (info) {
      console.log(info);
      var name = info.result[0].productName.split(" ")[0];
      console.log(name);
      $('.three').html(template('three-tmp', {
        list: name
      }));
      $('.pro-detail').html(template("info-Tmp", info));
      $('.tobuy').html(template('mm-tab', info));
    }
  })

  // 评论区域
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductcom',
    dataType:'json',
    type:'get',
    data:{
      productid:productid,
    },
    success:function(info){
      console.log(info);
      $('.comment-content ul').html(template('comment-tmp',info));
    }
  })


})