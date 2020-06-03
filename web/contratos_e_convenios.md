# Gestão de Contratos

Informações sobre os contratos e aditivos realizados entre a entidade e outras partes.



## Informações

- **ID do sistema no SAC:**  39

- **ID do sistema no Intranet:** 61

- **Sistema Desktop integrado:** Contabilidade
  
- **Endereço:** http://web.qualitysistemas.com.br/contratos_e_convenios/prefeitura_municipal_de_terenos


## Configuração

1. Clonar o repositório `contratos_e_convenios` do [Bitbucket ](https://bitbucket.org/qualitysistemas/contratos_e_convenios/src/master/)dentro da pasta `portalcidadao` do seu diretório de projetos:
   
   ```bash
   git clone https://user@bitbucket.org/qualitysistemas/contratos_e_convenios.git
   ```

2. Configurar o caminho do banco de dados do Admin Portal em `config/database_admin_arquivos.json`:
   
   ```json
   "dev": {
       "user" : "root",
       "password": "root",
       "database": "admin_arquivos",
       "host": "localhost"
   },
   ...
   ```

3. Configurar o caminho do banco de dados do servidor de backup em `config/database-bkp.json`:
   
   ```json
   "dev": {
           "user" : "root",
           "password": "root",
           "database": "backup",
           "host": "localhost"
   },
   ...
   ```

4. Configurar o caminho do banco de dados do Intranet em `config/database.json`:
   
   ```json
   "dev": {
       "user": "root",
       "password": "root",
       "database": "quality_site",
       "host": "localhost"
     },
   ...
   ```



## Utilização

Para acessar o módulo é necessário ter o portalcidadao configurado no apache.



1. Link padrão para acesso: http://portal.localhost/contratos_e_convenios/municipio_de_camapua



## Alteração da versão

- A versão do projeto está configurada no arquivo  `config/parameters.json`
  
  ```json
  {
      "project": {
          "id": 61,
          "version": "1.3.6.5"
      }
  }
  ```