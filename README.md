# the_show_must_go_on
**Topic:**  The Show Must Go On!  We’re trying to make show-hunting as easy as possible for Portland consumers.

**Team and Roles:** 
- Michael _Leaflet and maps_
- Erin _Python, SQL_
- Charles _Flask, JavaScript, Chartjs_
- Alana _HTML, CSS_

**Data Source:** [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

**Repository:** [The Show Must Go On](https://github.com/ekkross/the_show_must_go_on)

**About:**
We set out to create a way to find the right venue based on the type of show a person wanted to see.  You want to see a metal show on a Friday night?  Your best best to find a show is Dante’s or the Jack London Revue.  Opera?  Try the Newmark Theatre.  Comedy?  Go to the Keller.

As we reviewed the TicketMaster API to see what other interesting data points we could get, we discovered that we could get the location of all of these venues as latitude and longitude in order to display them on a map.  
We also wanted to show the number of events by genre per venue to support our original question.

**Process:**
We used TicketMaster’s API to get a year's worth of data about venues and events in Portland.
We then cleaned our data using Python and Pandas and loaded it into a Postgres database.

Next, we created interactive maps and charts using JavaScript, Chartjs, Node.js, D3, and Leaflet (for maps).  These visualizations are interactive to allow users to change the view of said charts based on the data they choose to see.

The visualizations we created are:
- A map of Portland's event venues with venue information and bubble map reflecting numbers of upcoming shows
- A heat map of all the genres of shows in Portland
- Bar chart representing genre totals per venue

**Database Setup and Dashboard Access Instructions:**

1. Clone the_show_must_go_on repo
2. ```pip install -r requirements.txt```
3. ```python build_show_must_go_on_db.py```
4. Navigate into Dashboard HTML folder ```python app.py```
5. Input Postgres password when prompted
6. Launch local server to access dashboard

**Database Diagram:**
![The Show Must Go On Database](database_diagram.png)

**Conclusion:**
We were able to successfully build multiple visualizations for genres of event in Portland and where to find them. If we had more time, we would have liked to build a chart that had a dropdown for each venue, in which you could see the genre breakdown for individual venue.
We built the code for the d3 chart but were not able to get the data to load, but we left the code in the repo