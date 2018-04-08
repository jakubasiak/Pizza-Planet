<template>
  <div class="row">
      <div id="home" class="col-sm-12 text-center">
          <div class="background">
              <h1>Welcom to Pizza Planet!</h1>
              <h2>Feeling houngry?</h2>
              <button class="btn btn-success">Let's order!</button>
          </div>
      </div>
  </div>
</template>

<style>
#home {
    background: url('../../src/assets/pizza.jpg');
    height: 800px;
    padding: 10%;
}

h1, h2 {
    margin: 6%;
}

.background {
    background: lightgray;
    opacity: 0.8;
    max-width: 60%;
    margin: 30% auto;
    padding: 20px 0;
}
</style>

