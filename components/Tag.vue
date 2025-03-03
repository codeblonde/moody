<script setup lang="ts">
const { color = "#1e2939" } = defineProps<{
    color?: string
}>()
</script>


<template>
    <div class="p-2 pr-4 pl-4 rounded-xl shadow-lg" :style="{ backgroundColor: color }">
        <slot />
    </div>
</template>