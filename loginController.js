console.log("index runnig");
var loginModule = angular.module('loginModule', []);

// loginCtrl.
loginModule.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
        console.log("dentro de controller " + $scope + " " + $scope.prueba)
        $scope.prueba = "dentro de controller";
        $scope.username = "ciro8989";
        $scope.password = "pass";
        
        this.login = function($username, $password)
        {
            console.log("function login called " + $username, $password);
            $scope.prueba = "function login called";
//            $http.get("http://localhost:8888/login?username:" + $username +"&password:" + $password);
            var $data = {'username':$username, 'password':$password};
            //var $config = {headers: {'Content-Type': 'application/json'}};
            //$http.post("http://localhost:3000/login", $data).then(
            $http.post("https://sisven.herokuapp.com:3000", $data).then(
                function($result)
                {
                    console.log("connection successful " + $result.data["result"]);
                    if($result.data["result"] == "success")
                    {
                        $scope.prueba = "Se logueó exitosamente";
                    }
                    else if($result.data["result"] == "failed")
                    {
                        $scope.prueba = "Falló el login";
                    }
                    else
                    {
                        $scope.prueba = "No entró a ningún lado, " + $result.data["result"];
                    }
                }
                , function($result)
                {
                    console.log("connection failed " + $result);
                }
                );
            //$http.post("http://localhost:3000/login", $data, $config);
            /*$http({
                url: 'http://localhost:3000/login', // IP address replaced with ##'s
                method: 'POST',
                data: $data,
                headers: {'Content-Type': 'application/json'}
             });
            */
            /*$http.post("http://localhost:8080/login", {username : $username, password : $password}, 
                        {
                            headers:
                            {
                                'token':"password123456",
                                'Content-Type': 'application/json'
                            }
                        }                      
                      );
        */
        }
    }]);