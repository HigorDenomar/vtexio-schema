## Vtex IO | Json Schema

A ideia é termos um autocomplete de todos os blocos do vtex io.

Para trazer uma experiência de desenvolvimento ainda mais completa, deixei também um arquivo de snippets na pasta .vscode, sendo que o mesmo não necessariamente precisa estar no boilerplate do projeto, já que pode ser adicionado individualmente como uma configuração global no vscode de cada dev.

Já o arquivo de schema, também temos a opção de disponibilizá-lo através de uma url, caso prefiram.

Como testar:
- Baixe este repositório e abra no vscode;
- Crie um arquivo ``.jsonc`` e use a prop ``$schema`` com o arquivo disponibilizado, dessa forma:
```json
{
  "$schema": "vtex-schema.json",

}
```
- Depois é só começar a escrever os blocos e você terá autocomplete deles.

<small>PS: Ainda estou desenvolvendo, então ainda não tem todos os blocos.</small>
