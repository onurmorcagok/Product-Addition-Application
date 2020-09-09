<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <appNewProduct></appNewProduct>
    <br><br>
    <appProgressBar></appProgressBar>
    <br><br>
    <appProducts></appProducts>
  </div>
</template>

<script>
import NewProduct from './components/NewProduct'
import ProgressBar from './components/ProgressBar'
import Products from './components/Products'

  export default {
    components: {
      appNewProduct: NewProduct,
      appProgressBar: ProgressBar,
      appProducts: Products,
    },
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

