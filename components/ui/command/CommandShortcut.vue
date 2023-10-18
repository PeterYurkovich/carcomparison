<template>
    <span
        :class="
            cn(
                'ml-auto text-xs tracking-widest text-zinc-500 dark:text-zinc-400',
                $attrs.class ?? ' '
            )
        "
    >
        <slot />
    </span>
</template>
