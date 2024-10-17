let respostasCorretas = [];
        let respostasSelecionadas = [];

        function embaralharConteudo() {
            const perguntas = [
                {
                    texto: "O que é ITIL 4?",
                    respostas: [
                        "Um Framework para desenvolvimento de software.",
                        "Uma abordagem para gerenciamento de serviços de TI que se concentra na co-criação de um valor.",
                        "Um padrão de segurança da informação.",
                        "Um processo de melhoria contínua."
                    ],
                    correta: 1 
                },
                {
                    texto: "Qual dos seguintes componentes NÃO faz parte do itil v4?",
                    respostas: [
                        "Gerenciamento de incidentes",
                        "Gerenciamento de produto",
                        "Gerenciamento de problemas",
                        "Gerenciamento de mudanças"
                    ],
                    correta: 1
                },
                {
                    texto: "O que é o modelo de quatro dimensões do itil?",
                    respostas: [
                        "Um modelo de avaliação de desempenho",
                        "Um framework de desenvovimento ágil",
                        "Um conjunto de quatro áreas que devem ser consideradas na gestão de serviços",
                        "Um método de gerenciamento do projetos"
                    ],
                    correta: 2
                },
                {
                    texto: "Qual das seguintes práticas é parte do ITIL v4?",
                    respostas: [
                        "Planejamento estratégico",
                        "Gestão de mudança",
                        "Gestão de recursos humanos",
                        "Gestão financeira"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual dos seguintes é um dos princípios fundamentais do itil v4?",
                    respostas: [
                        "Maximizar custo",
                        "Foco no valor",
                        "Restringir mudanças",
                        "Centralizar a tomada de decições"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual pratica é responsável por implementar componentes em ambientes de produção?",
                    respostas: [
                        "Habilitação de mudança",
                        "Gerenciamento de liberação",
                        "Gerenciamento de ativos de TI",
                        "Gerenciamento de implantação"
                    ],
                    correta: 3
                },
                {
                    texto: "Qual pratica abrange a classificação e a propriedade de consultas e requisições dos usuários?",
                    respostas: [
                        "Central de serviços",
                        "Gerencimento de incidente",
                        "Habilitação de mudança",
                        "Gerenciamento de nível de serviço"
                    ],
                    correta: 0
                },
                {
                    texto: "Qual prática identifica métricas que refletem a experiência do cliente em um serviço?",
                    respostas: [
                        "Melhoria contínua",
                        "Central de serviços",
                        "Gerenciamento de nível de serviço",
                        "Gerenciamento de problema"
                    ],
                    correta: 2
                },
                {
                    texto: "Qual é principal uso de um calendário de mudanças?",
                    respostas: [
                        "Suportar o 'gerenciamento de incidente' e o planejamento da melhoria",
                        "Gerenciar mudanças emergenciais",
                        "Planejar mudanças e ajudar a evitar conflitos",
                        "Gerenciar mudanças padrão"
                    ],
                    correta: 2
                },
                {
                    texto: "Qual dimensão do gerenciamento de serviço se concentra nas atividades e em como elas são coordenadas?",
                    respostas: [
                        "Organização e pessoas",
                        "Informação e tecnologia",
                        "Parceiros e fornecedores",
                        "Fluxos de valor e processos"
                    ],
                    correta: 3
                },
                {
                    texto: "O que significa \"Começar onde você está\" no contexto do ITIL v4?",
                    respostas: [
                        "Implementar novas ferramentas sem considerar o que já existe",
                        "Avaliar a situação atual antes de fazer mudanças",
                        "Iniciar o projeto em um local específico",
                        "Ignorar processo existentes"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual é o principal objetivo da prática de gerenciamento de incidentes?",
                    respostas: [
                        "Restaurar a operação normal do serviço o mais rápido possível",
                        "Identificar a causa raiz de um problema",
                        "Aumentar a eficiência do pessoal",
                        "Documento todo os serviços oferecidos"
                    ],
                    correta: 0
                },
                {
                    texto: "O que é um \"fluxo de valor\" no ITIL v4?",
                    respostas: [
                        "Uma sequência de etapas que cria um produto final",
                        "Um conjunto de ferramentas utilizadas na gestão de serviços",
                        "Um relatório financeiro sobre serviços",
                        "Uma análise de mercado para novos serviços"
                    ],
                    correta: 0
                },
                {
                    texto: "Qual das seguintes opções melhor descreve a prática de gerenciamento de mudanças?",
                    respostas: [
                        "Proteger a infraestrutura de TI contra falhas",
                        "Controlar alterações em serviços de TI de forma eficiente e minimizando riscos",
                        "Criar novos serviços para atender às demandas do cliente",
                        "Avaliar a satisfação do cliente com os serviços existentes"
                    ],
                    correta: 1
                },
                {
                    texto: "O que é \"pensar e trabalhar de forma holística\" no ITIL v4 ?",
                    respostas: [
                        "Focar apenas nas equipes técnicas",
                        "Considerar todos os aspectos de um serviço e suas interações",
                        "Utilizar apenas dados quantitativos para avaliação",
                        "Separar o gerencimento de serviços de outras áreas da organização"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual é o objetivo da prática de gerenciamento de problemas?",
                    respostas: [
                        "Prover suporte técnico ao usuário final",
                        "Identificar e eliminar causas de incidentes para evitar recorrências",
                        "Controlar as mudanças nos serviços de TI",
                        "Monitorar a performance de serviços em tempo real"
                    ],
                    correta: 1
                },
                {
                    texto: "Como a categorização de incidentes auxilia a prática do \"gerenciamento de incidente\"?",
                    respostas: [
                        "Ela ajuda a direcionar o incidente para a área de suporte correta",
                        "Ela determina a prioridade atribuída ao incidente",
                        "Ela garante que os incidentes sejam resolvidos nas escalas de tempo acordadas com o cliente",
                        "Ela determina como o provedor dde serviço é percebido"
                    ],
                    correta: 0
                },
                {
                    texto: "Identifique as palavras que estão faltando na frase a seguir:\n Um serviço é um meio que permite a cocriação de valor ao facilitar [?] que os clientes desejam alcançar",
                    respostas: [
                        "a garantia",
                        "os resultados",
                        "a utilidade",
                        "as saídas"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual é uma recomendação da prática de \"melhoria contínua\"?",
                    respostas: [
                        "Mesmo que pequena, deve haver pelo uma equipe dedicada a liderar os esforços de \"melhoria contínua\"",
                        "Todas as melhorias devem ser gerenciadas como projetos de multiplas fases",
                        "A \"melhoria contínua\" deve ser isolada de outras práticas",
                        "Os fornecedores externos devem ser excluídos das iniciativas de melhoria"
                    ],
                    correta: 0
                },
                {
                    texto: "Qual é um pontencial benefício de usar uma ferramenta de gerenciamento de serviço de TI para suporta a prática de \"gerencimento de incidente\"?",
                    respostas: [
                        "Pode garantir que a causa de incidentes seja identificada dentro dos prazos acordados",
                        "Pode fornecer a correspondência automatizada entre incidentes e problemas ou erros conhecidos",
                        "Pode garantir que os contratos do fornecedor estejam alinhados com as necessidades do provedor de serviço",
                        "Pode fornecer a resolução e o encerramento automatizados de incidentes complexos"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual o papel pode enviar requisição de serviço?",
                    respostas: [
                        "O usuário ou o representante autorizado dele",
                        "O cliente ou o representante autorizado dele",
                        "O patrocinador ou o representante autorizado dele",
                        "O fornecedor ou o representante autorizado dele"
                    ],
                    correta: 0
                },
                {
                    texto: "Qual princípio orientador recomenda que as quatro dimensões do gerencimento de serviço sejam consideradas?",
                    respostas: [
                        "Pensar e trabalhar holisticamente",
                        "Progredir iterativamente com feedback",
                        "Foco no valor",
                        "Manter de forma simples e prática"
                    ],
                    correta: 0
                },
                {
                    texto: "O que seria suportado pela prática de \"gerencimento de requição de serviço\"?",
                    respostas: [
                        "Uma requisição para autorizar uma mudança que poderia afetar um serviço",
                        "Uma requisição de um usuário para algo que é parte normal da entrega de serviço",
                        "Uma requisição para restaurar o serviço após interrupção desse serviço",
                        "Uma requisição para investigar a causa de vários incidentes realacionados"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual prática é de responsabilidade de todos na organização?",
                    respostas: [
                        "Gerenciamento de nível de serviço",
                        "Habilitação de mudança",
                        "Gerenciamento de problema",
                        "Melhoria contínua"
                    ],
                    correta: 3
                },
                {
                    texto: "Identifique a palavra que esta faltando na frase a seguir:\n O propósito da prática de \"gerenciamento de segurança da informação\" é [?] as informações da organização",
                    respostas: [
                        "armazenar",
                        "fornecer",
                        "auditar",
                        "proteger"
                    ],
                    correta: 3
                },
                {
                    texto: "Qual princípio orientador recomenda a coleta de dados antes de decidir o que pode ser reutilizado?",
                    respostas: [
                        "foco no valor",
                        "Começar de onde voçê está",
                        "Manter de forma simples e prática",
                        "Progredir iterativamente com feedback"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual das opções a seguir descreve a natureza dos princípios orientadores?",
                    respostas: [
                        "Os princípios orientadores podem orientar uma organização em todas as circuntâncias",
                        "Cada princípio orientador exige ações e  decisões específicas.",
                        "Uma organização deve selecionar e adotar apenas um dos sete princípios orientadores.",
                        "Os princípios orientadores descrevem os processos que todas as organizações devem adotar."
                    ],
                    correta: 0
                },
                {
                    texto: "Qual afirmativa sobre uma autoridade de mundança está CORRETA?",
                    respostas: [
                        "Uma única autoridade de mudança deve ser atribuída para autorizar todos os tipos de mudança e modelos de mudança.",
                        "Uma autoridade de mudança deve ser atribuída para cada tipo de mudança e modelo de mudança.",
                        "As mudanças normais são pré-autorizadas e não precisam de uma autoridade de mudança.",
                        "As mudanças emergenciais podem ser implemendas sem a autorização de uma autoridade de mudança."
                    ],
                    correta: 1
                },
                {
                    texto: "Qual prática tem o propósito de disponibilizar para uso serviços e características novos e modificados?",
                    respostas: [
                        "Habilitação de mudança",
                        "Gerenciamento de requisição de serviço",
                        "Gerenciamento de liberação",
                        "Gerenciamento de implatação"
                    ],
                    correta: 2
                },
                {
                    texto: "Qual atividade da cadeia de valor garante que as pessoas entendam a visão da organização?",
                    respostas: [
                        "Melhorar",
                        "Planejar",
                        "Entrega e suporte",
                        "Obtenção/construção"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual afirmativa sobre as atividades da cadeia de valor está CORRETA?",
                    respostas: [
                        "Toda prática pertence a uma atividade específica da cadeia de valor.",
                        "Uma combinação específica de atividade e prática da cadeia de valor forma um relacionamento de serviço.",
                        "As atividades da cadeia de valor de serviço formam um fluxo único de trabalho que permitem a criação de valor.",
                        "Cada atividade de cadeia de valor contribui para a cadeia de valor transformar entradas específicas em saídas."
                    ],
                    correta: 3
                },
                {
                    texto: "Qual é o propósito da prática de \"gerencimento de fornecedor\"?",
                    respostas: [
                        "Garantir que os fornecedores de uma organização e seus níveis de desempenho sejam gerenciados adequadamente para oferecer suporte ao fornecimento contínuo de produtos e serviços de qualidade.",
                        "Alinhar as práticas e os serviços da organização com as necessidades de negócio em constante mudança, através da contínua identificação e melhoria dos serviços",
                        "Garantir que os forncedores da organização e seus desempenhos sejam gerenciados adequadamente em níveis estratégicos e táticos, por meio de atividade coordenadas de marketing, vendas e entrega",
                        "Garantir que informações precisas e confiáveis sobre a configuração dos serviços dos fornecedores estejam disponíveis quando e onde forem necessárias"
                    ],
                    correta: 0
                },
                {
                    texto: "Quais são dois tipos de custos que um consumidor de serviço deve avaliar?",
                    respostas: [
                        "O preço do serviço e o custo de criar o serviço",
                        "Os custos removidos pelo serviço e os custos impostos pelo serviço",
                        "O custo de fornecer o serviço e os custo de melhorá-lo",
                        "O curto do software e o custo do hardware"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual é o popósito da prática de \"central de serviço\"?",
                    respostas: [
                        "Reduzir a probalidade e o impacto de incidentes ao identificar suas causas reais e pontenciais",
                        "Maximazar o número de mudanças bem-sucedidas de TI ao garantir que os riscos sejam avaliados adequadamente",
                        "Capturar a demanda de resolução de incidentes e requisições de serviço",
                        "Definir metas claras e baseadas nos negócios para o desempenho dos serviços"
                    ],
                    correta: 2
                },
                {
                    texto: "Como uma organização deve adotar métodos de melhoria contínua?",
                    respostas: [
                        "Usando um novo método para cada melhoria que a organização faz",
                        "Selecionando alguns métodos principais para os tipos de melhoria que a organização faz",
                        "Desenvolvendo a habilidade de usar a maior quantidade possível de métodos de melhoria",
                        "Selecionado um método único para todas as melhorias que a organização faz"
                    ],
                    correta: 1
                },
                {
                    texto: "Qual conceito da ITIL descreve a governança?",
                    respostas: [
                        "Os sete principios orientadores",
                        "As quatro dimensões do gerenciamento de serviço",
                        "A cadeia de valor de serviço",
                        "O sistema de valor de serviço"
                    ],
                    correta: 3
                },
                {
                    texto: "Qual é a recomendação da prática de \"central de serviço\"?",
                    respostas: [
                        "As centrais de serviço devem evitar o uso de automação.",
                        "As centrais de serviço devem ser altamente técnicas.",
                        "As centrais de serviço devem entender a organização de forma abrangente.",
                        "As centrais de serviço devem ser compostas por uma equipe física em um único local fixo."
                    ],
                    correta: 2
                },
                {
                    texto: "Qual princípio orientador recomenda organizar o trablho em partes menores e gerenciáveis que podem ser realizadas e concluídas de maneira oportuna?",
                    respostas: [
                        "Foco no valor",
                        "Começar de onde você está",
                        "Progredir iterativamente com feedback",
                        "Colaborar e promover visibilidade"
                    ],
                    correta: 2
                },
                {
                    texto: "O que é uma mudança padrão?",
                    respostas: [
                        "Uma mudança bem entendida, plenamente documentada e pré-autorizada",
                        "Uma mudança que precisa ser avaliada, autorizada e programada por uma autoridade de mudança",
                        "Uma mudança que não precisa de uma avaliação de risco porque é necessário para resolver um incidente",
                        "Uma mudança avaliada, autorizada e programada como parte da \"melhoria contínua\""
                    ],
                    correta: 0
                },
                {
                    texto: "O que acontece se uma solução de contorno se torna o meio permanente de lidar com um problema que não pode ser resolvido de forma rentável?",
                    respostas: [
                        "Uma requisição de mudança é enviada para a habilitação de mudança.",
                        "O gerenciamento de problema restaura o serviço o mais rápido possível.",
                        "O problema permanece com o status de erro conhecido.",
                        "O registro de problema é excluído."
                    ],
                    correta: 2
                }

            ];

            // Embaralha as perguntas
            perguntas.sort(() => Math.random() - 0.5);

            perguntas.forEach(function(pergunta, index) {
                const respostas = pergunta.respostas.slice(); // Cria uma cópia para embaralhar
                const correta = pergunta.correta;
                respostas.sort(() => Math.random() - 0.5); // Embaralha as respostas aleatoriamente

                // Armazena a posição da resposta correta após o embaralhamento
                const respostaCorretaEmbaralhada = respostas.indexOf(pergunta.respostas[correta]);
                respostasCorretas.push(respostaCorretaEmbaralhada);

                // Seleciona o campo para inserir a pergunta e as respostas
                const divPergunta = document.createElement('fieldset');
                const legenda = document.createElement('legend');
                legenda.innerHTML = `<strong>Pergunta ${index + 1}:</strong> ${pergunta.texto}`;
                divPergunta.appendChild(legenda);

                // Atribui as respostas embaralhadas aos elementos
                respostas.forEach((resposta, i) => {
                    const label = document.createElement('label');
                    label.classList.add('resposta');
                    label.innerHTML = `<input type="radio" name="pergunta${index + 1}" value="${i}"> ${resposta}`;
                    divPergunta.appendChild(label);
                    divPergunta.appendChild(document.createElement('br')); // Quebra de linha
                });

                // Adiciona o conjunto de perguntas à página
                document.querySelector('.content').appendChild(divPergunta);
            });
        }

        function verificarRespostas() {
            let acertos = 0;
            let erros = 0;

            if (window.confirm("Confirma envio das respostas?") === true) {
                // Verifica as respostas selecionadas
                respostasCorretas.forEach((respostaCorreta, index) => {
                    const respostaSelecionada = document.querySelector(`input[name="pergunta${index + 1}"]:checked`);

                    if (respostaSelecionada) {
                        const valorSelecionado = parseInt(respostaSelecionada.value);
                        respostasSelecionadas.push(valorSelecionado);

                        if (valorSelecionado === respostaCorreta) {
                            acertos++;
                        } else {
                            erros++;
                        }
                    } else {
                        erros++; // Se não houver resposta, conta como erro
                    }
                });

                // Envia as respostas via fetch
                enviarResultados(acertos, erros);
            } 
        }

        function mostrarDiv() {
            var div = document.getElementById('Resp');
            div.style.display = 'block';
        }

        function enviarResultados(acertos, erros) {
            // Dados para enviar via fetch
            const dados = {
                acertos: acertos,
                erros: erros
            };

            // Envia para o servidor ( endpoint fictício, pode ser alterado conforme necessário)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta do servidor:', data);
                alert("Resultado enviado com sucesso!");
                
                //mostra div grafico oculta
                mostrarDiv();
                // Após enviar, exibe o gráfico com os resultados
                exibirGrafico(acertos, erros);

            })
            .catch(error => {
                console.error('Erro ao enviar os dados:', error);
                alert("Erro ao enviar os dados.");
            });
        }

        function exibirGrafico(acertos, erros) {
            const ctx = document.getElementById('grafico').getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Acertos', 'Erros'],
                    datasets: [{
                        label: '',
                        data: [acertos, erros],
                        backgroundColor: ['#4caf50', '#f44336'],
                        borderColor: ['#388e3c', '#d32f2f'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }