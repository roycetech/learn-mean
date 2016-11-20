/**
1.2 The Beginning of All Routes

Let's get started creating routes for this super-duper NoteWrangler app! The night is late and the coffee
is gettin' cold. Let's set up our app so we can start wranglin' some notes!

Tasks:
1. Inside the app.js file, declare an Angular module for our NoteWrangler app. For now it will have no dependencies.
2. What is the name of the module you need to include to use routes? Update
the app.js module declaration to include it.
3. Define the module’s config() function and inject $routeProvider.
4. Create a simple route for when /notes is in the URL, link to the index.html template in
the templates/pages/notes/ directory.
5. Now, add a new div tag to our index.html with an attribute directive that will include
the rendered template for the current route.
 */


/**
1.4 A New Route and a Root Route

Practice using when() by creating a route for new notes and a route for the root of the application.

Tasks:
1. Create a new route which maps /notes/new to the notes edit.html template.
2. Create a route for / that redirects to the /users index page.
3. Create a default route that will redirect the user to /notes when an undefined route is used.
 */

/**
1.9 Inside Route Controller

We want to display notes from the server within our template. Let's get started
by creating a controller in our routes file.

Tasks:
1. Create a controller function inside this /notes route.
2. Give the newly created controller an alias of notesCtrl so that we can access it from within the notes index template.
3. We'll need to make a call to the server to retrieve the list of notes data, so we'll need to use the $http service in the controller we just created. Inject the $http service into the controller.
4. Use the $http() function to make an HTTP request to the /notes URL. Upon success, save the resulting
data to a notes variable on the controller.
 */

/**
1.10 Outside Controller

In order for a new note to be created by a user on the new notes page, we need
to add a controller and use the $http service to create a new note. This time
around, we'll use an external controller for the new notes page.

Tasks:
1. Attach the NotesCreateController to the new notes route.
2. Give the controller an alias we can reference in the template.
3. Use the ngModel directive to save the data from each form input and textarea in a model called
 note. Remember the data key on the model matches the form input name. Look at the description
 textarea in the notes/new.html template for an example.
4. Use the ngClick directive to call the saveNote() function of the controller when the save button
is clicked. Remember to pass the note model to the function.
 */

/**
1.12 Displaying a Single Note

Use the routeParams service to fetch a single note based on the id given
in the URL from the server URL /notes/:id.

Tasks:
1. Inject the routeParams service into the NotesShowController so that we get access to the id in the URL.
2. Inject the $http service into the NotesShowController so we can use it to fetch a note.
3. Use the $http() function to fetch a note from the /notes/:id URL. Upon success, save the resulting data
to a note variable on the controller.
 */


/**
2.3 Inline Controller & $scope

We have already separated out the duplicate note code into nw‑card.html. Clean up the template
using $scope syntax instead of controllerAs.

Tasks:
1. Inject the $scope service into the controller.
2. Delete the unnecessary alias for our controller.
3. Set the header property on the controller's $scope instead of this. Note:
We do not want to modify the string.
4. Set description property on the controller's $scope instead of this. Note:
We do not want to modify the string.
5. Display the header and description on the nw-card.html page.
 */


/**
2.4 Outside Controller & $scope

Now that you are familiar with $scope, let's practice using it with an outside controller.

Tasks:
1. Attach notes to $scope instead of the controller ( this).
2. Remove the controllerAs controller alias from routes.js.
3. Update the notes/index.html template to work with $scope.
 */

 /**
2.8 A Flexible Card Directive

In order to make the nw-card directive reusable, it needs to accept a few attributes.

Tasks:
1. Give the nw-card directive an isolate scope, and enable it to accept a header and description attribute with two-way bindings.
2. Now make nw-card.html work for both Notes and Users by accessing the header and description directly from the scope.
 */


