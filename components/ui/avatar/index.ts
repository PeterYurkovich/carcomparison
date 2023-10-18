import { cva } from "class-variance-authority";
export const avatarVariant = cva(
    "inline-flex items-center justify-center font-normal text-zinc-950 select-none shrink-0 bg-zinc-100 overflow-hidden dark:text-zinc-50 dark:bg-zinc-800",
    {
        variants: {
            size: {
                sm: "h-10 w-10 text-xs",
                base: "h-16 w-16 text-2xl",
                lg: "h-32 w-32 text-5xl",
            },
            shape: {
                circle: "rounded-full",
                square: "rounded-md",
            },
        },
    }
);
