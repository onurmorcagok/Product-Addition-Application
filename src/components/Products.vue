<template>
  <div v-if="productList.length > 0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <appProduct v-for="product in productList" v-bind:key="product.id">
        <img class="card-img-top" :src="product.selectedImage" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ product.productName }}</h5>
          <small>
            <strong>Adet :</strong>
            {{ product.productCount }}
          </small>
          <br />
          <small>
            <strong>Fiyat :</strong>
            {{ product.productPrice }}
          </small>
          <br />
          <small>
            <strong>Tutar :</strong>
            {{ product.totalPrice }}
          </small>
        </div>
      </appProduct>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import { eventBus } from "../main";
export default {
  components: {
    appProduct: Product,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("addedProduct", (product) => {
      if (this.productList.length < 12) {
        this.productList.push(product);
        eventBus.$emit("progressBarUpdated", this.productList.length);
      } else {
        alert("Daha fazla ürün ekleyemezsiniz...");
      }
    });
  },
};
</script>

<style>
</style>