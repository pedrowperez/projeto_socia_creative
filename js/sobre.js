$(document).ready(function()
{
	var move = false
	$("#btn_inf").click(function()
		{
			if (!move)
			{	
				$("#btn_obj").animate({"margin-right": '-30%',"opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-30%', "opacity": '0'}, 400)
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_info").slideDown(600);
				move = true
			}
			else{
				$("#btn_obj").animate({"margin-right": '0px', "opacity": '1'}, 400);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_info").slideUp(200);
				move = false
			}
	});

	var move = false
	$("#btn_obj").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-30%', "opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-30%', "opacity": '0'}, 400);
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_obj").slideDown(600);
				move = true
			}
			else{
				$("#btn_inf").animate({"margin-left": '0px',"opacity": '1'}, 400);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_obj").slideUp(200);
				move = false
			}
	});	

	var move = false
	$("#btn_fi").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-30%', "opacity": '0'}, 400);
				$("#btn_obj").animate({"margin-right": '-30%', "opacity": '0'}, 400);
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_fimp").slideDown(600);
				move = true
			}
			else{
				$("#btn_inf").animate({"margin-left": '0px',"opacity": '1'}, 400);
				$("#btn_obj").animate({"margin-right": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_fimp").slideUp(200);
				move = false
			}
	});		
});
