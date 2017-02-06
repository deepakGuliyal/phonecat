var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {

    $routeProvider

	    .when("/", {
	        templateUrl : "view/main.html",
	        controller : 'myCtrl'
	    })
        .when("/addedItems", {
            templateUrl: "view/addedItems.html",
            controller: 'addCtrl'
        });
});
app.controller('myCtrl', function($scope, $rootScope) {

    $scope.products = [];
    $scope.removedItems = [];
    $scope.add = function() {

        $scope.errormessage = "";

        if (!$scope.addItem) {
            return;
        }
        if ($scope.products.indexOf($scope.addItem) == -1) {
            $scope.products.push($scope.addItem);
        } else {
            $scope.errormessage = "You have already add this item into shopping list";
        }
        $scope.myForm.addItem.$setPristine();
        $scope.myForm.addItem.$setPristine(true);
        $scope.addItem = '';

       
    }

    $scope.removeItem = function(index) {
        console.log($scope.products);
        console.log(index);
        $scope.errormessage = "";
        $scope.removedItems.push($scope.products[index]);
        $scope.products.splice(index, 1);
        console.log($scope.products);
        $rootScope.Itemsadded=$scope.products;

    }

});
app.controller('addCtrl', function($scope,$rootScope) {
     // $rootScope.Itemsadded=$scope.products.push($scope.addItem);
    console.log($rootScope.Itemsadded);
});