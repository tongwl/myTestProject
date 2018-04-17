/**
 * Created by tongwl on 2017/9/26.
 */
var app=angular.module("app",["ui.router"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("home",{
        url:"/",
        templateUrl:"home.html",
        controller:function($scope,$state){
            $scope.name="tongwl";
            $scope.about=function(){
                $state.go('about');
            }
        }
    }).state("about",{
        url:"/about",
        templateUrl:"about.html",
        controller:function($scope,$state){

        }
    });

    $urlRouterProvider.otherwise("/");

    $urlRouterProvider.when('/haha',{
        redirectTo:'/about'
    });
}]);