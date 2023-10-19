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
        name: text("name").notNull(),
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
        }).notNull(),
        driveType: text("drive_type", {
            enum: ["fwd", "rwd", "awd"],
        }).notNull(),
        makeID: integer("make_id")
            .references(() => make.id)
            .notNull(),
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
        name: text("name").notNull(),
        year: integer("year").notNull(),
        cost: real("cost").notNull(),
        cityMPG: integer("city_mpg"),
        highwayMPG: integer("highway_mpg"),
        electricRange: integer("electric_range"),
        transmission: text("transmission", {
            enum: ["manual", "automatic"],
        }).notNull(),
        cylinders: integer("cylinders"),
        fuelType: text("fuel_type", {
            enum: ["gasoline", "diesel", "electric", "hybrid", "plugin_hybrid"],
        }).notNull(),
        modelID: integer("model_id")
            .references(() => model.id)
            .notNull(),
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
        name: text("name").notNull(),
        typeID: integer("type_id")
            .references(() => featureType.id)
            .notNull(),
        cost: real("cost").notNull(),
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
        name: text("name").notNull(),
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
        }).notNull(),
        color: text("color", {
            enum: ["black", "white", "brown", "red", "blue"],
        }).notNull(),
    },
    (color) => ({
        colorTypeIdx: index("colorTypeIdx").on(color.type),
        colorColorIdx: index("colorColorIdx").on(color.color),
    })
);

export const material = sqliteTable(
    "material",
    {
        id: integer("id").primaryKey(),
        name: text("name").notNull(),
    },
    (material) => ({
        materialNameIdx: uniqueIndex("materialNameIdx").on(material.name),
    })
);

export const materialMap = sqliteTable("material_map", {
    id: integer("id").primaryKey(),
    colorID: integer("color_id")
        .references(() => color.id)
        .notNull(),
    materialID: integer("material_id")
        .references(() => material.id)
        .notNull(),
});

export const featureMap = sqliteTable(
    "feature_map",
    {
        id: integer("id").primaryKey(),
        cost: real("cost").notNull(),
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
        trimID: integer("trim_id")
            .references(() => trim.id)
            .notNull(),
        colorID: integer("color_id")
            .references(() => color.id)
            .notNull(),
        cost: real("cost").notNull(),
    },
    (colorMap) => ({
        colorMapCostIdx: index("colorMapCostIdx").on(colorMap.cost),
    })
);
