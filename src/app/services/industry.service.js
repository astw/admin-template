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
      addInvitedUser:addInvitedUser
    };

    return service;

    ////////////////

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
          status:"InActive",
          locked:"Locked",
          role:'Administrator'
        },
        {
          userId:2,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkcotechnology.com",
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
          status:"InActive",
          locked:"No",
          role:'Administrator'
        },
        {   userId:4,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkcotechnology.com",
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
        email:"Weinandt@linkcotechnology.com",

        dateInvited:"8/1/2016/ 13:50 AM",
        inviteExpires:"8/8/2016"
       }
      ];

      return users;
    }
  }

})();


