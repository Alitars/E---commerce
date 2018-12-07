$(function(){
  var url = new UrlSearch();
  // console.log(url);
  var id= url.categoryid;
  var pageid = 1;
  var pages;
  // console.log(id);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorybyid',
    type:'get',
    dataType:'json',
    data:{
      categoryid:id,
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('lis-Tmp',info);
      $('.li-title').html(htmlStr);
    }
  })

  render();

  function render(page){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getproductlist',
      type:'get',
      dataType:'json',
      data:{
        categoryid:id || 0,//默认id为0页面
        pageid:pageid, //当前页
      },
      success:function(info){
        console.log(info);
        $('.product ul').html(template('pro-Tmp',info));
        pages = Math.ceil(info.totalCount/info.pagesize);//总页数
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
    if(pageid ==1){
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