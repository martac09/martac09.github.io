var currentPage = 1;
var posts;
$(window).load(function(){
	/*
		1. upewnić się, że currentPage nie jest mniejsze od 1 i większy od ilości postów podzielonych przez 10 zaokrąglonych w górę
		2. napisać funkcję (refreshTable), która czyści tablicę html i umieszcza tam posty z obecnej strony
		3. umieścić refreshTable w odpowiednich miejscach (kliknięcia na strzałki, zamiast forEacha w gecie)
	*/
$("button").click(function() {
	var value = parseInt($("input").val());
	$.get('http://jsonplaceholder.typicode.com/posts/' + value,function(data) {
		addPostToTable($('#table'), data);
	})
})
$.get('http://jsonplaceholder.typicode.com/posts/', function(data) {
	posts = data;
	refreshTable();
})
var active = null;
$('tbody').on('click', 'tr', function() {
	$(active).removeClass('active-background');
	$(this).addClass('active-background');
	active = this;
})

$('.left-container').click(function() {
	if(currentPage > 1) {
	currentPage--;
	refreshTable();
}})
$('.right-container').click(function() {
	if(currentPage < Math.ceil(posts.length/10)) {
	currentPage++;
	refreshTable();
}})
});
function addPostToTable(table, post) {
	var row = $('<tr/>');
	appendTdToRow(row, post.id);
	appendTdToRow(row, post.title);
	appendTdToRow(row, post.body);
	row.appendTo(table.find('tbody'));
}
function appendTdToRow(row, text) {
	row.append($('<td/>').text(text));
}
function cleanPosts() {
	$('#table tbody tr').remove();
}
function getPage(pageNo) {
	var start = 10*(pageNo - 1)
	var end = 10 * pageNo -1;
	var pagePosts = [];
	posts.forEach(function(post, index) {
		if(index >= start && index <= end) {
			pagePosts.push(post);
		}
	})
	return pagePosts;
}
function refreshTable() {
	cleanPosts();
	getPage(currentPage);
	getPage(currentPage).forEach(function(post,index) {
		addPostToTable($('#table'), post);
	})
}


















































	// $.get( "http://jsonplaceholder.typicode.com/posts/1", function( data ) {
 //  		//console.log(data);
 //  		//$( ".result" ).html( JSON.stringify(data) );
	// });