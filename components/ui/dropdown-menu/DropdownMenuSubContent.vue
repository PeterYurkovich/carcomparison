<script setup lang="ts">
import {
    DropdownMenuSubContent,
    type DropdownMenuSubContentEmits,
    type DropdownMenuSubContentProps,
    useForwardPropsEmits,
} from "radix-vue";

const props = defineProps<DropdownMenuSubContentProps>();
const emits = defineEmits<DropdownMenuSubContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <DropdownMenuSubContent
        v-bind="forwarded"
        :class="
            cn(
                'z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50',
                $attrs.class ?? ' '
            )
        "
    >
        <slot />
    </DropdownMenuSubContent>
</template>
