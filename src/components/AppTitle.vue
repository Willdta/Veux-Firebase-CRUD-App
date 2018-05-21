<template>
  <div id="apptitle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'apptitle',

    props: ['title']
  }
</script>