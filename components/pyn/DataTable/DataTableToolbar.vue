<script setup lang="ts" generic="T">
import { Table } from "@tanstack/vue-table";

import DataTableFacetedFilter from "./DataTableFacetedFilter.vue";
import DataTableViewOptions from "./DataTableViewOptions.vue";
import { IconCellOption } from "~/components/pyn/DataTable/cells/CellTypes";

type FilterOption<S> = {
    label: string;
    options: Array<IconCellOption<S>>;
};

type FilterOptions = Array<FilterOption<T>>;

interface DataTableToolbarProps {
    table: Table<T>;
    filterOptions: FilterOptions;
}

const props = defineProps<DataTableToolbarProps>();

const isFiltered = computed(
    () => props.table.getState().columnFilters.length > 0
);
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center flex-1 space-x-2">
            <UiInput
                placeholder="Filter trims..."
                :model-value="
                    (table.getColumn('name')?.getFilterValue() as string) ?? ''
                "
                class="h-8 w-[150px] lg:w-[250px]"
                @input="
                    table.getColumn('name')?.setFilterValue($event.target.value)
                "
            />
            <template v-for="filter in props.filterOptions">
                <DataTableFacetedFilter
                    v-if="table.getColumn(filter.label)"
                    :column="table.getColumn(filter.label)"
                    :title="filter.label"
                    :options="filter.options"
                />
            </template>

            <UiButton
                v-if="isFiltered"
                variant="ghost"
                class="h-8 px-2 lg:px-3"
                @click="table.resetColumnFilters()"
            >
                Reset
                <Icon name="uil:multiply" class="w-4 h-4 ml-2" />
            </UiButton>
        </div>
        <DataTableViewOptions :table="table" />
    </div>
</template>
