import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Terminal,
  Mail,
  Github,
  ChevronDown,
  BarChart3,
  Users,
  Calendar,
  Target,
} from 'lucide-react';

// Componente de Typing Animation
const TypingText = ({ text, delay = 0, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return <span className="typing-animation">{displayText}</span>;
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const kpiData = [
    {
      title: 'Relatórios Criados',
      value: '140+',
      icon: BarChart3,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      title: 'Contas DashBI Atendidas',
      value: '39',
      icon: Users,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
    {
      title: 'Meses de Experiência',
      value: '17+',
      icon: Calendar,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
    },
    {
      title: 'Qualidade dos Dados',
      value: 'Foco',
      icon: Target,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20',
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Matrix Rain Effect */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="matrix-rain"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Nome Principal */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 glitch"
              data-text="RAFAEL ROCHA"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                RAFAEL ROCHA
              </span>
            </motion.h1>

            {/* Título Profissional */}
            <motion.div
              className="text-xl md:text-3xl lg:text-4xl font-mono mb-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <TypingText
                text="Data Analyst & Software Engineer"
                delay={500}
                speed={20}
              />
            </motion.div>

            {/* Descrição */}
            <motion.p
              className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-12 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Transformando dados em insights estratégicos através de código,
              visualizações interativas e automações inteligentes. Especialista
              em Business Intelligence, desenvolvimento web e análise de dados.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <Link to="/projetos" className="neon-btn group">
                <Terminal className="w-5 h-5 mr-2 inline group-hover:animate-pulse" />
                Ver Projetos
              </Link>

              <Link to="/contato" className="neon-btn group">
                <Mail className="w-5 h-5 mr-2 inline group-hover:animate-pulse" />
                Contato
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="mt-16 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              {[
                'Python',
                'SQL',
                'React',
                'Power BI',
                'BigQuery',
                'dbt',
                'Looker Studio',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-card/30 border border-primary/20 rounded-full text-sm font-mono text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, borderColor: '#00ffff' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </section>

      {/* KPIs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 text-primary glow-text">
              &gt; performance.metrics()
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiData.map((kpi, index) => {
                const IconComponent = kpi.icon;
                return (
                  <motion.div
                    key={kpi.title}
                    className={`cyber-border p-6 rounded-lg ${kpi.bgColor} backdrop-blur-sm border ${kpi.borderColor}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <IconComponent
                        className={`w-12 h-12 ${kpi.color} mx-auto mb-4`}
                      />
                      <div
                        className={`text-4xl font-orbitron font-bold ${kpi.color} mb-2`}
                      >
                        {kpi.value}
                      </div>
                      <h3 className="text-white font-mono text-sm">
                        {kpi.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
