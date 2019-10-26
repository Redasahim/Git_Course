angular.module("Webmail",["ngSanitize"])//ngSanitize va nous permettre d'interperter les balises html sans risque d'injection de script
.controller("webMailCtrl",function($scope,$location){
	//on aura besoin d'un service angular js qui s'appelle scope pour enrechir le modele
	//scope ns permet d'alimenter un modéle pour tout les elements de la vue qui sont ds la porté du controller
	//le service location va ns permettre de connaitre en temps reel toutes les infos qui sont derriere le # il s'appelle le PAF
	/*$scope.nbMails=5;
	$scope.plusUnMail=function()
	{
		$scope.nbMails++;
	};*/


			$scope.dossiers= [
		{ value: "RECEPTION", label: 'Boite de réception', emails: [
			{ id: 1, from: "Ali", to: "Reda", subject: "Je reviens", date: "20/03/2018", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 2, from: "Samia kherbouche", to: "Reda", subject: "Bisous de l'espace", date: "18/03/2014", content: "Ivkey <b>maSamia je t'aime</b>." },
			{ id: 3, from: "Pikachu", to: "Reda", subject: "Pika pika !", date: "15/03/2019", content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
			{ id: 4, from: "Barbapapa", to: "Reda", subject: "Hulahup Barbatruc", date: "13/03/2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		]  }, 
		{ value: "ARCHIVES", label: "Archives", emails: [
			{ id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: "20/03/2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
		]  },
		{ value: "ENVOYES", label: "Envoyés", emails: [
			{ id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: "20/03/2019", content: "To be a programmer is to be an artist ,to be a superHero." },
			{ id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] },
		{ value: "SPAM", label: "Courrier indésirable", emails: [
			{ id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: "10/03/2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: "18/03/2014", content: "Lorem <i>ipsum dolor sit amet,</i> consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] }
	];
	$scope.dossierCourant=null;
	$scope.emailSelectionne=null;
	$scope.selectionDossier= function(dossier)
	{
		$scope.dossierCourant=dossier;
		$scope.emailSelectionne=null;
	}

	$scope.selectionEmail= function(email)
	{
		$scope.emailSelectionne=email;
	}
	$scope.$watch(function(){
		return $location.path();
	},function(newPath){
		console.log(newPath);
	});

	

});