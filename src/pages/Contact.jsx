import { useState } from 'react';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_o6hy1xl';
    const templateID = 'template_z3s1k9b';
    const publicKey = 'sKlvOwC7mgOJnJmz_';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.title,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: SiGmail,
      label: 'Email',
      value: 'rafaelolirocha@gmail.com',
      href: 'mailto:rafaelolirocha@gmail.com',
      color: 'text-primary',
    },
    {
      icon: SiWhatsapp,
      label: 'WhatsApp',
      value: '+55 (32) 998147576',
      href: 'https://wa.me/5532998147576',
      color: 'text-green-400',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Ubá, MG - Brasil',
      href: '#',
      color: 'text-green-400',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RafaelOliveiraRocha',
      color: 'text-white hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafael-rocha-89271021b/',
      color: 'text-blue-400 hover:text-blue-300',
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
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-6 md:mb-12 text-primary glow-text">
            &gt; contact.init()
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <motion.div
              className="cyber-border rounded-lg bg-card/50 backdrop-blur-sm p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="terminal-window mb-6">
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-sm font-mono text-muted-foreground ml-4">
                    contact@rafael:~$
                  </span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-primary">
                    &gt; send_message.execute()
                  </div>
                  <div className="text-muted-foreground">
                    Iniciando protocolo de comunicação...
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>

                {/* Status de Envio */}
                {submitStatus && (
                  <motion.div
                    className={`flex items-center space-x-2 p-3 rounded-md ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500'
                        : 'bg-red-500/20 text-red-400 border border-red-500'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-mono text-sm">
                          Mensagem enviada com sucesso!
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-mono text-sm">
                          Erro ao enviar mensagem. Tente novamente.
                        </span>
                      </>
                    )}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full neon-btn ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Informações Diretas */}
              <div className="cyber-border rounded-lg bg-card/50 backdrop-blur-sm p-8">
                <h3 className="text-xl font-orbitron font-bold text-white mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        target={
                          info.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          info.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className={`flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 ${info.color}`}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <Icon className="w-6 h-6" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {info.label}
                          </div>
                          <div className="font-mono text-white">
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="cyber-border rounded-lg bg-card/50 backdrop-blur-sm p-8">
                <h3 className="text-xl font-orbitron font-bold text-white mb-6">
                  Redes Sociais
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-lg bg-background/50 border border-border transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conecte-se comigo nas redes sociais para acompanhar meus
                    projetos, artigos sobre análise de dados e desenvolvimento
                    de software.
                  </p>
                </div>
              </div>

              {/* Disponibilidade */}
              <div className="cyber-border rounded-lg bg-card/50 backdrop-blur-sm p-8">
                <h3 className="text-xl font-orbitron font-bold text-white mb-6">
                  Disponibilidade
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">
                      Aberto para networking e colaborações na área de dados
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Consultoria em Business Intelligence
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Interesse em projetos experimentais e automações para
                      aprendizado contínuo
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg">
                  <p className="text-sm text-primary font-mono">
                    Tempo de resposta: 24-48 horas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
