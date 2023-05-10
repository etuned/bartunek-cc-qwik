import { Fragment, component$ } from "@builder.io/qwik"
import { toHTML} from "@portabletext/to-html"

interface Props {
    render?: [any];
    customComponents?: {};
}

export default component$<Props>(({render=[],  customComponents = {}}) =>  {
  
    const HTMLasString = toHTML(render, { components: customComponents}).toString()
     
    return (
        <div dangerouslySetInnerHTML={HTMLasString} />
    );
  }
);