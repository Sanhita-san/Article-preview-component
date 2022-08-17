check();

$(window).resize(function () {
  check();
});

function check() {
  if ($("#card").width() === 350) {
    shareMobile();
  } else if ($("#card").width() === 800) {
    shareDesktop();
  }
}

function shareMobile() {
  $("#share-btn").click(function () {
    $("#share").toggleClass("clicked");
  });
}

function shareDesktop() {
  $("#share-btn").click(function () {
    $(this).toggleClass("clicked");
  });
  // $("#share-btn").hover(function () {
  //   $("#share").toggleClass("clicked");
  // });
}
