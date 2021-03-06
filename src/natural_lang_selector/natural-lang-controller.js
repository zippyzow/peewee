peeweeModule.controller('naturalLangCtrl', function($scope) {

  $scope.genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Biography",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Thriller",
    "Western",
    "War"
  ];

  $scope.selectedGenres = [];

  $scope.printSelectedGenres = function() {
    if ($scope.selectedGenres.length === 0) {
      return 'any genre of';
    } else if ($scope.selectedGenres.length === 1) {
      return $scope.selectedGenres[0];
    } else if ($scope.selectedGenres.length === 2) {
      return $scope.selectedGenres.join(' and ');
    } else if ($scope.selectedGenres.length === 3) {
      return $scope.selectedGenres[0] +', ' + $scope.selectedGenres[1] + ', and ' + $scope.selectedGenres[2];
    } else {
      return $scope.selectedGenres[0] +', ' + $scope.selectedGenres[1] + ', and ' +
          ($scope.selectedGenres.length - 2) + ' more genres';
    }
  };

  $scope.decades = [
    {
      label: "any decade",
      value: [1900, 2019]
    },
    {
      label: "the 1900's",
      value: [1900, 1909]
    },
    {
      label: "the 1910's",
      value: [1910, 1919]
    },
    {
      label: "the 1920's",
      value: [1920, 1929]
    },
    {
      label: "the 1930's",
      value: [1930, 1939]
    },
    {
      label: "the 1940's",
      value: [1940, 1949]
    },
    {
      label: "the 1950's",
      value: [1950, 1959]
    },
    {
      label: "the 1960's",
      value: [1960, 1969]
    },
    {
      label: "the 1970's",
      value: [1970, 1979]
    },
    {
      label: "the 1980's",
      value: [1980, 1989]
    },
    {
      label: "the 1990's",
      value: [1990, 1999]
    },
    {
      label: "the 2000's",
      value: [2000, 2009]
    },
    {
      label: "the 2010's",
      value: [2010, 2019]
    }
  ];
  $scope.selectedDecade = $scope.decades[0];

  $scope.runtimes = [
    {
      label: "any duration",
      value: [0, 999999]
    },
    {
      label: "up to 1 hour long",
      value: [0, 60]
    },
    {
      label: "up to 2 hours long",
      value: [0, 120]
    },
    {
      label: "up to 3 hours long",
      value: [0, 180]
    }
  ];
  $scope.selectedRuntime = $scope.runtimes[0];
});