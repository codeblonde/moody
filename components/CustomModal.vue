<script setup>

const emit = defineEmits(["close"]);

function close() {
    emit("close");
}
</script>

<template>
    <div class="absolute inset-0 flex items-center justify-center z-50 pointer-events-none" @click.self="close">
        <!-- Modal Card -->
        <div class="bg-gray-600 p-6 rounded-lg shadow-lg max-w-md w-full relative z-10 pointer-events-auto">
            <slot></slot>
        </div>
    </div>
</template>
