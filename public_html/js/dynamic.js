$(document).ready(
	function(){

		$(".image-swap").click(

			function(clickEvent){
				clickEvent.preventDefault();

				var image = $(this).attr("href");
				$(".image-swap-area").attr("src", image); // get me the source and ...

			}
		);

	}
)