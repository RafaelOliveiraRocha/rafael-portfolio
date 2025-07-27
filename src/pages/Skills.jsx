import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Zap, Server, Calendar } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('DATA');

  const skillsData = {
    DATA: [
      { name: 'Looker Studio', level: 80 },
      { name: 'Power BI', level: 85 },
      { name: 'Dash BI', level: 95 },
      { name: 'Excel', level: 95 },
      { name: 'SQL', level: 80 },
      { name: 'Python', level: 95 },
      { name: 'Google BigQuery', level: 70 },
      { name: 'dbt', level: 70 },
    ],
    FRONTEND: [
      { name: 'React JS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'TailwindCSS', level: 80 },
      { name: 'Framer Motion', level: 75 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
    ],
    AUTOMAÇÃO: [
      { name: 'Selenium', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'API REST', level: 80 },
      { name: 'Web Scraping', level: 88 },
      { name: 'Apps Script', level: 78 },
    ],
    FULLSTACK: [
      { name: 'Node.js', level: 70 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 60 },
    ],
  };

  const categories = [
    { id: 'DATA', label: 'DATA', icon: Database, color: 'text-green-400' },
    { id: 'FRONTEND', label: 'FRONTEND', icon: Code, color: 'text-green-400' },
    { id: 'AUTOMAÇÃO', label: 'AUTOMAÇÃO', icon: Zap, color: 'text-green-400' },
    {
      id: 'FULLSTACK',
      label: 'FULLSTACK',
      icon: Server,
      color: 'text-green-400',
    },
  ];

  const timelineData = [
    {
      date: '2011 - 2022',
      title: 'Trajetória nas Indústrias',
      description:
        'Atuei em lavanderias e confecções têxteis, desenvolvendo organização, controle de estoque e relatórios de consumo. Essa base me deu visão de processo e disciplina que aplico hoje na análise de dados.',
      color: 'text-primary',
      logo: '/logoalphabeto.png',
      extraLogo: '/logoalcance.png',
    },
    {
      date: 'Julho/2022',
      title: 'Início no AppJusto',
      description:
        'Primeiro contato prático com dados e BI. Criei dashboards para monitoramento da operação e comecei a aplicar conceitos aprendidos na faculdade em um ambiente real de startup.',
      color: 'text-accent',
      logo: '/logoappjusto.png',
    },
    {
      date: 'Fevereiro/2024',
      title: 'Estágio na Hi Platform',
      description:
        'Estagiário de Business Intelligence, responsável pela criação e evolução de dashboards no DashBI para mais de 39 contas. Produzi mais de 140 relatórios de performance com foco em clareza e suporte à decisão.',
      color: 'text-primary',
      logo: '/logohi.jpeg',
    },
    {
      date: 'Julho/2025',
      title: 'Efetivação e Novo Desafio',
      description:
        'Efetivado como Analista de Dados, passei a atuar de forma mais estratégica. Primeiro desafio: análise massiva para justificar uso de IA em fluxos críticos, processando milhões de mensagens e gerando insights para priorização de melhorias.',
      color: 'text-green-400',
      logo: '/logohi.jpeg',
    },
  ];

  return (
    <section className="py-20 px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-primary glow-text">
            &gt; skills.analyze()
          </h1>

          {/* Radar e Skills */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Categoria */}
            <div className="space-y-6">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
                Radar de Competências
              </h2>

              {/* Filtros com estilo antigo */}
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        activeCategory === category.id
                          ? `${category.color} border-${
                              category.color.split('-')[1]
                            }`
                          : 'bg-card/30 border-muted text-muted-foreground hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-mono text-sm">
                        {category.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Lista de skills */}
              <div className="space-y-4">
                {skillsData[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-mono">{skill.name}</span>
                      <span className="text-primary font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-card/30 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-cyan-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: skill.level + '%' }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Radar gráfico */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[20, 40, 60, 80, 100].map((radius) => (
                    <circle
                      key={radius}
                      cx="100"
                      cy="100"
                      r={radius * 0.8}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  ))}

                  {skillsData[activeCategory].map((_, index) => {
                    const angle =
                      (index * 360) / skillsData[activeCategory].length;
                    const radian = (angle * Math.PI) / 180;
                    const x = 100 + 80 * Math.cos(radian - Math.PI / 2);
                    const y = 100 + 80 * Math.sin(radian - Math.PI / 2);

                    return (
                      <line
                        key={index}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  <motion.polygon
                    points={skillsData[activeCategory]
                      .map((skill, index) => {
                        const angle =
                          (index * 360) / skillsData[activeCategory].length;
                        const radian = (angle * Math.PI) / 180;
                        const radius = (skill.level / 100) * 80;
                        const x = 100 + radius * Math.cos(radian - Math.PI / 2);
                        const y = 100 + radius * Math.sin(radian - Math.PI / 2);
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="rgba(0, 255, 255, 0.2)"
                    stroke="#00ffff"
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {skillsData[activeCategory].map((skill, index) => {
                    const angle =
                      (index * 360) / skillsData[activeCategory].length;
                    const radian = (angle * Math.PI) / 180;
                    const x = 100 + 90 * Math.cos(radian - Math.PI / 2);
                    const y = 100 + 90 * Math.sin(radian - Math.PI / 2);

                    return (
                      <text
                        key={skill.name}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white text-xs font-mono"
                      >
                        {skill.name}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline Evolutiva */}
          <motion.div
            className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-orbitron font-bold text-white">
                Timeline de Evolução
              </h2>
            </div>

            <div className="relative border-l border-primary/30 ml-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-12 ml-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Ponto com logo */}
                  <span className="absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary shadow-lg hover:scale-110 transition-transform duration-300">
                    {item.extraLogo ? (
                      <div className="flex gap-1">
                        <img
                          src={item.logo}
                          alt=""
                          className="w-5 h-5 object-contain"
                        />
                        <img
                          src={item.extraLogo}
                          alt=""
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                    ) : (
                      <img
                        src={item.logo}
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    )}
                  </span>

                  <div className="pl-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className={`font-mono text-sm ${item.color}`}>
                        {item.date}
                      </span>
                      <span className="text-white font-orbitron font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
