$(".dropdown-menu > li").on("click", function(event) {

  event.preventDefault();
  let faction = $(this).text();
  let encodeFaction = encodeURI(faction);

  $.get(`/apis/searchCodex/${encodeFaction}`, function(data) {
    console.log(data);
  });
});