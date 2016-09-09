(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('InviteController', InviteController);

  /** @ngInject */
  function InviteController($timeout, $rootScope, $scope, $state, userService,industryService) {
    var vm = this;

    $scope.action = $state.params.action;
    console.log("param: action=", $state.params.action);

    // if(!$rootScope.selectedIndustry ){
    //   $state.go('authority.portal.industries');
    // }

    $scope.step = 1 ;
      vm.inviteUser = inviteUser;
      vm.sendInvitation = sendInvitation;
      vm.createUser = createUser;
      vm.cancel = cancel;
      vm.backStep = backStep;
      vm.doCreateUser = doCreateUser;
      vm.searchUser = searchUser;
      vm.finishInvite = finishInvite;

      vm.goToStep2 = goToStep2;

      var userList = userService.getUserList();
      console.log(userList);

      updateHeadText();

     function updateHeadText() {

      vm.step1HeadText = 'Search For User';
      vm.step2HeadText = 'Create New User';
      vm.step3HeadText = "Enter User's Name";
      vm.step4HeadText = "Invite Sent";

      if($scope.step == 1){
        $scope.headerText = vm.step1HeadText;
      } else if($scope.step == 2){
        $scope.headerText = vm.step2HeadText;
      } else if($scope.step == 3 ){
        $scope.headerText = vm.step3HeadText;
      } else if($scope.step == 6){
        $scope.headerText = vm.step4HeadText;
      }
    }

      vm.userToInvite = null;
      $scope.userOptions = {
                                   dataSource :{
                                       data: vm.userToInvite
                                   },

                                   selectable: "row",
                                   sortable: true,
                                   height:100,
                                   noRecords: true,
                                   messages: {
                                       noRecords: "There is no data on current page"
                                   },
                                   columns: [
                                     {
                                        headerAttributes : {
                                           "class" : "visible-lg visible-sm visible-md"
                                         },
                                       width:"15%",
                                       field: "firstName",
                                       title: "First Name",
                                       minScreenWidth: 960,
                                     },

                                     {
                                        headerAttributes : {
                                           "class" : "visible-lg visible-sm visible-md"
                                         },
                                       width:"15%",
                                       field: "lastName",
                                       title: "Last Name",
                                       minScreenWidth: 960,
                                     },
                                     {
                                        headerAttributes : {
                                           "class" : "visible-lg visible-sm visible-md"
                                         },
                                       width:"30%",
                                       field: "email",
                                       title: "Emai",
                                     },
                                      {
                                        headerAttributes : {
                                           "class" : "visible-lg visible-sm visible-md"
                                         },
                                       width:"20%",
                                       field: "dateInvited",
                                       title: "Date Invited",
                                     },
                                    {
                                        headerAttributes : {
                                           "class" : "visible-lg visible-sm visible-md"
                                         },
                                       width:"20%",
                                       field: "inviteExpires",
                                       title: "Invite Expires",
                                     },


                                   ]
      };


      function finishInvite() {
        if($rootScope.user.userType == 'AuthorityUser' && $scope.action == 'invite-iu'){
          $state.go("authority.portal.industryUsers");
        } else if($scope.action == 'invite-au'){
          $state.go("authority.portal.authority-users");
        }
        else{
          $state.go('industry.industryUsers');
        }
      }
      function goToStep2() {
        $scope.step = 2;
        updateHeadText();
      }

      //$scope.step = 4;

      function sendInvitation(){
        $scope.step = 6;      // invitation email sent
        updateHeadText();

        //call user service to add invited user

        industryService.addInvitedUser(vm.selectedUser);
      }

      function backStep(){

          $scope.step = 1 ;
          $scope.noSuchUser = false;
          updateHeadText();
      }

      function createUser(){
        // $state.go("authority.portal.create-iu");
          $scope.step = 3;   // show create user interface
          updateHeadText();
      }

      function cancel(){
         //$state.go("authority.portal.industryUsers");
         $scope.step = 2
        updateHeadText();
      }

      function searchUser(){

                var findUser = userList.find(function(item){
                    return vm.userEmail == item.email;
                });


                if(findUser == null){
                 //   $scope.noSuchUser = true;
                  $scope.step = 2 ;
                  updateHeadText();
                  // swal({
                  //   title: 'Search User',
                  //   text:'The user with email address <b>' + vm.userEmail + '</b> does not exist, would like to create one a user?',
                  //   showCloseButton: true,
                  //   showCancelButton: true,
                  //   confirmButtonColor: '#3c8dbc',
                  //   animation:false,
                  //   confirmButtonText:
                  //   '<i class="fa "></i>Create User',
                  //   cancelButtonText:
                  //     '<i class="fa "></i> Cancel'
                  // })
                  //   .then(function() {
                  //     // create new user
                  //     // go to create new user page
                  //
                  //     $scope.step =3;
                  //     updateHeadText();
                  //     $scope.$apply();
                  //
                  //
                  //     // swal(
                  //     //     'Create new user', 'Will go to create a new user page','success'
                  //     // ).then(function(){
                  //     //   $scope.step = 5;
                  //     //   $scope.$apply();
                  //     // });
                  //
                  //   }, function(dismiss) {
                  //     // dismiss can be 'cancel', 'overlay', 'close', 'timer'
                  //     if (dismiss === 'cancel') {
                  //       $scope.step = 1 ;
                  //       return;
                  //     }
                  //   });

                  return;
                }

                  vm.userLastName = findUser.lastName;
                  vm.userFirstName = findUser.firstName;

                  prePareUserToInvite(findUser);
                  // user found show another interface
                  $scope.step = 4;

                  updateHeadText();

      }

      function inviteUser(){

          var findUser = userList.find(function(item){
              return vm.userEmail == item.email;
          });

          if(findUser == null){
              $scope.noSuchUser = true;
              $scope.step = 2 ;
              updateHeadText();
              return;
          }

          vm.userLastName = findUser.lastName;
          vm.userFirstName = findUser.firstName;

          prePareUserToInvite(findUser);
          // user found show another interface
          $scope.step = 4;
          updateHeadText();
      }

    function doCreateUser(){
       //$state.go("authority.portal.create-iu");
        //$scope.step = 5    // create user finished

        var user = {};
        user.firstName = vm.userFirstName;
        user.lastName = vm.userLastName;
        user.email = vm.userEmail;

        var nowTemp = new Date();
        var now =  new Date();
        var nowPlus7Days = nowTemp.setDate(nowTemp.getDate()+7);
        var nowPlus7Days = new Date(nowPlus7Days);

        var date1 = now.toISOString().slice(0,10).replace(/-/g,"/");
        var date2 = nowPlus7Days.toISOString().slice(0,10).replace(/-/g,"/");

        user.dateInvited = kendo.parseDate(date1);
        user.inviteExpires = kendo.parseDate(date2);
        if($rootScope.user.userType == 'AuthorityUser' && $scope.action == 'invite-iu') {
          user.industry = $rootScope.selectedIndustry.industry;
        }

        console.log($scope.selectedIndustry);

        vm.selectedUser = user;
        industryService.addInvitedUser(vm.selectedUser);
        $scope.step = 6;
        updateHeadText();
    }

    function prePareUserToInvite(user){

        var now = new Date();
        var date1 = now.toISOString().slice(0,10).replace(/-/g,"-");

        var t = date1.split('-');
        t[1] = parseInt(t[1]) +1;
        t[1] = '0' + t[1];

        var date2 = t.join('-');

       // var expiresDate =now.setDate(now.getMonth() + 1);
       // var date2 = expiresDate.toISOString().slice(0,10).replace(/-/g,"-");

       //var date2= date1;
       var users = [];
       user.dateInvited = date1;
       user.inviteExpires = date2;

       vm.selectedUser = user;
       users.push(user);

       vm.userGrid.setDataSource(new kendo.data.DataSource({ data: users}));
       vm.userGrid.refresh();
    }


  }
})();
