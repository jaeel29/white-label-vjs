<template>
  <div class="search-bar">
    <form @submit.prevent="submitSearch">
      <div class="search-fields">
        <input
          v-model="destination"
          placeholder="Enter destination"
          required
          class="location" />
        <input type="date" v-model="checkin" required />
        <input type="date" v-model="checkout" required />
        <input v-model="occupancy" placeholder="2 Guests, 1 Room" required />
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destination: "",
      checkin: "",
      checkout: "",
      guests: 1,
    };
  },
  methods: {
    submitSearch() {
      this.$router.push({
        path: "/search",
        query: {
          destination: this.destination,
          checkin: this.checkin,
          checkout: this.checkout,
          guests: this.guests,
        },
      });
    },
  },
};
</script>

<style scoped>
.search-bar {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
}

.search-bar form {
  align-self: stretch;
}

.search-fields {
  display: flex;
  gap: 8px;
}

.search-fields input {
  padding: 10px;
  border: 1px solid var(--neutral-300);
  border-radius: 12px;
  transition: border-color 0.3s, box-shadow 0.3s;
  color: var(--neutral-600);
}

/* Focus state for input fields */
.search-fields input:focus {
  border: 2px solid var(--primary-color); /* Change border color on focus */
  box-shadow: 0 0 6px 0px var(--primary-color); /* Add a soft glow effect on focus */
  outline: none; /* Remove default browser outline */
}

.search-fields input::placeholder {
  color: var(--neutral-600);
}

.location {
  flex: 1;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: var(--primary-color-dark);
  color: var(--neutral-100);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

button:hover {
  background-color: var(--primary-color);
}

/* Responsive design for the search fields */
@media (max-width: 768px) {
  .search-fields {
    flex-direction: column;
  }

  .search-fields input,
  .search-fields button {
    width: 100%;
  }
}
</style>
