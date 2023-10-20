<script setup lang="ts">
import type { Column } from "@tanstack/vue-table";
import { Trim } from "./schema";

interface DataTableColumnHeaderProps {
    column: Column<Trim, any>;
    title: string;
}

defineProps<DataTableColumnHeaderProps>();
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>

<template>
    <div
        v-if="column.getCanSort()"
        :class="cn('flex items-center space-x-2', $attrs.class ?? '')"
    >
        <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
                <UiButton
                    variant="ghost"
                    size="sm"
                    class="-ml-3 h-8 data-[state=open]:bg-accent"
                >
                    <span>{{ title }}</span>
                    <Icon
                        v-if="column.getIsSorted() === 'desc'"
                        name="uil:angle-down"
                        class="w-4 h-4 ml-2"
                    />
                    <Icon
                        v-else-if="column.getIsSorted() === 'asc'"
                        name="uil:angle-up"
                        class="w-4 h-4 ml-2"
                    />
                    <Icon v-else name="uil:sort" class="w-4 h-4 ml-2" />
                </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="start">
                <UiDropdownMenuItem @click="column.toggleSorting(false)">
                    <Icon
                        name="uil:angle-up"
                        class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                    />
                    Asc
                </UiDropdownMenuItem>
                <UiDropdownMenuItem @click="column.toggleSorting(true)">
                    <Icon
                        name="uil:angle-down"
                        class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                    />
                    Desc
                </UiDropdownMenuItem>
                <UiDropdownMenuSeparator />
                <UiDropdownMenuItem @click="column.toggleVisibility(false)">
                    <Icon
                        name="uil:eye-slash"
                        class="mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                    />
                    Hide
                </UiDropdownMenuItem>
            </UiDropdownMenuContent>
        </UiDropdownMenu>
    </div>

    <div v-else :class="$attrs.class">
        {{ title }}
    </div>
</template>
