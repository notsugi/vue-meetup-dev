<template>
  <!-- flex layout -->
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <!-- card component -->
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/04/n-kyoto-a-20180406-870x580.jpg"
                  height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                    <div>
                      <div class="headline white--text">My meetup</div>
                      <div>17th July 2018</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat to="/meetups/1">
                      <v-icon left>arrow_forward</v-icon>
                      View Meetup
                    </v-btn>
                  </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <!-- end card component -->
      </v-flex>
    </v-layout>
  </v-container>
  <!-- end flex layout -->
</template>
