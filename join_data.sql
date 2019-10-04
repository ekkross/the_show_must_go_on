select *
from events
inner join venues
on events.event_place_id = venues.venue_id
;