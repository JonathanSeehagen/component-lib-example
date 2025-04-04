# 1. Criando componente e publicando no Github Packages

- Processo de criação de um pacote de componentes (component library) JS/TS;
- Publicação do pacote de componentes utilizando GitHub Packages (falo sobre o AWS CodeArtifact ao final);
- Instalação/atualização e configuração do pacote de componentes.

O componente utiliza NativeWind e clsx.

## Preparação

1. Clone o projeto de exemplo.
2. Criar um repositório no github
3. No package.json, Substitua o campo **name** pelo nome desejado do pacote (ex: "@user/nomedopacote"), e atualize o campo **repository.url** com a URL do repositório recém-criado.
4. No package.json ajuste a version para 1.0.0.
5. Rode **npm install –ignore-scripts** para instalar somente as dependencias e não rodar nenhum script;

## Configurar o pacote e autenticação no GitHub packages:

6. Agora no Github, em settings -> developer settings -> personal access tokes -> Tokens (classic) , gere um novo token clássico com permissoẽs para: **read:packages**, **write:packages** e **delete:packages**.

7. No arquivo **.npmrc** subsitua o nome do usuario do github e o token pelos valores reais;

## Build e produção:

8. Execute o build do pacote: **npm run build**.
9. Agora vamos publicar o pacote: **npm publish**.
10. Verifique agora na aba packages do seu github que o pacote esta publicado
11. Agora você ja pode instalar o pacote em outros projetos;

## Liberar nova versão da lib:

12. Altere a versão no package.json;
13. Execute **npm run build** e um **npm publish** para publicar a atualização.

---

# 2. Usando o componente

1. No projeto que você quer instalar o pacote, copie o arquivo **.npmrc** para a raiz do projeto.

- Sobre os tokens utilizados no .npmrc. Podem ser utilizados o mesmo token gerano no GitHub, porem podemos gerar um token somente para leitura e utilizar esse token no projeto que importa a lib. (questões de segurança).

2. Para instalar/atualizar o pacote no seu projeto, rode um npm **install @user/nomedopacote**.

3. Adicionar o caminho da pasta da lib instalada no content do **tailwind.config.js:**:

```js
content: [
  "./src/**/*.{ts,tsx}",
  // Lib externa (ajuste o nome conforme o seu pacote real)
  "./node_modules/@jonathanseehagen/ui-lib-rn-test/**/*.{js,ts,jsx,tsx}",
],
```

Obs.: Por se tratar de uma lib que utiliza JS/TS puro, não precisa gerar a build novamente.

---

As configurações do GitHub Packages vs AWS CodeArtifact são semelhantes. Ambos utilizam um arquivo de configuração **.npmrc** para vincular o pacote com o domínio e tokens.

Abaixo segue uma tabela para comparação: GitHub Packages vs AWS CodeArtifact

| **Característica**           | **GitHub Packages**                                       | **AWS CodeArtifact**                                      |
| ---------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Integração**               | Integrado ao GitHub, facilita o uso com repositórios      | Integrado ao AWS, pode ser usado com outros serviços AWS  |
| **Suporte a formatos**       | npm, Maven, NuGet, RubyGems, Docker, Gradle               | npm, Maven, NuGet, PyPI, Docker                           |
| **Autenticação**             | Requer **Personal Access Token (PAT)** no `.npmrc`        | Usa **IAM roles, AWS CLI ou credenciais temporárias**     |
| **Controle de acesso**       | Baseado em permissões do GitHub (repositório/organização) | Controle refinado via **IAM policies**                    |
| **Custo**                    | Gratuito para repositórios públicos, pago para privados   | Pago com base em uso (armazenamento e transferências)     |
| **Facilidade de uso**        | Simples para quem já usa GitHub                           | Requer configuração de AWS CLI e permissões IAM           |
| **Distribuição**             | Ideal para times que já trabalham com GitHub              | Melhor para empresas que usam AWS para infraestrutura     |
| **Velocidade de publicação** | Rápida, pois é integrada ao GitHub Actions                | Pode ter um pequeno overhead de autenticação e permissões |
