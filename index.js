setInterval(()=>{
const d=new Date();
const htime=d.getHours();
const mtime=d.getMinutes();
const stime=d.getSeconds();
//now we have got the timings and have to rotate them
const hrotation=30*htime+mtime/2;
const mrotation=6*mtime;
const srotation=6*stime;
hours.style.transform=`rotate(${hrotation}deg)`;
minutes.style.transform=`rotate(${mrotation}deg)`;
seconds.style.transform=`rotate(${srotation}deg)`;
},1000);