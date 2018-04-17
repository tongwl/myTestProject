/**
 * Created by tongwl on 2017/9/26.
 */
var app=angular.module("app",["ui.router"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("pageTab",{
        url:"/pageTab",
        templateUrl:"pageTab.html"
    }).state("pageTab.page1",{
        url:"^/page1",
        templateUrl:"page1.html"
    }).state("pageTab.page2",{
        url:"/page2",
        templateUrl:"page2.html"
    }).state("pageTab.page3",{
        url:"/page3",
        templateUrl:"page3.html"
    });

    $urlRouterProvider.when("","/pageTab");
}]);