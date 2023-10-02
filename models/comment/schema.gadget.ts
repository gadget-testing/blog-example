import type { GadgetModel } from "gadget-server";

// This metadata describes the schema of the model comment
// View and edit your model in the Gadget editor at https://myapp.gadget.dev/edit/models/dm-hDYEYG
export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  dataKey: "dm-hDYEYG",
  apiIdentifier: "comment",
  fields: {
    author: {
      dataKey: "mf-7kmTQz",
      type: "BelongsTo",
      validations: [{ type: "required" }],
      relatedModelKey: "dm-xYUVpP",
    },
    blog: {
      dataKey: "mf-O8UN3x",
      type: "BelongsTo",
      validations: [{ type: "required" }],
      relatedModelKey: "dm-4TduEG",
    },
    body: {
      dataKey: "mf-XN36Ke",
      type: "String",
      validations: [{ type: "required" }, { type: "string-size", maximumLength: "1", minimumLength: "10" }],
    },
    createdAt: { dataKey: "mf-sys-y4j37G-createdAt", type: "DateTime", validations: [{ type: "required" }] },
    id: { dataKey: "mf-sys-Hu2yEc-id", type: "ID", validations: [{ type: "required" }, { type: "unique" }] },
    updatedAt: { dataKey: "mf-sys-pfXGxd-updatedAt", type: "DateTime", validations: [{ type: "required" }] },
  },
};