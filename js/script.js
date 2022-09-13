jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".c-pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-hamburger").removeClass("is-open");
      $(".js-sp-nav").removeClass("is-open");
      $(".js-mask").removeClass("is-open");
    } else {
      $(".js-hamburger").addClass("is-open");
      $(".js-sp-nav").addClass("is-open");
      $(".js-mask").addClass("is-open");
    }
  });

  // ヘッダー透過、追従時透過しない
  var mvh = $(".js-header-height").height();

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (mvh < top) {
      $(".p-header").css("background-color", "#21054D");
    } else {
      $(".p-header").css("background-color", "transparent");
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});

