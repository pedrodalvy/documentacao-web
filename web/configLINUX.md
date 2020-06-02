# Configuração do Linux

Guia para instalação e configuração do PHP, utilizando as versões 5 e 7 no Linux.



## Instalação do Apache e MySQL

1. Execute o comando abaixo para instalar o Apache, MySQL, Get e Composer:
   
   ```bash
   apt install apache2 mysql-workbench mysql-workbench-data mysql-server-5.7 git composer 
   ```



## Instalação do PHP

1. Adicione o repositório abaixo para instalar outras versões do PHP:
   
   ```bash
   add-apt-repository ppa:ondrej/php
   ```

2. Caso o comando acima apresente erro no locale, execute o comando abaixo:
   
   ```bash
   LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php
   ```

3. Instale o **PHP 5.6**, junto com suas extensões:
   
   ```bash
   apt install php5.6 php5.6-mysql php5.6-cli php5.6-curl php5.6-json php5.6-sqlite3 php5.6-mcrypt php5.6-curl php-xdebug php5.6-mbstring libapache2-mod-php5.6 php5.6-pgsql php5.6-xml php5.6-zip php5.6-imap php5.6-gd php-mongo php5.6-fpm php5.6-cgi
   ```

4. Instale o PHP 7.4 e suas extensões:
   
   ```bash
   apt install php7.4 php7.4-mysql php7.4-cli php7.4-curl php7.4-json php7.4-sqlite3 php7.4-curl php-xdebug php7.4-mbstring libapache2-mod-php7.4 php7.4-pgsql php7.4-xml php7.4-zip php7.4-imap php7.4-gd php7.4-fpm php7.4-cgi
   ```



## Ativando os módulos PHP

1. Habilite o PHP 5.6 e 7.4 no apache através dos comandos abaixo:
   
   ```bash
   a2enmod php5.6
   a2enmod php7.2
   a2enmod rewrite
   a2enmod expires
   ```

2. Reinicie o apache com o comando `service apache2 restart`.



## Configuração do Apache

...