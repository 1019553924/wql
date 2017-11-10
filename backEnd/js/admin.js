// 该文件的功能是用来写首页的js交互的

// 1.进度条
// 不要让进度条显示圆圈
NProgress.configure({ showSpinner: false });

// $.ajax({
  // type:请求方式
  // url: 请求地址
  // data 请求数据
  // beforesend:function(){} 请求开始时的方法
  // success:function(){}  请求成功时的回调
  // error:function(){} 失败时的回调
  // complete:function(){} 无论成功还是失败都会调用的一个方法
// })

// ajax全局事件
// $().ajaxStart() 代表ajax调用开始
// $().ajaxComplete()代表ajax调用完成

// 全局监听 当页面中某一个ajax请求发起的时候  让进图条开始
$(window).ajaxStart(function(){
  NProgress.start();
})

// 当ajax请求完成的时候 让进度条完成
$(window).ajaxComplete(function(){
  NProgress.done();
})

$('[data-menu]').on('click',function(){
    $('.lt-aside').toggle();
    $('.lt-section').toggleClass('menu');
})

// 3.功能： 点击分类管理 滑出 菜单
$('.lt-aside .menu').on('click','[href="javascript:;"]',function(){
  // console.log(1);
  var _this = $(this);

  var child = _this.siblings();
  // console.log(child);
  child.slideToggle();
});
// 4.退出
$('[data-logout]').on('click',function(){
  var logoutModal =
  '<div class="modal fade" id="logoutModal">'+
                        '<div class="modal-dialog modal-sm">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
                                    '<h4 class="modal-title">温馨提示</h4>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    '<p class="text-danger"><span class="glyphicon glyphicon-info-sign"></span> 您确定要退出后台管理系统吗？</p>'+
                                '</div>'+
                                '<div class="modal-footer">'+
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
                                    '<button type="button" class="btn btn-primary">确定</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
  $('body').append(logoutModal);
  $('#logoutModal').modal('show');
  $('#logoutModal').off('click','.btn-primary').on('click','.btn-primary',function(){
        /*6.发送退出请求*/
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            data:{},
            dataType:'json',
            success:function(data){
                setTimeout(function(){
                    if(data.success){
                        /*7.退出成功*/
                        location.href = 'login.html';
                    }
                },500);
            }
        });
    });
})