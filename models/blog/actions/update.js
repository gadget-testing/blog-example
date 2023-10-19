import { applyParams, save, ActionOptions, UpdateBlogActionContext } from "gadget-server";

/**
 * @param { UpdateBlogActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { UpdateBlogActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
  triggers: {
    api: true
  }
};
