app.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
      url: '/albums',
      templateUrl: '/stateTemplates/albums.html',
      controller: function ($scope, AlbumFactory) {
        AlbumFactory.fetchAll()
          .then(function (albums) {
            $scope.albums = albums;
        });
      }
  });
});