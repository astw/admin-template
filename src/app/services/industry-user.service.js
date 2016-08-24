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
      getInvitedUserList:getInvitedUserList
    };

    return service;

    ////////////////

    function getInvitedUserList(){

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
          registeredDate:"8/1/2016/ 13:50 AM",
          status:"InActive",
          locked:"Locked"
        },
        {
          userId:2,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkcotechnology.com",
          registeredDate:"8/1/2016/ 13:50 AM",
          status:"Active",
          locked:"Locked"
        },
        {   userId:3,
          firstName: "Eric",
          lastName: "Snell",
          phone:"(772)-496-4160",
          email:"eric@linkoweb.com",
          registeredDate:"8/1/2016/ 13:50 AM",
          status:"InActive",
          locked:"No"
        },
        {   userId:4,
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkcotechnology.com",
          registeredDate:"8/1/2016/ 13:50 AM",
          status:"Active",
          locked:"No"
        }
      ];

      return data;
    }


    function getInitalInvitedUserList(){
      var user =
       {
        userId:4,
        firstName: "Chris",
        lastName: "Weinandt",
        phone:"(770)-496-4160",
        email:"Weinandt@linkcotechnology.com",
        registeredDate:"8/1/2016/ 13:50 AM",
        status:"Active",
        locked:"No"
      };

      return user;
    }
  }

})();


