import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model blog
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-4TduEG
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-4TduEG",
  apiIdentifier: "blog",
  fields: {
    createdAt: { dataKey: "mf-sys-ofO4RD-createdAt", type: "DateTime", validations: [{ type: "required" }] },
    description: { dataKey: "mf-Ms3dOA", type: "String", validations: [{ type: "required" }] },
    id: { dataKey: "mf-sys-bPCqjx-id", type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    title: { dataKey: "mf-aYk9ur", type: "String", validations: [{ type: "required" }] },
    updatedAt: { dataKey: "mf-sys-wrKE6s-updatedAt", type: "DateTime", validations: [{ type: "required" }] },
  },
};