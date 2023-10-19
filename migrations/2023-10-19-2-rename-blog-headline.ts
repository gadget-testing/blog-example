import type { GadgetMigration } from "gadget-server";

const migration: GadgetMigration = {
  up: async ({migrations}) => {
    migrations.renameField("blog", "headline", "name");
  },
  down: async ({migrations}) => {
    migrations.renameField("blog", "name", "headline");
  }
}

export default migration;