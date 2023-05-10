import { component$ } from "@builder.io/qwik"
import { toHTML} from "@portabletext/to-html"

interface Props {
    render?: [any];
}

export default component$<Props>(({render=[]}) =>  {
  
    const HTMLasString = toHTML(render, { components: {}}).toString()
     
    return (
        <div dangerouslySetInnerHTML={ HTMLasString} />
    );
  }
);