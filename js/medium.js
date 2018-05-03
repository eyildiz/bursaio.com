$(function () {
	var $content = $('#Medium');
	var data = {
		rss_url: 'https://medium.com/feed/bursa-i-o'
	};
	$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fbursa-i-o',function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				
				output += '<div class="col-md-12"><div class="blog-post" style="text-align:left">';
				output += '<div class="blog-content"><h4><a href="'+ item.link + '">' + item.title + '</a></h4><span>By ' + item.author + '</span>';
				output += '</div></div></div>';
				return k ;
			});
			$content.html(output);
		}
	});
});