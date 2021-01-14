$(document).ready(function () {
  initializePage();
});

function projectClick(e) {
  e.preventDefault();
  $(this).css("background-color", "#7fff00");
}

function initializePage() {
  $("#testjs").click(function (e) {
    var h1Element = document.getElementById("change");
    h1Element.innerHTML = "Javascript is connected";
  });

  $("a.thumbnail").click(projectClick);
}
