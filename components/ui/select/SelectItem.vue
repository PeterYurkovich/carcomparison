<script setup lang="ts">
import {
    SelectItem,
    SelectItemIndicator,
    type SelectItemProps,
    SelectItemText,
} from "radix-vue";

const props = defineProps<SelectItemProps & { class?: string }>();
</script>

<template>
    <SelectItem
        v-bind="props"
        :class="
            cn(
                'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50',
                props.class
            )
        "
    >
        <span
            class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
        >
            <SelectItemIndicator>
                <Icon name="uil:check" class="w-4 h-4" color="white" />
            </SelectItemIndicator>
        </span>

        <SelectItemText>
            <slot />
        </SelectItemText>
    </SelectItem>
</template>
