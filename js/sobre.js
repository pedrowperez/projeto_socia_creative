$(document).ready(function()
{
	var move = false
	$("#btn_inf").click(function()
		{
			if (!move)
			{	
				$("#btn_obj").animate({"margin-right": '-10%',"opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-10%', "opacity": '0'}, 400)
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_info").slideDown(600);
				$(".informacoes").css("border-bottom", "inherit");
				$(".objetivos").css("border-bottom", "inherit");
				$(".filosofia").css("border-bottom", "inherit");
				move = true
			}
			else{
				$("#btn_obj").animate({"margin-right": '0px', "opacity": '1'}, 400);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_info").slideUp(200);
				$(".informacoes").css("border-bottom", "5px solid transparent");
				$(".objetivos").css("border-bottom", "5px solid transparent");
				$(".filosofia").css("border-bottom", "5px solid transparent");
				move = false
			}
	});

	var move = false
	$("#btn_obj").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-10%', "opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-10%', "opacity": '0'}, 400);
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_obj").show("slide", { direction: "left" }, 1000);
				$(".informacoes").css("border-bottom", "inherit");
				$(".objetivos").css("border-bottom", "inherit");
				$(".filosofia").css("border-bottom", "inherit");
				move = true
			}
			else{
				$("#btn_inf").animate({"margin-left": '0px',"opacity": '1'}, 400);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_obj").hide('slide', { direction: 'right' });
				$(".informacoes").css("border-bottom", "5px solid transparent");
				$(".objetivos").css("border-bottom", "5px solid transparent");
				$(".filosofia").css("border-bottom", "5px solid transparent");
				move = false
			}
	});	

	var move = false
	$("#btn_fi").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-10%', "opacity": '0'}, 400);
				$("#btn_obj").animate({"margin-right": '-10%', "opacity": '0'}, 400);
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_fimp").slideDown(600);
				$(".informacoes").css("border-bottom", "inherit");
				$(".objetivos").css("border-bottom", "inherit");
				$(".filosofia").css("border-bottom", "inherit");
				move = true
			}
			else{
				$("#btn_inf").animate({"margin-left": '0px',"opacity": '1'}, 400);
				$("#btn_obj").animate({"margin-right": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_fimp").slideUp(200);
				$(".informacoes").css("border-bottom", "5px solid transparent");
				$(".objetivos").css("border-bottom", "5px solid transparent");
				$(".filosofia").css("border-bottom", "5px solid transparent");
				move = false
			}
	});		
});
