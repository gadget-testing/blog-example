import { applyParams, save, ActionOptions, CreateUserActionContext } from "gadget-server";

/**
 * @param { CreateUserActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateUserActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create".
  triggers: {
    api: true
  }
};
