/**
 * Created by tongwl on 2017/9/27.
 */
var app=angular.module("app",["ui.router"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.rule(function($injector,$location){
        if($location.path()!==$location.path().toLowerCase()){
            return $location.path().toLowerCase();
        }
    });

    $urlRouterProvider.otherwise("/app/part1");

    $stateProvider.state("app",{
        url:"/app",
        abstract:true,
        templateUrl:"main.html",
        resolve:{
            tongwl:function(){
                return {
                    name:"tongwl",
                    age:18,
                    class:"软件工程092"
                };
            },
            commonUrl:function($http){
                return $http({
                    method:"GET",
                    url:"path.json"
                }).then(function(data){
                    if(data.status==200){
                        return data.data.path;
                    }else{
                        return null;
                    }
                });
            }
        }
    }).state("app.part1",{
        url:"/part1",
        templateUrl:"part1.html",
        controller:"part1Ctrl",
        onEnter:function(){
            console.log(1);
        },
        onExit:function(){
            console.log("leave");
        }
    }).state("app.part2",{
        url:"/part2",
        templateUrl:"part2.html"
    });

}]);


app.controller("part1Ctrl",["$scope","commonUrl","tongwl",function($scope,commonUrl,tongwl){
    console.log(commonUrl);
}]);
