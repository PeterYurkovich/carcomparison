import { h } from "vue";
import { Icon } from "#components";

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
];

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: h(Icon, { name: "uil:question-circle" }),
    },
    {
        value: "todo",
        label: "Todo",
        icon: h(Icon, { name: "uil:circle" }),
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: h(Icon, { name: "uil:stopwatch" }),
    },
    {
        value: "done",
        label: "Done",
        icon: h(Icon, { name: "uil:check-circle" }),
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: h(Icon, { name: "uil:times-circle" }),
    },
];

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: h(Icon, { name: "uil:angle-down" }),
    },
    {
        label: "Medium",
        value: "medium",
        icon: h(Icon, { name: "uil:angle-right" }),
    },
    {
        label: "High",
        value: "high",
        icon: h(Icon, { name: "uil:angle-up" }),
    },
];
