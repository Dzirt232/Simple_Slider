sliderInt = 1;
sliderNext = 2;
play = true;
kn = false;

$(document).ready(function(){
	$('#slider img#1').fadeIn(300);
	startSlider();
});

function startSlider(){
	count = $("#slider img").length;
	loop = setInterval(function(){
		if (sliderNext>count) {
			sliderNext = 1;
			sliderInt = 1;
		}
		$("#slider img").fadeOut(300);
		$("#slider img#"+sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext += 1;
		},3000);
};

function prev(){
	newSlide = sliderInt-1;
	showSlide(newSlide);
};

function next() {
	newSlide = sliderInt+1;
	showSlide(newSlide);
};

function stopLoop(){
	window.clearInterval(loop);
};

function showSlide(id){
	stopLoop();
	if (id>count) {
		id=1;
	} else if (id<1) {
		id=count;
	}
	$("#slider img").fadeOut(300);
	$("#slider img#"+id).fadeIn(300);
	sliderInt = id;
	sliderNext = id+1;
	startSlider();
};

$("#slider  img").hover(
	function()
    {
    	if (play === true && kn===false) {
    		stopLoop();
    		play = false;
    	}
    },
    function()
    {
    	if (play === false && kn===false) {
    		startSlider();
    		play = true;
    	}
    }
 );

$("a").hover(
	function()
{
	$(this).addClass("highlight");
},
function(){
	$(this).removeClass("highlight");
}
);

function knopkapusk(){
	if (play === true) {
		stopLoop();
		$('#knopka').replaceWith('<img id="knopka" src="images/play.png">')
		play = false;
		kn = true;

	} else {
		startSlider();
		$('#knopka').replaceWith('<img id="knopka" src="images/stop.png">')
		play = true;
		kn = false;
	}

};