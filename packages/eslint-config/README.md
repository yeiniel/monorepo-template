# Eslint Configuration

This package provide an Eslint flat configuration meant to be used across the 
monorepo. It provides lint support for the following file extensions:
 - js
 - ts
 - json
 - json5
 - jsonc

Having the eslint configuration as a package (as opposed to a top level 
configuration file) makes the dependency on the configuration explicit and has 
the advantage of allowing orchestration tools (like turborepo) to detect changes 
and invalidate cached results for dependent packages.

To use the package:

 1. add `@yeiniel/eslint-config@workspace:*` and `eslint@*` to package `devDependencies`
 2. add `eslint.config.mjs` file with content
    ```js
    import { base } from "@yeiniel/eslint-config";

    export default base;
    ```
 3. add lint script 
    ```sh
    ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs .
    ```

Here the `base` configuration is being used. But the package provides 
additional configurations:

 - node