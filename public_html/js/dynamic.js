$(document).ready(
	function(){
		// var slideIndex = 1;
		// showImages(slideIndex);

		// function currentDiv(n){
		// 	showImages(slideIndex = n);
		// }

		// function showImages(n){
		// 	var i;
		// 	if(n > image.length) {slideIndex=1}
		// 	if(n < 1){slideIndex=iamge.length}
		// 	for (i=0; i<image.length; i++){
		// 		image[i].className = image[i].className.replace(".image-swap-selected", "");
		// 	}
		// 	image[slideIndex-1].className += ""

		// }

		$(".image-swap").click(
			function(clickEvent){
				clickEvent.preventDefault();
				var image = $(this).attr("href");
				$(".image-swap-area").attr("src", image); 
				var image = document.getElementsByClassName(".image-swap");

				// var imageClass = document.getElementsByClassName(".image-swap").className;
				// image.className = image.className.replace(".image-swap-selected", "");
				// $(".image-swap").addClass('.image-swap-selected')
			}
		);

		$(".button-addToCart").click(
			function(clickEvent){
				clickEvent.preventDefault();
				var itemAdded = $(this).attr("href");
				$("#icon-cart").attr("src", itemAdded);
				document.getElementById("cartButton").innerHTML = "Added!";
			}
		);
	}
)