import { motion } from 'framer-motion';
import {
  Database,
  Code,
  Brain,
  Download,
  MapPin,
  Calendar,
  Award,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';

const About = () => {
  return (
    <section className="py-20 px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-6 md:mb-12 text-primary glow-text">
            &gt; whoami()
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Terminal Window */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-sm font-mono text-muted-foreground ml-4">
                  rafael@portfolio:~$
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed space-y-4">
                <div className="text-primary">&gt; cat about.txt</div>
                <div className="text-muted-foreground">
                  Minha trajetória começou na área de operações, onde desenvolvi
                  organização, responsabilidade e visão de processo. Com o
                  tempo, me aproximei dos dados e descobri na análise uma nova
                  forma de gerar valor.
                </div>

                <div className="text-primary">&gt; current_role.status</div>
                <div className="text-accent">
                  Analista de Dados na Hi Platform
                </div>

                <div className="text-primary">&gt; education.show()</div>
                <div className="text-green-400">
                  Engenharia de Software - UNOPAR (2025)
                </div>

                <div className="text-primary">&gt; skills.list()</div>
                <div className="text-green-400">
                  ['SQL', 'Python', 'Power BI', 'React', 'BigQuery', 'Dash BI',
                  'Looker Studio', 'Excel']
                </div>

                <div className="text-primary">&gt; ai_focus.show()</div>
                <div className="text-cyan-400">
                  Explorando Machine Learning, automação inteligente e análise
                  preditiva para otimizar processos de BI e criar soluções
                  data-driven inovadoras.
                </div>

                <div className="text-primary">&gt; location</div>
                <div className="text-yellow-400">Ubá, MG - Brasil</div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div
                className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Database className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-orbitron font-semibold text-lg text-white">
                      Business Intelligence
                    </h3>
                    <p className="text-muted-foreground">
                      Análise e visualização de dados
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de relatórios de performance focados nos
                  produtos contratados pelos clientes na Hi Platform,
                  transformando dados em entregas claras e estratégicas.
                </p>
              </motion.div>

              <motion.div
                className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Code className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-orbitron font-semibold text-lg text-white">
                      Software Development
                    </h3>
                    <p className="text-muted-foreground">
                      Engenharia de Software
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de aplicações web com React, automações em
                  Python e integração de sistemas para otimização de processos.
                </p>
              </motion.div>

              <motion.div
                className="cyber-border p-6 rounded-lg bg-card/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Brain className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-orbitron font-semibold text-lg text-white">
                      AI & Machine Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Inteligência Artificial
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explorando Machine Learning, automação inteligente e análise
                  preditiva para criar soluções data-driven inovadoras.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Download CV */}
          <div className="text-center mb-16">
            <motion.a
              href="/Curriculo_Rafael_Rocha.pdf"
              download
              className="neon-btn group inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2 inline group-hover:animate-pulse" />
              <span className="font-mono">Download CV</span>
            </motion.a>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-12">
            {/* Lavanderia Block */}
            <motion.div
              className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    Trajetória nas Indústrias
                  </h3>
                  <Badge>2011-2022</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/logoalphabeto.png"
                    alt="Logo Alphabeto"
                    className="h-8 object-contain"
                  />
                  <img
                    src="/logoalcance.png"
                    alt="Logo Alcance Jeans"
                    className="h-8 object-contain"
                  />
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Minha trajetória profissional começou na indústria têxtil, onde
                atuei de 2011 a 2014 na confecção Life/Sinder como auxiliar de
                almoxarifado.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A partir de 2014, assumi a responsabilidade do almoxarifado em
                grandes lavanderias do setor — Alphabeto e Alcance Jeans — onde
                permaneci até 2022. Nesse período, desenvolvi habilidades
                essenciais em organização, controle de estoque, rastreabilidade
                e eficiência operacional.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Elaborava relatórios de consumo de insumos químicos, alguns
                deles monitorados pela Polícia Federal, o que exigia alto nível
                de responsabilidade e precisão nos processos. Essa vivência me
                formou com uma base sólida de disciplina e visão sistêmica,
                fundamentos que hoje aplico no universo dos dados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                <motion.img
                  src="/lavanderia_01.jpeg"
                  alt="Ambiente de trabalho"
                  className="w-full max-h-150 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <motion.img
                  src="/lav.jpeg"
                  alt="Processos operacionais"
                  className="w-full max-h-150 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* AppJusto Block */}
            <motion.div
              className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    Experiência no AppJusto
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-accent border-accent"
                  >
                    Jul/2022 - Fev/2024
                  </Badge>
                </div>
                <div>
                  <img
                    src="/logoappjusto.png"
                    alt="Logo AppJusto"
                    className="h-8 object-contain"
                  />
                </div>
              </div>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base leading-relaxed">
                No AppJusto, atuei como Assistente de Operações, garantindo o
                funcionamento da plataforma em tempo real e prestando suporte a
                consumidores, entregadores e restaurantes. Durante esse período,
                percebi a ausência de dashboards voltados ao monitoramento da
                operação. Algo essencial para um app de delivery. Comecei a
                colaborar na construção das primeiras análises e painéis
                operacionais, conciliando esse envolvimento com minhas
                atribuições no suporte. Essa experiência marcou meu primeiro
                contato prático com ferramentas de Business Intelligence.
              </p>

              {/* AppJusto Dashboard Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/cancelamentos_inatividade.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src="/cancelamentos_inatividade.png"
                    alt="Dashboard de Cancelamentos - AppJusto"
                    className="w-full max-h-220 object-contain rounded-lg max-h-48 transition-transform duration-300 hover:scale-105 shadow-lg"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </a>
                <a
                  href="/pos-venda.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src="/pos-venda.png"
                    alt="Dashboard de Pós-Venda - AppJusto"
                    className="w-full max-h-220 object-contain rounded-lg max-h-48 transition-transform duration-300 hover:scale-105 shadow-lg"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </a>
                <a
                  href="/terceirizados.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src="/terceirizados.png"
                    alt="Dashboard de Terceirizados - AppJusto"
                    className="w-full max-h-220 object-contain rounded-lg max-h-48 transition-transform duration-300 hover:scale-105 shadow-lg"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </a>
              </div>
            </motion.div>

            {/* Hi Platform Block atualizado */}
            <motion.div
              className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    Chegada na Hi Platform
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-green-400 border-green-400"
                  >
                    Fev/2024 - Atual
                  </Badge>
                </div>
                <div>
                  <img
                    src="/logohi.jpeg"
                    alt="Logo Hi Platform"
                    className="h-8 object-contain"
                  />
                </div>
              </div>

              {/* Estágio */}
              <div className="mb-6">
                <h4 className="text-xl font-orbitron font-semibold text-white mb-2">
                  Estágio (Fev/2024 – Jul/2025)
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Na Hi Platform, iniciei meu estágio em Business Intelligence
                  em fevereiro de 2024. Durante esse período fui responsável
                  pelo desenvolvimento e evolução de dashboards e relatórios de
                  performance dos produtos contratados pelos clientes. Atuei em
                  cerca de 39 contas no DashBI, sempre prezando pela
                  consistência dos dados e melhoria contínua. Produzi mais de
                  140 relatórios, com foco em clareza, precisão e suporte direto
                  à tomada de decisão.
                </p>
              </div>

              {/* Efetivação */}
              <div className="mb-6">
                <h4 className="text-xl font-orbitron font-semibold text-white mb-2">
                  Efetivação (Jul/2025 – Atual)
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Em julho de 2025 fui efetivado como Analista de Dados,
                  permanecendo na frente de dashboards e relatórios do DashBI,
                  mas com uma atuação mais estratégica e próxima da área de
                  soluções. Logo no início enfrentei um desafio: viabilizar uma
                  análise massiva solicitada pelo engenheiro de soluções para
                  justificar o uso de Inteligência Artificial em fluxos de
                  atendimento de um dos principais clientes. O projeto envolveu
                  processar milhões de mensagens do bot WhatsApp, identificar
                  fluxos repetidos e projetar economias de até 60% no volume de
                  interações caso a IA fosse aplicada. Essa entrega conectou
                  análise técnica, visão de negócio e storytelling, resultando
                  em um relatório executivo que guiou discussões estratégicas
                  sobre priorização de melhorias no bot e uso da IA.
                </p>
              </div>

              {/* Imagens lado a lado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.img
                  src="/estag.png"
                  alt="Estágio Hi Platform"
                  className="w-full max-h-100 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <motion.img
                  src="/efetivo.png"
                  alt="Efetivação Hi Platform"
                  className="w-full max-h-100 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
