/**
 * Created by tongwl on 2017/12/13.
 */
var i=0;
function send(){
    setInterval(function(){
        i++;
        postMessage(i);
    },500);
}
send();
