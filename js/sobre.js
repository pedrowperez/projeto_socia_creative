$(document).ready(function()
{
	var move = false
	$("#btn_inf").click(function()
		{
			if (!move)
			{	
				$("#btn_obj").animate({"margin-right": '0%',"opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-5%', "opacity": '0'}, 400)
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_info").slideDown(600);
				move = true
			}
			else{
				$("#btn_obj").animate({"margin-right": '0px', "opacity": '1'}, 300);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 300);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_info").slideUp(300);
				move = false
			}
	});

	var move = false
	$("#btn_obj").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-5%', "opacity": '0'}, 400);
				$("#btn_fi").animate({"margin-left": '-5%', "opacity": '0'}, 400);
				$(".sobre h2").animate({"opacity": '0'}, 100);
				$("#info_obj").show("slide", { direction: "left" }, 1000);
				move = true
			}
			else{
				$("#btn_inf").animate({"margin-left": '0px',"opacity": '1'}, 400);
				$("#btn_fi").animate({"margin-left": '0px', "opacity": '1'}, 400);
				$(".sobre h2").animate({"opacity": '1'}, 300);
				$("#info_obj").hide('slide', { direction: 'right' });
				move = false
			}
	});	

	var move = false
	$("#btn_fi").click(function()
		{
			if (!move)
			{	
				$("#btn_inf").animate({"margin-left": '-5%', "opacity": '0'}, 400);
				$("#btn_obj").animate({"margin-right": '-5%', "opacity": '0'}, 400);
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
