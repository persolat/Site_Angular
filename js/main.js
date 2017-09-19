/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "contact.html", controller: "PageCtrl"})
    .when("/404", {templateUrl: "404.html", controller: "PageCtrl"})
    
    // Portfolio
    .when("/portfolio-1-col", {templateUrl: "portfolio-1-col.html", controller: "BlogCtrl"})
    .when("/portfolio-2-col", {templateUrl: "portfolio-2-col.html", controller: "BlogCtrl"})
    .when("/portfolio-3-col", {templateUrl: "portfolio-3-col.html", controller: "BlogCtrl"})
    .when("/portfolio-4-col", {templateUrl: "portfolio-4-col.html", controller: "BlogCtrl"})   
    .when("/portfolio-item", {templateUrl: "portfolio-item.html", controller: "BlogCtrl"}) 
    
    // Blog
    .when("/blog", {templateUrl: "blog.html", controller: "BlogCtrl"})
    .when("/blog-home-1", {templateUrl: "blog-home-1.html", controller: "BlogCtrl"})
    .when("/blog-home-2", {templateUrl: "blog-home-2.html", controller: "BlogCtrl"})   
    .when("/blog/post", {templateUrl: "blog_item.html", controller: "BlogCtrl"})
    
    // Autres pages
    .when("/full-width", {templateUrl: "full-width.html", controller: "BlogCtrl"})
    .when("/sidebar", {templateUrl: "sidebar.html", controller: "BlogCtrl"})

    // else 404
    .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});