'use strict';

var app = angular.module('kpm-ui', ['ngCookies', 'ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  // Bind routes to controllers
  $stateProvider
  .state('home', {
    url: '/home',
    title: 'Welcome to KPM',
    controller: 'HomeController',
    templateUrl: 'app/modules/home/home.html'
  })
  .state('packages', {
    url: '/packages?search',
    title: 'Package list',
    controller: 'PackageListController',
    templateUrl: 'app/modules/packages/list.html'
  })
  .state('package', {
    // Type 'any' prevents from encoding the '/' in package name
    url: '/package/{name:any}',
    title: 'Package detail',
    controller: 'PackageController',
    templateUrl: 'app/modules/packages/package.html'
  })
  .state('organization', {
    url: '/organization/{name}',
    title: 'Organization detail',
    controller: 'OrganizationController',
    templateUrl: 'app/modules/organization/organization.html'
  })
  .state('user', {
    url: '/user/{username}',
    title: 'User',
    controller: 'UserController',
    templateUrl: 'app/modules/user/user.html',
  })
  // Settings (authenticated users only)
  .state('settings', {
    url: '/settings',
    controller: 'SettingsController',
    templateUrl: 'app/modules/settings/settings.html',
    abstract: true,
    onEnter: function($state, Session) {
      if (!Session.isAuthenticated()) {
        $state.go('login');
      }
    }
  })
  .state('settings.profile', {
    url: '/profile',
    controller: 'SettingsProfileController',
    templateUrl: 'app/modules/settings/profile.html'
  })
  .state('settings.tokens', {
    url: '/tokens',
    controller: 'SettingsTokensController',
    templateUrl: 'app/modules/settings/tokens.html'
  })
  .state('settings.organizations', {
    url: '/organizations',
    controller: 'SettingsOrganizationsController',
    templateUrl: 'app/modules/settings/organizations.html'
  })
  // Session
  .state('login', {
    url: '/login',
    title: 'Login',
    controller: 'LoginController',
    templateUrl: 'app/modules/user/login.html'
  })
  .state('signup', {
    url: '/signup',
    title: 'Create an account',
    controller: 'SignupController',
    templateUrl: 'app/modules/user/signup.html'
  })
  .state('error404', {
    url: '/404',
    templateUrl: 'app/modules/errors/404.html'
  });

  $urlRouterProvider
    .when('', '/home')
    .otherwise('404');

  // Anuglar Material colors
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey');
});

app.controller('AppController', function($rootScope, $sce, Session) {
  // Expose modules in root scope for templates convenience
  $rootScope.config = Config;
  $rootScope.session = Session;

  // Update page title on state change
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.stateName = toState.name;
    $rootScope.pageTitle = $sce.trustAsHtml('KPM | ' + toState.title);
  });

  // Application-wide ui variables
  $rootScope.ui = {
    loading: false
  };

  $rootScope.build_error = function(data) {
    var string = data && data.hasOwnProperty('error') ?
      data.error.message + ': ' + data.error.details :
      'Someting went wrong';
    return string + ' (╯°□°）╯︵ ┻━┻)';
  };

  // Attempt to auto-connect user from cookies
  Session.connectFromCookie();
});

