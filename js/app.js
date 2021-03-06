
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.modules = [
    {
        _id : '5828e870c66c89f5fbdfeeaa',
        title : 'LAMP01',
        description : 'Streetlamp Type C',
        maintainedBy : 'Ankit Sharma',
        address : '2809 Woodway Drive',
        lampStatus : 'operational',
        temperature : 72,
        humidity : 98,
        proximity : 1
    },
    {
        _id : '5828e870c66c89f5fbdfeeab',
        title : 'LAMP02',
        description : 'Streetlamp Type A',
        maintainedBy : 'Chris Chen',
        address : '2210 Pearl Street',
        lampStatus : 'operational',
        temperature : 73,
        humidity : 96,
        proximity : 0,
        windSpeed : 20
    },
    {
        _id : '5828e870c66c89f5fbdfeeac',
        title : 'LAMP03',
        description : 'Streetlamp Type A',
        maintainedBy : 'Kassidy Knight',
        address : '2222 Pearl Street',
        lampStatus : 'needs maintenance',
        temperature : 73,
        humidity : 96,
        proximity : 0
    },
    {
        _id : '5828e870c66c89f5fbdfeead',
        title : 'LAMP04',
        description : 'Streetlamp Type A',
        maintainedBy : 'Pascale Queralt',
        address : '4819 Forest Lane',
        lampStatus : 'operational',
        temperature : 100,
        humidity : 99,
        proximity : 11
    }
    ];

});
