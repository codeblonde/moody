<script setup>

import { Chart } from 'chart.js/auto';
import { onMounted, computed } from 'vue';

// IDEA: add more custom trackers
//  last 7 days vs last 30 days

const context = ref()

const { data: entries } = await useFetch('/api/analytics/moodtracking')


onMounted(() => {

    const labels = computed(() => {
        return entries.value.map((ent) => ent.createdAt)
    })

    const scores = computed(() => {
        return entries.value.map((ent) => ent.score)
    })

    const data = {
        labels: labels.value,
        datasets: [{
            label: 'Your mood over the past week',
            data: scores.value,
            borderColor: 'rgb(230, 0, 118)',
            borderWidth: 2,
            tension: 0.2,
        }]

    }

    new Chart(context.value, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    min: -5,
                    max: 5,
                    beginAtZero: true,
                    ticks: {
                        color: 'white',
                        stepSize: 2,
                    }

                },
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(255, 255, 255)'
                    }
                },

            }
        }
    });

})

</script>



<template>
    <div class="p-8 bg-gray-800 rounded-xl shadow-lg flex flex-grow flex-col gap-4">
        <canvas ref="context"></canvas>
    </div>

</template>