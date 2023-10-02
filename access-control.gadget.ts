import type { GadgetAccessControl } from "gadget-server";

// This metadata describes the roles available in your application
// View and edit your roles and permissions in the Gadget editor at https://myapp.gadget.dev/edit/settings/permissions
export const accessControl: GadgetAccessControl = {
  type: "gadget/access-control/v1",
  roles: {
    "signed-in": { defaultRead: true, defaultAction: true },
    "system-admin": { defaultRead: true, defaultAction: true },
    unauthenticated: {},
  },
};