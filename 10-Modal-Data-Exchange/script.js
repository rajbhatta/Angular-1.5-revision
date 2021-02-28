var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('ModalCtrl', function($scope, $uibModal) {

  $scope.open = function() {
    var modalInstance =  $uibModal.open({
      templateUrl: "modalContent.html",
      controller: "ModalContentCtrl",
      size: '',
    });
    
    modalInstance.result.then(function(response){
        $scope.result = `${response} button hitted`;
    });
    
  };
})

app.controller('ModalContentCtrl', function($scope, $uibModalInstance) {

  $scope.ok = function(){
    $uibModalInstance.close("Ok");
  }
   
  $scope.cancel = function(){
    $uibModalInstance.dismiss();
  } 
  
});