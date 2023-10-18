CREATE TABLE `make` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `model` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`make_id` integer,
	FOREIGN KEY (`make_id`) REFERENCES `make`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `nameIdx` ON `make` (`name`);