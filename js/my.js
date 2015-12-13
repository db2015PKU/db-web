function choicesOnchange(){
	var area = $("input[name='area']:checked").attr("value");
	var rankmethod = $("input[name='rankmethod']:checked").attr("value");
	var abovemean = 0;
	if ($("input[name='abovemean']").prop("checked")){
		abovemean = 1;
	}
	// console.log(area);
	// console.log(rankmethod);
	// console.log(abovemean);
	$.post("http://www.baidu.com", {area: area, rankmethod:rankmethod, abovemean:abovemean}, changeCinemas);
}
function changeCinemas(data, status){
	if(status == 200){
		$("#cinemas").html(data)
	}
}