module.exports = {
  constraints({ Yarn }) {
    for (const w of Yarn.workspaces({ ident: "a" })) {
      w.set("scripts.start", "exit 0");
    }
  },
};
