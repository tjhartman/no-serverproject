angular.module('routesApp').controller('mainCtrl', function($scope, mainSvc){
    
    $scope.recRoutes = function(){
        mainSvc.getRoutes().then(function(response){
            $scope.routes = response.data.routes
            console.log($scope.routes)
        })
    }
    $scope.recRoutes()

//    $scope.typeInProcess = false;

// $scope.typeInProcess= function() {      
//   $scope.typeInProcess = true;
// };

})