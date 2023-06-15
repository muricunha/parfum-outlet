var banners = ["img/destaque234.png", "img/sauvage3334.png"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);

$('.mais-vendidos, .novidades').addClass('painel-compacto');

$('.mais-vendidos button').click(function() {
	$('.mais-vendidos').removeClass('painel-compacto');
});

$('.novidades button').click(function() {
	$('.novidades').removeClass('painel-compacto');
});
