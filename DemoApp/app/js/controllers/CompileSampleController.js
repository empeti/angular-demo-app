/**
 * Compiler controller
 */
eventsApp.controller('CompileSampleController',function CompileSampleController($scope, $compile, $parse){
    var getter = $parse('event.name');
    
    var context1 = {event: {name: 'AngularJS Boot Camp'}};
    var context2 = {event: {name: 'Code Camp'}};
    
    console.log(getter(context1));
    console.log(getter(context2));
    
    console.log(getter(context2, context1));
    
    var setter = getter.assign;
    setter(context2, 'Code Retreat');
    
    console.log(context2.event.name);
    console.log(getter(context2));
    
    $scope.appendDivToElement = function(markup){
        return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }
});