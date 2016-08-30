/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .factory('industryService', industryService);

  industryService.$inject = [];

  /* @ngInject */
  function industryService() {
    var userList =  getUserList();
    var invitedUserList = getInitalInvitedUserList();

    var service = {
      getIndustryUsers: getIndustryUsers,
      createIndustryUsers: createIndustryUsers,
      getInvitedUserList:getInvitedUserList,
      addInvitedUser:addInvitedUser,
      deleteInvitedUser:deleteInvitedUser
    };

    return service;

    ////////////////

    function deleteInvitedUser(email){
       var newInvitedUsers = invitedUserList.filter(function(user){
            return user.email != email;
       });

      invitedUserList = newInvitedUsers;
    }

    function addInvitedUser(user){
      invitedUserList.push(user);
    }

    function getInvitedUserList(){
       return invitedUserList;
    }

    function createIndustryUsers(){

    }

    function getIndustryUsers(industryId) {

      if(industryId == '0040'){
        return [];
      }

      return userList;
    }


    function getUserList(){
      var data =  [
        {
          userId:1,
          firstName: "Eric",
          lastName: "Snell",
          phone:"(772)-496-4160",
          email:"eric@linkoweb.com",
          registeredDate:"06-01-2016",
          status:"Inactive",
          locked:"Locked",
          role:'Administrator'
        },
        {
          userId:2,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkotechnology.com",
          registeredDate:"06-01-2016",
          status:"Active",
          locked:"Locked",
          role:'Administrator'
        },
        {   userId:3,
          firstName: "Eric",
          lastName: "Snell",
          phone:"(772)-496-4160",
          email:"eric@linkoweb.com",
          registeredDate:"06-01-2016",
          status:"Inactive",
          locked:"No",
          role:'Administrator'
        },
        {   userId:4,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkotechnology.com",
          registeredDate:"06-01-2016",
          status:"Active",
          locked:"No",
          role:'Administrator'
        }
      ];

      return data;
    }


    function getInitalInvitedUserList(){
      var users =[
       {
        firstName: "Chris",
        lastName: "Weinandt",
        email:"Weinandt@linkotechnology.com",

        dateInvited:"08-1-2016 1:50 AM",
        inviteExpires:"08-08-2016 1:50 AM"
       }
      ];

      return users;
    }
  }

})();


