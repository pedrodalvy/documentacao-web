# Nota Fiscal

Sistema para emissão e controle de nota fiscal eletrônica e emissão de guia de ISS.

## Informações

- **PHP:** 5.6 

- **ID do sistema no SAC:**  25

- **ID do sistema no Intranet:** 56

- **Sistema Desktop integrado:** Siart

- **Endereço:** http://notafiscal.qualitysistemas.com.br/

## Configuração

1. Clonar o repositório `notafiscal` do [Bitbucket](https://bitbucket.org/qualitysistemas/notafiscal/src/master/) dentro da pasta raiz do seu diretório de projetos.

2. Configurar o IP do banco de dados no arquivo `includes\config_nfse.ini`:
   
   ```ini
   usuario=root
   senha=root
   banco=nota_fiscal
   servidor=10.1.2.29
   ```

3. Habilitar no `php.ini` do computador a configuração `short_open_tag`.

> Nota: O MySQL utilizado pelo Nota Fiscal precisa estar na versão 5.5, diferente dos outros projetos da Quality.

## Utilização

- Exemplo de acesso ao localhost: http://notafiscal.localhost/
- Existem 3 tipos de usuários no sistema: Gestor, Contribuinte e Contador. Cada usuário possui acesso à diferentes telas do sistema.

## Alteração da versão

- Alterar a versão no arquivo `includes\versao.ini`
  
  ```ini
  versao=2.4.89.0-16.2
  ```
