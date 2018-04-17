/**
 * Created by tongwl on 2017/12/14.
 */
var i=0;
setInterval(function(){
    i++;
    postMessage(i);
},1000);