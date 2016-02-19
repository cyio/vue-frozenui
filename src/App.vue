<template>
    <div id="app">
      <hello></hello>
      <footer class="ui-footer ui-footer-btn">
          <ul class="ui-tiled ui-border-t">
              <li data-href="index.html" class="ui-border-r"><div>基础样式</div></li>
              <li data-href="ui.html" class="ui-border-r"><div>UI组件</div></li>
              <li data-href="js.html"><div>JS插件</div></li>
          </ul>
      </footer>
    </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
