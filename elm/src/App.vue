<template>
  <div id="app">
	<transition>
		<router-view></router-view>
	</transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
	-webkit-user-select:none;
	text-decoration:none;
}
.v-enter{
		opacity: 0;
		transform: translateX(100%);

	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

	 .v-enter-active,
	 .v-leave-active{
	 	transition:all 0.5s ease;
	 }
</style>
