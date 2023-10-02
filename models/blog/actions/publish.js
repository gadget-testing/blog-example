import { applyParams, save, ActionOptions, PublishBlogActionContext } from "gadget-server";

/**
 * @param { PublishBlogActionContext } context
 */
export async function run({ params, record, logger, api }) {
  record.state = "published";
  await save(record);
};

/**
 * @param { PublishBlogActionContext } context
 */
export async function onSuccess({ params, record, logger, api, emails }) {
  await emails.sendMail({
    to: "admin@blog-demo.com",
    subject: `New blog post published: ${record.title}`,
    html: "There's been a new blog post published!"
  })
};


/** @type { ActionOptions } */
export const options = {
  actionType: "custom"
};
