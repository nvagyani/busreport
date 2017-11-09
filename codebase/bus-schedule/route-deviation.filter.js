busReportApp.filter('deviation', function(){
    return function(input){
        if(input == undefined){
            return 'On Time';
        }

        if(input > 0){
            return 'Late';
        }

        if(input < 0){
            return 'Early';
        }
    }
});