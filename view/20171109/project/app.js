/**
 * Created by tongwl on 2017/11/9.
 */
var app=angular.module("app",["ui.router"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/app");
    $stateProvider.state("app",{
        url:"/app",
        templateUrl:"main.html",
        abstract:false
    }).state("app.dashboard",{
        url:"dashboard/{username}",
        templateUrl:"dashboard.html",
        params:{
            age:18
        },
        controller:"dashboardCtrl"
    });
}]).config(["myName",function(provider){
    console.log(provider);
}]).config(function(familyProvider){
    familyProvider.setContent("haha");
    console.log(familyProvider.name);  //undefined，也就是说family的$get内的参数再config里面不能用
});

app.controller("dashboardCtrl",function($scope,$stateParams,family){
    $scope.username=$stateParams.username;
    $scope.age=$stateParams.age;
    $scope.family=family.name;

    $scope.$watch("age",function(_new,_old){
        console.log(_new);
        console.log($scope.$$watchers);
    });

});

app.value("className","软件092");
app.constant("myName","童威立");
app.service("age",function(){
    this.getName=function(){
        return 28;
    }
});

app.factory("wife",function(){
    return {
        name:"zhenzhen",
        age:26
    };
});

app.provider("family",function(){
    var value;
    return {
        setContent:function(val){
            value=val;
        },
        $get:function(){
            return {
                name:value
            };
        }
    };
});


