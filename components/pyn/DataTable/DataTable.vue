<script setup lang="ts" generic="T">
import type {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
} from "@tanstack/vue-table";
import {
    FlexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useVueTable,
} from "@tanstack/vue-table";

import DataTablePagination from "./DataTablePagination.vue";
import DataTableToolbar from "./DataTableToolbar.vue";
import { transmissions, fuelTypes } from "./data";
import {
    IconCellColumn,
    IconCellOption,
} from "~/components/pyn/DataTable/cells/CellTypes";

interface DataTableProps {
    columns: ColumnDef<T, any>[];
    data: T[];
}
type MetaFilters = {
    filter: {
        title: string;
        options: Array<IconCellOption<T>>;
    };
};

type FilterOption<S> = {
    label: string;
    options: Array<IconCellOption<S>>;
};
const props = defineProps<DataTableProps>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const filters = ref([
    {
        columnName: "transmission",
        options: transmissions,
    },
    {
        columnName: "fuelType",
        options: fuelTypes,
    },
]);

const filteredColumns = computed(() => {
    return props.columns.filter((column) => {
        return !!column.filterFn;
    });
});

const metaFilteredColumns = computed((): Array<FilterOption<T>> => {
    return filteredColumns.value.map((column) => {
        const meta = column.meta as MetaFilters;
        return {
            label: meta.filter.title,
            options: meta.filter.options,
        } as FilterOption<T>;
    });
});

const table = useVueTable({
    data: props.data,
    columns: props.columns,
    state: {
        get sorting() {
            return sorting.value;
        },
        get columnFilters() {
            return columnFilters.value;
        },
        get columnVisibility() {
            return columnVisibility.value;
        },
        get rowSelection() {
            return rowSelection.value;
        },
    },
    enableRowSelection: true,
    onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, rowSelection),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
});
</script>

<template>
    <div class="space-y-4">
        <DataTableToolbar
            :table="table"
            :filter-options="metaFilteredColumns"
        />
        <div class="border rounded-md">
            <UiTable>
                <UiTableHeader>
                    <UiTableRow
                        v-for="headerGroup in table.getHeaderGroups()"
                        :key="headerGroup.id"
                    >
                        <UiTableHead
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                        >
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </UiTableHead>
                    </UiTableRow>
                </UiTableHeader>
                <UiTableBody>
                    <template v-if="table.getRowModel().rows?.length">
                        <UiTableRow
                            v-for="row in table.getRowModel().rows"
                            :key="row.id"
                            :data-state="row.getIsSelected() && 'selected'"
                        >
                            <UiTableCell
                                v-for="cell in row.getVisibleCells()"
                                :key="cell.id"
                            >
                                <FlexRender
                                    :render="cell.column.columnDef.cell"
                                    :props="cell.getContext()"
                                />
                            </UiTableCell>
                        </UiTableRow>
                    </template>

                    <UiTableRow v-else>
                        <UiTableCell
                            col-span="{columns.length}"
                            class="h-24 text-center"
                        >
                            No results.
                        </UiTableCell>
                    </UiTableRow>
                </UiTableBody>
            </UiTable>
        </div>

        <DataTablePagination :table="table" />
    </div>
</template>
