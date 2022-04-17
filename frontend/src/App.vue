<template>
  <v-app>
    <v-app-bar
      app
      color="#a90a56"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
      />
      <v-tabs
        right
        color="#fff"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :to="item.url"
          color="#fff"
        >
        {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.url"
        >
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'ホーム',
          url: '/mypage'
        },
        {
          name: '概要',
          url: '/#'
        },
        {
          name: 'お問い合わせ',
          url: '/contact'
        },
      ],
      drawer: false,
    }
  }
}

</script>

<style>
.v-tab {
  display: none !important;
}

@media screen and (min-width: 600px) {
  .v-app-bar__nav-icon {
    display: none !important;
  }

  .v-tab {
    display: flex !important;
  }

  .v-tabs {
    margin-right: 3% !important;
  }
}

</style>