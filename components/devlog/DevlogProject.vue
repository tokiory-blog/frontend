<template>
  <BCard
    has-hover
    class="devlog-project"
  >
    <div class="devlog-project__info info">
      <BTitle
        class="info__title"
        :level="2"
      >
        {{ project.name }}
      </BTitle>
      <BText class="info__description">
        {{ project.description }}
      </BText>
      <BLink
        class="devlog-project__source source"
        is-new-tab
        :href="project.url"
        @click.stop
      >
        <DevlogLink
          class="source__link"
          :type="project.type"
        />
      </BLink>
    </div>
  </BCard>
</template>

<script setup lang="ts">
import type { DevlogProject } from "@/types/devlog.types";
import DevlogLink from "@cmp/devlog/DevlogLink.vue";

interface Props {
  project: DevlogProject;
}
const props = defineProps<Props>();

const iconPath = computed(() =>
  `/icons/${props.project.type}.svg`,
);
</script>

<style scoped lang="scss">
.devlog-project {
  cursor: pointer;
  
}

.info {
  &__description {
    margin-top: 8px;
  }
}

.source {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 8px;

  @include adaptive-from-tablet {
    justify-content: flex-end;
    margin-top: 4px;
  }
}

</style>