<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from "radix-vue";
import { ComboboxRoot, useEmitAsProps } from "radix-vue";

const props = defineProps<ComboboxRootProps>();
const emits = defineEmits<ComboboxRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <ComboboxRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :open="true"
    :model-value="''"
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50',
        $attrs.class ?? ' '
      )
    "
  >
    <slot />
  </ComboboxRoot>
</template>
