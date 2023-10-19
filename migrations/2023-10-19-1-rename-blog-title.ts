import type { GadgetMigration } from "gadget-server";

const migration: GadgetMigration = {
  up: async ({migrations}) => {
    migrations.renameField("blog", "title", "headline");
  },
  down: async ({migrations}) => {
    migrations.renameField("blog", "headline", "title");
  }
}

export default migration;