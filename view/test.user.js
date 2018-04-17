/**
 * Created by tongwl on 2017/6/20.
 */
var timer=0;
var interval=window.setInterval(
    function(){
        timer++;
        var dom=document.getElementById('query_ticket');
        if(!dom.disabled){
            dom.click();
        }
        dom.click();
    },50
);