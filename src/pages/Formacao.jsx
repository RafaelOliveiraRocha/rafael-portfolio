import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Formacao = () => {
  const formacoes = [
    {
      id: 1,
      titulo: 'Diploma de Engenharia de Software',
      descricao:
        'Bacharelado em Engenharia de Software pela Unopar, concluído em junho de 2025. Para validação pelo MEC é necessário utilizar o XML, que pode ser solicitado diretamente comigo.',
      imagem: '/diploma_1.png',
      linkValidacaoMEC: 'https://verificadordiplomadigital.mec.gov.br/diploma',
    },
    {
      id: 2,
      titulo: 'Certificado PICT',
      descricao:
        'Certificação do Programa de Iniciação Científica e Tecnológica (120h), voltado para pesquisa sobre formação acadêmica no ensino superior.',
      imagem: '/certificado_pict_1.png',
      linkValidacao:
        'https://ead.pgsscogna.com.br/mod/simplecertificate/verify.php?code=6626df94-f3e0-4458-8cb7-51c80a000119',
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
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-6 text-primary glow-text">
            &gt; formacao.showcase()
          </h1>

          {/* Texto geral */}
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            Aqui estão as conquistas acadêmicas que marcam minha trajetória: a
            graduação em Engenharia de Software, finalizada em 2025, e a
            certificação em Iniciação Científica (PICT), que complementa minha
            formação com experiência em pesquisa.
          </p>

          {/* Grid de cards */}
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {/* Card do Diploma */}
            <motion.div
              className="cyber-border rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden group flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-4 border-b border-muted/20">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {formacoes[0].titulo}
                </h3>

                <img
                  src={formacoes[0].imagem}
                  alt={formacoes[0].titulo}
                  className="rounded-lg border border-muted/20 mb-3 max-w-xs md:max-w-md w-full mx-auto"
                />

                <p className="text-sm text-muted-foreground text-center">
                  {formacoes[0].descricao}
                </p>
              </div>

              <div className="p-4 space-y-3">
                {/* Ver Documento */}
                <motion.a
                  href={formacoes[0].imagem}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn group flex items-center justify-center space-x-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-mono text-sm">Ver Documento</span>
                </motion.a>

                {/* Validar MEC */}
                <motion.a
                  href={formacoes[0].linkValidacaoMEC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn group flex items-center justify-center space-x-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-mono text-sm">Validar MEC</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Card do PICT */}
            <motion.div
              className="cyber-border rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden group flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-4 border-b border-muted/20">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {formacoes[1].titulo}
                </h3>

                <img
                  src={formacoes[1].imagem}
                  alt={formacoes[1].titulo}
                  className="rounded-lg border border-muted/20 mb-3 max-w-xs md:max-w-md w-full mx-auto"
                />

                <p className="text-sm text-muted-foreground text-center">
                  {formacoes[1].descricao}
                </p>
              </div>

              <div className="p-4 space-y-3">
                {/* Ver Documento */}
                <motion.a
                  href={formacoes[1].imagem}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn group flex items-center justify-center space-x-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-mono text-sm">Ver Documento</span>
                </motion.a>

                {/* Validar PICT */}
                <motion.a
                  href={formacoes[1].linkValidacao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn group flex items-center justify-center space-x-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-mono text-sm">Validar</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formacao;
