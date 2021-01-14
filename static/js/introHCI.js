$(document).ready(function () {
  initializePage();
});
function initializePage() {
  $("#testjs").click(function (e) {
    alert("Javascript is connected");
    $(".jumbotron h1").text("Javascript is connected");
  });
}
