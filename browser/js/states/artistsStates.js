app.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/stateTemplates/artists.html',
    controller: function ($scope, ArtistFactory) {
      ArtistFactory.fetchAll()
        .then(function (artists) {
          $scope.artists = artists;
      });
    }
  });
});