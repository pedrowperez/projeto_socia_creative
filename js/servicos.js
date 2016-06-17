$(document).ready(function()
{
	var move1 = false
	$(".btn_brad").click(function()
		{
			if (!move1)
			{	
				$(".btn_brad").animate({"margin-top": '0%', "z-index": '1' }, 400);
				$(".btn_web, .btn_dgraf, .btn_mdig").animate({"margin-top": '70%'}, 400);
				$('.b1, .b2, .b3').animate({"opacity": '1', "z-index": '1'}, 100);
				$('.w1, .w2, .w3, .d1, .d2, .d3, .m1, .m2, .m3').animate({"opacity": '0', "z-index": '0'}, 100);
				$(".btn_brad").css("background", "url(img/servicos_circulo.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move1 = true
				move2 = false
				move3 = false
				move4 = false
			}
			else{
				$(".btn_brad").animate({"margin-top": '70%'}, 400);
				$(".b1, .b2, .b3").animate({"opacity": '0'}, 100);
				$(".btn_brad").css("background", "url(img/servicos_pentagono.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move1 = false
			}
	})

	var move2 = false
	$(".btn_web").click(function()
		{
			if (!move2)
			{	
				$(".btn_web").animate({"margin-top": '0%', "z-index": '1'}, 400);
				$(".btn_brad, .btn_dgraf, .btn_mdig").animate({"margin-top": '70%'}, 400);
				$('.w1, .w2, .w3').animate({"opacity": '1', "z-index": '1'}, 100);
				$('.b1, .b2, .b3, .d1, .d2, .d3, .m1, .m2, .m3').animate({"opacity": '0', "z-index": '0'}, 100);
				$(".btn_web").css("background", "url(img/servicos_circulo.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move1 = false
				move2 = true
				move3 = false
				move4 = false
			}
			else{
				$(".btn_web").animate({"margin-top": '70%'}, 400);
				$(".w1, .w2, .w3").animate({"opacity": '0'}, 100);
				$(".btn_web").css("background", "url(img/servicos_pentagono.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move2 = false
			}
	})

	var move3 = false
	$(".btn_dgraf").click(function()
		{
			if (!move3)
			{	
				$(".btn_dgraf").animate({"margin-top": '0%', "z-index": '1'}, 400);
				$(".btn_brad, .btn_web, .btn_mdig").animate({"margin-top": '70%'}, 400);
				$('.d1, .d2, .d3').animate({"opacity": '1', "z-index": '1'}, 100);
				$('.w1, .w2, .w3, .b1, .b2, .b3, .m1, .m2, .m3').animate({"opacity": '0', "z-index": '0'}, 100);
				$(".btn_dgraf").css("background", "url(img/servicos_circulo.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move1 = false
				move2 = false
				move3 = true
				move4 = false
			}
			else{
				$(".btn_dgraf").animate({"margin-top": '70%'}, 400);
				$(".d1, .d2, .d3").animate({"opacity": '0'}, 100);
				$(".btn_dgraf").css("background", "url(img/servicos_pentagono.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move3 = false
			}
	})

	var move4 = false
	$(".btn_mdig").click(function()
		{
			if (!move4)
			{	
				$(".btn_mdig").animate({"margin-top": '0%', "z-index": '1'}, 400);
				$(".btn_brad, .btn_web, .btn_dgraf").animate({"margin-top": '70%'}, 400);
				$(".m1, .m2, .m3").animate({"opacity": '1', "z-index": '1'}, 100);
				$('.w1, .w2, .w3, .d1, .d2, .d3, .b1, .b2, .b3').animate({"opacity": '0', "z-index": '0'}, 100);
				$(".btn_mdig").css("background", "url(img/servicos_circulo.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move1 = false
				move2 = false
				move3 = false
				move4 = true
			}
			else{
				$(".btn_mdig").animate({"margin-top": '70%'}, 400);
				$(".m1, .m2, .m3").animate({"opacity": '0'}, 100);
				$(".btn_mdig").css("background", "url(img/servicos_pentagono.svg) no-repeat", 500).rotate({
      angle: 0,
      animateTo:360,
      duration:500
      });
				move4 = false
			}
	})
});