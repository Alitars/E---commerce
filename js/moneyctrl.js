$(function () {
  var pageid = 0;
  var pages;
  render();

  function render() {
    // 发送Ajax请求
    $.ajax({
      dataType: 'json',
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid,
      },
      success: function (info) {
        console.log(info);
        var htmlStr = template('proTmp',info);
        $('.product ul').html(htmlStr);
        pages = Math.floor(info.totalCount/info.pagesize);//总页数
        // console.log(pages);
        $("#down").html(template('page',{
            pageid:pageid,
            pages:pages,
          }
        ))
      }
    })
  }
  $('.page2').on('click',function(){
    if(pageid >= pages){
      //直接return 当前页大于总页数

      return;
    }
    pageid++;
    render();
  });

  $('.page1').on('click',function(){
    if(pageid ==0){
      return;
    }
    pageid--;
    render();
  })
  $('#down').on('change',function(){
    pageid = $(this).val();
    render();
  })




})