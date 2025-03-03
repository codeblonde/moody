<script setup lang="ts">

// TODO: prop isClickable (?)
const { type = "primary", padding = "big" } = defineProps<{
    type?: "primary" | "secondary"
    padding?: "small" | "big"
}>()

// conditional css
const css = {
    "bg-gray-800": type === "primary",
    "bg-gray-700/50": type === "secondary",
    "p-8": padding === "big",
    "p-6": padding === "small",
}

</script>


<template>
    <div class="p-8 rounded-xl shadow-lg flex flex-col relative" :class="css">
        <slot />
    </div>
</template>
