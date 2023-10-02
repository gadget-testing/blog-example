import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model user
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-xYUVpP
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-xYUVpP",
  apiIdentifier: "user",
  fields: {
    createdAt: { dataKey: "mf-sys-cgXcdM-createdAt", type: "DateTime", validations: [{ type: "required" }] },
    email: {
      dataKey: "mf-98J6Fg",
      type: "Email",
      validations: [{ type: "email-address" }, { type: "required" }, { type: "unique", caseSensitive: false }],
    },
    emailVerified: { dataKey: "mf-UfFQQa", type: "Boolean", default: false },
    firstName: { dataKey: "mf-bFK3SC", type: "String" },
    googleImageUrl: { dataKey: "mf-y6arqG", type: "URL", validations: [{ type: "url" }] },
    googleProfileId: { dataKey: "mf-mTcWaH", type: "String" },
    id: { dataKey: "mf-sys-WOFGh5-id", type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    lastName: { dataKey: "mf-kSUHkv", type: "String" },
    lastSignedIn: { dataKey: "mf-ssRP6P", type: "DateTime" },
    password: { dataKey: "mf-qaxxfm", type: "Password", validations: [{ type: "password" }] },
    roles: { dataKey: "mf-p9Xg8U", type: "RoleAssignments", default: ["signed-in"] },
    updatedAt: { dataKey: "mf-sys-JP7Zmy-updatedAt", type: "DateTime", validations: [{ type: "required" }] },
  },
};