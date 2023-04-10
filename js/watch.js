$(document).ready(function () {
  $("#myBtn").click(function () {
    read();
  });

  $(".reply").click(function () {
    $(this).parents("div.row").next("div.card").toggle();
  });

  $("#comment").click(function () {
    let valComment = $("#writeComment").val();
    let vAlert = $("#alert-message").val();

    $("#alert-message").show();

    if (valComment && vAlert) {
      let newComment = $(`<div class="card mt-5 mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-2">
          <img
            src="https://image.ibb.co/jw55Ex/def_face.jpg"
            class="img img-rounded img-fluid" />
          <p class="text-secondary text-center">منذ 40 دقيقة</p>
        </div>
        <div class="col-10">
          <p>
            <a class="float-start mt-3 mt-md-4" href="#">
              <strong>${vAlert}</strong>
            </a>
            <span class="float-end"
              ><i class="text-warning fa fa-star"></i
            ></span>
            <span class="float-end"
              ><i class="text-warning fa fa-star"></i
            ></span>
            <span class="float-end"
              ><i class="text-warning fa fa-star"></i
            ></span>
            <span class="float-end"
              ><i class="text-warning fa fa-star"></i
            ></span>
            <span class="float-end"
              ><i class="text-warning fa fa-star"></i
            ></span>
          </p>
          <div class="clearfix"></div>
          <p>${valComment}</p>
          <p>
            <a
              class="float-start btn text-white btn-info me-2 mt-4 reply">
              <i class="fa fa-reply"></i> الردود</a
            >
            <a class="float-start btn text-white btn-info mt-4">
              <i class="fa fa-heart"></i> أعجبني</a
            >
          </p>
        </div>
      </div>
    </div>
      </div>`);
      $("#public-comment").append(newComment);
      $("#writeComment").val("");
      $("#alert-message").val("");
    }
  });
});

function read() {
  var vDots = document.getElementById("dots");
  var vMoreText = document.getElementById("more");
  var vBtnText = document.getElementById("myBtn");

  if (vDots.style.display === "none") {
    vDots.style.display = "inline";
    vBtnText.innerHTML = "عرض المزيد";
    vMoreText.style.display = "none";
  } else {
    vDots.style.display = "none";
    vBtnText.innerHTML = "عرض عناصر اقل";
    vMoreText.style.display = "inline";
  }
}
