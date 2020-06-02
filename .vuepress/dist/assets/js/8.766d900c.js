(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{356:function(a,t,s){"use strict";s.r(t);var e=s(43),o=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"configuracao-do-xampp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracao-do-xampp"}},[a._v("#")]),a._v(" Configuração do XAMPP")]),a._v(" "),s("p",[a._v("Guia para configurar duas versão do PHP para os projetos da Quality utilizando o XAMPP no Windows.")]),a._v(" "),s("h2",{attrs:{id:"instalacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacao"}},[a._v("#")]),a._v(" Instalação")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Primeiro é necessário instalar a versão mais recente do "),s("a",{attrs:{href:"https://www.apachefriends.org/pt_br/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("XAMPP"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("li",[s("p",[a._v("Após a instalação, baixar o "),s("a",{attrs:{href:"https://windows.php.net/downloads/releases/archives/php-5.6.9-nts-Win32-VC11-x64.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("PHP 5.6"),s("OutboundLink")],1),a._v(" e descompacta-lo dentro do diretório de instalação do XAMPP renomeando a pasta para "),s("strong",[a._v("php56")]),a._v(".")])])]),a._v(" "),s("h2",{attrs:{id:"configuracao-do-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracao-do-php"}},[a._v("#")]),a._v(" Configuração do PHP")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Na pasta do PHP 5.6, renomeie o arquivo "),s("em",[a._v("php.ini-development")]),a._v(" para "),s("em",[a._v("php.ini")])])]),a._v(" "),s("li",[s("p",[a._v("Remova o comentário da linha: "),s("code",[a._v('extension_dir = "ext"')])])]),a._v(" "),s("li",[s("p",[a._v("Caso necessário, faça o mesmo no arquivo de configuração do PHP 7.")])])]),a._v(" "),s("p"),a._v(" "),s("h2",{attrs:{id:"configuracao-das-versoes-do-php-no-apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracao-das-versoes-do-php-no-apache"}},[a._v("#")]),a._v(" Configuração das versões do PHP no Apache")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Na interface do XAMPP, clique em "),s("code",[a._v("Config >> Apache (httpd-xampp.conf)")]),a._v(" na linha referente ao Apache.")])]),a._v(" "),s("li",[s("p",[a._v("No arquivo de configuração, adicione o trecho abaixo para configurar as versões do PHP:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# PHP 5.6 settings")]),a._v("\nScriptAlias "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php56 "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"/xampp/php56"')]),a._v("\nAction application"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("httpd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("php56"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php56"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Directory "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"/xampp/php56"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    AllowOverride None\n    Options None\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all denied\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Files "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"php-cgi.exe"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all granted\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Files"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# PHP 7.4 settings")]),a._v("\nScriptAlias "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"/xampp/php"')]),a._v("\nAction application"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("httpd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Directory "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"/xampp/php"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    AllowOverride None\n    Options None\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all denied\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Files "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"php-cgi.exe"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all granted\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Files"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Pode ser necessário comentar a linha "),s("code",[a._v('SetEnv PHPRC "\\\\path\\\\to\\\\xampp\\\\php"')]),a._v(", deste mesmo arquivo de configuração do Apache, caso o navegador mostre algum erro.")])])]),a._v(" "),s("blockquote",[s("p",[a._v("Nota: O diretório de instalação do meu XAMPP é "),s("code",[a._v("C:\\xampp")]),a._v(", onde o PHP 5.6 está dentro da pasta "),s("code",[a._v("C:\\xampp\\php56")]),a._v(" e o PHP 7.4 dentro da pasta "),s("code",[a._v("C:\\xampp\\php")]),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"configuracao-do-virtualhost-no-apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracao-do-virtualhost-no-apache"}},[a._v("#")]),a._v(" Configuração do virtualhost no Apache")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Criar um diretório php56 e outro php74, ambos com um arquivo "),s("code",[a._v("index.php")]),a._v(", que contenha apenas o código: "),s("code",[a._v("<?php phpinfo();")]),a._v(" para que seja possível testar a configuração do apache.")])]),a._v(" "),s("li",[s("p",[a._v("No arquivo "),s("code",[a._v("httpd-xampp.conf")]),a._v(" adicionar o trecho abaixo:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# host php56.localhost")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VirtualHost localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    DocumentRoot "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/php56"')]),a._v("\n    ServerName php56"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("localhost\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Directory "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/php56"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Order allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("deny\n        Allow from all\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all granted\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("FilesMatch "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"\\.php$"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        SetHandler application"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("httpd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("php56"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("FilesMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("VirtualHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# host php74.localhost")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VirtualHost localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    Timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v("\n    DocumentRoot "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/php74"')]),a._v("\n    ServerName php74"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("localhost\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Directory "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/php74"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Order allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("deny\n        Allow from all\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all granted\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("FilesMatch "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"\\.php$"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        SetHandler application"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("httpd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("FilesMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("VirtualHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])]),a._v(" "),s("blockquote",[s("p",[a._v("Nota: No meu computador, a pasta padrão para os projetos web ficam em "),s("code",[a._v("C:/localhost")]),a._v(", altere o diretório do código acima para a pasta padrão dos projetos do seu computador.")])]),a._v(" "),s("p",[a._v("Se tudo estiver correto, ao abrir o endereço http://php74.localhost no navegador, será possível ver as informações do PHP 7.4 e ao abrir o link http://php56.localhost as configurações do PHP 5.6.")]),a._v(" "),s("h2",{attrs:{id:"configuracao-dos-projetos-da-quality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracao-dos-projetos-da-quality"}},[a._v("#")]),a._v(" Configuração dos projetos da Quality")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Para configurar um projeto da Quality é necessário apenas copiar um dos trechos acima, verificando se o projeto utiliza o PHP 5 ou PHP 7 e editar o diretório e o link. Abaixo um exemplo com o Nota Fiscal:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# Nota Fiscal")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("# host notafiscal.localhost")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VirtualHost localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    Timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v("\n    DocumentRoot "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/notafiscal"')]),a._v("\n    ServerName notafiscal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("localhost\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Directory "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"C:/localhost/notafiscal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Order allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("deny\n        Allow from all\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Require")]),a._v(" all granted\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("FilesMatch "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"\\.php$"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        SetHandler application"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("httpd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("php56"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("cgi\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("FilesMatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("VirtualHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Para que os sistemas da Quality funcionem no meu computador foi necessário habilitar as extensões abaixo no PHP 5.6:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[a._v("extension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_curl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_fileinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_gd2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_gettext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_intl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_imap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_mbstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_mysqli"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_pdo_mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_sqlite3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\nextension"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("php_xsl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dll\n")])])])])]),a._v(" "),s("blockquote",[s("p",[a._v("Nota: Não esquecer de adicionar os hosts no arquivo de hosts do Windows.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);