<template>
    <div class="d-flex ma-3">
        <div class="mr-3 mt-3">
            <div style="position: fixed">
                <slot name="navigation"></slot>

            </div>        </div>
        <div style="margin-left: 20vw">
            <slot name="main"></slot>
        </div>
    </div>
</template>