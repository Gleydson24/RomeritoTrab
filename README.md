# Romerito Trabalho

O tema sugerido para o seu trabalho é: "OrçaTech: Sistema de Orçamentos para Freelancers".
Aqui está uma explicação detalhada sobre o que é esse sistema e como ele funciona
1. O que é o sistema?
É uma ferramenta web simplificada voltada para profissionais autônomos (como desenvolvedores, designers ou editores) que precisam criar uma lista de custos para um cliente.
Imagine que um programador vai cobrar por um site. Ele usará o seu sistema para listar:
"Criação de Logo" (Design) - 1 unidade - R$ 300,00
"Desenvolvimento Home Page" (Dev) - 1 unidade - R$ 800,00
"Configuração de Servidor" (Infra) - 2 horas - R$ 100,00 (cada)
2. Como ele funciona (Fluxo do usuário)?
Entrada de Dados: O usuário preenche o formulário (que você já criou no HTML) com o nome do serviço, a categoria, a quantidade e o preço.
Processamento: Ao clicar em "Adicionar", o JavaScript valida se os campos estão preenchidos corretamente. Se estiverem, ele calcula o subtotal daquele item (Quantidade × Valor Unitário).
Visualização: O item aparece instantaneamente em uma tabela abaixo do formulário.
Inteligência (Cálculos): No topo ou no rodapé, o sistema mostra o Total Geral da soma de todos os itens e uma métrica extra (como a média de preço dos serviços ou qual o item mais caro).
Persistência: Se o usuário fechar o navegador e abrir de novo, os dados continuam lá (graças ao localStorage exigido no projeto).
3. Por que esse tema é bom?
Fácil de categorizar: Permite separar os gastos por "Design", "Programação", "Hospedagem", etc. (atende ao requisito de categorias).
Cálculos claros: É fácil para o colega que fará o JavaScript criar a lógica de multiplicação (Qtd x Valor) e soma (Total).
Utilidade Real: É um exemplo clássico de MVP (Mínimo Produto Viável), exatamente o que o documento do projeto pede.
4. O que o sistema resolve?
Ele resolve a confusão de calcular orçamentos "de cabeça" ou em blocos de notas. Ele organiza as ideias de custo de um projeto em uma interface limpa, profissional e que faz os cálculos matemáticos automaticamente.
Resumo para a apresentação:
"Nosso sistema é o OrçaTech, uma aplicação para freelancers organizarem seus orçamentos. O usuário cadastra os serviços, define quantidades e valores, e o app gera o total acumulado, permitindo remover itens e salvando tudo automaticamente no navegador para não perder o progresso."


