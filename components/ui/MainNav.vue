<template>
    <nav
        :class="
            cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')
        "
    >
        <a
            href="/dashboard"
            class="text-sm font-medium transition-colors hover:text-primary"
        >
            Overview
        </a>
        <a
            href="/dashboard"
            class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
        >
            Customers
        </a>
        <a
            href="/dashboard"
            class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
        >
            Products
        </a>
        <a
            href="/dashboard"
            class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
        >
            Settings
        </a>
    </nav>
</template>
