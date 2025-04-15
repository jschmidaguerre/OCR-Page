import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, FileText, Edit, Package, Stethoscope } from 'lucide-react';

export default function UseCases() {
  const t = useTranslations('UseCases');
  
  // Structured data for our services
  const ourServices = [
    {
      id: 1,
      title: "Extracción inteligente de información de documentos",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50",
      border: "border-blue-200",
      badge: "Documentos",
      description: "Transformamos cualquier documento físico o digital en información estructurada y lista para usar. Liberamos a tu equipo de la tediosa tarea de transcripción manual.",
      examples: [
        "Reducción del 90% en tiempo de procesamiento",
        "Eliminación de errores de entrada manual",
        "Información clave disponible al instante",
        "Integración con tus sistemas actuales"
      ]
    },
    {
      id: 2,
      title: "Creación automática de contenido para tu negocio",
      icon: <Edit className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50",
      border: "border-emerald-200",
      badge: "Marketing",
      description: "Generamos contenido relevante para tu audiencia de forma automática. Mantenemos tu blog actualizado y posicionado sin que tengas que dedicar recursos internos.",
      examples: [
        "Contenido original y adaptado a tu marca",
        "Artículos optimizados para buscadores",
        "Publicación automática y programada",
        "Mayor visibilidad online sin esfuerzo adicional"
      ]
    },
    {
      id: 3,
      title: "Gestión inteligente de inventario",
      icon: <Package className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50",
      border: "border-purple-200",
      badge: "Operaciones",
      description: "Simplificamos el control de tus productos con una solución intuitiva que evita quiebres de stock, reduce costos de almacenamiento y optimiza tus compras.",
      examples: [
        "Visibilidad total de tu inventario en tiempo real",
        "Alertas automáticas de stock bajo",
        "Informes de rendimiento y rotación de productos",
        "Reducción de pérdidas por caducidad o exceso"
      ]
    },
    {
      id: 4,
      title: "Auditoría médica asistida por inteligencia artificial",
      icon: <Stethoscope className="w-8 h-8 text-rose-600" />,
      color: "bg-rose-50",
      border: "border-rose-200",
      badge: "Salud",
      description: "Analizamos automáticamente historias clínicas para detectar inconsistencias, mejorar la calidad asistencial y facilitar la toma de decisiones basada en evidencia.",
      examples: [
        "Detección de inconsistencias en tratamientos",
        "Mejora continua de la calidad asistencial",
        "Reducción de errores en documentación médica",
        "Soporte a la toma de decisiones clínicas"
      ]
    }
  ];
  
  // Additional capabilities to show versatility
  const additionalCapabilities = [
    { 
      category: "Automatización de procesos", 
      items: [
        "Eliminación de tareas repetitivas", 
        "Reducción de tiempos de espera", 
        "Mejora de la experiencia del cliente", 
        "Liberación de talento para tareas estratégicas"
      ] 
    },
    { 
      category: "Transformación digital", 
      items: [
        "Digitalización de procesos manuales", 
        "Centralización de información", 
        "Acceso seguro desde cualquier lugar", 
        "Decisiones basadas en datos reales"
      ] 
    },
    { 
      category: "Optimización operativa", 
      items: [
        "Reducción de costos operacionales", 
        "Mejora de la productividad", 
        "Identificación de cuellos de botella", 
        "Procesos más ágiles y eficientes"
      ] 
    },
    { 
      category: "Innovación de negocio", 
      items: [
        "Nuevos modelos de servicio", 
        "Diferenciación competitiva", 
        "Escalabilidad sin fricción", 
        "Adaptación rápida al cambio"
      ] 
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="industries">
      <div className="container mx-auto px-4">
        {/* Header with enhanced styling */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-blue-100 text-blue-800 border-blue-200">
            Nuestras soluciones
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Proyectos que transforman procesos</h2>
          <p className="text-lg text-gray-600">
            Exploramos y optimizamos sus procesos de negocio mediante soluciones tecnológicas personalizadas 
            que aprovechan lo mejor de la IA, desarrollo web y automatización.
          </p>
        </div>

        {/* Featured services with enhanced cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {ourServices.map((service) => (
            <Card 
              key={service.id} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${service.border} border h-full`}
            >
              <div className={`${service.color} p-6`}>
                <Badge variant="outline" className="mb-2 bg-white/70 backdrop-blur-sm">
                  {service.badge}
                </Badge>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2">
                  {service.examples.map((example, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={16} className="text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional capabilities in an attractive layout */}
        <div className="bg-white rounded-xl shadow-md border p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Nuestras capacidades técnicas</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalCapabilities.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  <h4 className="font-bold text-lg">{category.category}</h4>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ChevronRight size={14} className="text-blue-600 mr-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">¿Tienes un desafío de proceso en tu negocio?</h3>
          <p className="text-gray-600 mb-6">
            Nuestra experiencia técnica y enfoque consultivo nos permite entender a fondo los desafíos únicos de tu empresa.
            Conversemos sobre cómo podemos aplicar tecnologías innovadoras para optimizar tus procesos críticos.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Conversemos sobre tu negocio
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}