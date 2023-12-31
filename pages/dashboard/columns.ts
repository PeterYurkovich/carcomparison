import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";

import { transmissions, fuelTypes } from "./data";
import { Trim } from "~/components/pyn/DataTable/schema";
import DataTableColumnHeader from "~/components/pyn/DataTable//DataTableColumnHeader.vue";
import DataTableRowActions from "~/components/pyn/DataTable//DataTableRowActions.vue";
import { UiCheckbox } from "#components";
import { formatMoneyUsd } from "~/utils";
import CellFactory from "~/components/pyn/DataTable//cells/CellFactory.vue";

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
            h(DataTableColumnHeader<Trim>, { column, title: "Trim" }),
        cell: ({ row }) =>
            h(CellFactory, { cellType: "text", value: row.getValue("name") }),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "year",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Year" }),
        cell: ({ row }) =>
            h(CellFactory, { cellType: "text", value: row.getValue("year") }),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "cost",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Cost" }),
        cell: ({ row }) =>
            h(CellFactory, {
                cellType: "format",
                value: row.getValue("cost"),
                format: formatMoneyUsd,
            }),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "transmission",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Transmission" }),

        cell: ({ row }) => {
            return h(CellFactory<Trim["transmission"]>, {
                cellType: "icon",
                value: row.getValue("transmission"),
                options: transmissions,
            });
        },
        enableSorting: true,
        enableHiding: true,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        meta: {
            filter: {
                title: "Transmission",
                options: transmissions,
            },
        },
    },
    {
        accessorKey: "fuelType",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Fuel Type" }),

        cell: ({ row }) => {
            return h(CellFactory<Trim["fuelType"]>, {
                cellType: "icon",
                value: row.getValue("fuelType"),
                options: fuelTypes,
            });
        },
        enableSorting: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        meta: {
            filter: {
                title: "Fuel Type",
                options: fuelTypes,
            },
        },
    },
    {
        accessorKey: "cityMPG",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "City MPG" }),
        cell: ({ row }) =>
            h(CellFactory, {
                cellType: "text",
                value: row.getValue("cityMPG"),
            }),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "highwayMPG",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Highway MPG" }),
        cell: ({ row }) =>
            h(CellFactory, {
                cellType: "text",
                value: row.getValue("highwayMPG"),
            }),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "electricRange",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Electric Range" }),
        cell: ({ row }) =>
            h(CellFactory, {
                cellType: "text",
                value: row.getValue("electricRange"),
            }),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "cylinders",
        header: ({ column }) =>
            h(DataTableColumnHeader<Trim>, { column, title: "Cylinders" }),
        cell: ({ row }) =>
            h(CellFactory, {
                cellType: "text",
                value: row.getValue("cylinders"),
            }),
        enableSorting: true,
        enableHiding: true,
    },

    {
        id: "actions",
        cell: ({ row }) => h(DataTableRowActions, { row }),
    },
];
