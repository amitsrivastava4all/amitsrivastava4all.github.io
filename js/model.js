app.factory("crickFactory",function($http,$q){
   var object = {
     serverCall:function(pidValue){
        var pr = $q.defer(); $http.get(urls.crickPlayerURL+"pid="+pidValue+"&apikey="+urls.apikey).then(function(data){
             pr.resolve(data);
         },function(error){
             pr.reject(error);
         });
        return pr.promise;
     }  
   };
    return object;
});