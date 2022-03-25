# Mode

## Commands

```
graph         => nx graph

build all     => nx run-many --target=build --all
build one     => nx build ms-accounts
                 or
                 nx run ms-accounts:build

lint all      => nx run-many --target=lint --all
lint one      => nx lint ms-accounts
                 or
                 nx run ms-accounts:lint
                 
serve & watch => nx serve ms-accounts
                 or
                 nx run ms-accounts:serve
                 
generate all  => nx run-many --target=generate --all
generate one  => nx run ms-accounts:generate
```

Note:
  1. The `tools/generators` folder contains generators for scaffolding new libs/services. Essentially the same as our `graph-service-template`.
  2. To create a new service run the following `nx g @nrwl/node:application --directory services --name {service name}`. [See here](https://nx.dev/packages/node/generators/application).
  3. To create a new lib run the following `nx g @nrwl/node:library --name {lib name} --directory lib --buildable --importPath @mode/{lib name} --simpleModuleName`. [See here](https://nx.dev/packages/node/generators/library).
  4. More information on `nx` can be found [here](https://nx.dev/getting-started/intro).
