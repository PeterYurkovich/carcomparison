<script setup lang="ts">
import { useEmitAsProps } from "radix-vue";
import type { DialogRootEmits, DialogRootProps } from "radix-vue";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <UiDialog v-bind="{ ...props, ...emitsAsProps }">
    <DialogContent class="p-0 overflow-hidden shadow-lg">
      <UiCommand
        class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-zinc-400"
      >
        <slot />
      </UiCommand>
    </DialogContent>
  </UiDialog>
</template>
