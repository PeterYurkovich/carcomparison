<script setup lang="ts">
import { TabsContent, type TabsContentProps } from "radix-vue";

const props = defineProps<TabsContentProps & { class?: string }>();
</script>

<template>
    <TabsContent
        :class="
            cn(
                'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300',
                props.class
            )
        "
        v-bind="props"
    >
        <slot />
    </TabsContent>
</template>
