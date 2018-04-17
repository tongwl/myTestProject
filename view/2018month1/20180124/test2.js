/*
onmessage=function(event){
    console.log(new Date(event.data).toLocaleString());
}*/

setInterval(function(){postMessage(new Date().getTime());},1000);
console.log(this.__proto__.__proto__);