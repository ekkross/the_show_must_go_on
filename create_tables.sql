CREATE TABLE venues (
	"venue_name" TEXT,
	"venue_type" TEXT,
	"venue_id" TEXT,
	"venue_postalcode" TEXT,
	"venue_location_long" TEXT,
	"venue_location_lat" TEXT,
	"venue_upcoming_event_total" TEXT
);

CREATE TABLE events (
	"event_name" TEXT,
	"event_type" TEXT,
	"event_id" TEXT,
	"event_date_start_date" DATE,
	"event_date_status" TEXT,
	"event_seatmap_url" TEXT,
	"event_place_name" TEXT,
	"event_place_id" TEXT,
	"event_place_postalcode" TEXT,
	"event_place_location_lat" NUMERIC,
	"event_place_location_long" NUMERIC,
	"event_classification_segment_id" TEXT,
	"event_classification_segment_name" TEXT,
	"event_classification_genre_id" TEXT,
	"event_classification_genre_name" TEXT,
	"event_classification_subgenre_id" TEXT,
	"event_classification_subgenre_name" TEXT
);

select * from events;

select * from venues;
