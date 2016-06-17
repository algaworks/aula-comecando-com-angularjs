angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Filmes que já assisti";

	$scope.filmes = [
		{
			id: "123123123",
			titulo: "Deadpool",
			ano: 2016,
			produtora: "Fox",
			sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
			cartaz: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
		},
		{
			id: "321321321",
			titulo: "X-MEN: APOCALYPSE",
			ano: 2016,
			produtora: "Fox",
			sinopse: "O ancestral dos mutantes, En Sabah Nur, retorna com planos de mergulhar o mundo em um apocalipse para garatir a supremacia. Sequência de \"X-Men: Dias de um Futuro Esquecido\".",
			cartaz: "http://www.zeronave.com/attachments/3e127f85b246651c1cb35d0e5b6af45e0ff13340/store/520a5c6d71961e170036dc4a59e4e70bcf3e43d87d42a1a88176cd07e03b/poster_image.jpg"
		}
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id == id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});