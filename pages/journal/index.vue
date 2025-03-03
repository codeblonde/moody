<script setup>
import { ref } from "vue"
import CustomModal from "~/components/CustomModal.vue"
import Button from "~/components/Button.vue"
import BgCard from "~/components/BgCard.vue"


const newEntry = ref("")
const modalState = ref(false)
const loadingState = ref(false)
const redirectId = ref("")

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
}

const redirectToEntryPage = async () => {

    console.log(redirectId.value)
    await navigateTo(`/journal/history/${redirectId.value}`)

    modalState.value = false

}

</script>

<template>
    <BgCard class="flex-grow gap-4">
        <Button class="self-start">
            Generate Prompt
        </Button>

        <textarea v-model="newEntry" class="border-2 rounded-2xl border-pink-600 flex-grow p-3"
            placeholder="How was your day?" />

        <div class="flex justify-end">
            <Button @click="submitNewEntry">
                Submit
            </Button>
        </div>

        <!--modal-->
        <CustomModal v-if="modalState" :visible="modalState" @close="modalState = false">
            <div v-if="loadingState" class="text-center">
                <p class="text-lg font-medium">Processing your entry...</p>
                <div class="loading-spinner mx-auto mt-4"></div>
            </div>
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


<style scoped>
.loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #d53f8c;
    border-radius: 50%;
    width: 40px;
    height: 40px;
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