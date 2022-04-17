<template>
<v-container>
    <v-card>
        <h4>評価に協力していただきありがとございます</h4>
        <h4>評価してほしいコーデをアップロードしてください</h4>
        <v-card
            width="250px"
            elevation="0"
        >
            <v-file-input
                label="image input"
                filled
                prepend-icon="mdi-camera"
            ></v-file-input>
        </v-card>
        <h4>コーデ以外をアップロードしないでください</h4>
        <h4>できるだけ顔が写っていない写真を載せることをお勧めします</h4>
        <v-btn
            color="#a90a56"
            outlined
        >
        確定
        </v-btn>
    </v-card>
</v-container>
</template>

<style scoped>
.container {
    text-align: center;
    margin: 0 auto;
}

.v-card {
    text-align: center;
    margin: 0 auto;
}

</style>