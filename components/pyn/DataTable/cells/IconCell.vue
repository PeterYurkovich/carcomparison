<script setup lang="ts" generic="T">
import { IconCellProps } from "./CellPropTypes";
const props = defineProps<IconCellProps<T>>();

const matchingOption = computed(() => {
    const match = props.options.find((i) => i.value === props.value);
    if (match) {
        console.log(match);
        return match;
    }
    console.error("No matching option found for value", props.value);
    return {
        value: props.value,
        label: String(props.value),
        icon: "question-mark-circle",
    };
});
</script>

<template>
    <div class="flex space-x-2 w-[120px]">
        <Icon
            :name="matchingOption.icon"
            class="w-4 h-4 mr-2 text-muted-foreground"
        />
        <span>{{ matchingOption.label }}</span>
    </div>
</template>
