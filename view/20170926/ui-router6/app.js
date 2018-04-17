/**
 * Created by tongwl on 2017/9/26.
 */
var app=angular.module("app",["ui.router"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/app/part1");

    $stateProvider.state("app",{
        url:"/app",
        templateUrl:"main.html",
        abstract:true,
        resolve:{
            person:function(){
                return {
                    name:"tongwl",
                    age:18
                }
            },

            songzhenzhen:function($http){
                var a= $http({
                    method:"GET",
                    url:"person.json"
                });
                console.log(1);
                return a;
            }
        }
    }).state("app.part1",{
        url:"/part1",
        templateUrl:"part1.html",
        controller:function($scope,person){
            $scope.username=person.name;
        }
    }).state("app.part2",{
        url:"/part2",
        templateUrl:"part2.html",
        controller:function($scope,songzhenzhen){
            console.log(3);
            $scope.username=songzhenzhen.data.name;
            $scope.age=songzhenzhen.data.age;
            $scope.class=songzhenzhen.data.class;
            //console.log(songzhenzhen);
        }
    });

}]);
