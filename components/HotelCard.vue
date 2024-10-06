<template>
  <div class="hotel-card">
    <img :src="hotel.image" alt="Hotel image" />
    <div class="hotel-info">
      <h3>{{ hotel.name }}</h3>
      <p class="location">{{ hotel.location }}</p>
      <div class="pricing">
        <p class="price">${{ hotel.price }}</p>
        <p class="pernight">per night</p>
      </div>
      <p class="rating">Rating - {{ hotel.rating }}</p>
      <!-- <p class="description">{{ hotel.description }}</p> -->
      <!-- <nuxt-link :to="`/hotel/${hotel.id}`" class="details-link"
        >View Details</nuxt-link
      > -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotel: Object,
  },
};
</script>

<style scoped>
.hotel-card {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.5s;
  flex: 1;
  font-family: var(--font-britti);
  padding-bottom: 64px;
  position: relative;
}

.hotel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.hotel-card:hover .hotel-info h3 {
  color: var(--primary-color);
}

.hotel-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.hotel-info {
  padding: 20px;
}

.hotel-info h3 {
  font-size: 20px;
  color: var(--neutral-700);
  margin-bottom: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.location {
  font-size: 14px;
  color: var(--neutral-400);
}

.pricing {
  color: var(--neutral-700);
  display: flex;
  align-items: flex-end;
  gap: 6px;
  flex-direction: column;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 999;
}

.price {
  font-size: 28px;
  font-weight: 500;
}

.pernight {
  color: var(--neutral-500);
  font-size: 14px;
  font-weight: 300;
}

.rating {
  color: var(--primary-color-dark);
  font-size: 14px;
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: var(--neutral-100);
  padding: 8px 12px;
  border-radius: 999px;
  z-index: 999;
  font-family: var(--font-britti);
}

.description {
  font-size: 14px;
  margin: 10px 0;
}

.details-link {
  color: #003580;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>
