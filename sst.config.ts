import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const config: SSTConfig = {
  config(_input) {
    return {
      name: "nextjs",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
}

export default config
