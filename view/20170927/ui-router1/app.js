/**
 * Created by tongwl on 2017/9/27.
 */
var app=angular.module("app",["ui.router"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    //$urlRouterProvider.when("/","/app/partOne");
    $urlRouterProvider.otherwise("/app/partOne/");

    $stateProvider.state("app",{
        url:"/app",
        abstract:true,
        templateUrl:"main.html"
    }).state("app.part1",{
        url:"/partOne/{partId:[0-9]*}",
        templateUrl:"part1.html"
    }).state("app.part2",{
        url:"/partTwo?hehe&haha",
        templateUrl:"part2.html",
        controller:function($stateParams){
            console.log($stateParams.hehe);
            console.log($stateParams.haha);
        }
    }).state("app.part3",{
        url:"/partThree",
        params:{
            name:null,
            age:null
        },
        templateUrl:"part3.html",
        controller:function($scope,$stateParams){
            $scope.name=$stateParams.name;
            $scope.age=$stateParams.age;
        }
    }).state("app.part4",{
        url:"/partFour",
        params:{
            num:null
        },
        templateUrl:function($stateParams){
            return "part"+$stateParams.num+".html";
        }
    }).state("app.part5",{
        url:"/partFive/:num",
        /*template:function($stateParams){
            return "<h1>"+$stateParams.num+"</h1>"
        }*/
        templateProvider:function($timeout,$stateParams){
            return $timeout(function(){
                return "<h1>22222"+$stateParams.num+"</h1>";
            },100);
        }
    }).state("login",{
        url:"/login",
        templateUrl:"login.html"
    }).state("login.failed",{
        url:"/failed/:num",
        templateUrl:"failed.html",
        controller:function($stateParams){
            console.log(1);
            console.log($stateParams.num);
        }
    }).state("login.failed.404",{
        url:"/404/:num2",
        templateUrl:'404.html',
        controller:function($stateParams){
            console.log(2);
            console.log($stateParams.num);
            console.log($stateParams.num2);
        }
    });
}]);