/**
2.9 Making Isolation Work for You

Now that the nw-card directive has an isolate scope, the note cards no longer have access to the variables in their expressions. Let's fix that and finish making this Directive reusable for both Notes and Users.

Tasks:
1. Add attributes for header and description for the nw-card directive in the notes/index.html template.
2. Add attributes for header and description for the nw-card directive in the users/index.html template.
 */


 /**
2.12 Style the Tweeted Note

Some notes have been altered to have a tweeted property set to a timestamp of when that note was
tweeted.

Tasks:
1. Create a link function in the directive and include the parameters we will need to
grab element.
2. Add a class of tweeted to the nw-card element for any card that has a tweeted property on
its scope.
 */


 /**
3.3 A Factory Recipe II

Now that you know about factories, let's clean up the controller a bit by moving that
 $http() call into its own factory.

Tasks:
1. Return an object from the NoteFactory() function that has a method named all.
2. Move the $http() call from the controller into the all() function in our Note factory and return
the resulting promise. Don't forget to inject the $http service!
3. Inject the Note factory into the controller and use the new all() method instead of calling
 $http() directly.
 */


/**
3.5 A Tweetable Service

There is an outside Tweet Validator API that we want
to use in our NoteWrangler application. We have already created a tweetable.js file and included it
in our index.html file. Now, it's factory building time!

Tasks:
1. Let's create a Tweetable service to use the Tweet Validator API across our application.
To begin, let's name our service ''Tweetable'', inject $http and have our factory function
return an anonymous function.
2. Inside the factory, make a POST request with the $http() function to this endpoint:
3. Inject our brand spankin' new Tweetable service into NotesIndexController and then define
a new tweetThatNote() function on $scope that we can use to query the remote API from our
app.
4. Within our tweetThatNote() function, invoke the Tweetable service and console.log() the
returned status. To use our new Tweetable service, our tweetThatNote() function should
accept an argument, the description from a note, that we then pass into Tweetable().
5. Using the button tag within our notes/index.html template, invoke the new method we defined on
 $scope from NotesIndexController and pass in the note's description attribute.
 */


/**
3.6 The Configurable Bits

By default, the Tweet Validator API checks for a maxLength of 144 characters — this, too, is configurable.
Some other social posting sites have different character length requirements.

Tasks:
1. Create a characterLength variable outside of the return statement and set it to an
integer representing an alternate number of max characters.
2. Pass characterLength in for maxLength along with the description in our Tweetable()
POST request.
 */


/**
3.8 Configurable Bits Need a Provider

We want to be able to configure the characterLength before Tweetable runs. Refactor the Tweetable
factory into a provider and expose a setLength() function that will allow us to set a characterLength
in our app config.

Tasks:
1. Change the factory definition into a provider definition.
2. Wrap the existing function returned by our TweetableProvider() function in a call to the $get() function
required by providers. Don't forget to move the $http service injection!
3. Create a setLength() function attached to the provider that sets the characterLength variable.
 */


 /**
3.9 Configuring the Tweet Length

Now that our provider is ready to go, let's call the setLength() method of TweetableProvider to configure
the acceptable maximum tweet length. Instead of 144 characters, we need to allow for a characterLength of
40.

Tasks:
1. Let's call config() on our NoteWrangler module and provide it an anonymous function.
2. Inject TweetableProvider into the config() function.
3. Call the setLength() function of TweetableProvider from within the config() function and pass it
a value of 40.
 */


/**
3.11 $resource Refactor

Let's convert our custom Note factory to use Angular resource.
Remove all(), find(), and create() methods from our Note service and replace them with the
 $resource equivalent.

Tasks:
1. Include angular-resource.js in index.html so that we can use it in our app. It is located
in the same directory as our angular.js file.
2. Include ngResource in the NoteWrangler module.
3. Replace the existing object that is returned from the Note factory with an Angular resource that
uses '/notes' as the data source.
 */


/**
3.12 Using a $resource-ful Note Service

Now that our Note factory is using ngResource, we'll need to update how it's used in NotesIndexController.

Tasks:
 */


 /**
3.13 A Custom Method for Our Note $resource

Wouldn't it be great to have a custom method on our Note resource to mark it as tweeted?

Tasks:
1. Add a tweetIt method to the Note resource. Remember, this updates an existing note, so use the
correct HTTP method.
 */


/**
4.2 Glorious Directives for Our Navigation

NoteWrangler navigation has now been broken into two parts: the children — nw-nav-item — and the parent — nw-nav.

Tasks:
1. Create a default activeNav variable on nwNav's $scope and make it default to 'Notes'.
2. Create a function called getActiveNav in the controller of the nw-nav directive that returns the value of $scope.activeNav variable.
3. Create a function called setActiveNav on the controller of the nw-nav directive that sets the value of $scope.activeNav variable.
4. Return this from our controller.
 */


