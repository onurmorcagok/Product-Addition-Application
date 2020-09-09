<template>
  <div class="row">
    <div class="card offset-2 col-md-3">
      <div class="card-body tex-center d-flex align-items-center flex-column">
        <img
          height="128"
          class="img-responsive text-center mb-3"
          :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage"
        />
        <input
          ref="file"
          type="file"
          style="display: none;"
          @change="onChange($event)"
          class="form-control"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="$refs.file.click()"
        >Resim Seç</button>
      </div>
    </div>
    <div class="col-md-5">
      <div class="col-md-11 card">
        <div class="card-body">
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              type="text"
              v-model="product.productName"
              class="form-control"
              placeholder="Adını Giriniz"
            />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label>Ürün Adeti</label>
              <input
                type="text"
                v-model="product.productCount"
                class="form-control"
                placeholder="Adetini Giriniz"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Ürün Fiyatı</label>
              <input
                type="text"
                v-model="product.productPrice"
                class="form-control"
                placeholder="Fiyatını Giriniz"
              />
            </div>
          </div>
          <button @click="addProduct" class="btn btn-outline-info btn-block">Ürün Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      product: {
        productName: null,
        productCount: null,
        productPrice: null,
        totalPrice: null,
        selectedImage: null,
      },
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
    addProduct() {
      this.product.totalPrice = this.product.productCount * this.product.productPrice;
      eventBus.$emit("addedProduct", this.product);
      this.product = {
        productName: null,
        productCount: null,
        productPrice: null,
        totalPrice: null,
        selectedImage: null,
      };
    },
  },
};
</script>

<style>
</style>