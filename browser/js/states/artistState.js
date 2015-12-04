app.config(function($stateProvider){
	$stateProvider.state('artistState',{
		url: '/artist/:artistId',
		templateUrl : '/stateTemplates/artistTemplate.html',
		controller: function($scope,$stateParams, PlayerFactory, ArtistFactory){
			ArtistFactory.fetchById($stateParams.artistId)
			.then(function(artistInfo){
				console.log(artistInfo)
				$scope.artist = artistInfo;
			})

			$scope.isCurrent = function(song) {
					var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};
			$scope.start = function(song) {
					PlayerFactory.start(song, $scope.artist.songs);
			};
		}
	})
	.state('artistState.album', {
		url: '/albums',
		templateUrl: '/stateTemplates/artistAlbumTemplate.html',
		controller: function ($scope, PlayerFactory, ArtistFactory) {
			$scope.isCurrent = function(song) {
					var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};
			$scope.start = function(song) {
					PlayerFactory.start(song, $scope.artist.songs);
			};
		}
	})
	.state('artistState.songs', {
		url: '/songs',
		templateUrl: '/stateTemplates/artistSongsTemplate.html',
		controller: function ($scope, PlayerFactory, ArtistFactory) {
			$scope.isCurrent = function(song) {
					var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			};
			$scope.start = function(song) {
					PlayerFactory.start(song, $scope.artist.songs);
			};
		}
	});
})