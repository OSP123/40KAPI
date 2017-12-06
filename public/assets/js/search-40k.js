$(".dropdown-menu > li").on("click", function(event) {

  event.preventDefault();
  let faction = $(this).text();
  let encodeFaction = encodeURI(faction);

  $.get(`https://raw.githubusercontent.com/BSData/wh40k/master/${encodeFaction}.cat`, function(data) {
    console.log(data);
    // if (data) {
    //   $("#stats").show();
    //   $("#name").text(data.name);
    //   $("#role").text(data.role);
    //   $("#age").text(data.age);
    //   $("#force-points").text(data.forcePoints);
    // }
    // else {
    //   $("#name").text("The force is not strong with this one. Your character was not found.");
    //   $("#stats").hide();
    // }
  });
});