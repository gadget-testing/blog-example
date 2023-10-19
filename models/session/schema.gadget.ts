import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model session
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-pKuMP8
export const schema: GadgetModel = {
  fields: {
    createdAt: { type: "DateTime", validations: [{ type: "required" }]  },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    state: { type: "RecordState", validations: [{ type: "required" }] },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }] },
    user: { type: "BelongsTo", relatedModel: "session" },
  },
};