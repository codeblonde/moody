<script setup lang="ts">
import Button from './Button.vue';
</script>


<template>
    <header class="bg-gray-800 bg-opacity-90 backdrop-blur-md shadow p-4">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-semibold text-pink-400 ml-4">
                <slot />
            </h1>
            <!-- <Button class="mr-4">
                Sign In
            </Button> -->
        </div>
    </header>
</template>