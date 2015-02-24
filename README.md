# Angularjs + Bootstrap + HTML5Boilerplate + MAMP
___

### What is this?
---
This is a project folder scaffold, which contains the file structure for a project involving the integration of...

+ [Angularjs](https://angularjs.org/)
+ [Bootstrap](http://getbootstrap.com/)
+ [HMTL5Boilerplate](https://html5boilerplate.com/)
+ [MAMP](http://www.mamp.info/en/) (Mac, Apache, MySQL & PHP)

created with a Utility/ App called [Structurer](http://code.tutsplus.com/articles/free-mac-utility-app-structurer--net-17153)

### The Folder Struture
---
The folder structure for this application is as follows...

```
APP/
	api/
	--- classes/							<-- PHP classes
	--- scripts/							<-- PHP Scripts
	shared/									<-- Shared content (i.e app wide code like angular directives, services)
	components/
	--- home/								<-- Home page component
	------ homeController.js
	------ home.html
	--- feature/							<-- This can be like login code or registration "feature"
	------ featureController.js 			<-- Features 'controller'
	------ feature.html 					<-- Feature's 'view'
	assets/									<-- HTML/ CSS/ JS public files
	--- img/
	--- css/
	--- js/									<-- Author created javascript files
	--- vendor/								<-- Vendor plugins, resources etc
	------ angular-1.3.8.js
	------ angular-1.3.8.min.js
	------ angular-route-1.3.8.js
	------ angular-route-1.3.8.min.js
	------ angular-animate-1.3.8.js
	------ angular-animate-1.3.8.min.js
	------ angular-messages-1.3.8.js
	------ angular-messages-1.3.8.min.js
	 test/									<-- Jasmine/ Karma Testing
	--- spec/
	------ e2e/								<-- Jasmine end to end testing
	------ unit/							<-- Karma unit testing
	app.js 									<-- Angular bootstraping javascript file (includes routing)
	index.html 								<-- Main html page where angular is loaded
```
### Why?
---
This will help you get started with the screencast associated with this project. The object of this project is to allow us to create an application that will use those technologies to create a signup page. The page will have a signup form, which will be used to submit some data to the backend to be processed.

### Structurer Template
Below I am providing the actual template I am using inside of Structurer


This template would have to be saved inside the Structurer App under 'Templates'->'Manage Templates'

```
api/classes/
api/scripts/
shared/
components/feature/featureController.js
components/feature/feature.html
components/home/homeController.js
components/home/home.html
assets/img/
assets/css/
assets/js/
assets/fonts/
assets/vendor/angular-1.3.8.js:angularjs
assets/vendor/angular-1.3.8.min.js:angularjs-min
assets/vendor/angular-route-1.3.8.js:route
assets/vendor/angular-route-1.3.8.min.js:route-min
assets/vendor/angular-animate-1.3.8.js:animate
assets/vendor/angular-animate-1.3.8.min.js:animate-min
assets/vendor/angular-messages-1.3.8.js:messages
assets/vendor/angular-messages-1.3.8.min.js:messages-min
test/spec/conf.js
test/spec/e2e/
test/spec/unit/
app.js:appjs
index.html
```

You would have to then create the content for anyfiles that recieve some sort of content by creating that content in the Content Manager

### Lastly
Happy Coding!