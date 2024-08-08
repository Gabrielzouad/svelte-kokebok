<script>
    import { storyblokEditable } from '@storyblok/svelte';
    export let blok;
    import Button from '$lib/components/ui/button/button.svelte';
</script>
<div use:storyblokEditable={blok} class="container mt-10 p-10 md:p-16 bg-slate-50 h-[500px] flex flex-col md:items-center justify-center ">
    <h1 class="text-4xl md:text-7xl text-primary">
        {blok.heading}
    </h1>
    <p class="text-light">{blok.description}</p>
    <Button class="w-32 rounded-xl mt-32">
        {blok.button_text}
    </Button>
</div>