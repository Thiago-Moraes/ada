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


Para ajudar segue as 3 formas normais

### 1ª Regra: Cada espaço tem apenas uma informação (Primeira Forma Normal - 1FN - Valores Atômicos)
Cada coluna deve ter apenas um valor. Se o cliente tem dois telefones, você deve ter uma forma de registrar isso separadamente (por exemplo, criando uma tabela só para guardar telefones vinculados àquele cliente) em vez de jogar tudo na mesma linha. Tudo precisa ser "atômico" (não pode ser dividido).

### 2ª Regra: Tudo na tabela deve depender da "chave" principal (Segunda Forma Normal - 2FN - Sem dependência parcial)
Imagine uma tabela de "Itens do Pedido", onde a chave primária seja composta pelo Código do Pedido + Código do Produto. Se nessa mesma tabela você colocar o "Nome do Produto", você está quebrando a regra! O nome do produto depende apenas do Produto, e não do Pedido em si.
O que fazer? Tire o "Nome do Produto" dali e crie uma tabela separada só de "Produtos". Na tabela do pedido, você guarda apenas o código dele.

Se a sua tabela tem uma chave composta (formada por mais de uma coluna), as outras colunas devem depender da chave como um todo, não de apenas uma parte dela.

### 3ª Regra: Nada de "caronas" ou informações indiretas (Terceira Forma Normal - 3FN - Sem dependência transitiva)
Imagine que você tem uma tabela de "Funcionários" e, junto com o código do departamento, você resolve colocar o "Nome do Departamento" nessa tabela. Se o nome do departamento mudar, você terá que atualizar em todas as linhas de funcionários daquele departamento. Isso é ruim!
O que fazer? Crie uma tabela separada para "Departamentos" e guarde apenas o código dele na tabela de "Funcionários".

### Resumo da Ópera:

1. Não coloque várias coisas no mesmo quadradinho (sem listas num campo só).
2. Cada tabela só deve falar sobre um assunto principal. Se a tabela é de Pedido, não fale das características do Produto nela.
3. Não guarde informações que podem ser descobertas através de outras informações (se você já tem o CEP na tabela, não precisa escrever a cidade e estado na mesma tabela).

Aplicando essas 3 regrinhas, o seu banco de dados fica organizado, rápido de consultar e muito mais seguro contra erros de digitação e informações desatualizadas!