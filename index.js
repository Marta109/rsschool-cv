$(document).ready(function () {
  $(".animated").hover(
    function () {
      $(this).addClass("pulse");
    },
    function () {
      $(this).removeClass("pulse");
    }
  );
});
