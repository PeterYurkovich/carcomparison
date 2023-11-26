<script setup lang="ts">
import { trims } from "./trimsData";
import DataTable from "@/components/pyn/DataTable/DataTable.vue";
import { columns } from "./columns";

const isDark = useDark();
const imageLink = computed(() =>
    isDark.value ? "/examples/tasks-dark.png" : "/examples/tasks-light.png"
);
</script>

<template>
    <div class="md:hidden">
        <NuxtImg
            alt="Tasks"
            width="1280"
            height="1214"
            class="block"
            :src="imageLink"
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
        <DataTable :data="trims" :columns="columns" />
    </div>
</template>
