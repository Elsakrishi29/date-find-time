let date=new Date();
console.log(date);
let time=date.setTime(prompt("Enter the time"));
if(time>=5 && time<10){
    console.log("Morning");
}
else if(time>=10 && time<12){
    console.log("Furnoon");
}
else if(time>=12 && time<16){
    console.log("Afternoon");
}
else if(time>=16 && time<18){
    console.log("Evening");
}
else if(time>=18 && time<=24){
    console.log("Night");
}
else{
    console.log("This is not a time")
}