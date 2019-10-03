select *
from venues
left join events
on venues.venue_id = events.event_place_id
;