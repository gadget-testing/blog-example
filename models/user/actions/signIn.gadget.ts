import type { GadgetAction } from "gadget-server";

// This metadata describes action
// View and edit your action in the Gadget editor at https://myapp.gadget.dev/edit
export const action: GadgetAction = {
  type: "gadget/action/v1",
  triggers: [{ type: "google_oauth/signin" }],
  permissions: { },
};