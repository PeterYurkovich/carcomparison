<script setup lang="ts">
import {
    DropdownMenuSeparator,
    type DropdownMenuSeparatorProps,
} from "radix-vue";

const props = defineProps<DropdownMenuSeparatorProps>();
</script>

<template>
    <DropdownMenuSeparator
        v-bind="props"
        class="h-px my-1 -mx-1 bg-zinc-100 dark:bg-zinc-800"
    />
</template>
