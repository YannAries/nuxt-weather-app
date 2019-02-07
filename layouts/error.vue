<template>
    <div>

        <h1 v-if="error.statusCode === 404">
            Custom 404 error
        </h1>

        <h1 v-if="error.statusCode !== 404">
            Custom general error
        </h1>

    </div>
</template>

<script>
export default {

    props: {
        error: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            test: 'default',
        }
    },

    mounted() {

    },

    methods: {

    },

}
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
        margin: 65px auto 20px;
        font-weight: bold;
    }
</style>
