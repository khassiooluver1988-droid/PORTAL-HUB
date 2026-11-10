# PORTAL-HUB

Repositório de desenvolvimento do **Hub Notícias**, portal jornalístico voltado ao Piauí, Brasil e mundo.

> **Status:** código do portal incluído em `index.html`. A atualização do GitHub não configura hospedagem nem publicação automática.

## Versão incluída

- 41 notícias com fotografias, resumos editoriais, datas e acesso às publicações originais.
- Quatro enquetes, com indicação das encerradas e votação na publicação original.
- Identificação editorial como Hub Notícias.
- Menu lateral expansível, busca, destaque e leitura dos resumos em janela interna.
- Política, Policial, Educação, Internacional, Esportes e Emprego: seis matérias por editoria; Segurança: quatro; Economia: uma.
- As notícias anteriores foram preservadas. O acervo internacional mantém suas datas originais.

## Como visualizar

Abra `index.html` em um navegador. O arquivo inclui os estilos, o código da interface e os dados editoriais. As fotografias de notícias são carregadas dos endereços originais e dependem de conexão à internet. Não há etapa de compilação.

## Editorias e navegação

O menu lateral preserva as categorias preexistentes. Nem todas as editorias têm matérias nesta seleção inicial.

### Grupo principal: Notícias e Opinião

Política, Economia, Opinião, Brasil, Mundo, Cidadania, Ideias, Agronegócio, Saber e Últimas Notícias.

### Editorias preservadas do HUB

Cidades, Polícia, Policial, Segurança, Esportes, Curiosidades, Brasília em Foco, Saúde, Tecnologia, Meio Ambiente, Cultura, Educação, Internacional, Emprego, Geral, Motivação e Espaço do Empreendedor, além das editorias do grupo principal.

### Serviços

Municípios do Piauí, enquetes, oportunidades de emprego e qualificação, loterias e HUB Solidário. Serviços ainda sem integração exibem seu estado ou acesso à fonte responsável.

### Institucional

O plano institucional prevê Ler e Pensar, Fale Conosco, Termos de Uso e Política de Privacidade. A versão atual mantém os elementos institucionais do HTML recebido; o plano completo permanece documentado em `docs/FLUXO_EDITORIAL.md`.

## Fluxo editorial

Nesta versão, as matérias estão incorporadas ao HTML; não existe atualização automática do acervo. Cada cartão abre um resumo editorial, com fotografia, crédito disponível e link à publicação original. A busca e as listagens consultam os 41 registros incluídos.

O fluxo futuro de cadastro → associação à categoria → atualização da home depende de integração com um sistema editorial. Nenhuma conexão com banco de dados ou painel de publicação foi configurada por esta atualização.

## Conteúdo e créditos

Os textos incorporados são resumos editoriais; não reproduzem integralmente as reportagens originais. Os links de origem e os créditos disponíveis das imagens foram preservados. A identificação do Hub na interface designa a seleção e os resumos editoriais, não a autoria da apuração de terceiros.

## Controle de alterações

1. Preservar o histórico e os conteúdos existentes.
2. Revisar o resultado antes de alterações de hospedagem ou publicação.
3. Não excluir matérias nem implantar o portal sem autorização expressa.
4. Registrar alterações e conferir links, categorias e integridade dos arquivos.

## Registro da atualização

**HUB-009 — sincronização do GitHub**  
**Data:** 08/11/2026, 22:56 (Brasília).  
**Motivo:** enviar ao repositório a versão editorial solicitada pelo responsável.  
**Base:** HUB-008, de 08/11/2026, 22:48 (Brasília).

- [x] Incluir o portal como `index.html`.
- [x] Preservar as 41 notícias e as quatro enquetes.
- [x] Atualizar esta documentação.
- [x] Conferir a sintaxe JavaScript e a integridade do HTML enviado.
- [ ] Configurar hospedagem e publicar o portal.

Referência histórica do planejamento: `HUB-MENU-20261108-01` (provisória, conforme registro original).


## HUB-010 — publicação editorial de Política
**Data:** 10/11/2026, 14h02 (horário de Brasília).
**Código:** PUB-HUB-010-10112026-MORAES.
**Status:** implantação do GitHub Pages concluída; acesso público ainda sujeito a propagação/cache.
**Motivo:** publicar matéria autoral e destacá-la na homepage sem alterar as 41 notícias anteriores e as quatro enquetes.

- [x] Matéria de Política sobre articulações parlamentares envolvendo impeachment de Alexandre de Moraes em 2027.
- [x] Revisão dos nomes citados e contextualização da próxima legislatura.
- [x] Fontes originais identificadas (Gazeta do Povo, Senado Federal e Lei nº 1.079/1950).
- [x] Página dedicada, capa ilustrativa original em SVG e bloco de destaque responsivo na home.
- [x] Fluxo de publicação do GitHub Pages atualizado preservando o `index.html` no repositório.
- [x] Execução do GitHub Actions 42860681411 finalizada com sucesso.
- [ ] Conferência visual em navegadores desktop/mobile e teste de compartilhamento com imagem raster.
**Observação:** o Supabase do HUB ainda não está conectado ao portal estático; a nova matéria não foi inserida no acervo dinâmico da categoria Política.


