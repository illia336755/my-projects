let flag = false;
$('a').click(function () {
	if(!flag){
		$('.search-input').slideDown();
	}else{
		$('.menu-element').slideUp();
	}
	flag = !flag;
});

$('a').click(function () {
	if(!flag){
        $('.search').click(function() {
            $('#button').slideToggle();
        });
    }else{
    	$('.menu-element').slideDown();
    }
}); 

