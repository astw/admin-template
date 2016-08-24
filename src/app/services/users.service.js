/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .factory('userService', userService);


  /* @ngInject */
  function userService() {
    var userList = getInitUserList();

    var service = {
      getUserList: getUserList,
      addUserList:addUserList
    };

    return service;

    ////////////////

    function getUserList() {
      return userList
    }

    function addUserList(user) {
      userList.push(user)
    }

    function getInitUserList() {

      var users = [
        {
          firstName:"Chris",
          lastName:"Weinandt",
          userName: "Chris Weinandt",
          userType: "AuthorityUser",
          email: "aa@linkoweb.com",
          userPermission: ""
        },
        {
          firstName:"Shuhao",
          lastName:"Wang",
          userName: "Shuhao Wang",
          userType: "IndustryUser",
          email: "bb@linkoweb.com",
          userPermission: ""
        },
        {

          firstName:"Chris",
          lastName:"Weinandt",
          userName: "Chris Weinandt",
          userType: "AuthorityUser",
          email: "eric@linkoweb.com",
          userPermission: ""
        },

        {
          firstName:"Shuhao",
          lastName:"Wang",
          userName: "Shuhao Wang",
          userType: "IndustryUser",
          email: "swang@linkoweb.com",
          userPermission: ""
        }
        ,
        {

          firstName:"Terry",
          lastName:"Fox",
          userName: "Terry Fox",
          userType: "IndustryUser",
          email: "tforx@linkoweb.com",
          userPermission: ""
        }
      ];

      return users;
    }
  }

})();


