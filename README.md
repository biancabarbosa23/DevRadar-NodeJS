# Backend - DevRadar

Aplicação feita para cadastrar desenvolvedores com o próprio usuário do github com suas respectivas tecnologias e localização atual.
Pode-se filtrar desenvolvedores próximos a um raio de 10KM e com a tecnologia pesquisada.

## Importante

- Necessário a instalação de todas as dependências

### Requisitos

- NodeJs

### Iniciando

```
$ git clone https://github.com/biancabarbosa23/DevRadar-Backend.git
```

```
$ yarn install
```

```
$ yarn dev
```

### Rotas

- http://localhost:3333/devs (Listagem de todos os Desenvolvedores)[GET]

- http://localhost:3333/devs/:id (Mostrar desenvolvedor especificado pelo Id)[GET]

- http://localhost:3333/devs (Cadastrar um desenvolvedor)[POST]

- http://localhost:3333/devs/:id (Atualizar desenvolvedor especificado pelo Id)[PUT]

- http://localhost:3333/devs/:id (Excluir cadastro do desenvolvedor especificado por ID)[DELETE]

- http://localhost:3333/search (Filtrar desenvolvedores por localização e tecnologias)[GET]

## Licença

- MIT

## Agradecimentos

- Rocketseat
