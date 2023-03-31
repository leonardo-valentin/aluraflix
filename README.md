# Aluraflix
Um site em que você consegue colocar um nome e um endereço de imagem que aparecem na tela

# Lista
- Uma lista que recebe o nome e a url
  - Pega por meio de (document.getElementById) de elementos do html
  
- Um comando de for ( listaManhwas.forEach(function (nome, i) )
  - Que posiciona as imagens já presentes na lista em uma div com o nome do manhwa logo abaixo

# function adicionarFilme()
- Pega o nome e a url escritos pelo usuario ao clicar no botão, e os adiciona na tela caso seja uma url valida
- Caso não seja um item repetido, e a url seja valida ele utiliza a função listarNaTela(), caso contrário ele colocará um aviso
- Ao final da função, os campos que foram escritos o nome e a url são limpos

# function listarNaTela()
- Pega o nome e a url e adiciona na lista
- Adiciona a imagem na tela com o nome do manhwa abaixo, como as imagens iniciais

# function removerFilme()
- Verifica se o nome digitado existe na lista
- Caso exista, ele executa a função de removerDaTela()
- Caso contrário, ele colocará um aviso
- Ao final da função, os campos que foram escritos o nome e a url são limpos

# function removerDaTela()
- O nome digitado será removido da lista
- Logo após ser removido da lista, será removido da tela
