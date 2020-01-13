$(document).ready(function() {
		$('.search').click(function() {
				$('.search').addClass('active');
				$('.line-1').css({
						'transform': 'rotate(45deg)',
						'top': '0px',
						'left': '0px'
				});
				$('.line-2').css({
						'height':'40px',
						'opacity':'1'
				});
				document.getElementsByTagName("input")[0].setAttribute("placeholder", "Busque seu livro...");
		});
		$('.line-1, .line-2').click(function() {
				$('.search').removeClass('active').val('');
				$('.line-1').css({
						'transform': 'rotate(-45deg)',
						'top': '-20px',
						'left': '45px'
				});
				$('.line-2').css({
						'height':'0px',
						'opacity':'0'
				});
				document.getElementsByTagName("input")[0].setAttribute("placeholder", "Livroz");
		});
		
		$(document).keyup(function(e) {
			if (e.key === "Escape") { // escape key maps to keycode `27`
				$('.search').removeClass('active').val('');
				$('.line-1').css({
						'transform': 'rotate(-45deg)',
						'top': '-20px',
						'left': '45px'
				});
				$('.line-2').css({
						'height':'0px',
						'opacity':'0'
				});
				$('input').blur();
				document.getElementsByTagName("input")[0].setAttribute("placeholder", "Livroz");
    }
});
});