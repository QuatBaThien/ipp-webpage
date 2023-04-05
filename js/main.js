(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //facebook-fix-btn
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".fix-btn").fadeIn("slow");
    } else {
      $(".fix-btn").fadeOut("slow");
    }
  });

  // video autoplay
  // $(window).scroll(function() {

  //     //will trigger when your element comes into viewport
  //         var hT = $('about').offset().top,
  //         hH = $('about').outerHeight(),
  //         wH = $(window).height(),
  //         wS = $(this).scrollTop();

  //     if (wS > (hT+hH-wH)){
  //         //appends &autoplay=1 to iFrame src, making it autoplay
  //         var videoUrl = $('aboutvideo').attr('src');
  //         $('aboutvideo').attr('src', "https://www.youtube.com/embed/58K5QL0x6Zo?autoplay=1&mute=0");
  //     }
  // });

  const video = document.getElementById('my-video');
  const videoPosition = document.getElementById('video-position');
  let videoPlayed = false;
  
  if (videoPosition) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > videoPosition.offsetTop && !videoPlayed) {
        video.play();
        video.volume = 1; // bật tiếng
        videoPlayed = true;
      } else if (window.pageYOffset < videoPosition.offsetTop && videoPlayed) {
        video.pause();
        video.muted = true;
        videoPlayed = false;
      }
    });
}

  // Price carousel
  $(".price-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Team carousel
  $(".team-carousel, .related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);

//play when video is visible
var videos = document.getElementsByTagName("iframe-video"),
  fraction = 0.8;

function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = 0,
      y = 0,
      w = video.width,
      h = video.height,
      r, //right
      b, //bottom
      visibleX,
      visibleY,
      visible,
      parent;

    parent = video;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);

    visibleX = Math.max(
      0,
      Math.min(
        w,
        window.pageXOffset + window.innerWidth - x,
        r - window.pageXOffset
      )
    );
    visibleY = Math.max(
      0,
      Math.min(
        h,
        window.pageYOffset + window.innerHeight - y,
        b - window.pageYOffset
      )
    );

    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      playVideo();
    } else {
      pauseVideo();
    }
  }
}


