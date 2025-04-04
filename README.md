# Criando componente e publicando no Github Packages

## Preparação

1. Clone o projeto de exemplo.
2. Crir um repositorio no github
3. No package.json, Substitua o campo "name" pelo nome desejado do pacote (ex: "@user/nomedopacote"), e atualize o campo "repository.url" com a URL do repositório recém-criado.
4. No package.json ajuste a version para 1.0.0.
5. Rode npm install –ignore-scripts para instalar somente as dependencias e não rodar nenhum script;

## Configurar o pacote e autenticação no GitHub packages:

6. Agora no Github, em settings -> developer settings -> personal access tokes -> Tokens (classic) , gere um novo token clássico com permissoẽs para:

read:packages, write:packages e delete:packages.

7. No arquivo .npmrc subsitua o nome do usuario do github e o token pelos valores reais;

## Build e produção:

8. Execute o build do pacote: npm run build;
9. Agora vamos publicar o pacote: npm publish
10. Verifique agora na aba packages do seu github que o pacote esta publiciado
11. Agora você ja pode instalar o pacote em outros projetos;

## Atualizando a lib:

12. Altere a versão no package.json;
13. Execute **npm run build** e um **npm publish** para publicar a atualização.

# Usando o componente

1. Para instalar/atualizar o pacote no seu projeto, rode um npm install @user/nomedopacote
