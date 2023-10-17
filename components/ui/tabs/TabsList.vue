<script setup lang="ts">
import { TabsList, type TabsListProps } from "radix-vue";

const props = defineProps<TabsListProps & { class?: string }>();
</script>

<template>
  <TabsList
    v-bind="props"
    :class="
      cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-muted-foreground dark:bg-zinc-800',
        props.class
      )
    "
  >
    <slot />
  </TabsList>
</template>
