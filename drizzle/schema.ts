import {
    sqliteTable,
    text,
    integer,
    uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const make = sqliteTable(
    "make",
    {
        id: integer("id").primaryKey(),
        name: text("name"),
    },
    (make) => ({
        nameIdx: uniqueIndex("nameIdx").on(make.name),
    })
);

export const model = sqliteTable("model", {
    id: integer("id").primaryKey(),
    name: text("name"),
    makeID: integer("make_id").references(() => make.id),
});
