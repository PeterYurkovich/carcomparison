import {
    sqliteTable,
    text,
    integer,
    real,
    uniqueIndex,
    index,
} from "drizzle-orm/sqlite-core";

export const make = sqliteTable(
    "make",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
    },
    (make) => ({
        makeNameIdx: uniqueIndex("makeNameIdx").on(make.name),
    })
);

export const model = sqliteTable(
    "model",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
        bodyType: text("body_type", {
            enum: [
                "sedan",
                "coupe",
                "suv",
                "truck",
                "van",
                "hatchback",
                "convertible",
                "wagon",
            ],
        }),
        driveType: text("drive_type", {
            enum: ["fwd", "rwd", "awd"],
        }),
        makeID: integer("make_id").references(() => make.id),
    },
    (model) => ({
        modelNameIdx: uniqueIndex("modelNameIdx").on(model.name),
        modelBodyTypeIdx: index("modelBodyTypeIdx").on(model.bodyType),
        modelDriveTypeIdx: index("modelDriveTypeIdx").on(model.driveType),
    })
);

export const trim = sqliteTable(
    "trim",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
        year: integer("year"),
        cost: real("cost"),
        cityMPG: integer("city_mpg"),
        highwayMPG: integer("highway_mpg"),
        electricRange: integer("electric_range"),
        transmission: text("transmission", {
            enum: ["manual", "automatic"],
        }),
        cylinders: integer("cylinders"),
        fuelType: text("fuel_type", {
            enum: ["gasoline", "diesel", "electric", "hybrid", "plugin_hybrid"],
        }),
        modelID: integer("model_id").references(() => model.id),
    },
    (trim) => ({
        trimNameIdx: uniqueIndex("trimNameIdx").on(trim.name),
        trimYearIdx: index("trimYearIdx").on(trim.year),
        trimCostIdx: index("trimCostIdx").on(trim.cost),
        trimCityMPGIdx: index("trimCityMPGIdx").on(trim.cityMPG),
        trimHighwayMPGIdx: index("trimHighwayMPGIdx").on(trim.highwayMPG),
        trimElectricRangeIdx: index("trimElectricRangeIdx").on(
            trim.electricRange
        ),
        trimTransmissionIdx: index("trimTransmissionIdx").on(trim.transmission),
        trimCylindersIdx: index("trimCylindersIdx").on(trim.cylinders),
        trimFuelTypeIdx: index("trimFuelTypeIdx").on(trim.fuelType),
    })
);

export const feature = sqliteTable(
    "feature",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
        typeID: integer("type_id").references(() => featureType.id),
        cost: real("cost"),
    },
    (feature) => ({
        featureNameIdx: uniqueIndex("featureNameIdx").on(feature.name),
        featureTypeIDIdx: index("featureTypeIDIdx").on(feature.typeID),
        featureCostIdx: index("featureCostIdx").on(feature.cost),
    })
);

export const featureType = sqliteTable(
    "feature_type",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
    },
    (featureType) => ({
        featureTypeNameIdx: uniqueIndex("featureTypeNameIdx").on(
            featureType.name
        ),
    })
);

export const color = sqliteTable(
    "color",
    {
        id: integer("id").primaryKey(),
        type: text("type", {
            enum: ["interior", "exterior"],
        }),
        color: text("color", {
            enum: ["black", "white", "brown", "red", "blue"],
        }),
    },
    (color) => ({
        colorTypeIdx: index("colorTypeIdx").on(color.type),
        colorColorIdx: index("colorColorIdx").on(color.color),
    })
);

export const featureMap = sqliteTable(
    "feature_map",
    {
        id: integer("id").primaryKey(),
        cost: real("cost"),
        modelID: integer("model_id").references(() => model.id),
        trimID: integer("trim_id").references(() => trim.id),
        featureID: integer("feature_id")
            .references(() => feature.id)
            .notNull(),
    },
    (featureMap) => ({
        featureMapCostIdx: index("featureMapCostIdx").on(featureMap.cost),
    })
);

export const colorMap = sqliteTable(
    "color_map",
    {
        id: integer("id").primaryKey(),
        trimID: integer("trim_id").references(() => trim.id),
        colorID: integer("color_id").references(() => color.id),
        cost: real("cost"),
    },
    (colorMap) => ({
        colorMapCostIdx: index("colorMapCostIdx").on(colorMap.cost),
    })
);
