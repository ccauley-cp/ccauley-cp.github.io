$( document ).ready(function() {
    $("nav ul li").click(function() {
		$(this).addClass('selected').siblings().removeClass('selected');
		if ($(this).hasClass("owned")){
			$("div.issues.need").hide();
			$("div.issues.owned").show();
		}
		if ($(this).hasClass("all")){
			$("div.issues").show();
		}
		if ($(this).hasClass("need")){
			$("div.issues.owned").hide();
			$("div.issues.need").show();
		}
	});
});