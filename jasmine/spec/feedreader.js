/* This is our first test suite - a test suite just contains
 * a related set of tests. This suite is all about the RSS
 * feeds definitions, the allFeeds variable in our application.
 */
$ (function() {
    "use strict";
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

    });
});

/* TODO: Write a test that loops through each feed
 * in the allFeeds object and ensures it has a URL defined
 * and that the URL is not empty.
 */

it('allFeeds has Url', function() {

    "use strict";
    allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);

    });

 });
    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('allFeeds object has a name', function() {
		"use strict";
        allFeeds.forEach(function(feed) {
	    expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
		expect(typeof feed.name).toBe("string");	
            

       });

    });



/* TODO: Write a new test suite named "The menu" */

describe('menu-hidden', function() {
    "use strict";
    var body = document.hasClass('not-menu-hidden');


    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu element is hidden by default', function() {

        expect(body.className).toContain('menu-hidden');
    });
    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('menu display when clicked and does it hide when clicked again', function() {

        body.click();
        expect(body.className).notToContain('menu-hidden');
        body.click();
        expect(body.className).toContain('menu-hidden');
    });

});

/* TODO: Write a new test suite named "Initial Entries" */

/* TODO: Write a test that ensures when the loadFeed
 * function is called and completes its work, there is at least
 * a single .entry element within the .feed container.
 * Remember, loadFeed() is asynchronous so this test will require
 * the use of Jasmine's beforeEach and asynchronous done() function.
 */
describe('test suite named "Initial Entries', function() {

    "use strict";
    beforEach(function(done) {
        loadFeed(0, function() {
            done();
        });
    });

    it('has one entry after loadFeed', function() {

        var numberofEntries = document.querySelector(".feed").getElementsByClassName("entry").length;

        expect(numberofEntries).toBeGraterThan(0);
        done();

    });

    it("the entry has link ", function(done) {

        var entries = document.querySelector(".feed").getElementsByClassName("entry-link");

        var urls = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

        for (var i = 0; i < entries.length; i++) {
            expect(entries[i].href).toMatch(urls);
        }
        done();

    });


});




/* TODO: Write a new test suite named "New Feed Selection" */

describe("New Feed Selection", function() {

    "use strict";
    var initialFeedSelection;
    beforEach(function(done) {
        loadFeed(0, function() {


            initialFeedSelection = document.querySelector(".feed").innerHTML;

            loadFeed(1, function() {

                done();
            });
        });
    });
 
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    it("change its loaded content", function(done) {

        var newFeedSelection = document.querySelector(".feed").innerHTML;

        expect(initialFeedSelection).not.toBe(newFeedSelection);
        done();

    });
});
}());