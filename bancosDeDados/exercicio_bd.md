## Exercício de banco de dados

A livraria SóLivros, está expandindo seu negócio e precisa de um sistema de gerenciamento de estoque. 
O sistema deve permitir o gerenciamento (cadastrar, atualizar, deletar, buscar) de livros, autores, generos e editoras.
- Os livros devem ter os seguintes atributos: titulo, ano de lançamento, preço, estoque e isbn.
- Cada livro pode ter um ou mais autores e cada autor pode ter vários livros.
- Cada livro deve ter apenas uma editora.
- Cada livro pode ter somente um gênero.
- Cada livro deve ter um código de barras(isbn) unico.
- Cada livro deve ter uma data de publicação.
- Os autores devem ter um nome, nacionalidade.
- As editoras devem ter um nome.
- Os gêneros devem ter um nome.

Obs. Para normalizar e evitar que os nomes dos autores, generos e editoras sejam repetidos, crie tabelas para cada um deles.