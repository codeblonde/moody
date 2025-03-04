<template>
    <div class="text-center">
        <p class="text-lg font-medium">
            <slot />
        </p>
        <div class="loading-spinner mx-auto mt-4"></div>
    </div>
</template>

<style>
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