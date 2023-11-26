<script setup lang="ts" generic="T">
import { Table } from "@tanstack/vue-table";

import { fuelTypes, transmissions } from "./data";
import DataTableFacetedFilter from "./DataTableFacetedFilter.vue";
import DataTableViewOptions from "./DataTableViewOptions.vue";

interface DataTableToolbarProps {
    table: Table<T>;
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
            <DataTableFacetedFilter
                v-if="table.getColumn('fuelType')"
                :column="table.getColumn('fuelType')"
                title="Fuel Type"
                :options="fuelTypes"
            />
            <DataTableFacetedFilter
                v-if="table.getColumn('transmission')"
                :column="table.getColumn('transmission')"
                title="Transmission"
                :options="transmissions"
            />

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
