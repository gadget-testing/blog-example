import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model blog
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-4TduEG
export const schema: GadgetModel = {
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }] },
    description: { type: "String", validations: [{ type: "required" }] },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    headline: { type: "String", validations: [{ type: "required" }] },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
  },
};
