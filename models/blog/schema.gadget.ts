import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model blog
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-4TduEG
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-4TduEG",
  fields: {
    comments: { type: "HasMany", relatedModel: "comment", inverseField: "blog", dataKey: "mf-CwHCmJ" },
    createdAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-ofO4RD-createdAt" },
    description: { type: "String", validations: [{ type: "required" }], dataKey: "mf-Ms3dOA" },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }], dataKey: "mf-sys-bPCqjx-id" },
    sharingEnabled: { type: "Boolean", default: true, dataKey: "mf-KdmfmQ" },
    title: { type: "String", validations: [{ type: "required" }], dataKey: "mf-aYk9ur" },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-wrKE6s-updatedAt" },
  },
};
