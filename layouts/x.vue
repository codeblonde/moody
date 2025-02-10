<template>

    <div class="flex h-screen">
        <!-- Left Sidebar Navigation -->
        <nav class="w-56 bg-pink-700 text-white flex flex-col">
            <div class="p-4 text-2xl font-bold">Moody</div>
            <ul class="flex-1 p-4 space-y-4">
                <li>
                    <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/History" class="hover:text-gray-300">History</NuxtLink>
                </li>
            </ul>
        </nav>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <!-- Top Navigation Bar -->
            <header class="bg-black shadow p-4 text-white">
                <div class="flex justify-between items-center">
                    <h1 class="text-lg font-semibold">Dashboard</h1>
                    <button class="px-4 py-2 bg-pink-600 text-white rounded-lg 
                hover:bg-pink-800">Sign In</button>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 p-6 bg-gray-900 overflow-y-auto text-white">
                <slot />
            </main>
        </div>
    </div>
</template>