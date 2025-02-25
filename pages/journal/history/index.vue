<script setup>

const { data } = await useFetch('/api/history')

// idea: color entries according to mood
// color mood text according to mood
// have emoji instead of text for mood


const truncateText = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? " ..." : "");
};

</script>



<template>
    <div class="grid grid-cols-3 gap-4 justify-items-stretch">
        <NuxtLink :to="`/journal/history/${entry.entryId}`" v-for="entry in data"
            class="p-6 bg-gray-800 rounded-xl shadow-lg text-center flex flex-col gap-2 auto-rows-min">
            <div class="pb-3 text-right"> {{ new Date(entry.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit"
            }) }}</div>
            <div class="pb-3 text-justify flex-grow"> {{ truncateText(entry.entryText, 30) }}</div>
            <div class="text-right italic"> {{ entry.mood }}</div> <!-- fix to show mood-->

        </NuxtLink>


    </div>

</template>