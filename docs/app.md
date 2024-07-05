# Podcast Menager

### Descrição 
Um app ao estilo Netflix, aonde possa centralizar diferentes episódio podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
    - [Saúde, Bodybuilder, Mentalidade, Humor, Esporte, Corrida]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
 GET: Retornar em uma api rest o nome do podcast, nome do episódio, imagem de capa, link do vídeo e categoria.

 reponse:
 ```js
 [
    {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30&",
        category: ["Saúde","Esporte","Bodybuilder"]
    },
    {
        podcastName: "Flow",
        episode: "RUBBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["Esporte","Corrida"]
    },
 ]
 ```