// Define the 'heroStoreApp' module
var busReportApp = angular.module('busReportApp', []);

// Define the 'ProductListController' controller on the 'heroStoreApp' module
busReportApp.controller('reportController', ['$scope', 'busScheduleService', function reportController($scope, busScheduleService) {
    busScheduleService.fetchBusData().then(function(response){
        if(response.status == 200){ 
             $scope.scheduleDetails = response.data.data;  
        }
       
    })    
}]);