## HUB-011 — atualização da capa cinematográfica
**Data:** 10/11/2026, 14h43 (Brasília).
**Código:** ATU-IMG/HUB-10112026-0143-011.
**Projeto:** Portal HUB NOTÍCIA.
**Objetivo:** substituir a ilustração provisória pela arte cinematográfica que o responsável escolheu.
**Status:** implementado no repositório e implantação do GitHub Pages confirmada pela execução 42867560676 (sucesso). Conferência visual independente em navegador não confirmada.

- [x] Imagem escolhida preservada e otimizada em AVIF (1448×1086), armazenada em `assets/capa-congresso-moraes.avif`.
- [x] Imagem principal atualizada em `artigos/impeachment-moraes-senado-2027.html`.
- [x] Imagem do destaque da homepage atualizada em `destaque-impeachment-moraes.js`.
- [x] Texto, categoria e acervo original preservados.
- [x] Rotina temporária de importação removida após salvar o arquivo definitivo.
- [x] Implantação de GitHub Pages concluída com sucesso para o commit da atualização do destaque.
- [ ] Conferência visual efetiva em celular e computador.
- [ ] Teste de prévia social (a propriedade Open Graph utiliza AVIF; compatibilidade depende do aplicativo).
**Motivo da alteração:** adequar a apresentação da notícia à imagem aprovada pelo responsável.


## HUB-012 — headline e revisão editorial
**Data:** 10/11/2026, 16h01 (Brasília).
**Código:** ATU-RED/HUB-10112026-1601-012.
**Projeto:** HUB NOTÍCIA.
**Motivo:** aplicar a manchete aprovada e consolidar a notícia de Política com informações atribuídas a fontes verificáveis.
**Status:** concluído no repositório e implantado pelo GitHub Pages (GitHub Actions #42880903431, sucesso); verificação visual pública em navegador não disponível nesta sessão.

- [x] Manchete iniciando por “Saiba quem são os 10 senadores…” aplicada no artigo, no título HTML e na prévia Open Graph.
- [x] Subtítulo jornalístico e texto completo revisados e formatados com trechos importantes em destaque.
- [x] Lista dos dez parlamentares e distinção entre mandatos atuais e a legislatura de 2027 verificadas com fontes.
- [x] Matéria contextualiza tramitação, oposição, disputa pela Mesa e a ausência de impeachment aprovado.
- [x] Capa cinematográfica escolhida preservada em `assets/capa-congresso-moraes.avif` (correspondência visual com a imagem apresentada).
- [x] Destaque da página inicial atualizado com a nova manchete, mantendo o link para a notícia.
- [x] Deploy executado com sucesso; acervo anterior do index.html preservado.
- [ ] Conferência visual em desktop/celular e verificação de prévia social em aplicativos externos.
**Nota:** a matéria permanece publicada por página estática; sem inserção na base editorial Supabase.


## HUB-013 — ajuste de enquadramento da imagem no artigo e destaque
**Data:** 10/11/2026, 16h07 (Brasília).
**Código:** ATU-IMG/HUB-10112026-1607-013.
**Projeto:** HUB NOTÍCIA.
**Motivo:** corrigir o corte da imagem cinematográfica na matéria de Política e no destaque da página inicial, sem alterar a arte e sem modificar outros conteúdos.
**Status:** alteração concluída no repositório e implantação GitHub Pages nº 42881936677 concluída com sucesso. Conferência visual independente em dispositivos reais pendente.

- [x] Corrigir a capa da notícia: `height:auto`, `object-fit:contain`, proporção original sem recorte e sem deformação.
- [x] Corrigir o destaque da home: remover restrições de altura, trocar `cover` por `contain` e centralizar a imagem.
- [x] Remover o corte forçado de 175 pixels em dispositivos móveis; a imagem agora adapta sua altura.
- [x] Preservar a imagem cinematográfica aprovada em `assets/capa-congresso-moraes.avif`.
- [x] Preservar a headline, texto, menu e acervo existente.
- [x] Conferir os arquivos modificados e o resultado de sucesso da implantação.
- [ ] Testar visualmente em navegadores desktop e celular após propagação do Pages.


## HUB-016 — redução dos ícones sociais no cabeçalho
**Data:** 10/11/2026, 20h25 (Brasília).
**Código:** ATU-CAB/HUB-10112026-2025-016.
**Projeto:** HUB NOTÍCIA.
**Motivo:** reduzir o tamanho visual dos cinco ícones sociais acima da busca após retorno do responsável.
**Status:** arquivo e workflow atualizados no GitHub; publicação GitHub Pages em conferência (run 42923206453).

- [x] Redimensionar contêineres dos ícones no desktop de 31 para 23 px.
- [x] Redimensionar contêineres dos ícones no mobile de 28 para 22 px e em telas estreitas de 26 para 20 px.
- [x] Reduzir o pictograma interno e o espaçamento entre os cinco ícones.
- [x] Manter os ícones acima da pesquisa e preservar busca, menu e conteúdo das matérias.
- [x] Renovar cache do script do cabeçalho para a versão v=016.
- [ ] Confirmar visualmente a renderização desktop/mobile após deploy.
