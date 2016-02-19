<template>
  <footer class="ui-footer ui-footer-btn">
      <ul class="ui-tiled ui-border-t">
          <li data-href="index.html" class="ui-border-r"><div>基础样式</div></li>
          <li data-href="ui.html" class="ui-border-r"><div>UI组件</div></li>
          <li data-href="js.html"><div>JS插件</div></li>
      </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      tab: '选项卡'
    }
  }
}
</script>
