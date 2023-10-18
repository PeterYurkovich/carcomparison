<script setup lang="ts">
import { Label, type LabelProps } from "radix-vue";

const props = defineProps<LabelProps & { class?: string }>();
</script>

<template>
    <Label
        v-bind="props"
        :class="
            cn(
                'block text-sm tracking-tight font-medium text-zinc-950 text-left dark:text-zinc-50',
                props.class
            )
        "
    >
        <slot />
    </Label>
</template>
