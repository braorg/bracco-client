$(document).ready(function() {
  /* Javascript */
  $(function () {
  	var date = new Date();
  	var d = date.getDate();
  	var m = date.getMonth();
  	var y = date.getFullYear();

  	$('#calendar').fullCalendar({
  		header: {
  			left: 'prev,next today',
  			center: 'title',
  			right: 'month,agendaWeek,agendaDay'
  		},
      dayClick: function() {
        alert('a day has been clicked!');
      },
      weekends: false, // will hide Saturdays and Sundays
  		editable: true,

  	});
  });

  $("#btn-mobile").click(function(){
    // $(".main-container").toggleClass("margin-left50").delay(800);
    $(".sidebar").toggleClass("animated fadeInLeft");
  });

})
