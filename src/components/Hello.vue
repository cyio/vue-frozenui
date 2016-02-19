<template>
  <div class="header">
    <header class="ui-header ui-header-positive ui-border-b">
      <i class="ui-icon-return" onclick="history.back()"></i><h1>{{tab}}</h1><button class="ui-btn">回首页</button>
    </header>
  </div>
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
