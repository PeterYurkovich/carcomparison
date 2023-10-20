import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";

import { transmissions, fuelTypes } from "./data";
import { Trim } from "./schema";
import DataTableColumnHeader from "./DataTableColumnHeader.vue";
import DataTableRowActions from "./DataTableRowActions.vue";
import { UiCheckbox } from "#components";
import { Icon } from "#components";
import { formatMoneyUsd } from "~/utils";

export const columns: ColumnDef<Trim>[] = [
    {
        id: "select",
        header: ({ table }) =>
            h(UiCheckbox, {
                checked: table.getIsAllPageRowsSelected(),
                "onUpdate:checked": (value) =>
                    table.toggleAllPageRowsSelected(!!value),
                ariaLabel: "Select all",
                class: "translate-y-[2px]",
            }),
        cell: ({ row }) =>
            h(UiCheckbox, {
                checked: row.getIsSelected(),
                "onUpdate:checked": (value) => row.toggleSelected(!!value),
                ariaLabel: "Select row",
                class: "translate-y-[2px]",
            }),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Trim" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("name")),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "year",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Year" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("year")),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "cost",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Cost" }),
        cell: ({ row }) =>
            h(
                "div",
                { class: "w-[80px]" },
                formatMoneyUsd(row.getValue("cost"))
            ),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "transmission",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Transmission" }),

        cell: ({ row }) => {
            const transmission = transmissions.find(
                (transmission) =>
                    transmission.value === row.original.transmission
            );

            if (!transmission) {
                return h("span", "Unknown");
            }

            return h(
                "div",
                { class: "flex space-x-2" },
                {
                    default: () => [
                        h(Icon, {
                            name: transmission.icon,
                            class: "mr-2 h-4 w-4 text-muted-foreground",
                        }),
                        h("span", transmission.label),
                    ],
                }
            );
        },
        enableSorting: true,
        enableHiding: true,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "fuelType",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Fuel Type" }),

        cell: ({ row }) => {
            const fuelType = fuelTypes.find(
                (fuelType) => fuelType.value === row.original.fuelType
            );

            if (!fuelType) {
                return h("span", "Unknown");
            }

            return h(
                "div",
                { class: "flex space-x-2" },
                {
                    default: () => [
                        h(Icon, {
                            name: fuelType.icon,
                            class: "mr-2 h-4 w-4 text-muted-foreground",
                        }),
                        h("span", fuelType.label),
                    ],
                }
            );
        },
        enableSorting: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "cityMPG",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "City MPG" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("cityMPG")),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "highwayMPG",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Highway MPG" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("highwayMPG")),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "electricRange",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Electric Range" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("electricRange")),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "cylinders",
        header: ({ column }) =>
            h(DataTableColumnHeader, { column, title: "Cylinders" }),
        cell: ({ row }) =>
            h("div", { class: "w-[80px]" }, row.getValue("cylinders")),
        enableSorting: true,
        enableHiding: true,
    },

    {
        id: "actions",
        cell: ({ row }) => h(DataTableRowActions, { row }),
    },
];
