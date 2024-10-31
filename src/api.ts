import assert from "node:assert";

import { createClient } from "microcms-js-sdk";

assert(process.env.SERVICE_DOMAIN);
assert(process.env.API_KEY);

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
