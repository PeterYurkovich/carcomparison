<script setup lang="ts">
import {
    DropdownMenuCheckboxItem,
    type DropdownMenuCheckboxItemEmits,
    type DropdownMenuCheckboxItemProps,
    DropdownMenuItemIndicator,
    useEmitAsProps,
} from "radix-vue";

const props = defineProps<DropdownMenuCheckboxItemProps & { class?: string }>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();
</script>

<template>
    <DropdownMenuCheckboxItem
        v-bind="{ ...props, ...useEmitAsProps(emits) }"
        :class="
            cn(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50',
                props.class
            )
        "
    >
        <span
            class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
        >
            <DropdownMenuItemIndicator>
                <Icon name="uil:check" class="w-4 h-4" color="white" />
            </DropdownMenuItemIndicator>
        </span>
        <slot />
    </DropdownMenuCheckboxItem>
</template>
