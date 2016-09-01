/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .factory('industryService', industryService);

  industryService.$inject = ['questionService'];

  /* @ngInject */
  function industryService(questionService) {
    var userList =  getUserList();
    var invitedUserList = getInitalInvitedUserList();

    var service = {
      getUserByEmail:getUserByEmail,
      getIndustryUsers: getIndustryUsers,
      createIndustryUsers: createIndustryUsers,
      getInvitedUserList:getInvitedUserList,
      addInvitedUser:addInvitedUser,
      deleteInvitedUser:deleteInvitedUser

    };

    return service;

    ////////////////

    function getUserByEmail(email) {
       var user = userList.find(function(user){
          return user.email == email;
       });

      user.securityQuestion1 = questionService.getSecurityQuestionById(user.securityQuestion1).value;
      user.securityQuestion2 = questionService.getSecurityQuestionById(user.securityQuestion2).value;
    }

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

      var users = userList.map(function(user){
        user.securityQuestion1 = questionService.getSecurityQuestionById(user.securityQuestion1).value;
        user.securityQuestion2 = questionService.getSecurityQuestionById(user.securityQuestion2).value;
        return user;
      });

      return users;
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
          role:'Administrator',
          requestedUserName:'Vickitt Lau',

          securityQuestion1:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2:2,
          kbqQuestion2Answer:'harry potter'
        },
        {   userId:3,
          firstName: "Eric",
          lastName: "Snell",
          phone:"(772)-496-4160",
          email:"eric@linkoweb.com",
          registeredDate:"06-01-2016",
          status:"Inactive",
          locked:"No",
          role:'Administrator',
          requestedUserName:'Vickitt Lau',

          securityQuestion1:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2:2,
          kbqQuestion2Answer:'harry potter'
        },
        {
          userId:4,
          salutation:"Mr",
          firstName: "Chris",
          lastName: "Weinandt",
          phone:"(770)-496-4160",
          email:"Weinandt@linkotechnology.com",
          registeredDate:"06-01-2016",
          status:"Active",
          locked:"No",
          role:'Administrator',
          userType:'AuthorityUser',
          organization:'Grand Rapid Authority',
          mailAddress:'Suite 710 West Pender, Vancouver, BC',
          suite:'710',
          city:'Vancouver',
          state:'B.C',
          zipCode:'v3x 6h1',
          fax:'770-495-4160',
          requestedUserName:'Vickitt Lau',

          securityQuestion1:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2:2,
          kbqQuestion2Answer:'harry potter'

        },
        {
          userId:4,
          salutation:"Mr",
          firstName: "Shuhao",
          lastName: "Wang",
          phone:"778-958-2169",
          email:"swang@linkotechnology.com",
          registeredDate:"06-01-2015",
          status:"Active",
          locked:"No",
          role:'Standard',
          userType:'IndustryUser',
          organization:'Grand Rapid Authority',
          mailAddress:'Suite 710 West Pender, Vancouver, BC',
          suite:'710',
          city:'Vancouver',
          state:'B.C',
          zipCode:'v3x 6h1',
          fax:'770-495-4160',
          requestedUserName:'Vickitt Lau',

          securityQuestion1:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2:2,
          kbqQuestion2Answer:'harry potter'
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


