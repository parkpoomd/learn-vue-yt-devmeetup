<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
          </v-card-title>
          <v-img
            :src="require(`@/assets/img/${meetup.imgName}`)"
            height="400px"
            contain
          ></v-img>
          <v-card-text>
            <div class="info--text">
              {{ meetup.date }} - Where it takes place
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              cumque. Unde quibusdam labore id ea nam quaerat adipisci, ipsa
              nulla ipsum impedit expedita omnis nihil eius vel reiciendis.
              Debitis, porro!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
