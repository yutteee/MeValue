<template>
<v-container>
    <v-card>
        <v-img
            src="../assets/sample.jpeg"
            max-height="400px"
            contain
        />
        <v-rating
            v-model="rating"
            background-color="#a90a56"
            color="#a90a56"
            large
        ></v-rating>
    </v-card>
</v-container>
</template>

<style scoped>
.container {
    text-align: center;
}

.v-image {
    margin: 0 auto;
}
</style>
