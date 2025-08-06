import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Database,
  Zap,
  Calendar,
  Target,
  Activity,
  Users,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from 'recharts';
import historicoData from '../historico_data.json';

const Dashboard = () => {
  const relatoriosData = historicoData.relatorio.map((item) => ({
    mes: item['Mês'].substring(0, 3).toUpperCase(),
    2024: item['2024'] === '-' ? null : Number(item['2024']),
    2025: item['2025'] === '-' ? null : Number(item['2025']),
  }));

  const acumuladoData = historicoData.acumulado.map((item) => ({
    Mês: item['Mês'], // mantém assim com o ano incluso
    Acumulado: item['Acumulado'],
  }));
  console.log('acumuladoData', acumuladoData);

  const kpiData = [
    {
      title: 'Relatórios Produzidos',
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
      title: 'Automações Desenvolvidas',
      value: '5',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
    },
  ];

  const automacoes = [
    'Bot Analytics',
    'Zap Cannon',
    'Captura Leads',
    'Chat Analytics',
    'Dashboard Automático',
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
            &gt; dashboard.analytics()
          </h1>

          {/* Storytelling */}
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
              Dashboard de Entregas BI & Automação
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Essa seção reúne alguns dos principais indicadores e entregas da
              minha trajetória com dados. Aqui estão números reais, extraídos
              diretamente das minhas produções entre 2024 e 2025, mostrando a
              evolução em relatórios de performance, contas atendidas no DashBI.
            </p>
          </motion.div>

          {/* KPI Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {kpiData.map((kpi, index) => {
              const IconComponent = kpi.icon;
              return (
                <motion.div
                  key={kpi.title}
                  className={`cyber-border p-6 rounded-lg ${kpi.bgColor} backdrop-blur-sm border ${kpi.borderColor}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${kpi.color}`} />
                    <div
                      className={`text-3xl font-orbitron font-bold ${kpi.color}`}
                    >
                      {kpi.value}
                    </div>
                  </div>
                  <h3 className="text-white font-mono text-sm">{kpi.title}</h3>
                </motion.div>
              );
            })}
          </div>

          {/* Gráfico de Relatórios por Mês - ComposedChart */}
          <motion.div
            className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-orbitron font-bold text-white">
                Relatórios por Mês (2024 vs 2025)
              </h2>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={relatoriosData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    dataKey="mes"
                    stroke="#ffffff"
                    fontSize={12}
                    fontFamily="monospace"
                  />
                  <YAxis
                    stroke="#ffffff"
                    fontSize={12}
                    fontFamily="monospace"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid #00ffff',
                      borderRadius: '8px',
                      color: '#ffffff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="2024"
                    stroke="#00ffff"
                    strokeWidth={3}
                    dot={{ fill: '#00ffff', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#00ffff', strokeWidth: 2 }}
                    name="Relatórios 2024"
                    connectNulls={true}
                  />
                  <Bar
                    dataKey="2025"
                    fill="#ff00ff"
                    radius={[4, 4, 0, 0]}
                    name="Relatórios 2025"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Volume de relatórios produzidos mensalmente, comparando 2024
                (linha) e 2025 (colunas).
              </p>
            </div>
          </motion.div>

          {/* Gráfico de Evolução de Relatórios (Linha do Tempo) */}
          <motion.div
            className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-orbitron font-bold text-white">
                Evolução de Relatórios (Linha do Tempo)
              </h2>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={acumuladoData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    dataKey="Mês"
                    stroke="#ffffff"
                    fontSize={12}
                    fontFamily="monospace"
                    interval={0}
                  />
                  <YAxis
                    stroke="#ffffff"
                    fontSize={12}
                    fontFamily="monospace"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid #00ffff',
                      borderRadius: '8px',
                      color: '#ffffff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Acumulado"
                    stroke="#00ffff"
                    strokeWidth={3}
                    dot={{ fill: '#00ffff', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#00ffff', strokeWidth: 2 }}
                    name="Relatórios Acumulados"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Número acumulado de relatórios produzidos ao longo do tempo.
              </p>
            </div>
          </motion.div>

          {/* Destaques de Automação */}
          <motion.div
            className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <Zap className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-orbitron font-bold text-white">
                Destaques de Automação
              </h2>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-orbitron font-bold text-green-400 mb-2">
                5
              </div>
              <p className="text-muted-foreground">
                Automatizações e Integrações desenvolvidas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automacoes.map((automacao, index) => (
                <motion.div
                  key={automacao}
                  className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-green-400 font-mono text-sm">
                    {automacao}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Na Hi Platform foram desenvolvidas 2 automações: Bot Analytics &
                Chat Analytics
              </p>
            </div>
          </motion.div>

          {/* Evolução nas Contas Atendidas */}
          <motion.div
            className="cyber-border p-8 rounded-lg bg-card/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <Users className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-orbitron font-bold text-white">
                Evolução nas Contas Atendidas (DashBI)
              </h2>
            </div>

            <div className="text-center">
              <div className="text-6xl font-orbitron font-bold text-accent mb-4">
                39
              </div>
              <p className="text-xl text-white mb-4">
                Contas DashBI Atendidas no Total
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Desde meu início na Hi Platform, já atuei em 39 contas
                diferentes no DashBI, realizando desde a criação de novos
                dashboards até a manutenção e ajustes em visualizações já
                existentes, sempre mantendo a consistência dos dados e
                garantindo melhorias contínuas na entrega das informações.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
