// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { partytownSnippet, PartytownConfig } from "@builder.io/partytown/integration";

/**
 * Props for `<QwikPartytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export interface PartytownProps extends PartytownConfig {
  forward: ["dataLayer.push"];
}

/**
 * @public
 * You can pass setting with props
 */
export const QwikPartytown = (props: PartytownProps): any => {
  return <script dangerouslySetInnerHTML={partytownSnippet(props)} />;
};
