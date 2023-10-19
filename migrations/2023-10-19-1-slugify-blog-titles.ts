import type { GadgetMigration } from "gadget-server";
import { slugify } from "lodash";
import { save } from "gadget-server";


const migration: GadgetMigration = {
  up: async ({api}) => {
    for (const post of await api.blog.findMany({})) {
      post.slug = slugify(post.title)
      await save(post);
    }
  },
  down: async ({}) => {
    // nothing to do, field has been removed
  }
}

export default migration;