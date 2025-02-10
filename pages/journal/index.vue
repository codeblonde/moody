<script setup lang="ts">

</script>

<template>
    <div class="p-8 bg-gray-800 rounded-xl shadow-lg flex flex-grow flex-col gap-4">
        <h1>New journal entry</h1>
        <textarea class="border-2 rounded-2xl border-pink-600 flex-grow p-3" placeholder="How was your day?" />

        <div class="flex justify-end">
            <button class="px-8 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all shadow">
                Submit
            </button>
        </div>
    </div>
</template>