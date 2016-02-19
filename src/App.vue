<template>
    <div id="app">
      <app-header></app-header>
      <app-footer></app-footer>
      <section class="ui-container ui-center">
          <div class="ui-flex ui-flex-pack-start">
              <div>左</div><div>左</div>
          </div>
          <div class="ui-flex ui-flex-pack-center">
              <div>中</div><div>中</div>
          </div>
          <div class="ui-flex ui-flex-pack-end">
              <div>右</div><div>右</div>
          </div>
          <div class="ui-flex ui-flex-align-start">
              <div>上</div><div>上</div>
          </div>
          <div class="ui-flex  ui-flex-align-center">
              <div>中</div><div>中</div>
          </div>
          <div class="ui-flex ui-flex-align-end">
              <div>下</div><div>下</div>
          </div>
      </section>
    </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
