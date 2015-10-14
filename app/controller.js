angular.module('myApp').controller('AppCtrl', function($scope) {
  $scope.message = 'Hello from controller.js';

  $scope.companies = [
    { name: "TietoEnator", beginTime: "06/2001", endTime: "03/2004"},
    { name: "Sininen Meteoriitti", beginTime: "03/2004", endTime: ""},
    { name: "TJ Group", beginTime: "02/2000", endTime: "06/2001"}
  ];

  $scope.hideJobHistory = false;
  $scope.hideAboutMe = false;

});
