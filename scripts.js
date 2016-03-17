$(function(){
	
	$('.busca').keyup(function() {
    var value = $(this).val();
    busca(value);
  }) 

})

function busca(palavra){
	$('.resultado').html('');
	$.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+palavra+"",
    success: function(data) {
    	for(g in data.query.pages){

    		$('.resultado').append("<div class='item"+g+"'><div class='title'>"+data.query.pages[g].extract+"</div><div class='thumb'><img src='"+data.query.pages[g].thumbnail.source+"'></div></div>");
     	console.log(data.query.pages);
     	
     	}
    }
  });
}