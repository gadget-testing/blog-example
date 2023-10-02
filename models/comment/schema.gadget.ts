import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model comment
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-hDYEYG
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-hDYEYG",
  fields: {
    author: {
      type: "BelongsTo",
      validations: [{ type: "required" }],
      relatedModel: "user",
      dataKey: "mf-7kmTQz",
    },
    blog: {
      type: "BelongsTo",
      validations: [{ type: "required" }],
      relatedModel: "blog",
      dataKey: "mf-O8UN3x",
    },
    body: {
      type: "String",
      validations: [{ type: "required" }, { type: "string-size", maximumLength: "1", minimumLength: "10" }],
      dataKey: "mf-XN36Ke",
    },
    createdAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-y4j37G-createdAt" },
    id: { type: "ID", validations: [{ type: "required" }, { type: "unique" }], dataKey: "mf-sys-Hu2yEc-id" },
    updatedAt: { type: "DateTime", validations: [{ type: "required" }], dataKey: "mf-sys-pfXGxd-updatedAt" },
  },
};