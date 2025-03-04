<script setup>
import { ref } from "vue"
import CustomModal from "~/components/CustomModal.vue"
import Button from "~/components/Button.vue"
import BgCard from "~/components/BgCard.vue"


const newEntry = ref("")
const modalState = ref(false)
const loadingState = ref(false)
const redirectId = ref("")
const prompt = ref("")

const submitNewEntry = async () => {
    // set modal show ref state to true with loading content
    // set loading to true
    modalState.value = true
    loadingState.value = true

    const res = await $fetch('/api/entries/createEntry', {
        method: 'post',
        body: { data: newEntry.value }
    })
    console.log(res)

    redirectId.value = res.insertedId
    // loading false
    loadingState.value = false
    // clear newEntry
    newEntry.value = ""
    prompt.value = ""
}

const redirectToEntryPage = async () => {

    console.log(redirectId.value)
    await navigateTo(`/journal/history/${redirectId.value}`)

    modalState.value = false

}

const getPrompt = async () => {
    prompt.value = await $fetch('/api/prompt')
    console.log(prompt)
}

</script>

<template>
    <BgCard class="flex-grow gap-4">
        <Button class="self-start" @click="getPrompt">
            Generate Prompt
        </Button>

        <div v-if="prompt">{{ prompt }}</div>

        <textarea v-model="newEntry" class="border-2 rounded-2xl border-pink-600 flex-grow p-3"
            placeholder="How was your day?" />

        <div class="flex justify-end">
            <Button @click="submitNewEntry">
                Submit
            </Button>
        </div>

        <!--modal-->
        <CustomModal v-if="modalState" @close="modalState = false">
            <!-- <div v-if="loadingState" class="text-center">
                <p class="text-lg font-medium">Processing your entry...</p>
                <div class="loading-spinner mx-auto mt-4"></div>
            </div> -->
            <LoadingSpinner v-if="loadingState">
                Processing your entry...
            </LoadingSpinner>
            <div v-else class="text-center">
                <p class="text-lg font-semibold text-white">Your entry has been successfully submitted!</p>
                <Button class="mt-4 mr-4" @click="modalState = false">
                    Close
                </Button>
                <Button class="mt-4" @click="redirectToEntryPage">
                    Go to Entry
                </Button>
            </div>
        </CustomModal>
    </BgCard>
</template>


<style scoped></style>