# Configuração do XAMPP

Guia para configurar duas versão do PHP para os projetos da Quality utilizando o XAMPP no Windows.



## Instalação

1. Primeiro é necessário instalar a versão mais recente do [XAMPP](https://www.apachefriends.org/pt_br/index.html).

2. Após a instalação, baixar o [PHP 5.6](https://windows.php.net/downloads/releases/archives/php-5.6.9-nts-Win32-VC11-x64.zip) e descompacta-lo dentro do diretório de instalação do XAMPP renomeando a pasta para **php56**.



## Configuração do PHP

1. Na pasta do PHP 5.6, renomeie o arquivo *php.ini-development* para *php.ini*

2. Remova o comentário da linha: ```extension_dir = "ext"```

3. Caso necessário, faça o mesmo no arquivo de configuração do PHP 7.

 

## Configuração das versões do PHP no Apache

1. Na interface do XAMPP, clique em ```Config >> Apache (httpd-xampp.conf)``` na linha referente ao Apache. 

2. No arquivo de configuração, adicione o trecho abaixo para configurar as versões do PHP:
   
   ```php
   # PHP 5.6 settings
   ScriptAlias /php56 "/xampp/php56"
   Action application/x-httpd-php56-cgi /php56/php-cgi.exe
   <Directory "/xampp/php56">
       AllowOverride None
       Options None
       Require all denied
       <Files "php-cgi.exe">
           Require all granted
       </Files>
   </Directory>
   
   # PHP 7.4 settings
   ScriptAlias /php "/xampp/php"
   Action application/x-httpd-php-cgi /php/php-cgi.exe
   <Directory "/xampp/php">
       AllowOverride None
       Options None
       Require all denied
       <Files "php-cgi.exe">
           Require all granted
       </Files>
   </Directory>
   ```

3. Pode ser necessário comentar a linha `SetEnv PHPRC "\\path\\to\\xampp\\php"`, deste mesmo arquivo de configuração do Apache, caso o navegador mostre algum erro.

> Nota: O diretório de instalação do meu XAMPP é ```C:\xampp```, onde o PHP 5.6 está dentro da pasta ```C:\xampp\php56``` e o PHP 7.4 dentro da pasta ```C:\xampp\php```.



## Configuração do virtualhost no Apache

1. Criar um diretório php56 e outro php74, ambos com um arquivo ```index.php```, que contenha apenas o código: ```<?php phpinfo();``` para que seja possível testar a configuração do apache.

2. No arquivo `httpd-xampp.conf` adicionar o trecho abaixo:
   
   ```php
   # host php56.localhost
   <VirtualHost localhost:80>
       DocumentRoot "C:/localhost/php56"
       ServerName php56.localhost
       <Directory "C:/localhost/php56">
           Options Indexes FollowSymLinks
           AllowOverride All
           Order allow,deny
           Allow from all
           Require all granted
       </Directory>
       <FilesMatch "\.php$">
           SetHandler application/x-httpd-php56-cgi
       </FilesMatch>
   </VirtualHost>
   
   # host php74.localhost
   <VirtualHost localhost:80>
       Timeout 400
       DocumentRoot "C:/localhost/php74"
       ServerName php74.localhost
       <Directory "C:/localhost/php74">
           Options Indexes FollowSymLinks
           AllowOverride All
           Order allow,deny
           Allow from all
           Require all granted
       </Directory>
       <FilesMatch "\.php$">
           SetHandler application/x-httpd-php-cgi
       </FilesMatch>
   </VirtualHost>
   ```

> Nota: No meu computador, a pasta padrão para os projetos web ficam em `C:/localhost`, altere o diretório do código acima para a pasta padrão dos projetos do seu computador.

Se tudo estiver correto, ao abrir o endereço http://php74.localhost no navegador, será possível ver as informações do PHP 7.4 e ao abrir o link http://php56.localhost as configurações do PHP 5.6.



## Configuração dos projetos da Quality

1. Para configurar um projeto da Quality é necessário apenas copiar um dos trechos acima, verificando se o projeto utiliza o PHP 5 ou PHP 7 e editar o diretório e o link. Abaixo um exemplo com o Nota Fiscal:
   
   ```php
   #
   # Nota Fiscal
   # host notafiscal.localhost
   #
   <VirtualHost localhost:80>
       Timeout 400
       DocumentRoot "C:/localhost/notafiscal"
       ServerName notafiscal.localhost
       <Directory "C:/localhost/notafiscal">
           Options Indexes FollowSymLinks
           AllowOverride All
           Order allow,deny
           Allow from all
           Require all granted
       </Directory>
       <FilesMatch "\.php$">
           SetHandler application/x-httpd-php56-cgi
       </FilesMatch>
   </VirtualHost>
   ```

2. Para que os sistemas da Quality funcionem no meu computador foi necessário habilitar as extensões abaixo no PHP 5.6:
   
   ```php
   extension=php_curl.dll
   extension=php_fileinfo.dll
   extension=php_gd2.dll
   extension=php_gettext.dll
   extension=php_intl.dll
   extension=php_imap.dll
   extension=php_mbstring.dll
   extension=php_mysql.dll
   extension=php_mysqli.dll
   extension=php_pdo_mysql.dll
   extension=php_sqlite3.dll
   extension=php_xsl.dll
   ```

> Nota: Não esquecer de adicionar os hosts no arquivo de hosts do Windows.


