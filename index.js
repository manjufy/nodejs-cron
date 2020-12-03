const CronJob = require('cron').CronJob;
const job = new CronJob('* * * * * *', function() {
    console.log('See me every second....');
}, null, true, 'Asia/Kuala_Lumpur');
job.start();

// Run on specific date
console.log('Before job instantiation');
let date = new Date();
date.setSeconds(date.getSeconds() + 10);
const jobDate = new CronJob(date, function() {
    const d = new Date();
    console.log('Specific Date:', date, ', onTicket at:', d);
});
jobDate.start();