/**
4.3 The Parent Is Required

The nwNavItem directive needs to be able to communicate with the parent nwNav directive in order to tell when a nav item should be active. Let's go ahead and set that up.

Tasks:
1. Within the nwNavItem directive, use the require option to gain access to the controller from the parent
 nwNav directive.
2. Give the nwNavItem directive a link function. Make sure to fill in all the arguments so that we have access
to the controller required from the previous task.
 */


 /**
4.4 Using Parent Functionality

We've created the isActive() and activate() functions on the scope of the nwNavItem directive. Within these
functions, we'll need to access the controller of the nwNav directive to set and get which nav item is active.

Tasks:
1. First, we need a name for the nav item to work. Create a new isolate scope on the nwNavItem directive
and allow it to accept an attribute (@) value called name.
2. Within the isActive() function, call the getActiveNav() function from the required controller to get the
current active nav value. Compare the return value from the controller with the scope.name value and return
the result from the isActive function.
3. We need a way to set the active nav value when a nav item is clicked. In our activate() function, call
the setActiveNav() function on the require'd controller and pass the scope.name as an argument.
 */


/**
4.5 The Magic Revealed

Now that we have our nav directives working, we need to hook up the templates.

Tasks:
1. We can see in the index.html that we're already passing Notes and Users to the name attribute of our nav
item directive. Use data binding to display the value of name as the content of our a tag.
2. Give each nwNavItem a class of active if it isActive().
3. On click, call the activate() method.
4. Create an href for each nav item with a dynamic path using the name variable. The route should look like:
#/value_of_name and use data binding.
5. Notice that routes are case sensitive. When we click on Users, it finds no route for /Users, and therefore
redirects to /notes. Solve this issue by using a lowercase filter on the name binding within the route.
6. Since we've added an expression to the href attribute of our a tag, we need to change it to ng-href attribute. Check out the docs to see why this is important.
 */

 /**
4.7 Filter All the Things

Let's start cleaning up our notes tweeted page using filters.

Tasks:
 */


/**
4.8 Chaining Filters

The notes tweeted page has a search field so that users can filter notes. Let's take advantage of
this: add an additional filter to the displayed notes on our notes tweeted page.

Tasks:
 */

 /**
4.9 A Date Filter

The tweetedDate is now being displayed on each tweeted note card. Let's format it! See the
Angular documentation for the appropriate
elements to compose the format string.

Tasks:
1. Use a filter to display the tweeted date in our p tag like so: Tweeted on a Monday in October.
2. It's the middle of the night and you are ready to finish your Angular NoteWrangler app! You
realize the title of our card container div would be more beneficial if it included a
fancy date along with the title of the note.
 */


 /**
4.11 Make It Work

Using the included external library, SlabText, create a wrapper directive nwSlabText so that we can use it
in the NoteWrangler app.

Tasks:
1. Create a link function for the nwSlabText directive.
2. Call the slabText() method on directive's element. Refer to the
SlabText docs for the method name.
3. Add an attribute directive for nwSlabText to the h2 tag in the nw-card.html template.
4. We have a problem: the link function of the nwSlabText directive is being called before the element has
been populated with data. To solve this, inject and use the $timeout service.
 */


 /**
4.12 A Popover for Note Descriptions

Instead of a Bootstrap tooltip, we are going to display additional tweeted info about a note inside our
very own popover directive!

Tasks:
1. Inside a $timeout(), make a Bootstrap popover, to replace the default tooltip on hover, by passing the
 popover() method { trigger: 'hover' }. Refer to the Bootstrap API
docs for the popover() method and parameters. Don't forget to rename our directive to 'popover'.
2. Now, use our brand spankin' new popover directive to display the note's title on hover.
3. Using the attributes argument of the function returned by our new popover directive, make note attributes
available to our popover by providing them as content in the options object passed to popover().
Note: the attributes argument is the third argument for the function returned by the popover directive,
after scope and element.
4. Clean up after our popover directive when $destroy is fired on scope.
 */