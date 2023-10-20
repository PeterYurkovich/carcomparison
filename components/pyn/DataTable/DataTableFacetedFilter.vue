<script setup lang="ts">
import type { Column } from "@tanstack/vue-table";
import { Trim } from "./schema";

interface DataTableFacetedFilter {
    column?: Column<Trim, any>;
    title?: string;
    options: {
        label: string;
        value: string;
        icon?: string;
    }[];
}

const props = defineProps<DataTableFacetedFilter>();

const facets = computed(() => props.column?.getFacetedUniqueValues());
const selectedValues = computed(
    () => new Set(props.column?.getFilterValue() as string[])
);

const filteredFunction = (
    list: DataTableFacetedFilter["options"],
    term: string
) => {
    return list.filter((i) => i.label?.toLowerCase()?.includes(term));
};
</script>

<template>
    <UiPopover>
        <UiPopoverTrigger as-child>
            <UiButton variant="outline" size="sm" class="h-8 border-dashed">
                <Icon name="uil:plus-circle" class="w-4 h-4 mr-2" />
                {{ title }}
                <template v-if="selectedValues.size > 0">
                    <UiSeparator orientation="vertical" class="h-4 mx-2" />
                    <UiBadge
                        variant="secondary"
                        class="px-1 font-normal rounded-sm lg:hidden"
                    >
                        {{ selectedValues.size }}
                    </UiBadge>
                    <div class="hidden space-x-1 lg:flex">
                        <UiBadge
                            v-if="selectedValues.size > 2"
                            variant="secondary"
                            class="px-1 font-normal rounded-sm"
                        >
                            {{ selectedValues.size }} selected
                        </UiBadge>

                        <template v-else>
                            <UiBadge
                                v-for="option in options.filter((option) =>
                                    selectedValues.has(option.value)
                                )"
                                :key="option.value"
                                variant="secondary"
                                class="px-1 font-normal rounded-sm"
                            >
                                {{ option.label }}
                            </UiBadge>
                        </template>
                    </div>
                </template>
            </UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent class="w-[200px] p-0" align="start">
            <UiCommand :filter-function="filteredFunction">
                <UiCommandInput :placeholder="title" />
                <UiCommandList>
                    <UiCommandEmpty>No results found.</UiCommandEmpty>
                    <UiCommandGroup>
                        <UiCommandItem
                            v-for="option in options"
                            :key="option.value"
                            :value="option"
                            @select="
                                () => {
                                    const isSelected = selectedValues.has(
                                        option.value
                                    );
                                    if (isSelected) {
                                        selectedValues.delete(option.value);
                                    } else {
                                        selectedValues.add(option.value);
                                    }
                                    const filterValues =
                                        Array.from(selectedValues);
                                    column?.setFilterValue(
                                        filterValues.length
                                            ? filterValues
                                            : undefined
                                    );
                                }
                            "
                        >
                            <div
                                :class="
                                    cn(
                                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                        selectedValues.has(option.value)
                                            ? 'bg-primary text-primary-foreground'
                                            : 'opacity-50 [&_svg]:invisible'
                                    )
                                "
                            >
                                <Icon name="uil:check" :class="cn('h-4 w-4')" />
                            </div>
                            <Icon
                                v-if="option.icon"
                                :name="option.icon"
                                class="w-4 h-4 mr-2 text-muted-foreground"
                            />
                            <span>{{ option.label }}</span>
                            <span
                                v-if="facets?.get(option.value)"
                                class="flex items-center justify-center w-4 h-4 ml-auto font-mono text-xs"
                            >
                                {{ facets.get(option.value) }}
                            </span>
                        </UiCommandItem>
                    </UiCommandGroup>

                    <template v-if="selectedValues.size > 0">
                        <UiCommandSeparator />
                        <UiCommandGroup>
                            <UiCommandItem
                                :value="{ label: 'Clear filters' }"
                                class="justify-center text-center"
                                @select="column?.setFilterValue(undefined)"
                            >
                                Clear filters
                            </UiCommandItem>
                        </UiCommandGroup>
                    </template>
                </UiCommandList>
            </UiCommand>
        </UiPopoverContent>
    </UiPopover>
</template>