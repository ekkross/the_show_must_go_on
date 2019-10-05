# the_show_must_go_on
**Topic:**  The Show Must Go On!  We’re trying to make show-hunting as easy as possible for Portland consumers.  Venues.  People.  Sales.

**Team:** Erin, Michael, Charles, and Alana

**Roles:** 
- Michael _Leaflet and maps_
- Erin _Python, SQL_
- Charles _Flask, JavaScript, Chartjs_
- Alana _HTML, CSS_

**Data source:** Ticketmaster API

**Repo name:** https://github.com/ekkross/the_show_must_go_on

We will use TicketMaster’s API to get data about venues, events, and prices.
We will then clean our data using Python and Pandas and load it into a Postgres database.

Next, we will create interactive maps and charts using JavaScript, Chartjs, Node.js, and Leaflet (for maps).  These visualizations will be interactive using Event Listeners, drop downs, menus etc. to change the view of said charts.

The visualizations we will include are likely to be:
Map of Portland with multiple filtering methods to update the data displayed
Bar chart representing genre counts, ticket prices, etc.
Ideally, we will also be able to display seat maps for each venue when they are chosen from a dropdown menu.
We may also include data about total Portland sales on events in the last X months.

**About:**
We set out to create a way to find the right venue based on the type of show a person wanted to see.  You want to see a metal show on a Friday night?  Your best best to find a show is Dante’s or the Jack London Revue.  Opera?  Try the Newmark Theatre.  Comedy?  Go to the Keller.  
As we reviewed the TicketMaster API to see what other interesting data points we could get, we discovered that we could get the location of all of these venues as latitude and longitude in order to display them on a map.  
We also wanted to show the number of events by genre per venue to support our original question.

**Database Diagram:**
![The Show Must Go On Database](database_diagram.png)