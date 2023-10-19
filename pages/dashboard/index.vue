<script setup lang="ts">
import tasks from "./tasks.json";
import DataTable from "@/components/table/DataTable.vue";
import { columns } from "@/components/table/columns";
</script>

<template>
    <div class="md:hidden">
        <VPImage
            alt="Tasks"
            width="1280"
            height="1214"
            class="block"
            :image="{
                dark: '/examples/tasks-dark.png',
                light: '/examples/tasks-light.png',
            }"
        />
    </div>

    <div class="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
        <div class="flex items-center justify-between space-y-2">
            <div>
                <h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
                <p class="text-muted-foreground">
                    Here&apos;s a list of your tasks for this month!
                </p>
            </div>
            <div class="flex items-center space-x-2">
                <UiUserNav />
            </div>
        </div>
        <DataTable :data="tasks" :columns="columns" />
    </div>
</template>
