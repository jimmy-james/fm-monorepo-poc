module.exports = {
    // these help husky do its job
    extends: [
        // configuration for commitlint
        "@commitlint/config-conventional",
        // helps commitlint understand lerna-scopes
        "@commitlint/config-lerna-scopes",
    ],
};