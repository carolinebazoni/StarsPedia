var listaFilmes = []
var listaNomes = []
var links = []


listaFilmes.push("https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg")


listaNomes.push("Star Wars Episódio I: A Ameaça Fantasma (1999)")
listaNomes.push("Star Wars, Episódio II: Ataque dos Clones (2002)")
listaNomes.push("Star Wars, Episódio III: A Vingança dos Sith (2005)")
listaNomes.push("Star Wars Episódio IV: Uma Nova Esperança (1977)")
listaNomes.push("Star Wars, Episódio V: O Império Contra-Ataca (1980)")
listaNomes.push("Star Wars, Episódio VI: O Retorno do Jedi (1983)")
listaNomes.push("Star Wars Episódio VII: O Despertar da Força (2015)")
listaNomes.push("Star Wars Episódio VIII: Os Últimos Jedi (2017)")
listaNomes.push("Star Wars Episódio IX: A Ascensão Skywalker (2019)")


links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_I:_A_Ameaça_Fantasma")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_II:_Ataque_dos_Clones")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_III:_A_Vingança_dos_Sith")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_IV:_Uma_Nova_Esperança")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_V:_O_Império_Contra-Ataca")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_VI:_O_Retorno_de_Jedi")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_VII:_O_Despertar_da_Força")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_VIII:_Os_Últimos_Jedi")
links.push("https://starwars.fandom.com/pt/wiki/Star_Wars_Episódio_IX:_A_Ascensão_Skywalker")


for (var i=0; i<listaFilmes.length; i++) {
  document.write(`
    <div class='box'>
      <img src='${listaFilmes[i]}'>
      <span>${"<a href=" + links[i] + ">" + "<h2>" + listaNomes[i] + "</h2>" + "</a>"}</span>
    </div>      
  `)
}

