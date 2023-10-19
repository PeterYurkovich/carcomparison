CREATE TABLE `color` (
	`id` integer PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`color` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `color_map` (
	`id` integer PRIMARY KEY NOT NULL,
	`trim_id` integer NOT NULL,
	`color_id` integer NOT NULL,
	`cost` real NOT NULL,
	FOREIGN KEY (`trim_id`) REFERENCES `trim`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`color_id`) REFERENCES `color`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `feature` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type_id` integer NOT NULL,
	`cost` real NOT NULL,
	FOREIGN KEY (`type_id`) REFERENCES `feature_type`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `feature_map` (
	`id` integer PRIMARY KEY NOT NULL,
	`cost` real NOT NULL,
	`model_id` integer,
	`trim_id` integer,
	`feature_id` integer NOT NULL,
	FOREIGN KEY (`model_id`) REFERENCES `model`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`trim_id`) REFERENCES `trim`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`feature_id`) REFERENCES `feature`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `feature_type` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `make` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `material` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `material_map` (
	`id` integer PRIMARY KEY NOT NULL,
	`color_id` integer NOT NULL,
	`material_id` integer NOT NULL,
	FOREIGN KEY (`color_id`) REFERENCES `color`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`material_id`) REFERENCES `material`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `model` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`body_type` text NOT NULL,
	`drive_type` text NOT NULL,
	`make_id` integer NOT NULL,
	FOREIGN KEY (`make_id`) REFERENCES `make`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trim` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`year` integer NOT NULL,
	`cost` real NOT NULL,
	`city_mpg` integer,
	`highway_mpg` integer,
	`electric_range` integer,
	`transmission` text NOT NULL,
	`cylinders` integer,
	`fuel_type` text NOT NULL,
	`model_id` integer NOT NULL,
	FOREIGN KEY (`model_id`) REFERENCES `model`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `colorTypeIdx` ON `color` (`type`);--> statement-breakpoint
CREATE INDEX `colorColorIdx` ON `color` (`color`);--> statement-breakpoint
CREATE INDEX `colorMapCostIdx` ON `color_map` (`cost`);--> statement-breakpoint
CREATE UNIQUE INDEX `featureNameIdx` ON `feature` (`name`);--> statement-breakpoint
CREATE INDEX `featureTypeIDIdx` ON `feature` (`type_id`);--> statement-breakpoint
CREATE INDEX `featureCostIdx` ON `feature` (`cost`);--> statement-breakpoint
CREATE INDEX `featureMapCostIdx` ON `feature_map` (`cost`);--> statement-breakpoint
CREATE UNIQUE INDEX `featureTypeNameIdx` ON `feature_type` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `makeNameIdx` ON `make` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `materialNameIdx` ON `material` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `modelNameIdx` ON `model` (`name`);--> statement-breakpoint
CREATE INDEX `modelBodyTypeIdx` ON `model` (`body_type`);--> statement-breakpoint
CREATE INDEX `modelDriveTypeIdx` ON `model` (`drive_type`);--> statement-breakpoint
CREATE UNIQUE INDEX `trimNameIdx` ON `trim` (`name`);--> statement-breakpoint
CREATE INDEX `trimYearIdx` ON `trim` (`year`);--> statement-breakpoint
CREATE INDEX `trimCostIdx` ON `trim` (`cost`);--> statement-breakpoint
CREATE INDEX `trimCityMPGIdx` ON `trim` (`city_mpg`);--> statement-breakpoint
CREATE INDEX `trimHighwayMPGIdx` ON `trim` (`highway_mpg`);--> statement-breakpoint
CREATE INDEX `trimElectricRangeIdx` ON `trim` (`electric_range`);--> statement-breakpoint
CREATE INDEX `trimTransmissionIdx` ON `trim` (`transmission`);--> statement-breakpoint
CREATE INDEX `trimCylindersIdx` ON `trim` (`cylinders`);--> statement-breakpoint
CREATE INDEX `trimFuelTypeIdx` ON `trim` (`fuel_type`);