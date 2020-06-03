# Aviso de Licitações

Relação dos avisos de licitações previstas e em andamento da entidade.



## Informações

- **PHP:** ^7.2

- **Laravel:**   6.2

- **ID do sistema no SAC:**  77

- **ID do sistema no Intranet:** 108

- **Sistema Desktop integrado:** Integração (Módulo Licitação)

- **Endereço:** http://avisolicitacao.qualitysistemas.com.br/prefeitura_municipal_de_terenos

## Configuração

1. Clonar o repositório `avisos-licitacao` do [Bitbucket](https://bitbucket.org/qualitysistemas/avisos-licitacao/src/master/) dentro da pasta raiz do seu diretório de projetos.

2. Instalar as dependências com o comando `composer install`.

3. Configurar no `.env` o IP dos bancos de dados
   
   ```
   # Banco do Intranet
   DB_QS_CONNECTION=mysql
   DB_QS_HOST=localhost
   DB_QS_PORT=3306
   DB_QS_DATABASE=quality_site
   DB_QS_USERNAME=root
   DB_QS_PASSWORD=root
   
   # Banco do Aviso de Licitações
   DB_CONNECTION=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=avisos-licitacao
   DB_USERNAME=root
   DB_PASSWORD=root
   
   # Banco do Admin Portal
   DB_ADM_CONNECTION=mysql
   DB_ADM_HOST=10.1.2.32
   DB_ADM_PORT=3306
   DB_ADM_DATABASE=admin_arquivos
   DB_ADM_USERNAME=root
   DB_ADM_PASSWORD=root
   ```

## Utilização

- Exemplo de acesso ao localhost: http://avisolicitacao.localhost/prefeitura_municipal_de_terenos

- Não existe um usuário padrão para testes, é necessário criar um novo para logar no sistema.

## Alteração da versão

- Para alterar a versão acesse o arquivo `config/app.php` e altere os campos abaixo:
  
  ```php
  'app_version' => '1.0.8.0',
  'db_version' => '5.0',
  ```
