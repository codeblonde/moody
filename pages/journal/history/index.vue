<script setup>

import BgCard from '~/components/BgCard.vue';

const { data } = await useFetch('/api/history')

// idea: color entries according to mood
// color mood text according to mood
// have emoji instead of text for mood


const truncateText = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? " ..." : "");
};

</script>



<template>
    <div class="grid grid-cols-3 gap-4 items-stretch grid-elements">
        <BgCard padding="small" v-for="entry in data">
            <NuxtLink :to="`/journal/history/${entry.entryId}`" class="gap-3 flex flex-col grow">
                <div class="text-right"> {{ new Date(entry.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit"
                }) }}</div>
                <div class="text-justify flex-grow"> {{ truncateText(entry.entryText, 30) }}</div>
                <div class="text-right italic"> {{ entry.mood }}</div>
            </NuxtLink>
        </BgCard>
    </div>
</template>

<style>
.grid-elements {
    grid-auto-rows: 1fr;
}
</style>