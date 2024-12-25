// 监听滚动事件

window.addEventListener('scroll', function() {
  if (window.scrollY === 0) {
    $(".main-header-outer .top-nav").removeClass("navbg");
    $(".main-header-outer .top-nav-shadow").removeClass("navShadow");
  } else {
    $(".main-header-outer .top-nav").addClass("navbg");
    $(".main-header-outer .top-nav-shadow").addClass("navShadow");
  }
});
function init(){
  if (window.scrollY === 0) {
    $(".main-header-outer .top-nav").removeClass("navbg");
    $(".main-header-outer .top-nav-shadow").removeClass("navShadow");
  } else {
    $(".main-header-outer .top-nav").addClass("navbg");
    $(".main-header-outer .top-nav-shadow").addClass("navShadow");
  }
}
$("#play-btn").on("click",function(){
  window.location.href="./cine.html"
})
init();