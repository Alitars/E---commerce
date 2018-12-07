$(function() {
  var url = new UrlSearch();
  var productid = url.productid;
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getdiscountproduct',
    dataType: 'json',
    type: 'get',
    data: {
      productid: productid
    },
    success: function(info) {
      console.log(info);
      $('.main-container').html(template('main-Tmp',info))
    },
  })
});
