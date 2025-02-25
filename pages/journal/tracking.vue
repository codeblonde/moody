<script setup>

import { Chart } from 'chart.js/auto';
import { onMounted, computed } from 'vue';

// IDEA: add more custom trackers
//  last 7 days vs last 30 days

// TODO: reverse order of data points

const context = ref()

const { data: entries } = await useFetch('/api/analytics/moodtracking')
console.log("The data is here!")

const dataDict = reactive({
    colors: [],
    scores: [],
    dates: [],
    moods: [],
    summaries: []
})

onMounted(() => {
    console.log()

    for (let d of entries.value) {
        dataDict.colors.push(d.color)
        dataDict.scores.push(d.score)
        dataDict.dates.push(new Date(d.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        }))
        dataDict.moods.push(d.mood)
        dataDict.summaries.push(d.summary)
    }


    const data = {
        labels: dataDict.dates,
        datasets: [{
            label: 'Mood curve',
            data: dataDict.scores,
            borderColor: 'rgb(230, 0, 118)',
            borderWidth: 2,
            tension: 0.2,
            pointBorderColor: dataDict.colors,
            pointBackgroundColor: dataDict.colors,
        }]
    }

    // custom bg color
    // const plugin = {
    //     id: 'customCanvasBackgroundColor',
    //     beforeDraw: (chart, args, options) => {
    //         const { ctx } = chart;
    //         ctx.save();
    //         ctx.globalCompositeOperation = 'destination-over';
    //         ctx.fillStyle = options.color || '#151515';
    //         ctx.fillRect(0, 0, chart.width, chart.height);
    //         ctx.restore();
    //     }
    // };

    new Chart(context.value, {
        type: 'line',
        data: data,
        options: {
            layout: {
                padding: {
                    right: 28,
                    left: 10,
                }
            },
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
                    // grid: {
                    //     color: 'zinc',
                    // },
                    reverse: true,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                // customCanvasBackgroundColor: {
                //     color: '#2a2a2a',
                // },
                tooltip: {
                    mode: "point",
                    intersect: false,

                    callbacks: {
                        label: function (context) {
                            // let label = context.dataset.label || ''
                            let moodLabel = dataDict.moods[context.dataIndex] || 'help'
                            let summaryLabel = dataDict.summaries[context.dataIndex]

                            // let value = customLabel += context.parsed.y

                            // let customLabel = `${moodLabel}: ${context.parsed.y}`
                            let customLabel = `${moodLabel}: ${summaryLabel}`

                            // return value

                            return customLabel

                            // if (label) {
                            //     label += ': ';
                            // }
                            // if (context.parsed.y !== null) {
                            //     label += context.parsed.y;
                            // }
                            // return label;
                        }
                    }

                },
                legend: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Your mood over the last week',
                        color: 'rgb(255, 255, 255)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },

                        labels: {
                            color: 'rgb(255, 255, 255)'
                        }
                    }
                },

            },
        },
        // plugins: [plugin],
    });

})

</script>



<template>
    <div class="p-8 bg-gray-800 rounded-xl shadow-lg flex flex-grow flex-col gap-4">
        <div class="p-8 bg-gray-700/50 rounded-xl shadow-lg flex flex-col gap-4">
            <canvas ref="context"></canvas>
        </div>
    </div>

</template>