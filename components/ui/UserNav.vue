<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
            <UiButton variant="ghost" class="relative w-8 h-8 rounded-full">
                <UiAvatar class="w-8 h-8">
                    <UiAvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <UiAvatarFallback>SC</UiAvatarFallback>
                </UiAvatar>
            </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-56" align="end">
            <UiDropdownMenuLabel class="flex font-normal">
                <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">shadcn</p>
                    <p class="text-xs leading-none text-muted-foreground">
                        m@example.com
                    </p>
                </div>
            </UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuGroup>
                <UiDropdownMenuItem>
                    Profile
                    <UiDropdownMenuShortcut>⇧⌘P</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>
                    Billing
                    <UiDropdownMenuShortcut>⌘B</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>
                    Settings
                    <UiDropdownMenuShortcut>⌘S</UiDropdownMenuShortcut>
                </UiDropdownMenuItem>
                <UiDropdownMenuItem>New Team</UiDropdownMenuItem>
            </UiDropdownMenuGroup>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>
                Log out
                <UiDropdownMenuShortcut>⇧⌘Q</UiDropdownMenuShortcut>
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>
