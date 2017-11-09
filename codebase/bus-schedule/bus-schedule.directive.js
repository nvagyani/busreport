busReportApp.directive('busSchedule', [function(){
    return{
        restrict: 'AE',
        scope : {
            schedule: '=schedule'
         },
         templateUrl: './bus-schedule/bus-schedule.template.html',
         link: function(scope){
             
         }
    }
}] );