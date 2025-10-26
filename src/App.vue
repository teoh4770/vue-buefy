<script setup>
import {ref} from "vue";

// These states are for the table data
const data = ref([
  {
    id: 1,
    first_name: "Jesse",
    last_name: "Simmons",
    date: "2016-10-15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "John",
    last_name: "Jacobs",
    date: "2016-12-15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Tina",
    last_name: "Gilbert",
    date: "2016-04-26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Clarence",
    last_name: "Flores",
    date: "2016-04-10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Anne",
    last_name: "Lee",
    date: "2016-12-06 14:38:38",
    gender: "Female",
  },
]);
const columns = ref([
  {
    field: "id",
    label: "ID",
    width: "40",
    numeric: true,
  },
  {
    field: "first_name",
    label: "First Name",
  },
  {
    field: "last_name",
    label: "Last Name",
  },
  {
    field: "date",
    label: "Date",
    centered: true,
  },
  {
    field: "gender",
    label: "Gender",
  },
]);
// end

// This is for the input demonstration
const name = ref("John Silver")
</script>

<template>
  <!-- Grid system  -->
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <h1 class="title">Hello World</h1>
          <p class="subtitle">Using Bulma classes</p>
        </div>
        <div class="column is-half">
          <b-button type="is-primary">Click me</b-button>
          <b-button icon-left="heart">Profile</b-button>
          <b-button icon-left="user">Profile</b-button>
        </div>
      </div>
    </div>
  </section>

  <!-- Card -->
  <section class="section">
    <div class="card">
      <div class="card-content">
        <p class="title">Card</p>
        <p class="subtitle">Card Subtitle</p>
      </div>
    </div>
  </section>

  <!-- Table -->
  <section class="section">
    <div class="column is-full">
      <a href="https://buefy.org/documentation/table">Table</a>
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </section>

  <!-- Inputs -->
  <section class="section">
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Email" type="is-danger" message="This email is invalid">
      <b-input type="email" model-value="john@" maxlength="30"></b-input>
    </b-field>

    <b-field
        label="Username"
        type="is-success"
        message="This username is available"
    >
      <b-input model-value="johnsilver" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input
          type="password"
          model-value="iwantmytreasure"
          password-reveal
      >
      </b-input>
    </b-field>

    <b-field label="Message">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-field label="Placeholder and Readonly">
      <b-input placeholder="Awesome!" :readonly="true"></b-input>
    </b-field>
  </section>
</template>

<style scoped>

</style>
