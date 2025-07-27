import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'Bot Analytics',
      description:
        'Bot Analytics é uma solução de automação voltada para tratamento de dados de atendimento. Ele recebe um arquivo CSV, faz concatenação de múltiplos arquivos, remove duplicatas, cria colunas derivadas, extrai todas as tags para novas colunas, monta tabelas dinâmicas e, com base nessas tabelas, já gera gráficos prontos no Excel para uso direto em relatórios.',
      category: 'BI & ANALYTICS',
      status: 'Ativo',
      technologies: ['Python', 'Selenium', 'API REST', 'SQL'],
      github: 'https://github.com/RafaelOliveiraRocha/bot_analysis_ofc',
      demo: 'https://hi-serviceshub.replit.app/bot_analytics/upload?session_id=3d6c2e4c-5bb7-44fa-bf08-ae953b770b72',
      demoType: 'link',
    },
    {
      id: 2,
      title: 'Zap Cannon',
      description:
        'Zap Cannon é uma ferramenta de automação para disparo de mensagens personalizadas via WhatsApp Business. O usuário faz o upload de uma lista de números e o sistema realiza os envios de forma rápida e sequencial.',
      category: 'AUTOMAÇÃO',
      status: 'Ativo',
      technologies: ['JavaScript', 'Node.js', 'WhatsApp API', 'React'],
      github: 'https://github.com/RafaelOliveiraRocha/zapcannon',
      demo: 'https://www.linkedin.com/posts/rafael-rocha-89271021b_zapcannon-python-flask-activity-7086785967956647936-PALk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd02e4BIZ7BT-kyc1blXctRBMvW9C9ON4Y',
      demoType: 'linkedin',
    },
    {
      id: 3,
      title: 'Captura Leads',
      description:
        'Captura Leads é um crawler feito em Python para coleta automatizada de leads no Instagram. No caso aplicado, a busca foi por restaurantes na região central de São Paulo (SP). Ele coleta dados como nome do estabelecimento, perfil, número de seguidores e informações de contato.',
      category: 'AUTOMAÇÃO',
      status: 'Ativo',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com/RafaelOliveiraRocha/captura-leads',
      demo: 'https://www.linkedin.com/posts/rafael-rocha-89271021b_automaaexaetoweb-python-dashboard-activity-7132378993277714432-nq0u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd02e4BIZ7BT-kyc1blXctRBMvW9C9ON4Y',
      demoType: 'linkedin',
    },
  ];

  const categories = ['ALL', 'BI & ANALYTICS', 'AUTOMAÇÃO'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'BI & ANALYTICS':
        return 'text-purple-400 border-purple-400';
      case 'AUTOMAÇÃO':
        return 'text-green-400 border-green-400';
      default:
        return 'text-primary border-primary';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'text-green-400 border-green-400';
      case 'Em Produção':
        return 'text-blue-400 border-blue-400';
      case 'Desenvolvimento':
        return 'text-yellow-400 border-yellow-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <section className="py-20 px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-primary glow-text">
            &gt; projects.showcase()
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`neon-btn group px-6 py-3 font-mono text-sm ${
                  activeFilter === category ? 'text-primary' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="cyber-border rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-muted/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(project.category)}
                    >
                      {project.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getStatusColor(project.status)}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="p-6 space-y-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn group flex items-center justify-center space-x-2 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-mono text-sm">GitHub</span>
                  </motion.a>

                  {project.demoType === 'link' ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-btn group flex items-center justify-center space-x-2 w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                      <span className="font-mono text-sm">Executar Online</span>
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={() => {
                        const modal = document.getElementById(
                          `modal-${project.id}`,
                        );
                        modal.style.display = 'flex';
                      }}
                      className="neon-btn group flex items-center justify-center space-x-2 w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-4 h-4 group-hover:animate-pulse" />
                      <span className="font-mono text-sm">Demo</span>
                    </motion.button>
                  )}
                </div>

                {/* Video Modal */}
                {project.demoType === 'embed' && (
                  <div
                    id={`modal-${project.id}`}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4"
                    onClick={(e) => {
                      if (e.target.id === `modal-${project.id}`) {
                        e.target.style.display = 'none';
                      }
                    }}
                  >
                    <div className="bg-card rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-orbitron font-bold text-white">
                          {project.title} - Demo
                        </h3>
                        <button
                          onClick={() => {
                            document.getElementById(
                              `modal-${project.id}`,
                            ).style.display = 'none';
                          }}
                          className="text-muted-foreground hover:text-white text-2xl"
                        >
                          ×
                        </button>
                      </div>
                      <iframe
                        src={project.demo}
                        height="399"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title={`${project.title} Demo`}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <motion.a
              href="https://github.com/RafaelOliveiraRocha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn group inline-flex items-center space-x-2 px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-mono">Ver Todos os Repositórios</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
