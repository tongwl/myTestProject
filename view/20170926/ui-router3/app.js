/**
 * Created by tongwl on 2017/9/26.
 */
var app=angular.module("app",["ui.router"]);

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("app",{
        templateUrl:"app.html",
        controller:function($scope){
            $scope.contacts = [{ name: 'Alice' }, { name: 'Bob' }];
        }
    }).state("app.list",{
        tempalteUrl:"list.html"
    });
}]).run(["$rootScope","$state",function($rootScope,$state){
    $rootScope.user="tongwl";
    $state.go("app.list");
}]);