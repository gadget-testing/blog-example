import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model session
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-pKuMP8
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-pKuMP8",
  apiIdentifier: "session",
  fields: {
    createdAt: { dataKey: "mf-sys-gEJZxV-createdAt", type: "DateTime", validations: [{ type: "required" }] },
    id: { dataKey: "mf-sys-YcRTgC-id", type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    state: { dataKey: "mf-sys-dm-pKuMP8-state", type: "RecordState", validations: [{ type: "required" }] },
    updatedAt: { dataKey: "mf-sys-9xJHxe-updatedAt", type: "DateTime", validations: [{ type: "required" }] },
    user: { dataKey: "mf-ST9SJo", type: "BelongsTo", relatedModelKey: "dm-xYUVpP" },
  },
};