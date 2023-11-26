<script setup lang="ts" generic="T">
import IconCell from "./IconCell.vue";
import FormatCell from "./FormatCell.vue";
import TextCell from "./TextCell.vue";
import { IconCellProps, FormatCellProps, TextCellProps } from "./CellTypes";
type IconCellFactoryProps<T> = IconCellProps<T> & {
    cellType: "icon";
};

type FormatCellFactoryProps<T> = FormatCellProps<T> & {
    cellType: "format";
};

type TextCellFactoryProps<T> = TextCellProps<T> & {
    cellType: "text";
};

type CellFactoryProps<T> =
    | IconCellFactoryProps<T>
    | FormatCellFactoryProps<T>
    | TextCellFactoryProps<T>;

const props = defineProps<CellFactoryProps<T>>();
</script>

<template>
    <template v-if="props.cellType === 'icon'">
        <IconCell v-bind="props" />
    </template>
    <template v-else-if="props.cellType === 'format'">
        <FormatCell v-bind="props" />
    </template>
    <template v-else-if="props.cellType === 'text'">
        <TextCell v-bind="props" />
    </template>
</template>
