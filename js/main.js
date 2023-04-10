$(document).ready(function () {
  $(".first-list-element").addClass("active");
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#toggler").click(function () {
    $("#wrap").toggleClass("toggled");
    var vRight = $(".sidebar").css("right");
    if (vRight == "0px") {
      $(".sidebar").css({ right: "-17rem" });
      $(".layer").fadeOut();
    } else {
      $(".sidebar").css({ right: "0rem" });
      $(".layer").fadeIn();
    }
  });
  $(".layer").click(function () {
    $(".sidebar").css({ right: "-17rem" });
    $(".layer").fadeOut();
  });

  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });

  $("#enter").click(function () {
    var userName = $("#email").val();
    var userPass = $("#password").val();

    if (userName && userPass) {
      localStorage.setItem("userName", userName);

      localStorage.setItem("userPass", userPass);
    } else {
      $("#email").addClass("alert alert-danger");
      $("#password").addClass("alert alert-danger");
    }

    if (userName && userPass) {
      localStorage.setItem("userName", userName);

      localStorage.setItem("userPass", userPass);

      $("#loginModel").hide();
      $(".modal-backdrop").hide();

      $("body").css("padding-right", "0px");
      $("body").css("overflow", "auto");

      $("#login").text("اعادة ضبط الحساب");
    }
  });
});
