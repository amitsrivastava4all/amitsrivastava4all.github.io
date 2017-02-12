app.controller("crickCtrl",function($scope,crickFactory){
     $scope.showIt = false;
    $scope.searchByPid=function(){
        var playerId = $scope.playerId;
        var promise = crickFactory.serverCall(playerId);
        promise.then(function(data){
            $scope.showIt=true;
            $scope.result = data;
        },function(error){
            $scope.error = error;
        })
    }
})