//mutilang
$(function() {
  $(".vi").click(function() {
      //tabbar
      $(".menu").children().eq(0).text("Trang chủ");
      $(".menu").children().eq(1).text("Về chúng tôi");
      $(".menu").children().eq(2).text("Dịch vụ");
      $(".menu").children().eq(3).text("Đối tác");
      $(".menu").children().eq(4).text("Đội ngũ");
      $(".menu").children().eq(5).text("Liên hệ");
      $(".language-selected").text("Ngôn ngữ");

      //Hero
      $(".hero-cap").text("Chào mừng đến với IPP");
      $(".hero-text").text("Cải thiện việc chăm sóc sức khỏe thông qua đổi mói ");
      //about
      $(".about-cap").text("Về chúng tôi");
      $(".about-text").text("Cải thiện việc chăm sóc sức khỏe thông qua thúc đẩy ");
      $(".about-content").text("IPP ra đời với mong muốn thúc đẩy, hỗ trợ các nhà nghiên cứu, startup Việt Nam trong lĩnh vực y dược nhanh chóng tiếp cận nguồn vốn đầu tư, kết nối mạng lưới chuyên gia toàn cầu, tiết kiệm chi phí và thời gian trong suốt quá trình phát triển sản phẩm. được thành lập bởi các nhà khoa học, doanh nhân, nhà đầu tư đổi mới sáng tạo với hơn 20 năm kinh nghiệm đầu tư trên thị trường quốc tế và am hiểu sâu sắc về nghiên cứu khoa học, thị trường và pháp luật, sau một thời gian dài làm việc và nghiên cứu thị trường tại Việt Nam, Chúng tôi nhận ra rằng trong lĩnh vực y học, Việt Nam còn nhiều vấn đề, nhưng với chúng tôi, đó cũng là những cơ hội mang lại giá trị rất lớn, không chỉ về mặt tài chính, mà quan trọng hơn, nếu thành công, chúng tôi có thể tác động tích cực đến hàng triệu người dân ở Việt Nam cũng như trên toàn thế giới, và đó là lý do chúng tôi trở thành những người tiên phong tại Việt Nam với sự ra đời của IPP.");
      document.getElementById("progress-img").src="../img/ideas_vi.png";
      //service
      $(".service-cap").text("Dịch vụ");
      $(".service-text").text("Dịch vụ hấp dẫn");
      $(".service-item-1").text("TƯ VẤN");
      $(".service-item-2").text("NGHIÊN CỨU LÂM SÀN");
      $(".service-item-3").text("THƯƠNG MẠI HÓA");
      $(".service-item-4").text("ĐẦU TƯ");
      $(".service-item-b").text("Đăng kí ngay");
      $(".service-item-content-1").text("Chúng tôi có thể là nhà tư vấn chiến lược, nhà kết nối kinh doanh hoặc đối tác điều hành, tùy thuộc vào nhu cầu của bạn.Tài chính và ngân hàng đầu tư là thế mạnh của chúng tôi.");
      $(".service-item-content-2").text("Phạm vi bao quát và sự hiểu biết sâu sắc của chúng tôi về phát triển thuốc đã khiến chúng tôi trở thành những nhà lãnh đạo địa phương trong nghiên cứu lâm sàng.");
      $(".service-item-content-3").text("Liên hệ với chúng tôi để khám phá các cơ hội sản xuất, phân phối hoặc liên doanh tại Việt Nam hoặc khu vực Đông Nam Á.");
      $(".service-item-content-4").text("Tài chính và ngân hàng đầu tư là thế mạnh của chúng tôi.");
      //journey
      $(".journey-cap").text("Thương mại hóa");
      $(".journey-text").text("Hành trình thương mại hóa");
      //parner
      $(".partner-cap").text("Đối tác");
      $(".partner-text").text("Đối tác uy tín");
      //team
      $(".team-cap").text("Đội ngũ");
      $(".team-text").text("Các chuyên gia có bằng cấp");
      $(".team-item-content-1").text("Giang là một doanh nhân và nhà đầu tư với hơn 25 năm kinh nghiệm, trong đó có hơn 13 năm ở Việt Nam, Ông là người sáng lập Quỹ RDA Việt Nam, một quỹ đầu tư vào Việt Nam có trụ sở tại Boston.");
      $(".team-item-content-2").text("Shawn, Giám đốc điều hành của SM Sino Technology Investment, đã kinh doanh quốc tế hơn 25 năm trong tổng số 32 năm sự nghiệp của mình.");
      $(".team-item-content-3").text("Paul là một doanh nhân, nhà điều hành và cố vấn đáng tin cậy đã được chứng minh cho hội đồng quản trị công ty, chủ doanh nghiệp và các nhà lãnh đạo chính phủ.");
      const linkg = document.getElementById("link-giang");
      linkg.onclick = function() {
        if($("contact-link").text() === "Contact"){
          linkg.setAttribute("href", "team1.html");
        }
        else{
          linkg.setAttribute("href", "vi-team1.html");
        }
      };
      const linkl = document.getElementById("link-lee");
      linkl.onclick = function() {
        if($("contact-link").text() === "Contact"){
          linkl.setAttribute("href", "team2.html");
        }
        else{
          linkl.setAttribute("href", "vi-team2.html");
        }
      };
      const linkp = document.getElementById("link-paul");
      linkp.onclick = function() {
        if($("contact-link").text() === "Contact"){
          linkp.setAttribute("href", "team3.html");
        }
        else{
          linkp.setAttribute("href", "vi-team3.html");
        }
      };
     //footer
      $(".footer-text").text("Đến với chúng tôi");
      $(".footer-content-1").text("27, Hàng Bài, Hà Nội, Việt Nam");
      $(".com-info").text("Thông tin về công ty");
      $(".ft-home").text("Trang chủ");
      $(".ft-about").text("Về chúng tôi");
      $(".ft-service").text("Dịch vụ");
      $(".ft-partner").text("Đối tác");
      $(".ft-team").text("Đội ngũ");
      $(".ft-contacts").text("Liên hệ");
  });
});

//English
// $(function() {
//   $(".en").click(function() {
//       //header
//       $(".nav-menu").children().eq(0).text("Solutions");
//       $(".nav-menu").children().eq(1).text("community");
//       $(".nav-menu").children().eq(2).text("Buy");
//       $(".nav-menu").children().eq(3).text("Log in");
//       $(".language-selected").text("Lanquage")
//       $(".language-selected").removeClass("change-es");
//       $(".language-selected").removeClass("change-br");
//       $(".language-selected").addClass("change-en");
//       //section
//       $("#title").text("A simple webpage with Milti-language option");
//       //About
//       $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
//       $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
//       $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
//       $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
//       $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
//       $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
//   });
// });
