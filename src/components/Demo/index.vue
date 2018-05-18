<template>
  <div>
    <keep-alive>
      <demo-list></demo-list>
    </keep-alive>
  </div>
</template>

<script>
import DemoList from './list'

export default {
  components: {
    DemoList
  }
}
</script>
