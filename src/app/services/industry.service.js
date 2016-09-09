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
    var industryList = new getInitialIndustryList();
    var initialPendingApprovalUserList = new initialPendingApprovalUserList();

    var service = {
      getUserByEmail:getUserByEmail,
      getIndustryUsers: getIndustryUsers,
      createIndustryUsers: createIndustryUsers,
      getInvitedUserList:getInvitedUserList,
      addInvitedUser:addInvitedUser,
      deleteInvitedUser:deleteInvitedUser,

      getIndustryList:getIndustryList,
      getIndustryById:getIndustryById,

      getPendingApprovalUsers : getPendingApprovalUsers,

      getPendingApprovalUserDetail : getPendingApprovalUserDetail

    };

    return service;

    ////////////////
    function getPendingApprovalUserDetail(email) {
      var user = initialPendingApprovalUserList.find(function(u){
         return u.email == email;
      });

      if(user) {
        user.securityQuestion1 = questionService.getSecurityQuestionById(user.secureQuestion1Id).value;
        user.securityQuestion2 = questionService.getSecurityQuestionById(user.secureQuestion2Id).value;

        user.secureQuestion1 = user.securityQuestion1;
        user.secureQuestion2 = user.securityQuestion2;

        user.kbqQuestion1 = questionService.getSecurityQuestionById(user.kbqQuestion1id).value;
        user.kbqQuestion2 = questionService.getSecurityQuestionById(user.kbqQuestion2id).value;
      }

      return user;
    }

    function getPendingApprovalUsers(){
       return initialPendingApprovalUserList.map(function(user){
         user.securityQuestion1 = questionService.getSecurityQuestionById(user.secureQuestion1Id).value;
         user.securityQuestion2 = questionService.getSecurityQuestionById(user.secureQuestion2Id).value;
         user.secureQuestion1 = user.securityQuestion1;
         user.secureQuestion2 = user.securityQuestion2;
         return user;
       });
    }

    function initialPendingApprovalUserList() {

      var data = [

        {
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
          organization:'Kerry Sweet Ingredients (0040)',
          mailAddress:'Suite 710 West Pender, Vancouver, BC',
          suite:'710',
          city:'Vancouver',
          state:'B.C',
          zipCode:'v3x 6h1',
          fax:'770-495-4160',
          requestedUserName:'Vickitt Lau',

          secureQuestion1Id:7,
          secureQuestion1Answer:'noodle',
          secureQuestion2Id:9,
          secureQuestion2Answer:'blue',

          kbqQuestion1id:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2id:2,
          kbqQuestion2Answer:'harry potter'
        }];

      return data;

    }
    function getIndustryById(id) {
      return industryList.find(function (i) {
        return i.permitNo == id;
      });
    }

    function getIndustryList() {
      return industryList;
    }
    function getUserByEmail(email) {
       var user = userList.find(function(user){
          return user.email == email;
       });

      if(user) {
        user.securityQuestion1 = questionService.getSecurityQuestionById(user.securityQuestion1Id).value;
        user.securityQuestion2 = questionService.getSecurityQuestionById(user.securityQuestion2Id).value;
        user.secureQuestion1 = user.securityQuestion1;
        user.secureQuestion2 = user.securityQuestion2;
      }

      return user;
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
        user.secureQuestion1 = questionService.getSecurityQuestionById(user.securityQuestion1Id).value;
        user.secureQuestion2 = questionService.getSecurityQuestionById(user.securityQuestion2Id).value;
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

          securityQuestion1Id:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2Id:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1id:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2id:2,
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

          securityQuestion1Id:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2Id:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1id:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2id:2,
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

          securityQuestion1Id:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2Id:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1id:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2id:2,
          kbqQuestion2Answer:'harry potter'

        },
        {
          userId:5,
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

          securityQuestion1Id:7,
          securityQuestion1Answer:'noodle',
          securityQuestion2Id:9,
          securityQuestion2Answer:'blue',

          kbqQuestion1id:2,
          kbqQuestion1Answer:"whilster",
          kbqQuestion2id:2,
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

    function getInitialIndustryList() {
      var data = [
        {
          permitNo: "0040",
          industry: "Valley City Plating",
          address: "100 E. 26th Street Grand Rapids MI 49508",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 2
        },
        {
          permitNo: "8296",
          industry: "Kerry Sweet Ingredients",
          address: "4444 52nd St. SE. Kentwood MI 49512",
          enabled: "Yes",
          hasSignatory: "Yes",
          assignTo: "BF",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },

        {
          permitNo: "0032",
          industry: "Lacks Enterprises (Plastic Plate)",
          address: "1648 Monroe Ave. N.W., Grand Rapids, MI 49505",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0469",
          industry: "Lacks Enterprises (Plastic Plate)",
          address: "4375 52nd St. SE Kentwood, MI 49512",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0062",
          industry: "Access Business Group L.L.C.",
          address: "7575 Fulton, E. Ada, MI 49355",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "BF",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0711",
          industry: "Lacks Industries, Inc.  (0711)",
          address: "4090 Barden S.E. Kentwood, MI 49512",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "8296",
          industry: "Kerry Sweet Ingredients",
          address: "4444 52nd St. SE Kentwood, MI 49512",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "BF",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0718",
          industry: "Advance Plating and Finishing",
          address: "840 Cottage Grove St. SE Grand Rapids MI 49507",
          enabled: "Yes",
          hasSignatory: "No",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0762",
          industry: "Coatings Plus, Inc.",
          address: "675 Chestnut St. SW Grand Rapids MI 49503",
          enabled: "Yes",
          hasSignatory: "Yes",
          assignTo: "BF",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        },
        {
          permitNo: "0764",
          industry: "Lacks Enterprises (Paint West)",
          address: "4245 52nd St. Kentwood, MI 49512",
          enabled: "Yes",
          hasSignatory: "Yes",
          assignTo: "KA",
          lastSubmission: "",
          activeDataEntryForTemplates: 0
        }
      ];

      return data;
    }
  }

})();


