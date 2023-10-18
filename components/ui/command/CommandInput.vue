<script setup lang="ts">
import { ComboboxInput, type ComboboxInputProps } from "radix-vue";

const props = defineProps<ComboboxInputProps>();
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>

<template>
    <div class="flex items-center px-3 border-b" cmdk-input-wrapper>
        <Icon
            name="uil:search-alt"
            class="w-4 h-4 mr-2 opacity-50 shrink-0"
            color="white"
        />
        <ComboboxInput
            v-bind="{ ...props, ...$attrs }"
            auto-focus
            :class="
                cn(
                    'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-zinc-400',
                    $attrs.class ?? ' '
                )
            "
        />
    </div>
</template>
