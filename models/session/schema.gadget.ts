import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model session
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-pKuMP8
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-pKuMP8",
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }],  dataKey: "mf-sys-gEJZxV-createdAt" },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }], dataKey: "mf-sys-YcRTgC-id" },
    state: { type: "RecordState", validations: [{ type: "required" }], dataKey: "mf-sys-dm-pKuMP8-state" },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-9xJHxe-updatedAt" },
    user: { type: "BelongsTo", relatedModel: "session", dataKey: "mf-ST9SJo" },
  },
};