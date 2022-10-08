const stringTo = {
  camel: (text) =>
    text
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (e, r) =>
        0 == +e ? "" : 0 === r ? e.toLowerCase() : e.toUpperCase()
      )
      .replace(/[^\w]+/g, ""),
  slug: (text) =>
    text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-"),
};

/* Vue-Sync */
export default {
  install(app) {
    app.mixin({
      beforeCreate() {
        const sync = this.$options.sync;
        if (sync) {
          if (!this.$options.computed) {
            this.$options.computed = {};
          }
          const attrs = Object.keys(this.$attrs);
          sync.forEach((key) => {
            const name = stringTo.slug(key);
            const nameCamel = stringTo.camel(name);
            if (!attrs.includes(name)) {
              console.error(`Missing required sync-prop: "${name}"`, this);
            }
            this.$options.computed[nameCamel] = {
              get() {
                return this.$attrs[name];
              },
              set(val) {
                this.$emit(`update:${nameCamel}`, val);
              },
            };
          });
        }
      },
    });
  },
};
