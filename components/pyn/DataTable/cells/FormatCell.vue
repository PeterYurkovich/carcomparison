<script setup lang="ts" generic="T">
import { FormatCellProps } from "./CellPropTypes";
const props = defineProps<FormatCellProps<T>>();

const formattedValue = computed(() => {
    return props.format(props.value);
});
</script>

<template>
    <div class="flex space-x-2 w-[80px]">
        <span>{{ formattedValue }}</span>
    </div>
</template>
