# Configuração do WSL

### Requisitos: 
- WSL habilitado e com algum sistema linux instalado (este tutorial é baseado no Ubuntu)
- CMDER instalado

<br />

## Configuração do proxy no WSL:

- Abrir o arquivo de configuração do apt a adicionar a linha abaixo: <br />
    ``` sh
    Acquire::http::Proxy "user:password@proxyfw.qualitysistemas.local:3128";
    ```
    > Obs. no Ubuntu o arquivo foi (/etc/apt/apt.conf.d/70debconf)

<br />

- Adicionar o proxy nas variáveis de ambiente do Linux <br />
    ``` sh
    export http_proxy=http://user:password@proxyfw.qualitysistemas.local:3128
    export https_proxy=http://user:password@proxyfw.qualitysistemas.local:3128
    ```
    > Obs. se a senha possuir ```@```, digitar ```%40``` no lugar.

<br />

- Após a configuração do ZSH, é possivel adicionar as linhas abaixo no arquivo ```.zshrc``` e, após salvá-lo, executar o comando ```source ~/.zshrc```.
    ``` sh
    # Path to proxy
    export http_proxy=http://user:password@proxyfw.qualitysistemas.local:3128
    export https_proxy=http://user:password@proxyfw.qualitysistemas.local:3128
    ```

<br />

## Instalação e configuração do oh-my-zsh:

- Instalar o git: ```sudo apt install git```<br />

- Instalar o zsh: ```sudo apt install zsh```<br />

- Configurar o WSL para usar o zsh por padrão: ```nano ~/.bashrc```<br />
  - Na primeira linha do arquivo, adicionar o conteúdo abaixo:<br />
    ``` sh
    # if running in terminal...
    if test -t 1; then
    # ...start zsh
    exec zsh
    fi
    ```

- Instalar o oh-my-zsh: 
    ``` sh
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    ```

- Instalar o tema Spaceship: 
    ``` sh
    git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
    ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
    ```

- Configuração do oh-my-zsh: ```nano ~/.zshrc```<br />
    - Altere o tema: ```ZSH_THEME="spaceship"```
    - Configurando Spaceship:
        - No fim do arquivo, adicione o seguinte conteúdo:<br />
            ``` sh
            SPACESHIP_PROMPT_ORDER=(
              user          # Username section
              dir           # Current directory section
              host          # Hostname section
              git           # Git section (git_branch + git_status)
              hg            # Mercurial section (hg_branch  + hg_status)
              exec_time     # Execution time
              line_sep      # Line break
              vi_mode       # Vi-mode indicator
              jobs          # Background jobs indicator
              exit_code     # Exit code section
              char          # Prompt character
            )
            SPACESHIP_USER_SHOW=always
            SPACESHIP_PROMPT_ADD_NEWLINE=false
            SPACESHIP_CHAR_SYMBOL=">"
            SPACESHIP_CHAR_SUFFIX=" "
            ```
    - Plugins do ZSH:
        - Instalação: 
            ``` sh
            sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"
            ```
        - Abra a arquivo ```~/.zshrc``` e adicionane abaixo da linha ```### End of ZInit's installer chunk:```
            ``` sh
            zinit light zdharma/fast-syntax-highlighting
            zinit light zsh-users/zsh-autosuggestions
            zinit light zsh-users/zsh-completions
            ```

## Configurar o bash no CMDER:

- Abra o CMDER e acesse as configurações: ```Settings > Startup > Task```

    - Dentro de Task, Clique no sinal de ```+``` que tem debaixo do botão ```Reload```. Ele vai criar uma nova configuração, com o nome de ```GroupN```, geralmente ```Group10```.

    - Configure do seguinte jeito: No nome, coloque ```Ubuntu```. Marque as opções ```Default task for new console```, ```Taskbar jump lists``` e ```Default shell```. Na caixa de ```Task Parameters```, entre com o valor ```/icon %USERPROFILE%\AppData\Local\lxss\bash.ico``` para ícone, e na caixa maior debaixo, coloque o valor ```*cmd /c C:\Windows\System32\bash.exe ~ -new_console:p:%USERPROFILE%```.

    - Na caixa com as opções, selecione a ```{Ubuntu}```, e mova ela pra primeira opção, utilizando o botão ```Up```, próximo aos botões ```+``` e ```-```. Coloque-o na primeira posição da fila. Clique em ```Save settings``` em seguida. As settings vão fechar.

    - Opcional: 
        - Em ```Settings > General``` escolha a opção ```{Ubuntu}``` para inicializar ao abrir o CMDER.
        - Instale o tema Dracula utilizando as instruções do site: https://draculatheme.com/cmder/

<br />

### Configurar o bash no VS Code

- Aperte F1 e digite settings e clique em Open Settings (JSON), então adicione ou substitua a linha abaixo:<br />
```"terminal.integrated.shell.windows": "C:\\WINDOWS\\Sysnative\\bash.exe",```

### Configurar o bash no PhpStorm
- Acessar o caminho: ```Settings > Tools > Terminal``` e informar o valor ```wsl.exe``` no campo ```Shell path```

<br />

> Obs: no Windows, ao acessar o caminho ```\\wsl$``` será listado os subsistemas linux instalados, então é possível salvar um atalho para acesso aos diretório mais rapidamente.