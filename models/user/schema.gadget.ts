import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model user
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-xYUVpP
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-xYUVpP",
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-cgXcdM-createdAt" },
    email: {
      type: "Email",
      validations: [{ type: "email-address" }, { type: "required" }, { type: "unique", caseSensitive: false }],
      dataKey: "mf-98J6Fg",
    },
    emailVerified: {type: "Boolean", default: false,  dataKey: "mf-UfFQQa" },
    firstName: { type: "String", dataKey: "mf-bFK3SC"},
    googleImageUrl: { type: "URL", validations: [{ type: "url" }], dataKey: "mf-y6arqG" },
    googleProfileId: {  type: "String", dataKey: "mf-mTcWaH" },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }], dataKey: "mf-sys-WOFGh5-id" },
    lastName: { type: "String", dataKey: "mf-kSUHkv" },
    lastSignedIn: { type: "DateTime", dataKey: "mf-ssRP6P" },
    password: {  type: "Password", validations: [{ type: "password" }], dataKey: "mf-qaxxfm" },
    roles: { type: "RoleAssignments", default: ["signed-in"], dataKey: "mf-p9Xg8U" },
    updatedAt: {  type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-JP7Zmy-updatedAt" },
  },
};