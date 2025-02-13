<template>
    <div class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none" @click.self="close">
        <!-- Modal Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-10 pointer-events-auto">
            <slot></slot>
        </div>
        <!-- Small Overlay (Blurred Background Effect) -->
        <!-- <div class="absolute inset-0 bg-gray-800 bg-opacity-20 backdrop-blur-sm"></div> -->
    </div>
</template>

<script setup>
const props = defineProps({
    visible: { type: Boolean, required: true }
});

const emit = defineEmits(["close"]);

function close() {
    emit("close");
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>