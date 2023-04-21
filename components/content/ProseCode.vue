<!-- Code component for markdown content -->
<!-- Info: https://content.nuxtjs.org/api/components/prose -->
<!-- Author: Daniil Shilo <tokiory.personal@gmail.com -->
<!-- Update: 07 Apr 2023 -->

<script lang="ts" setup>
import { Lang } from "shiki-es";
import { ref } from "#imports";
import { capitalize } from "vue";

interface Props {
  language?: Lang;
  highlights?: number[],
  code?: string;
  filename?: string;
  meta?: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: "text",
  filename: "",
  meta: "",
  language: "markdown",
  highlights: () => [],
});

const NOTIFICATION_DURATION = 2000;
const isNotificationVisible = ref(false);

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code?.trim() ?? "");
};

const toggleCopyNotification = () => {
  this.isNotificationVisible = true;
  setTimeout(() => isNotificationVisible.value = false, NOTIFICATION_DURATION);
};

const onCopyButtonClick = async () => {
  await copyCode();
  toggleCopyNotification();
};
</script>

<template>
  <div class="post-formatted-code">
    <div class="post-formatted-code__header">
      <div class="post-formatted-code__filename">
        {{ filename }}
      </div>
      <div class="post-formatted-code__description">
        {{ meta }}
      </div>
      <div class="post-formatted-code__info">
        <div class="post-formatted-code__language">
          Language:
          {{
            language.length > 0 ?
              capitalize(language) :
              ""
          }}
        </div>
        <BaseButton
          class="post-formatted-code__copy"
          @click="onCopyButtonClick"
        >
          Copy
        </BaseButton>
      </div>
    </div>
    <div class="post-formatted-code__body">
      <slot />
    </div>
    <NotificationPopover
      v-if="isNotificationVisible"
      :animation-duration="NOTIFICATION_DURATION"
    >
      Код скопирован
    </NotificationPopover>
  </div>
</template>

<style lang="scss">
.post-formatted-code {
  width: 100%;
  margin: 12px 0 24px;
  @include font-jetbrains;
  line-height: 1.6;
  overflow-x: auto;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 4px 4px 0 0;
    padding: 8px 12px;
    border: 1px solid var(--neutral);
    font-size: 12px;
    user-select: none;
  }
  
  &__filename {
    color: var(--color-blue);
    margin-right: auto;
  }
  
  &__info {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    
  }
  
  &__copy {
    &::after {
      content: "📋";
    }
    &:active &::after {
      content: "✅";
    }
  }

  &__language {
    color: var(--color-pink);
    margin-left: auto;
  }
  
  &__description {
    color: var(--color-neutral-7);
    font-size: 10px;
    text-align: center;
    margin: auto;
  }

  pre {
    font-size: 13px;
    margin: 0;
    padding: 12px;
    background-color: var(--color-black);
    border: 1px solid var(--neutral);
    border-top: none;
    border-radius: 0 0 4px 4px;
    overflow-x: auto;
    
    .line {
      min-height: 1rem;
    }

    code {
      @include font-jetbrains;
      &::-webkit-scrollbar-track {
        background-color: transparent;
        position: absolute;
      }

      &::-webkit-scrollbar {
        height: 4px;
        background-color: transparent;
        position: absolute;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #717171;
        position: absolute;
      }
    }
  }
}
</style>
