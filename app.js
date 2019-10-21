const axios = require('axios');



console.log('welcome to Solitude api');
console.log('--------------------');


axios.get("https://alerts.quicktrax.com/feed?resortId=65&format=json").then((res)=>{
  console.log('//   ' + res.data.Name + '   //');
  console.log(' ');
  console.log(' ');
  console.log('(()))))())()()()()))))(((())');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`* * * *  * *  * *  * * * 
*  * * *  * *  * *   *  * * *
  * * * *  * *  * * * *  * * *  
    `);
  
  // news and open lifts
  console.log(res.data.SnowReport.News);
  console.log(' ');
  console.log('open lifts -->  '+ res.data.SnowReport.TotalOpenLifts);
  console.log('open runs  -->  '+ res.data.SnowReport.TotalOpenTrails); 
  console.log(' ');
  console.log('Lift Info');
  console.log(' ');
  console.log(res.data.SnowReport.LiftNotification);
  console.log(res.data.SnowReport.LastUpdatedLift);
  console.log(' ');
  console.log("*** Snow Report ***");
  console.log(' ');
  console.log('Base Area (24hr) --> ' + res.data.SnowReport.BaseArea.Last24HoursIn);
  console.log('Base Area (48hr) --> ' + res.data.SnowReport.BaseArea.Last48HoursIn);
  console.log('Base Area (72hr) --> ' + res.data.SnowReport.BaseArea.Last72HoursIn);
  console.log(' ');
  console.log('Mid Mtn (24hr) --> ' + res.data.SnowReport.MidMountainArea.Last24HoursIn);
  console.log('Mid Mtn (48hr) --> ' + res.data.SnowReport.MidMountainArea.Last48HoursIn);
  console.log('Mid Mtn (72hr) --> ' + res.data.SnowReport.MidMountainArea.Last72HoursIn);
  console.log(' ');
  console.log('Summit (24hr) --> ' + res.data.SnowReport.SummitArea.Last24HoursIn);
  console.log('Summit (48hr) --> ' + res.data.SnowReport.SummitArea.Last48HoursIn);
  console.log('Summit (72hr) --> ' + res.data.SnowReport.SummitArea.Last72HoursIn);
  console.log(' ');
  console.log('// Terrain Areas //');
  console.log(' ');
  for (let i = 0; i< res.data.MountainAreas.length; i++) {
    if (res.data.MountainAreas[i].Name != 'Nordic') {
      console.log(res.data.MountainAreas[i].Name);
      console.log("open runs ->  " + res.data.MountainAreas[i].OpenTrailsCount);
      console.log('----------------------');
    }
  }
  console.log(' ');
  console.log('// Lift Details //');
  for (let i = 0; i < res.data.MountainAreas[4].Lifts.length; i++) {
    console.log(res.data.MountainAreas[4].Lifts[i].Name);
    console.log(res.data.MountainAreas[4].Lifts[i].Status);
    console.log('----------------------');
  }
  console.log(' ');
  console.log('// Terrain Areas //');
  console.log(res.data.MountainAreas[4].Activities.length);
  for (let i = 0; i < res.data.MountainAreas[4].Activities.length; i++) {
    if (res.data.MountainAreas[4].Activities[i].Name != 'Nordic') {
      console.log(res.data.MountainAreas[4].Activities[i].Name);
      console.log(res.data.MountainAreas[4].Activities[i].Status);
      console.log('----------------------');
    }
  }
  // open terrain areas
  // snow report
  // cams

  // canyon traffic info?
  // udot alerts?


});