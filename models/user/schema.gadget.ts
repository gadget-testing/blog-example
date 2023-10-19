import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model user
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-xYUVpP
export const schema: GadgetModel = {
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }]  },
    email: {
      type: "Email",
      validations: [{ type: "email-address" }, { type: "required" }, { type: "unique", caseSensitive: false }],
    },
    emailVerified: {type: "Boolean", default: false },
    firstName: { type: "String", },
    googleImageUrl: { type: "URL", validations: [{ type: "url" }] },
    googleProfileId: {  type: "String" },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    lastName: { type: "String" },
    lastSignedIn: { type: "DateTime" },
    password: {  type: "Password", validations: [{ type: "password" }] },
    roles: { type: "RoleAssignments", default: ["signed-in"] },
    updatedAt: {  type: "DateTime", validations: [{ type: "required" }] },
  },
};