$(document).ready(function()
{
	var move1 = false
	$(".btn_brad").click(function()
		{
			if (!move1)
			{	
				$(".btn_brad").animate({"margin-top": '0%'}, 400);
				$(".btn_web").animate({"margin-top": '110%'}, 400);
				$(".btn_dgraf").animate({"margin-top": '110%'}, 400);
				$(".btn_mdig").animate({"margin-top": '110%'}, 400);
				move1 = true
				move2 = false
				move3 = false
				move4 = false
			}
			else{
				$(".btn_brad").animate({"margin-top": '110%'}, 400);
				move1 = false
			}
	})

	var move2 = false
	$(".btn_web").click(function()
		{
			if (!move2)
			{	
				$(".btn_brad").animate({"margin-top": '110%'}, 400);
				$(".btn_web").animate({"margin-top": '0%'}, 400);
				$(".btn_dgraf").animate({"margin-top": '110%'}, 400);
				$(".btn_mdig").animate({"margin-top": '110%'}, 400);
				move1 = false
				move2 = true
				move3 = false
				move4 = false
			}
			else{
				$(".btn_web").animate({"margin-top": '110%'}, 400);
				move2 = false
			}
	})

	var move3 = false
	$(".btn_dgraf").click(function()
		{
			if (!move3)
			{	
				$(".btn_brad").animate({"margin-top": '110%'}, 400);
				$(".btn_web").animate({"margin-top": '110%'}, 400);
				$(".btn_dgraf").animate({"margin-top": '0%'}, 400);
				$(".btn_mdig").animate({"margin-top": '110%'}, 400);
				move1 = false
				move2 = false
				move3 = true
				move4 = false
			}
			else{
				$(".btn_dgraf").animate({"margin-top": '110%'}, 400);
				move3 = false
			}
	})

	var move4 = false
	$(".btn_mdig").click(function()
		{
			if (!move4)
			{	
				$(".btn_brad").animate({"margin-top": '110%'}, 400);
				$(".btn_web").animate({"margin-top": '110%'}, 400);
				$(".btn_dgraf").animate({"margin-top": '110%'}, 400);
				$(".btn_mdig").animate({"margin-top": '0%'}, 400);
				move1 = false
				move2 = false
				move3 = false
				move4 = true
			}
			else{
				$(".btn_mdig").animate({"margin-top": '110%'}, 400);
				move4 = false
			}
	})
});