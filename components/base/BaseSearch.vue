<script lang="ts" setup>
interface Props {
  modelValue: string;
  isLoading?: boolean;
  placeholder?: string;
}
const props = defineProps<Props>();

interface Emits {
  (e: "update:modelValue", value: string): void
}
const emit = defineEmits<Emits>();

/**
 * Handler for input event
 * @param e Input event
 */
const onInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>

<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      :value="modelValue"
      autocomplete="false"
      autofocus="true"
      :placeholder="placeholder ?? 'Поиск'"
      @input="onInput"
    >
    <BaseSpinner
      :style="{visibility: isLoading ? 'initial' : 'hidden'}"
      :width="18"
      :height="18"
      color="var(--foreground)"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  @include default-ui-card;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 8px;
  
  &__input {
    margin: 0;
    padding: 8px 12px;
    background: transparent;
    width: 100%;
    color: var(--foreground);
    border: none;
    outline: none;
    caret-shape: block;
    caret-color: var(--foreground);
    
    &::placeholder {
      color: var(--neutral-hover);
    }
    
    //&:focus {
    //  outline: 2px solid var(--link);
    //}
  }
}
</style>