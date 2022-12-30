console.log("Hello,world");


myDataForCredit={
  summa: 15000,
  prosent: 0.14,
  period: 60
  
}
function myCredit(mysumma, myprosent, period){
  let s=myDataForCredit.summa;
  let myp=myDataForCredit.prosent;
  let myq=myDataForCredit.period;
  let p;
  p=s*(myp+myp/((1+myp)**myq)-1));
  p=p.toFixed(2);
  return p;
  
  
}
let q=myCredit();
console.log(q);