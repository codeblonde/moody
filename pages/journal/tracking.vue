<script setup>

import { Chart } from 'chart.js/auto';
import { onMounted } from 'vue';

// IDEA: add more custom trackers

const context = ref()



const data = {
    labels: ['01.01.2025', '02.01.2025', '03.01.2025', '04.01.2025', '05.01.2025', '06.01.2025', '07.01.2025'],
    datasets: [{
        label: 'Your mood over the past week',
        data: [-2, 0, 3, 4, 1, -3, 0],
        borderColor: 'rgb(230, 0, 118)',
        borderWidth: 2,
        tension: 0.2,
    }]

}

onMounted(() => {

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