busReportApp.factory('busScheduleService', ['$http', function ($http) {
    var url = './data/bus-service-data.json';
    var _fetchBusData = function(){
        return $http.get(url);
    }
    return {
        fetchBusData: _fetchBusData
    };
}]);