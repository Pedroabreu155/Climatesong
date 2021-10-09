# Climatesong

## Visão Geral:

Climatesong é uma aplicação onde você pode encontrar músicas para ouvir relacionadas a temperatura de algum lugar que você pesquisar!

<p align="center" >
    <img alt="App printscreen" width="950" src="https://user-images.githubusercontent.com/66370674/136645105-b21f5e93-c4b4-4b84-8f0d-163f82ebdb1d.PNG"/>
</p>

<p align="center" >
    <img alt="App printscreen" width="950" src="https://user-images.githubusercontent.com/66370674/136645142-06dd395a-9c68-483c-bfaf-947a1a2211cc.PNG"/>
</p>

## Links úteis 🔗

Aplicação em produção: https://v2-reconhecimento-alest.web.app/ </br>
Projeto no firebase: https://console.firebase.google.com/project/v2-reconhecimento-alest/overview</br>
Board do monday: https://alest-consultoria.monday.com/boards/1473632145

## Instalação 📦

Você precisa ter o git em sua máquina para poder clonar esse repositório.

Faça o clone, depois dentro do diretório raiz do projeto execute o comando no terminal:
`yarn` ou `npm install`

## Execução em ambiente de desenvolvimento ⚙️

Você precisa ter o node em sua máquina na versão 14 (14.0.0 >) para poder executar esse projeto localmente.

Para rodar o projeto execute o comando no terminal:
`yarn start` ou `npm run start`

Após isso acesse no seu navegador o endereço local:
_http://localhost:3000_

## Configuração das variáveis ambiente 🔐

Crie dentro do diretório raiz do projeto um arquivo chamado .env.local, após isso configure as seguintes variáveis:

```
# firebase
REACT_APP_API_KEY=valor_da_variavel
REACT_APP_AUTH_DOMAIN=valor_da_variavel
REACT_APP_PROJECT_ID=valor_da_variavel
REACT_APP_STORAGE_BUCKET=valor_da_variavel
REACT_APP_MSG_ID=valor_da_variavel
REACT_APP_APP_ID=valor_da_variavel
REACT_APP_MEA_ID=valor_da_variavel

# CSV cloud function
REACT_APP_CVS_API_URL=link_da_API_de_csv
```

🔥 Substitua o valor das variáveis por valores reais que você pegará dentro do projeto no console do firebase!

🔥 O link da API de CSVs você consegue por meio das cloud funcions no console do firebase, a cloud function correta tem o nome de API

## Deploy 🚀

Para fazer o deploy do projeto é necessário que você tenha instalado em sua máquina a CLI do firebase, para instalar execute o comando no terminal:
`npm install firebase-tools -g` ou consulte a documentação do firebase: https://firebase.google.com/docs/cli
_É recomendado que seja utilizado o npm para realizar a instalação global!_

Após a instalação da CLI você precisa fazer login com seu email @alest, para isso execute o comando:
`firebase login`

Depois dessas configurações, dentro do diretório raiz do projeto execute o comando:
`yarn deploy` ou `npm run deploy`

⚠️ _Em uma das etapas do deploy aparecerá a seguinte pergunta:_ ⚠️

? Would you like to delete these indexes? Selecting no will continue the rest of the deployment. (y/N)

⚠️ _Rensponda-a com não (n/N) para que os índices do firestore não sejam apagados, importante manter os índices!_ ⚠️

Depois desses passos é só aguardar, o firebase lhe dará uma url de acesso ao projeto on-line!

### Bom código! 🔥
