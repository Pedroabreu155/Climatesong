# Climatesong

## Visão Geral:

Climatesong é uma aplicação onde você pode encontrar músicas para ouvir relacionadas a temperatura de algum lugar que você pesquisar!

<p align="center" >
    <img alt="App printscreen" width="950" src="https://user-images.githubusercontent.com/66370674/136681447-e7aa1ccc-9ba5-4cb7-beb5-9451de5a5c6c.PNG"/>
</p>

<p align="center" >
    <img alt="App printscreen" width="950" src="https://user-images.githubusercontent.com/66370674/136681451-f764f0c8-31f5-4647-906c-f1aa7f93dc21.PNG"/>
</p>

## Links úteis 🔗

Aplicação em produção: https://climatesong.vercel.app/ </br>

## Instalação 📦

Você precisa ter o git em sua máquina para poder clonar esse repositório.

Faça o clone, depois dentro do diretório raiz do projeto execute o comando no terminal:
`yarn` ou `npm install`

## Execução em ambiente de desenvolvimento ⚙️

Você precisa ter o node em sua máquina na versão 14 (14.0.0 >) para poder executar esse projeto localmente.

Para rodar o projeto execute o comando no terminal:
`yarn dev` ou `npm run dev`

Após isso acesse no seu navegador o endereço local:
_http://localhost:3000_

## Configuração das variáveis ambiente 🔐

Crie dentro do diretório raiz do projeto um arquivo chamado .env.local, após isso configure as seguintes variáveis:

```
# Wheater API
NEXT_PUBLIC_OPEN_WHEATER_API_KEY=valor

# Songs API
NEXT_PUBLIC_SHAZAM_API_KEY=valor
```

🔥 Substitua o valor das variáveis por valores reais que você pegará na OpenWheaterAPI e na API do shazam para músicas.

## Deploy 🚀

Para fazer o deploy do projeto é necessário que você tenha instalado em sua máquina a CLI da vercel, para instalar execute o comando no terminal:
`npm install vercel -g` ou consulte a documentação da vercel: https://vercel.com/cli
_É recomendado que seja utilizado o npm para realizar a instalação global!_

Após a instalação da CLI você precisa fazer login, para isso execute o comando:
`vercel login`

Depois dessas configurações, dentro do diretório raiz do projeto execute o comando:
`vercel`

### Bom código! 🔥
