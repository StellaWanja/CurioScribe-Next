CREATE TABLE "content" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTimestamp" timestamp DEFAULT now() NOT NULL,
	"updateTimestamp" timestamp,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"image" text,
	"userId" text NOT NULL
);
