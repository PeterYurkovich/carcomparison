<script setup lang="ts">
import { addDays, format } from "date-fns";

import { ref } from "vue";

const date = ref({
    start: new Date(2023, 0, 20),
    end: addDays(new Date(2023, 0, 20), 20),
});
</script>

<template>
    <div :class="cn('grid gap-2', $attrs.class ?? '')">
        <UiPopover>
            <UiPopoverTrigger as-child>
                <UiButton
                    id="date"
                    variant="outline"
                    :class="
                        cn(
                            'w-[260px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                        )
                    "
                >
                    <Icon name="uil:calendar-alt" class="w-4 h-4 mr-2" />

                    <span>
                        {{
                            date.start
                                ? date.end
                                    ? `${format(
                                          date.start,
                                          "LLL dd, y"
                                      )} - ${format(date.end, "LLL dd, y")}`
                                    : format(date.start, "LLL dd, y")
                                : "Pick a date"
                        }}
                    </span>
                </UiButton>
            </UiPopoverTrigger>
            <UiPopoverContent
                class="w-auto p-0"
                align="end"
                :avoid-collisions="true"
            >
                <UiCalendar v-model.range="date" :columns="2" />
            </UiPopoverContent>
        </UiPopover>
    </div>
</template>
