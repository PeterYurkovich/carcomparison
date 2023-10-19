<script setup lang="ts">
import type { Row } from "@tanstack/vue-table";
import { labels } from "./data";
import { taskSchema } from "./schema";
import { type Task } from "./schema";
interface DataTableRowActionsProps {
    row: Row<Task>;
}
const props = defineProps<DataTableRowActionsProps>();

const task = computed(() => taskSchema.parse(props.row.original));
</script>

<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
            <UiButton
                variant="ghost"
                class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
                <Icon name="uil:ellipsis-h" class="w-4 h-4" />
                <span class="sr-only">Open menu</span>
            </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end" class="w-[160px]">
            <UiDropdownMenuItem>Edit</UiDropdownMenuItem>
            <UiDropdownMenuItem>Make a copy</UiDropdownMenuItem>
            <UiDropdownMenuItem>Favorite</UiDropdownMenuItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuSub>
                <UiDropdownMenuSubTrigger>Labels</UiDropdownMenuSubTrigger>
                <UiDropdownMenuSubContent>
                    <UiDropdownMenuRadioGroup :value="task.label">
                        <UiDropdownMenuRadioItem
                            v-for="label in labels"
                            :key="label.value"
                            :value="label.value"
                        >
                            {{ label.label }}
                        </UiDropdownMenuRadioItem>
                    </UiDropdownMenuRadioGroup>
                </UiDropdownMenuSubContent>
            </UiDropdownMenuSub>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>
                Delete
                <UiDropdownMenuShortcut>⌘⌫</UiDropdownMenuShortcut>
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>
