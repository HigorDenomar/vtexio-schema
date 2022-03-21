## Vtex IO | Json Schema

A idéia é termos um autocomplete de todos os blocos do vtex io.
Para trazer uma experiência de desenvolvimento ainda mais completa, deixei também um arquivo de snippets na pasta .vscode, sendo que o mesmo não necessáriamente precisa estar no boilerplate do projeto, já que pode ser adicionado individualmente como uma configuração global no vscode de cada dev.
Já o arquivo de schema, também temos a opçao de disponibilizá-lo através de uma url, caso prefiram.

Como testar:
- Baixe este repositório e abra no vscode;
- Crie um arquivo .jsonc e use a prop "$schema" com o arquivo disponibilizado, dessa forma:
  "$schema": "vtex-schema.json",
- Depois é só comecar a escrever os blocos e você terá autocomplete deles.

PS: Ainda estou desenvolvendo, então ainda não tem todos os blocos.
