import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      title: 'Маркетинговые стратегии',
      description: 'Разработка комплексных стратегий продвижения товаров на международных рынках',
      icon: 'TrendingUp',
      color: 'from-primary to-amber-400'
    },
    {
      title: 'Контент для экспорта',
      description: 'Создание визуального и текстового контента для продвижения экспортной продукции',
      icon: 'Newspaper',
      color: 'from-accent to-rose-500'
    },
    {
      title: 'Медиапродакшн',
      description: 'Производство видеороликов, фотосъемка продукции для международных площадок',
      icon: 'Video',
      color: 'from-secondary to-gray-700'
    },
    {
      title: 'Блог-туры и события',
      description: 'Организация медийных мероприятий для продвижения экспортных товаров',
      icon: 'Users',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Конкурентный анализ',
      description: 'Исследование международных рынков и конкурентной среды',
      icon: 'BarChart3',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Социальные сети',
      description: 'SMM-продвижение и управление международными соцсетями',
      icon: 'Globe',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const cases = [
    {
      title: 'Центр поддержки экспорта',
      description: 'Создание серии промо-роликов для центра поддержки экспорта Нижегородской области',
      image: 'https://cdn.poehali.dev/projects/02b7a416-712b-46e3-847d-40d90691baad/files/344b0374-874e-4ece-9a4c-24ed9abbbbff.jpg',
      metrics: ['1,5+ млн охват', '50+ роликов', '15 направлений'],
      link: 'https://centredigital.ru/centr-exporta'
    },
    {
      title: 'Блог-туры по России',
      description: 'Организация медийных туров для блогеров и журналистов по разным регионам',
      image: 'https://cdn.poehali.dev/projects/02b7a416-712b-46e3-847d-40d90691baad/files/9e7b9480-32a8-470e-b268-34a482e3acfc.jpg',
      metrics: ['География: вся РФ', '30+ блогеров', '5+ млн аудитория'],
      link: 'https://centredigital.ru/blog-tour'
    },
    {
      title: 'Марафон хоккея',
      description: 'Федеральный проект по продвижению хоккейной культуры и спортивного туризма',
      image: 'https://cdn.poehali.dev/projects/02b7a416-712b-46e3-847d-40d90691baad/files/ca0ebd24-1231-4631-91ab-7b6f29caf9bb.jpg',
      metrics: ['Охват: вся Россия', '10+ городов', '2 млн+ просмотров'],
      link: 'https://centredigital.ru/hokkey'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-heading text-white">
            Centre <span className="text-primary">Digital</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-white hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            Оставить заявку
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-secondary via-gray-800 to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-6 animate-fade-in">
              Экспорт вашего бизнеса
              <span className="block text-primary mt-2">на мировой рынок</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Комплексные digital-решения для продвижения товаров и услуг на международных рынках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать сотрудничество
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-secondary mb-4">
              Наши услуги по <span className="text-primary">экспорту</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл поддержки вашего выхода на международный рынок
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">
              Наши <span className="text-primary">кейсы</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Успешные проекты федерального масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-primary font-semibold">
                        <Icon name="CheckCircle2" size={16} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                  >
                    Подробнее
                    <Icon name="ExternalLink" size={16} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-white to-accent/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-scale-in">
                <div className="text-5xl font-black font-heading text-accent mb-2">1,5+ млн</div>
                <div className="text-gray-600">Охват аудитории</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-black font-heading text-primary mb-2">50+</div>
                <div className="text-gray-600">Реализованных проектов</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl font-black font-heading text-secondary mb-2">15+</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4">
              Готовы выйти на <span className="text-primary">мировой рынок?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Оставьте заявку и получите консультацию эксперта по экспорту
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-secondary font-semibold mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-2 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="ivan@company.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-2 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2">Расскажите о вашем проекте</label>
                <Textarea 
                  placeholder="Опишите ваши цели экспорта, целевые рынки, товары/услуги..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-2 focus:border-primary"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-primary mb-3" />
              <div className="text-sm text-gray-400">Email</div>
              <a href="mailto:info@centredigital.ru" className="text-white hover:text-primary transition-colors">
                info@centredigital.ru
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-primary mb-3" />
              <div className="text-sm text-gray-400">Телефон</div>
              <a href="tel:+78312345678" className="text-white hover:text-primary transition-colors">
                +7 (831) 234-56-78
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-primary mb-3" />
              <div className="text-sm text-gray-400">Адрес</div>
              <div className="text-white">Нижний Новгород</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-xl font-bold font-heading text-white mb-2">
            Centre <span className="text-primary">Digital</span>
          </div>
          <p className="text-sm">
            © 2024 Centre Digital & Media. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
