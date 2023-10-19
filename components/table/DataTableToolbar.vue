<script setup lang="ts">
import { Table } from "@tanstack/vue-table";
import { Task } from "./schema";

import { priorities, statuses } from "./data";
import DataTableFacetedFilter from "./DataTableFacetedFilter.vue";
import DataTableViewOptions from "./DataTableViewOptions.vue";

interface DataTableToolbarProps {
    table: Table<Task>;
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
                placeholder="Filter tasks..."
                :model-value="
                    (table.getColumn('title')?.getFilterValue() as string) ?? ''
                "
                class="h-8 w-[150px] lg:w-[250px]"
                @input="
                    table
                        .getColumn('title')
                        ?.setFilterValue($event.target.value)
                "
            />
            <DataTableFacetedFilter
                v-if="table.getColumn('status')"
                :column="table.getColumn('status')"
                title="Status"
                :options="statuses"
            />
            <DataTableFacetedFilter
                v-if="table.getColumn('priority')"
                :column="table.getColumn('priority')"
                title="Priority"
                :options="priorities"
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
