import { trim } from "~/drizzle/schema";

export type Trim = typeof trim.$inferInsert;

export type IconCell<T> = {
    value: T;
    label: string;
    icon: string;
};

export type IconCellColumn<T> = Array<IconCell<T>>;
