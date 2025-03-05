<script setup lang="ts">
const { isLoading = false } = defineProps<{
    isLoading?: boolean
}>()
</script>


<template>
    <button class="px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all shadow">
        <div class="loading-spinner mx-auto" v-if="isLoading"></div>
        <slot v-else />
    </button>
</template>

<style>
.loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #faf7f9;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>