<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	export let data 
	let { header } = data?.header || {};
	
</script>

<main>
	<Navbar navbar={header} />
	<slot></slot>
</main>

