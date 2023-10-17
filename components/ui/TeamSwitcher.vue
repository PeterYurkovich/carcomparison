<script setup lang="ts">
const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
];

type Team = (typeof groups)[number]["teams"][number];

const open = ref(false);
const showNewTeamDialog = ref(false);
const selectedTeam = ref<Team>(groups[0].teams[0]);
const filterFunc = (list: Array<string | any>, term: string) => {
  return list.filter((i) => i.label?.toLowerCase()?.includes(term));
};
</script>

<template>
  <UiDialog v-model:open="showNewTeamDialog">
    <UiPopover v-model:open="open">
      <UiPopoverTrigger as-child>
        <UiButton
          variant="outline"
          role="combobox"
          aria-expanded="open"
          aria-label="Select a team"
          :class="cn('w-[200px] justify-between', $attrs.class ?? '')"
        >
          <UiAvatar class="w-5 h-5 mr-2">
            <UiAvatarImage
              :src="`https://avatar.vercel.sh/${selectedTeam.value}.png`"
              :alt="selectedTeam.label"
            />
            <UiAvatarFallback>SC</UiAvatarFallback>
          </UiAvatar>
          {{ selectedTeam.label }}
          <Icon name="ep:sort" class="w-4 h-4 ml-auto opacity-50 shrink-0" />
        </UiButton>
      </UiPopoverTrigger>
      <UiPopoverContent class="w-[200px] p-0">
        <UiCommand :filter-function="filterFunc">
          <UiCommandList>
            <UiCommandInput placeholder="Search team..." />
            <UiCommandEmpty>No team found.</UiCommandEmpty>
            <UiCommandGroup
              v-for="group in groups"
              :key="group.label"
              :heading="group.label"
            >
              <UiCommandItem
                v-for="team in group.teams"
                :key="team.value"
                :value="team"
                class="text-sm"
                @select="
                  () => {
                    selectedTeam = team;
                    open = false;
                  }
                "
              >
                <UiAvatar class="w-5 h-5 mr-2">
                  <UiAvatarImage
                    :src="`https://avatar.vercel.sh/${team.value}.png`"
                    :alt="team.label"
                    class="grayscale"
                  />
                  <UiAvatarFallback>SC</UiAvatarFallback>
                </UiAvatar>
                {{ team.label }}
                <Icon
                  name="uil:check"
                  :class="
                    cn(
                      'ml-auto h-4 w-4',
                      selectedTeam.value === team.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )
                  "
                />
              </UiCommandItem>
            </UiCommandGroup>
          </UiCommandList>
          <UiCommandSeparator />
          <UiCommandList>
            <UiCommandGroup>
              <UiDialogTrigger as-child>
                <UiCommandItem
                  :value="{ label: 'Create Team' }"
                  @select="
                    () => {
                      open = false;
                      showNewTeamDialog = true;
                    }
                  "
                >
                  <Icon name="uil:plus-circle" class="w-5 h-5 mr-2" />
                  Create Team
                </UiCommandItem>
              </UiDialogTrigger>
            </UiCommandGroup>
          </UiCommandList>
        </UiCommand>
      </UiPopoverContent>
    </UiPopover>
    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle>Create team</UiDialogTitle>
        <UiDialogDescription>
          Add a new team to manage products and customers.
        </UiDialogDescription>
      </UiDialogHeader>
      <div>
        <div class="py-2 pb-4 space-y-4">
          <div class="space-y-2">
            <UiLabel for="name">Team name</UiLabel>
            <UiInput id="name" placeholder="Acme Inc." />
          </div>
          <div class="space-y-2">
            <UiLabel for="plan">Subscription plan</UiLabel>
            <UiSelect>
              <UiSelectTrigger>
                <UiSelectValue placeholder="Select a plan" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectItem value="free">
                  <span class="font-medium">Free</span> -
                  <span class="text-muted-foreground">
                    Trial for two weeks
                  </span>
                </UiSelectItem>
                <UiSelectItem value="pro">
                  <span class="font-medium">Pro</span> -
                  <span class="text-muted-foreground"> $9/month per user </span>
                </UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>
      </div>
      <UiDialogFooter>
        <UiButton variant="outline" @click="showNewTeamDialog = false">
          Cancel
        </UiButton>
        <UiButton type="submit"> Continue </UiButton>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
