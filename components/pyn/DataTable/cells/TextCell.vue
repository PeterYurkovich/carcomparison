<script setup lang="ts" generic="T">
import { TextCellProps } from "./CellTypes";
defineProps<TextCellProps<T>>();
</script>

<template>
    <div class="flex space-x-2 w-[80px]">
        <span>{{ value }}</span>
    </div>
</template>
