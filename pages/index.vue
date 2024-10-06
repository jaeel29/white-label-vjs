<template>
  <div class="home-page">
    <header class="header">
      <div class="container">
        <div class="content">
          <div class="logo">
            <!-- <img src="/logo.png" alt="Logo" /> -->
            <NuxtImg src="/logo.png" alt="Photo" />
          </div>

          <nav class="header-links">
            <a href="#" class="header-link">Currency</a>
            <a href="#" class="header-link">My Bookings</a>
            <a href="#" class="header-link">My Wishlist</a>
          </nav>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="hero-section">
        <div class="search-bar">
          <h1 class="hero-title">Experience The Greatest on your holiday</h1>
          <SearchBar />
        </div>
      </div>
    </div>

    <div class="featured-section">
      <div class="container">
        <div class="content">
          <h2 class="featured-title">Featured Hotels</h2>

          <!-- Check if hotels array exists and has data -->
          <div v-if="hotels && hotels.length" class="hotels-list">
            <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
          </div>
        </div>
      </div>
    </div>

    <div class="nearby-section">
      <div class="container">
        <div class="content">
          <h2 class="nearby-title">Nearby Hotels</h2>

          <!-- Check if hotels array exists and has data -->
          <div v-if="hotels && hotels.length" class="hotels-list">
            <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="container">
        <div class="content">
          <div class="logo">
            <!-- <img src="/logo.png" alt="Logo" /> -->
            <NuxtImg src="/logo.png" alt="Logo" />
          </div>

          <div class="footer-links">
            <div class="footer-links">
              <a href="#" class="footer-link">Terms & Conditions</a>
              <a href="#" class="footer-link">Privacy Policy</a>
              <a href="#" class="footer-link">Cookies Policy</a>
              <a href="#" class="footer-link">Manage my bookings</a>
              <a href="#" class="footer-link">Report a bug</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar.vue";
import HotelCard from "~/components/HotelCard.vue";

export default {
  components: {
    SearchBar,
    HotelCard,
  },
  // Static hotel data with Unsplash images
  data() {
    return {
      hotels: [
        {
          id: 1,
          name: "Hilton Hotel Paris",
          price: 250,
          rating: 4.7,
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvdGVsfGVufDB8fHx8MTY1NzI0Nzc0MA&ixlib=rb-1.2.1&q=80&w=1080",
          description:
            "Located in the heart of Paris, Hilton Hotel offers luxury rooms with Eiffel Tower views.",
          location: "Paris, France",
        },
        {
          id: 2,
          name: "Ritz-Carlton Tokyo",
          price: 450,
          rating: 4.9,
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvdGVsfGVufDB8fHx8MTY1NzI0Nzc0MA&ixlib=rb-1.2.1&q=80&w=1080",
          description:
            "Experience luxury at the Ritz-Carlton Tokyo with stunning views of Mount Fuji.",
          location: "Tokyo, Japan",
        },
        {
          id: 3,
          name: "Marriott Hotel New York",
          price: 300,
          rating: 4.6,
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvdGVsfGVufDB8fHx8MTY1NzI0Nzc0MA&ixlib=rb-1.2.1&q=80&w=1080",
          description:
            "Stay in the heart of New York City with modern amenities and skyline views.",
          location: "New York, USA",
        },
      ],
    };
  },
};
</script>

<style scoped>
.header .content {
  background-color: var(--neutral-100); /* Use primary color */
  height: 80px;
  display: flex;
  justify-content: space-between; /* Space between logo and nav links */
  align-items: center;
}

.logo img {
  height: 40px;
  transform: scale(0.6);
  transform-origin: left;
}

.header-links {
  display: flex;
  gap: 28px; /* Space between links */
}

.header-link {
  color: var(--neutral-700);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.header-link:hover {
  color: var(--primary-color);
}

.hero-section {
  /* background-color: var(--primary-color); */
  background-image: url("/photos/hero.png");
  object-fit: contain;
  background-position: bottom 0px right -150px;
  background-repeat: no-repeat;
  width: 100%;
  height: 720px;
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  /* align-items: center; */
  padding-top: 120px;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 24px;
}

.hero-content {
  text-align: center;
  color: var(--text-on-primary);
}

.hero-title {
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: bold;
  color: var(--primary-color-dark);
  width: 70%;
  text-align: center;
  /* font-family: var(--font-britti); */
  font-family: var(--font-britti);
  font-weight: 500;
  text-align: center;
}

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.featured-section {
  margin-bottom: 24px;
}

.featured-section .content,
.nearby-section .content {
  background-color: #fff6f6;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.nearby-section .content {
  background-color: var(--neutral-100);
}

.featured-title,
.nearby-title {
  font-size: 28px;
  font-family: var(--font-britti);
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  color: var(--primary-color-dark);
}

.hotels-list {
  display: flex;
  flex: 1;
  gap: 12px;
  align-self: stretch;
}

/* Footer Styling */
.footer {
  background-color: var(--neutral-100);
  margin-top: 48px;
  color: var(--neutral-700);
  border-top: 1px solid var(--neutral-200);
  align-items: center;
  padding: 32px 0;
}

.footer .content {
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  width: 100%;
}

.footer-logo img {
  height: 50px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.footer-link {
  text-decoration: none;
  font-size: 14px;
}

.footer-link:hover {
  color: var(--primary-color);
}
</style>
