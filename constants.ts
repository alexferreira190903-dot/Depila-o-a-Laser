import { Service, FAQItem, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'alexandrite',
    title: 'Laser Alexandrite',
    description: 'O padrão ouro para peles claras. Comprimento de onda de 755nm que oferece alta absorção pela melanina, garantindo resultados rápidos e eficazes.',
    benefits: ['Alta eficácia em pelos finos', 'Resultados rápidos', 'Sistema de resfriamento integrado'],
    duration: '20-40 minutos',
    contraindications: ['Pele bronzeada', 'Uso de ácidos recentes'],
    image: 'https://picsum.photos/id/106/800/600'
  },
  {
    id: 'diodo',
    title: 'Laser de Diodo',
    description: 'Tecnologia versátil e segura, ideal para fototipos intermediários. Penetra profundamente no folículo piloso.',
    benefits: ['Trata áreas grandes rapidamente', 'Seguro para peles morenas', 'Confortável'],
    duration: '30-50 minutos',
    contraindications: ['Gravidez', 'Infecções ativas na pele'],
    image: 'https://picsum.photos/id/64/800/600'
  },
  {
    id: 'ndyag',
    title: 'Peles Negras (Nd:YAG)',
    description: 'Tecnologia específica e segura para peles morenas e negras, evitando manchas e queimaduras.',
    benefits: ['Segurança total para fototipos altos', 'Trata foliculite', 'Menor risco de hiperpigmentação'],
    duration: '30-60 minutos',
    contraindications: ['Uso de isotretinoína', 'Feridas abertas'],
    image: 'https://picsum.photos/id/338/800/600'
  },
  {
    id: 'men',
    title: 'Depilação Masculina',
    description: 'Protocolos adaptados para pelos mais espessos e resistentes, comuns na fisiologia masculina.',
    benefits: ['Redução definitiva de pelos', 'Fim da foliculite na barba', 'Pele mais lisa'],
    duration: '15-60 minutos',
    contraindications: ['Pele bronzeada recentemente'],
    image: 'https://picsum.photos/id/91/800/600'
  },
  {
    id: 'intimate',
    title: 'Depilação Íntima',
    description: 'Procedimento delicado realizado com máximo conforto e privacidade.',
    benefits: ['Higiene e praticidade', 'Pele macia', 'Redução de atrito'],
    duration: '20 minutos',
    contraindications: ['Infecções genitais ativas'],
    image: 'https://picsum.photos/id/129/800/600'
  },
  {
    id: 'teens',
    title: 'Teens (Adolescentes)',
    description: 'Tratamento especializado para jovens, respeitando a fase hormonal e sensibilidade da pele.',
    benefits: ['Aumento da autoestima', 'Prevenção de pelos encravados', 'Procedimento suave'],
    duration: 'Variável',
    contraindications: ['Sem autorização dos pais', 'Alterações hormonais não investigadas'],
    image: 'https://picsum.photos/id/349/800/600'
  }
];

export const FAQS: FAQItem[] = [
  { id: 1, question: "O procedimento dói?", answer: "A sensação varia de pessoa para pessoa, mas nossos equipamentos possuem tecnologia de resfriamento que minimiza o desconforto, tornando a sessão muito tolerável." },
  { id: 2, question: "Quantas sessões são necessárias?", answer: "Em média, são necessárias de 8 a 10 sessões para a eliminação completa dos pelos, com manutenções esporádicas." },
  { id: 3, question: "Posso tomar sol durante o tratamento?", answer: "Não é recomendado tomar sol 15 dias antes e 7 dias após a sessão. O uso de protetor solar é indispensável." },
  { id: 4, question: "A depilação é definitiva?", answer: "O termo correto é 'permanente'. O laser elimina cerca de 90% a 95% dos pelos. Alterações hormonais podem fazer surgir novos pelos finos ao longo dos anos." },
  { id: 5, question: "Homens podem fazer?", answer: "Sim! Temos protocolos exclusivos para a pele e pelo masculino, muito procurados para barba, costas e peito." },
  { id: 6, question: "Adolescentes podem fazer?", answer: "Sim, geralmente a partir da primeira menstruação para meninas, ou quando o desenvolvimento piloso já está estabelecido, sempre com autorização dos pais." },
  { id: 7, question: "Quais são as contraindicações?", answer: "Gravidez, uso de ácidos fotossensibilizantes, câncer de pele ativo, infecções na área tratada e bronzeamento recente." },
  { id: 8, question: "Posso me depilar entre as sessões?", answer: "Sim, mas apenas com lâmina ou creme depilatório. Métodos que arrancam o pelo pela raiz (cera, pinça) são proibidos." },
  { id: 9, question: "Funciona em pelos loiros ou ruivos?", answer: "O laser atua na melanina (pigmento). Pelos muito claros, brancos ou ruivos têm pouca melanina e o laser não é eficaz." },
  { id: 10, question: "Quanto tempo dura uma sessão?", answer: "Depende da área. Axilas levam cerca de 5 minutos, enquanto pernas inteiras podem levar 40 minutos." },
  { id: 11, question: "O laser clareia a pele?", answer: "O laser pode ajudar a clarear áreas escurecidas pelo atrito ou foliculite, mas seu objetivo principal é a remoção do pelo." },
  { id: 12, question: "É seguro para área íntima?", answer: "Sim, é totalmente seguro e um dos procedimentos mais realizados na clínica." },
  { id: 13, question: "Tenho tatuagem, posso fazer?", answer: "O laser não pode ser aplicado sobre tatuagens, pois o pigmento atrai a luz e pode causar queimaduras ou estragar o desenho. Desviamos da área." },
  { id: 14, question: "Qual o intervalo entre as sessões?", answer: "Geralmente de 30 a 45 dias no início, aumentando o intervalo conforme o crescimento dos pelos diminui." },
  { id: 15, question: "Preciso ir com os pelos raspados?", answer: "Sim, recomendamos raspar a área com lâmina 1 dia antes da sessão para evitar irritação e garantir que o laser atinja a raiz." },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Mariana Costa", text: "Melhor investimento que fiz! A equipe da Lumina é super atenciosa e o resultado na axila foi imediato.", rating: 5, image: "https://picsum.photos/id/64/100/100" },
  { id: 2, name: "Fernanda Silva", text: "Ambiente lindo e tecnologia de ponta. Não senti dor nenhuma com o laser de diodo.", rating: 5, image: "https://picsum.photos/id/65/100/100" },
  { id: 3, name: "Carlos Eduardo", text: "Fiz a barba para acabar com a foliculite e resolveu 100%. Recomendo para todos os homens.", rating: 5, image: "https://picsum.photos/id/91/100/100" },
  { id: 4, name: "Beatriz Oliveira", text: "Já fiz em outras clínicas, mas o atendimento aqui é diferenciado. Me senti muito acolhida.", rating: 4.8, image: "https://picsum.photos/id/342/100/100" }
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Dra. Juliana Mendes", role: "Dermatologista Responsável", bio: "Especialista em laserterapia com 10 anos de experiência.", image: "https://picsum.photos/id/338/300/300" },
  { id: 2, name: "Cláudia Souza", role: "Fisioterapeuta Dermato-funcional", bio: "Apaixonada por estética e bem-estar do paciente.", image: "https://picsum.photos/id/334/300/300" },
  { id: 3, name: "Patrícia Lima", role: "Biomédica Esteta", bio: "Focada em resultados de alta performance.", image: "https://picsum.photos/id/449/300/300" },
];