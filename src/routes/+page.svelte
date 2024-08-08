<script>
  import { onMount } from 'svelte';
  import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

  export let data 
  let { story } = data 
  
  onMount(() => {
    if (story && story.id) {
      useStoryblokBridge(
        story.id,
        (newStory) => (story = newStory)
      );
    } else {
      console.error('Story data is missing or malformed:', story);
    }
  });
</script>

<div>
  {#if story}
    <StoryblokComponent blok={story.content} />
  {/if}
</div>
