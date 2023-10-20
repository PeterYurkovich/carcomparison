import { trim } from "~/drizzle/schema";
import { IconCellColumn } from "~/components/pyn/DataTable/schema";

export const transmissions: IconCellColumn<
    typeof trim.$inferInsert.transmission
> = [
    {
        label: "Manual",
        value: "manual",
        icon: "tabler:manual-gearbox",
    },
    {
        label: "Automatic",
        value: "automatic",
        icon: "arcticons:automation",
    },
];

export const fuelTypes: IconCellColumn<typeof trim.$inferInsert.fuelType> = [
    {
        label: "Gas",
        value: "gasoline",
        icon: "bi:fuel-pump",
    },
    {
        label: "Diesel",
        value: "diesel",
        icon: "bi:fuel-pump-diesel",
    },
    {
        label: "Electric",
        value: "electric",
        icon: "solar:electric-refueling-outline",
    },
    {
        label: "Hybrid",
        value: "hybrid",
        icon: "material-symbols:electric-car-outline-rounded",
    },
    {
        label: "Plug-In Hybrid",
        value: "plugin_hybrid",
        icon: "material-symbols:electric-meter-outline",
    },
];
