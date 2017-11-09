busReportApp.directive('busSchedule', [function(){
    return{
        restrict: 'AE',
        scope : {
            schedule: '=schedule'
         },
         templateUrl: './bus-schedule/bus-schedule.template.html',
         link: function(scope){
             scope.addNotes = function(){
                 if(scope.schedule.notes == undefined){
                scope.schedule.notes = [];
                }
             scope.schedule.notes.push(scope.note);
             scope.note = '';
             }
         }
    }
}] );