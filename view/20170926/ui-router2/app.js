/**
 * Created by tongwl on 2017/9/26.
 */
var app=angular.module("app",["ui.router"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/app/part1");

    $stateProvider.state("app",{
        url:"/app",
        abstract:true,
        templateUrl:"app.html"
    }).state("app.part1",{
        url:"/part1",
        templateUrl:"part1.html"
    }).state("app.part2",{
        url:"/part2",
        template:"<h2>part2</h2>"
    });
}]);

app.controller("asideCtrl",["$scope",'$state',function($scope,$state){
    $scope.change=function(local){
        console.log(1);
        $state.go(local);
    }
}]);
