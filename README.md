# ts-bootstrap

typescript bootstrap project based on `tsx` with working vscode debug configuration, `eslint`, `husky` and all wistles and bells

### Debug configurations

- `tsx` - runs `tsx` and build files in memory
- `tsc` - runs `tsc: build` as a `prebuildTask`, shart build files and then run `node`
- `node` - runs `node` with `tsx/esm` shim in memory

### Done

- [x] `.env` file with multiline variable can be read with `node` version `>=21.7.0`

### To Do

- [ ] Debug doesn't work with `node` version `>=21.6.0`.check https://github.com/privatenumber/tsx/issues/478 for more information
