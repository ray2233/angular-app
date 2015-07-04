angular.module('resources.projects', ['mongolabResource']);
angular.module('resources.projects').factory('Projects', ['mongolabResource', function ($mongolabResource) {

  var Projects = $mongolabResource('projects');

  Projects.forUser = function(userId, successcb, errorcb) {
    //TODO: get projects for this user only (!)
    return Projects.query({}, successcb, errorcb);
  };

  Projects.prototype.isstartdate = function (startdate) {
    return this.startdate === startdate;
  };
  Projects.prototype.isenddate = function (enddate) {
    return this.enddate === enddate;
  };
  Projects.prototype.isassignedto = function (assignedto) {
    return this.enddate === assignedto;
  };
  
  return Projects;
}]);