$(function () {
  var shopid=0;
  var areaid = 0;
  // 京东下拉渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    type: 'get',
    success: function (info) {
      console.log(info);
      $(".first .choose").html(template('toptab-shop', info));
      var flag = true;
      var as = $('.con-pro .pro-title .first .nav');
      $(as).eq(0).on('click', function () {
        // console.log(1);
        $(this).next('ul').toggleClass('block'); //切换下拉框
        if (flag) {
          $(this).next("ul").find(".check").eq(0).show(); //默认选中京东
        }
        flag = false;
        $('.area').removeClass('block');
        $('.all-sh').removeClass('block');
        $('.first>.choose li').on('click', function () {
          $(this).each(function (v, i) {
            $('.pro-title .first>.choose li .check').attr('style', 'display:none');
            $('.pro-title .first>.choose').removeClass('block')
            // 获取text 
            var text = $(this).find("a").text();
            $('.first .nav>span').text(text);
            // 渲染
            shopid = $(this).data("id");
            render(shopid, areaid);
          })
          $(this).find('.check').attr('style', 'display:block');
        })
      })
    }
  })


  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    type: 'get',
    success: function (info) {
      console.log(info);
      $(".center .choose").html(template('cate_tmp', info));
      var flag = true;
      var as = $('.con-pro .pro-title .center .nav');
      $(as).eq(0).on('click', function () {
        // console.log(1);
        $(this).next('ul').toggleClass('block'); //切换下拉框
        if (flag) {
          $(this).next("ul").find(".check").eq(0).show(); //默认选中
        }
        flag = false;
        $('.one').removeClass('block');
        $('.all-sh').removeClass('block');
        $('.pro-title .center>.choose li').on('click', function () {
          $(this).each(function (v, i) {
            $('.pro-title .center>.choose li .check').attr('style', 'display:none');
            $('.pro-title .center>.choose').removeClass('block');
            // 获取text 
            var text = $(this).find("a").text();
            var str = text.substring(0, 2);
            $('.center .nav>span').text(str);
            // 渲染
            areaid = $(this).data("id");
            render(shopid, areaid);

          })
          $(this).find('.check').attr('style', 'display:block');
        })
      })
    }
  })



  $('.all a').on('click', function () {
    $(this).next('ul').toggleClass('block');
    $(this).next("ul").find(".check").eq(0).show();
    $('.one').removeClass('block');
    $('.area').removeClass('block');
    $('.pro-title .all>.choose li').on('click', function () {
      $('.pro-title .all>.choose').removeClass('block');
    })

  })

  function render(shopid, areaid) {
    $.ajax({
      url: "http://127.0.0.1:9090/api/getgsproduct",
      data: {
        shopid: shopid,
        areaid: areaid,
      },
      dataType: "json",
      success: function (info) {
        $(".product-list ul").html(template("pro-list", info));
      }
    })
  }
  render(shopid, areaid);











})