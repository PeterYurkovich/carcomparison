<script setup lang="ts">
import {
    DropdownMenuSubTrigger,
    type DropdownMenuSubTriggerProps,
} from "radix-vue";

const props = defineProps<DropdownMenuSubTriggerProps & { class?: string }>();
</script>

<template>
    <DropdownMenuSubTrigger
        v-bind="props"
        :class="[
            cn(
                'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-accent dark:focus:bg-zinc-800',
                props.class
            ),
        ]"
    >
        <slot />
        <Icon name="uil:arrow-right" class="w-4 h-4 ml-auto" color="white" />
    </DropdownMenuSubTrigger>
</template>
