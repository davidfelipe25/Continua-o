<template>
<div>
	<ul>
		<li v-for='usuario in usuarios'>
			<p>{{usuario.name}}</p>
			<p>{{username.email}}</p>
		</li>
	</ul>
</div>	
</template>
<script>
import axios from 'axios'
export default { 
  name: '',
  data () {
    return {
    	usuario:[],
    	configs: {
    	  ordeBy:'name',
    	  order:'desce',
    	}
    }      
  },
   mounted(){
   	axios.get('http://jsonplaceholder.typicode.com/users')
    	.then(response => response.data)
      .then(data => this.$set(this,'repos', data));
  },
  computed:{
  	list(){
  		return _.ordeyBy(this.usuarios,'name')
  	}
  }
   }
</script>
<style scoped>
	
</style>