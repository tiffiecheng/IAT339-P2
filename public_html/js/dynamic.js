$(document).ready(
	function(){

		$(".image-swap").click(

			function(clickEvent){
				clickEvent.preventDefault();
				var image = $(this).attr("href");
				$(".image-swap-area").attr("src", image); 
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