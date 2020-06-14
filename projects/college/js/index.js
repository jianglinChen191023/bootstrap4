$(function () {
  // alert(0);
  // 轮播图
  $(window).on('resize', () => {
    settings.carousel();
  }).trigger('resize');

  // 添加轮播图的滑动
  let startX = 0, endX = 0;
  let carouselInner = $('#lk_carousel .carousel-inner')[0];
  // console.log(carouselInner);
  let $carousel = $('#lk_carousel');

  carouselInner.addEventListener('touchstart', e => {
    startX = e.targetTouches[0].clientX;
    // console.log(startX);
  });

  carouselInner.addEventListener('touchmove', e => {
    endX = e.targetTouches[0].clientX;
    if (endX - startX > 0) {
      // 上一张
      $carousel.carousel('prev');
    } else if (endX - startX < 0) {
      // 下一张
      $carousel.carousel('next');
    }
  });

  // 超出内容处理
  $(window).on('resize', () => {
    let $ul = $('#lk_product .nav');
    let $allLis = $('.nav-item', $ul);
    // console.log($allLis);
    // 所有li的宽度
    let totalW = 0;
    $allLis.each((index, item) => {
      totalW += $(item).width();
    })
    // console.log(totalW);

    // 获取父标签的宽度
    let parentW = $ul.parent().width();
    // console.log(parentW);
    if (totalW > parentW) {
      $ul.css({
        width: totalW + 'px'
      })
    } else {
      $ul.removeAttr('style');
    }

  }).trigger('resize')

  // 工具提示
  $('[data-toggle="tooltip"]').tooltip();
});

let settings = {
  carousel: function () {
    // 获取窗口的宽度
    let clientW = $(window).width();
    // 设置临界点
    let isShowBigImage = clientW >= 900;
    // 获取所有的item
    let $allItems = $('#lk_carousel .carousel-item');
    // 遍历
    $allItems.each((index, item) => {
      // console.log(item);
      // 取出图片的路径
      let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
      // console.log(src);
      let imgUrl = `url(${src})`;
      // console.log(imgUrl);
      // 设置背景
      $(item).css({
        backgroundImage: imgUrl
      });

      // 创建img标识
      if (!isShowBigImage) {
        // 小屏幕
        let imgEle = `<img src="${src}">`;
        $(item).empty().append(imgEle);
      } else {
        // 大屏幕
        $(item).empty();
      }
    });
  }
}

























































