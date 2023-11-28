<script setup lang="ts" generic="T">
import IconCell from "./IconCell.vue";
import FormatCell from "./FormatCell.vue";
import TextCell from "./TextCell.vue";
import {
    IconCellProps,
    FormatCellProps,
    TextCellProps,
    IconCellOption,
} from "./CellTypes";

const props = defineProps({
    cellType: {
        type: String,
        required: true,
    },
    value: {
        type: [String, Number, Boolean, Object],
        default: null,
    },
    format: {
        type: Function,
        default: () => (value: any) => value,
    },
    icon: {
        type: String,
        default: null,
    },
    options: {
        type: Array,
        default: () => [],
    },
});

const iconCellProps: ComputedRef<IconCellProps<T>> = computed(() => {
    return {
        value: props.value as T,
        options: props.options as Array<IconCellOption<T>>,
    };
});

const formatCellProps: ComputedRef<FormatCellProps<T>> = computed(() => {
    return {
        value: props.value as T,
        format: props.format as <T>(x: T) => string,
    };
});

const textCellProps: ComputedRef<TextCellProps<T>> = computed(() => {
    return {
        value: props.value as T,
    };
});
</script>

<template>
    <template v-if="props.cellType === 'icon'">
        <IconCell v-bind="iconCellProps" />
    </template>
    <template v-else-if="props.cellType === 'format'">
        <FormatCell v-bind="formatCellProps" />
    </template>
    <template v-else-if="props.cellType === 'text'">
        <TextCell v-bind="textCellProps" />
    </template>
</template>
