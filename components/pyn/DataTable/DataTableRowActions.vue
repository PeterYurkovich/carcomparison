<script setup lang="ts">
import type { Row } from "@tanstack/vue-table";
import { type Trim } from "./schema";
interface DataTableRowActionsProps {
    row: Row<Trim>;
}
defineProps<DataTableRowActionsProps>();
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
            <UiDropdownMenuItem>
                Delete
                <UiDropdownMenuShortcut>⌘⌫</UiDropdownMenuShortcut>
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>
