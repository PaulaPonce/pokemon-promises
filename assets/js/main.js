var pokeAbility = function(poke_url){
	$.ajax({
		url: 'poke_url',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		console.log("success");
		data.results.forEach(function(el){
			document.write(el.abilities);
		})
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}

$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon/',
	type: 'GET',
	dataType: 'json',
	data: {limit: '15'},
})
.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		document.write(el.name + "<br>");
		//document.write(el.url + "<br>");
		pokeAbility(el.url);
	})
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
