$(document).ready(function(){
	var pokeAbility = function(ability_url){
	$.ajax({
		url: ability_url,
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		console.log("success");
		data.abilities.forEach(function(el){
			document.write(el.ability.name + "<br>");
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
		pokeAbility(el.url);
	})
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

})