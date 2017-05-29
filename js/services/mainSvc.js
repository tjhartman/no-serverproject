angular.module('routesApp').service('mainSvc', function($http){

    this.getRoutes = function(){
        return $http.get('https://www.mountainproject.com/data?action=getRoutes&routeIds=108955192,108955188,110374423,107736171,109055762,106822406,106645813,107102098,107102520&key=200069508-bf86aa531f568aff3a52cb57d1fd452d')
    }

})