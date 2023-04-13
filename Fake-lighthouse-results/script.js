import {createApp} from "https://cdn.skypack.dev/petite-vue@0.4.1";

const app = () => {
  
  const metrics = [
    {
      title:"Performance",
      pct:66,
    },
    {
      title:"Accessibility",
      pct:100,
    },
    {
      title:"Best Practices",
      pct:52,
    },
    {
      title:"SEO",
      pct:30,
    }
  ]
  return {
    title:"website.com",
    metrics,
    color(pct) {
      if( pct > 89 ) {
        return 'green';
      } else if( pct > 49 ) {
        return 'orange';
      }
      
      return 'red';
    }
  }
}

createApp({app}).mount();