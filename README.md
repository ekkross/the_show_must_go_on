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
We used TicketMaster’s API to get data about venues and events in Portland.
We then cleaned our data using Python and Pandas and loaded it into a Postgres database.

Next, we created interactive maps and charts using JavaScript, Chartjs, Node.js, D3, and Leaflet (for maps).  These visualizations are interactive to allow users to change the view of said charts based on the data they choose to see.

The visualizations we created are:
- A map of Portland's event venues with venue information and bubble map reflecting numbers of upcoming shows
- Bar chart representing genre totals per venue

**Database Setup and Dashboard Access Instructions:**

- Clone the_show_must_go_on repo
- ```pip install -r requirements.txt```
- ```python build_show_must_go_on_db.py```
- Navigate into Dashboard HTML folder ```python app.py```
- Input Postgres password when prompted
- Launch local server to access dashboard

**Database Diagram:**
![The Show Must Go On Database](database_diagram.png)

**Map Information:**
This Map of Portland displays venue information including (INSERT VENUE INFO), and, under (NAME) filter, displays the number of upcoming shows per venue.

**Chart Information:**
This chart displays

**Analysis:**
Using the combination of information from the map and charts provided, you can discover which venue is most likely to have an upcoming show for a genre you love! If you want Alternative, you're most likely to see it at (THESE VENUES). If you want Rap, you're most likely to see it at (THESE VENUES).
