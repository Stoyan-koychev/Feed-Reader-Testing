/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         /*
         * create an counter
         * loop through the object and if url property exists
         * the counter is increased
         */
         it('URL\'s exists', function() {
           let counter = 0;
           for (var i = 0; i < allFeeds.length; i++) {
             if (allFeeds[i].hasOwnProperty('url')) {
               counter++;
             }
           }
           expect(counter).toBe(allFeeds.length);
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are exists', function() {
           let count = 0;
           for (var i = 0; i < allFeeds.length; i++) {
             if (allFeeds[i].hasOwnProperty('name')) {
               count++
             }
           }
           expect(count).toBe(allFeeds.length);
         });
    });

    /* TODO: Write a new test suite named "The menu" */
      describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /*
         * Saves the body and the $icon
         * checks the body class on clicked
         */
         let $body,
             $icon;

         beforeEach(function() {
           $body = $('body');
           $icon = $('i.icon-list');
         });

         it('is hidden', function() {
           expect($body.hasClass('menu-hidden')).toBe(true);
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('can toggle', function() {
            $icon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);
            $icon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
          });

      });

    /* TODO: Write a new test suite named "Initial Entries" */
      describe('Initial Entries', function(){
     /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */
      let $entry;

          /*
          * Check if the links are loaded
          */
          beforeEach(function(done) {
            loadFeed(0, done);
            $entry = $('.feed .entry');
          });
          it('at least 1+ entry is called', function() {
            expect($entry.context.links.length).toBeGreaterThan(0);
          });

      });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       let $first,
           $second;
           /*
           * Saves fisrt and and second feed and copares them
           */

          beforeEach(function(done) {
            loadFeed(0, function() {
              $first = $('.feed').html();
              loadFeed(1, done);
            });
          });
          it('content changes', function() {
            $second = $('.feed').html();
            expect($second).not.toEqual($first);
          });
        });

}());
