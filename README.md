# Bus Report

Pre-requisite :

Use http-server to serve pages locally.

Installation via npm:

    npm install http-server -g
  
This will install http-server globally so that it may be run from the command line.

For more informatio please find this useful link https://www.npmjs.com/package/http-server


Assumptions :
1. In 'bus-services-data.json' file for alll bus data 'deviationFromTimetable' is mentioned in number.
  
     If number is +ve then service is 'Late'
    
     If number is -ve then service is 'Early'
     
     If number is null then service is 'On Time'

 Some more information