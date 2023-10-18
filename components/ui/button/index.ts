import { cva } from "class-variance-authority";
export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-zinc-50 hover:bg-zinc-900/90 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                destructive:
                    "bg-destructive text-zinc-50 hover:bg-red-500/90 dark:text-zinc-50 dark:hover:bg-red-900/90",
                outline:
                    "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-accent-foreground dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800",
                secondary:
                    "bg-secondary text-zinc-900 hover:bg-zinc-100/80 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                ghost: "hover:bg-zinc-100 hover:text-accent-foreground dark:hover:bg-zinc-800",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
