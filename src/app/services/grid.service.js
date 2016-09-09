(function () {
  'use strict';

  angular
    .module('testProject')
    .factory('gridDefinitionService', gridDefinitionService);

  /* @ngInject */
  function gridDefinitionService( ) {
    var service = {

      getUserColumsDefinition: getUserColumsDefinition,
      getIndustryColumnsDefinition:getIndustryColumnsDefinition
    };
    return service;

    ////////////////

    function getIndustryColumnsDefinition() {
      return [
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "firstName",
          title: "First Name",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "lastName",
          title: "Last Name",
          minScreenWidth: 960,
        },

        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "email",
          title: "Email",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "dateInvited",
          title: "Date Invited",
          minScreenWidth: 1200,
          format: "{0:MM-dd-yyyy h:mm tt}"
        },

        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "inviteExpires",
          title: "Invite Expires",
          format: "{0:MM-dd-yyyy h:mm tt}"
        },
        {

          headerAttributes: {
            "class": "hidden-md hidden-lg visible-sm visible-xs"
          },
          title: "Invited Users",
          //          headerTemplate:'<label class="visible-sm visible-xs"> Invited Users </label>',
          template: "<div class=' visible-sm visible-xs'>" +
          "<dt>First Name. </dt>" +
          "<dd>#:firstName #</dd>" +
          "<dt>Last Name: </dt>" +
          "<dd>#:lastName#</dd>" +

          "<dt>Email </dt>" +
          "<dd>#:email #</dd>" +
          "<dt>Date Invited:</dt>" +
          "<dd>#:dateInvited #</dd>" +
          "<dt>Invite Expires </dt>" +
          "<dd>#:inviteExpires# </dd>" +
          "</div>"

        }
        ];
    }
    function getUserColumsDefinition() {
        return  [
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "firstName",
          title: "First Name",
          minScreenWidth: 960
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "lastName",
          title: "Last Name",
          minScreenWidth: 960
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "phone",
          title: "Phone",
          minScreenWidth: 960
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "email",
          title: "Email",
          minScreenWidth: 960
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "registeredDate",
          title: "Date Registered",
          minScreenWidth: 1200
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "10%",
          field: "status",
          title: "Status",
          minScreenWidth: 1200
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "10%",
          field: "locked",
          title: "Account Locked?",
          minScreenWidth: 1200
        },
        {
          template: "<div class='fa fa-chevron-circle-right fa-lg pull-right'>" + "</div>",
          width: 60,
          filterable: false

        },
        {

          headerAttributes: {
            "class": "hidden-md hidden-lg visible-sm visible-xs"
          },
          title: "User Information",
//             headerTemplate:'<label class="visible-sm visible-xs"> User Information </label>',
          template: "<div class=' visible-sm visible-xs'>" +
          "<dt>First Name. </dt>" +
          "<dd>#:firstName #</dd>" +
          "<dt>Last Name: </dt>" +
          "<dd>#:lastName#</dd>" +
          "<dt>Phone </dt>" +
          "<dd>#:phone #</dd>" +

          "<dt>Email </dt>" +
          "<dd>#:email #</dd>" +
          "<dt>Registered Date: </dt>" +
          "<dd>#:registeredDate #</dd>" +
          "<dt>Status </dt>" +
          "<dd>#:status# </dd>" +
          "<dt>Locked </dt>" +
          "<dd>#:locked# </dd>" +

          "</div>"

        }
      ]
    }
  }

})();

