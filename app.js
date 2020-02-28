angular.module("myApp",['ngRoute']).config(config)
function config($routeProvider){
    $routeProvider.when('/',{
        template:' <h1>This is main page</h1>'    
    }).when('/about',{
         template:' <h1>This is about page</h1>'   
})
}