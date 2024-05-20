window._my_menu = [
    /*{
        "nombre" : "Plataformas",
        "link" : "/Plataformas",
        "submenu" : [
            {
                "subMenuNombre" : "Tu experiencia transforma",
                "subMenuUrl" : "http://189.254.1.56/tuexperienciatransforma/"
            },
            {
                "subMenuNombre" : "Transformando con la juventud",
                "subMenuUrl" : "http://189.254.1.56/transformandoconlajuventud/"
            },
            {
                "subMenuNombre" : "Investh Hidalgo",
                "subMenuUrl" : "https://investhidalgo.mx/"
            }
        ]
    },*/{
        "nombre" : "Transparencia",
        //"link" : "/Transparencia",
        "submenu" : [
            {
                "subMenuNombre" : "48 Rubros",
                "subMenuUrl" : "/Transparencia/Rubros"
            },
            {
                "subMenuNombre" : "Rubros Anteriores",
                "subMenuUrl" : "/Transparencia/Rubros/RubrosHistoricos"
            }
        ]
    },{
        "nombre" : "Información institucional",
        //"link" : "/Transparencia",
        "submenu" : [
            {
                "subMenuNombre" : "Armonización contable",
                "subMenuUrl" : "/informacion/armonizacion"
            },
            {
                "subMenuNombre" : "Cuenta pública",
                "subMenuUrl" : "/informacion/cuenta"
            },
            {
                "subMenuNombre" : "Disciplina financiera",
                "subMenuUrl" : "/informacion/disciplina"
            },
            {
                "subMenuNombre" : "Documentos de referencia",
                "subMenuUrl" : "/informacion/documentos"
            },
        ]
    },/*{
        "nombre" : "Organismos",
        "link" : "/Organismos",]
        /*
        "submenu" : [
            {
                "subMenuNombre" : "Organismos Descentralizados",
                "subMenuUrl" : "/Transparencia/Rubros"
            },
            {
                "subMenuNombre" : "Organismos Desconcentrados",
                "subMenuUrl" : "/Transparencia/Rubros/RubrosHistoricos"
            }
        ]*/
    /*},*/{
        "nombre" : "Servicios",
        "link" : "/Servicios",
    }
]

window._my_carouselImages = [
    {
        "imagen" : "https://cdn.hidalgo.gob.mx/gobierno/images/veda/banner_veda.png",
    }
    /*
    {
        "imagen" : "../assets/imgs/1.png"
    },
    {
        "imagen" : "../assets/imgs/2.png"
    },
    {
        "imagen" : "../assets/imgs/3.png"
    },
    {
        "imagen" : "../assets/imgs/4.png"
    },
    {
        "imagen" : "../assets/imgs/5.png"
    },
    {
        "imagen" : "../assets/imgs/6.png"
    },
    */
]

window._my_organismos = [
    /*{
        "nombre" : "Agencia de Desarrollo Valle de Plata",
        "descripcion" : "Impulsa, promove y fomenta la inversión pública y privada para desarrollar proyectos industriales, logística, comerciales, de servicios e infraestructura, que potencialicen el desarrollo regional, económico y social del Estado.",
        "url" : "http://agenciadedesarrollovalledeplata.hidalgo.gob.mx/",
    },{
        "nombre" : "Agencia Estatal de Energía de Hidalgo",
        "descripcion" : "Encontrar las formas más eficientes para generarl energía de manera más sustentable y amigable con el medio ambiente; y promover mecanismos más eficaces para su utilización.",
        "url" : "http://energia.hidalgo.gob.mx/",
    },{
        "nombre" : "Corporación de Fomento de Infraestructura Industrial",
        "descripcion" : "Estimular y fomentar el desarrollo y crecimiento económico sustentable del estado; a través del incremento de la oferta de espacios industriales para el asentamiento de inversiones productivas y sutentables.",
        "url" : "http://cofoin.hidalgo.gob.mx/",
    },{
        "nombre" : "Corporación Internacional Hidalgo",
        "descripcion" : "Promover las ventajas estratégicas de la entidad, brinda asistencia, apoyo integral y asesoría a inversionistas nacionales y extranjeros que deseen instalar o ampliar sus unidades productivas en el Estado.",
        "url" : "http://coinhi.hidalgo.gob.mx/",
    },{
        "nombre" : "Instituto Hidalguense de Competitividad Empresarial",
        "descripcion" : "Generar prosperidad entre la comunidad hidalguense a través de la creación y desarrollo de empresas.",
        "url" : "http://ihce.hidalgo.gob.mx/",
    },*/
]

window._my_servicio_elige = "Corporación Internacional Hidalgo"
const servicios_lista = [
    { 
        cad: 0, 
        clave: 'SEDECO/CIH/06',
        url: 'https://ruts.hidalgo.gob.mx/ver/9610',
        nombre: 'VINCULACIÓN CON ORGANISMOS DE COOPERACIÓN INTERNACIONALES',
        descripcion: 'Capacitación técnica especializada mediante la transferencia de conocimiento de un experto internacional.',
        area: 'Corporación Internacional Hidalgo'
    },
]

servicios_lista.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
})

//window._my_servicios = servicios_lista.filter(p => p.area==='Corporación Internacional Hidalgo')
window._my_servicios = servicios_lista

window._my_rubros =[
        {
                //"url":"Transparencia.html?ver=Normatividad",
            "icono":"Normatividad.png",
            "nombre":"1.Normatividad",
            "formatos":[
                {
                        "nombre":"Marco Normativo",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f01%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f01%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Estructura",
            "icono":"Estructura.png",
            "nombre":"2.Estructura",
            "formatos":[
                {
                        "nombre":"Estructura Orgánica",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f02_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f02_a%20COINHI.htm",
                },
                {
                        "nombre":"Organigrama",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f02_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f02_b%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Facultades",
            "icono":"Facultades.png",
            "nombre":"3.Facultades",
            "formatos":[
                {
                        "nombre":"Facultades",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f03%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f03%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Programas_Operativos_Anuales",
            "icono":"ProgramasOperativosAnuales.png",
            "nombre":"4.Programas Operativos Anuales",
            "formatos":[
                {
                        "nombre":"Metas y Objetivos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f4%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f4%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Indicadores_de_Interes",
            "icono":"IndicadoresInteres.png",
            "nombre":"5.Indicadores de Interés",
            "formatos":[
                {
                        "nombre":"Indicadores de Interés",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f5%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f5%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Matriz_de_Indicadores",
            "icono":"MatrizIndicadores.png",
            "nombre":"6.Matriz de Indicadores",
            "formatos":[
                {
                        "nombre":"Matriz de Indicadores",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f6%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f6%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Directorio",
            "icono":"Directorio.png",
            "nombre":"7.Directorio",
            "formatos":[
                {
                        "nombre":"Directorio",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f7%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f7%20COINHI.htm",
                }
            ]
        },
        {
            "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/8.%20Sueldos",
            //"url":"Transparencia.html?ver=Sueldos",
            "icono":"Sueldos.png",
            "nombre":"8.Sueldos",
            "formatos":[
                {
                        "nombre":"Remuneraciones",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f8%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f8%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Viaticos",
            "icono":"Viaticos.png",
            "nombre":"9.Viáticos",
            "formatos":[
                {
                        "nombre":"Viáticos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f9%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f9%20COINHI.htm",
                }
            ]
        },
        {
            "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/10.%20Plazas",
            //"url":"Transparencia.html?ver=Plazas",
            "icono":"Plazas.png",
            "nombre":"10.Plazas",
            "formatos":[
                {
                        "nombre":"Total de Personal de Base y Confianza",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f10_aOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f10_aOM.htm",
                },
                {
                        "nombre":"Total de las Plazas de Base y Confianza",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f10_bOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f10_bOM.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Honorarios",
            "icono":"Honorarios.png",
            "nombre":"11.Honorarios",
            "formatos":[
                {
                        "nombre":"Personal de Honorarios",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f11%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f11%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Declaraciones_Publicas.html",
                //"url":"Transparencia.html?ver=Declaraciones_Publicas",
            "icono":"DeclaracionesPublicas.png",
            "nombre":"12.Declaraciones Públicas",
            "formatos":[
                {
                        "nombre":"Declaraciones Patrimoniales",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f12_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f12_SC.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Datos_de_Contacto_de_la_Unidad.html",
                //"url":"Transparencia.html?ver=Datos_de_Contacto_de_la_Unidad",
            "icono":"DatosContactoUnidad.png",
            "nombre":"13.Datos de contacto de la Unidad",
            "formatos":[
                {
                        "nombre":"Domicilio de la Unidad de Transparencia",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f13_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f13_SC.htm",
                }
            ]
        },
        {
                "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/Convocatorias",
                //"url":"Transparencia.html?ver=Convocatorias",
            "icono":"Convocatorias.png",
            "nombre":"14.Convocatorias",
            "formatos":[
                {
                        "nombre":"Convocatorias a Concursos para Cargos Públicos",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f14OM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f14OM.htm",
                }
            ]
        },
        {
                "url":"https://sebiso.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/15%20-%20Programas%20Sociales",
                //"url":"Transparencia.html?ver=Programas_Sociales",
            "icono":"ProgramasSociales.png",
            "nombre":"15.Programas Sociales",
            "formatos":[
                {
                        "nombre":"Programas de Subsidio, Estímulo y Apoyo",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f15_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f15_a%20COINHI.htm",
                },
                {
                        "nombre":"Padrón de beneficiarios",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f15_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f15_b%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/Relaciones%20Laborales",
                //"url":"Transparencia.html?ver=Relaciones_Laborales",
            "icono":"RelacionesLaborales.png",
            "nombre":"16.Relaciones Laborales",
            "formatos":[
                {
                        "nombre":"Condiciones Generales de Trabajo",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f16_aOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f16_aOM.htm",
                },
                {
                        "nombre":"Recursos Públicos",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f16_bOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f16_bOM.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Informacion_Curricular",
            "icono":"InformacionCurricular.png",
            "nombre":"17.Informacion Curricular",
            "formatos":[
                {
                        "nombre":"Información Curricular",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f17%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f17%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Sanciones_Administrativas.html",
                //"url":"Transparencia.html?ver=Sanciones_Administrativas",
            "icono":"SancionesAdministrativas.png",
            "nombre":"18.Sanciones Administrativas",
            "formatos":[
                {
                        "nombre":"Servidores Publicos Sancionados",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f18_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f18_SC.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Servicios",
            "icono":"Servicios.png",
            "nombre":"19.Servicios",
            "formatos":[
                {
                        "nombre":"Servicios",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f19%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f19%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://oficialiamayor.hidalgo.gob.mx/transparencia/48rubros/Tramites.html",
                //"url":"Transparencia.html?ver=Tramites",
            "icono":"Tramites.png",
            "nombre":"20.Trámites",
            "formatos":[
                {
                        "nombre":"Trámites",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f20%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f20%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Presupuesto_e_Informes_Semestrales.html",
                //"url":"Transparencia.html?ver=Presupuesto_e_Informes_Semestrales",
            "icono":"PresupuestoInformesTrimestrales.png",
            "nombre":"21.Presupuesto e Informes Trimestrales",
            "formatos":[
                {
                        "nombre":"Presupuesto Anual",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f21_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f21_a%20COINHI.htm",
                },
                {
                        "nombre":"Gasto trimestral",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f21_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f21_b%20COINHI.htm",
                },
                {
                        "nombre":"Cuenta Pública",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f21_c%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f21_c%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Deuda_Publica.html",
                //"url":"Transparencia.html?ver=Deuda_Publica",
            "icono":"DeudaPublica.png",
            "nombre":"22.Deuda Pública",
            "formatos":[
                {
                        "nombre":"Deuda Pública",
                        "xlsx":"http://s-finanzas.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f22SFP.xlsx",
                        "html":"http://s-finanzas.hidalgo.gob.mx/transparencia/htm/a69_f22SFP.htm",
                }
            ]
        },
        {
            //"url":"https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/net/DetalleRubro/23.Comunicaci%C3%B3n%20Social%20y%20Publicidad",
                //"url":"Transparencia.html?ver=Comunicacion_Social_y_Publicidad",
            "icono":"ComunicacionSocialPublicidad.png",
            "nombre":"23.Comunicación Social y Publicidad",
            "formatos":[
                {
                        "nombre":"Programa Anual de Comunicación Social",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f23_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f23_a%20COINHI.htm",
                },
                {
                        "nombre":"Erogación de Recursos de Comunicación Social",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f23_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f23_b%20COINHI.htm",
                },
                {
                        "nombre":"Tiempos Oficiales",
                        "xlsx":"http://radioytelevision.hidalgo.gob.mx/transparencia/xlsx/a69_f23_c.xlsx",
                        "html":"http://radioytelevision.hidalgo.gob.mx/transparencia/htm/a69_f23_c.htm",
                },
                {
                        "nombre":"Información Relacionada a Tiempos Oficiales",
                        "xlsx":"http://radioytelevision.hidalgo.gob.mx/transparencia/xlsx/a69_f23_d.xlsx",
                        "html":"http://radioytelevision.hidalgo.gob.mx/transparencia/htm/a69_f23_d.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Resultados_de_Auditorias.html",
                //"url":"Transparencia.html?ver=Resultados_de_Auditorias",
            "icono":"ResultadosAuditorias.png",
            "nombre":"24.Resultados de Auditorías",
            "formatos":[
                {
                        "nombre":"Auditorías",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f24_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f24_SC.htm",
                }
            ]
        },
        {
                //"url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Dictamenes_de_Estados_Financieros.html",
                //"url":"Transparencia.html?ver=Dictamenes_de_Estados_Financieros",
            "icono":"DictamenesFinancieros.png",
            "nombre":"25.Dictámenes de Estados Financieros",
            "formatos":[
                {
                        "nombre":"Estados Financieros",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f25%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f25%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/26.%20Asignaci%C3%B3n%20de%20Recursos%20P%C3%BAblicos%20a%20Personas",
                //"url":"Transparencia.html?ver=Asignacion_de_Recursos_Publicos_a_Personas",
            "icono":"AsignacionRecursosPublicosPersonas.png",
            "nombre":"26.Asignacion de Recursos Publicos a Personas",
            "formatos":[
                {
                        "nombre":"Personas a Quienes se asignó Recursos Públicos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f26%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f26%20COINHI.htm",
                }
            ]
        },
        {
                //"url": "https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/27.Concesiones",
                //"url":"Transparencia.html?ver=Concesiones",
            "icono":"Concesiones.png",
            "nombre":"27.Concesiones",
            "formatos":[
                {
                        "nombre":"Concesiones, Contratos, Convenios, Permisos, Licencias y Autorizaciones",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f27%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f27%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Licitaciones_Publicas",
            "icono":"LicitacionesPublicas.png",
            "nombre":"28.Licitaciones Públicas",
            "formatos":[
                {
                        "nombre":"Procedimientos de Licitación Pública e Invitación a cuando menos tres Personas",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f28_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f28_a%20COINHI.htm",
                },
                {
                        "nombre":"Procedimientos de Adjudicación Directa",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f28_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f28_b%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Informes.html",
                //"url":"Transparencia.html?ver=Informes",
            "icono":"Informes.png",
            "nombre":"29.Informes",
            "formatos":[
                {
                        "nombre":"Informes",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f29%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f29%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://u-planeacion.hidalgo.gob.mx/transparencia/48rubros/Estadisticas_Generadas.html",
                //"url":"Transparencia.html?ver=Estadisticas_Generales",
            "icono":"EstadisticasGenerales.png",
            "nombre":"30.Estadísticas Generadas",
            "formatos":[
                {
                        "nombre":"Estadísticas",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f30%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f30%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Informe_de_Avances_y_Documentos_Financieros.html",
                //"url":"Transparencia.html?ver=Informe_de_Avances_y_Documentos_Financieros",
            "icono":"InformeAvancesDocumentosFinancieros.png",
            "nombre":"31.Informe de Avances y Documentos Financieros",
            "formatos":[
                {
                        "nombre":"Informe de Estados Financieros",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f31_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f31_a%20COINHI.htm",
                },
                {
                        "nombre":"Informe Contable, Presupuestal y Programático",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f31_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f31_b%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Padron_de_Proveedores_y_Contratistas.html",
                //"url":"Transparencia.html?ver=Padron_de_Proveedores_y_Contratistas",
            "icono":"PadronProveedoresContratistas.png",
            "nombre":"32.Padrón de Proveedores y Contratistas",
            "formatos":[
                {
                        "nombre":"Padrón de Proveedores y Contratistas",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f32_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f32_SC.htm",
                }
            ]
        },
        {
            //"url":"https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/net/DetalleRubro/33.Convenios%20con%20Sectores%20Social%20y%20Privados",
                //"url":"Transparencia.html?ver=Convenios_con_Sectores_Social_y_Privados",
            "icono":"ConveniosSectoresSocialPrivado.png",
            "nombre":"33.Convenios con Sectores Social y Privados",
            "formatos":[
                {
                        "nombre":"Convenios de Coordinación y Concertación",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f33%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f33%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://oficialiamayor.hidalgo.gob.mx/transparencia/48rubros/Inventario_de_Bienes.html",
                //"url":"Transparencia.html?ver=Inventario_de_Bienes",
            "icono":"InventarioBienes.png",
            "nombre":"34.Inventario de Bienes",
            "formatos":[
                {
                        "nombre":"Inventario de Bienes Muebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_a%20COINHI.htm",
                },
                {
                        "nombre":"Alta de Bienes Muebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_b%20COINHI.htm",
                },
                {
                        "nombre":"Bajas de Bienes Muebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_c%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_c%20COINHI.htm",
                },
                {
                        "nombre":"Inventario de Bienes Inmuebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_d%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_d%20COINHI.htm",
                },
                {
                        "nombre":"Alta de Bienes Inmuebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_e%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_e%20COINHI.htm",
                },
                {
                        "nombre":"Bajas de Bienes Inmuebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_f%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_f%20COINHI.htm",
                },
                {
                        "nombre":"Donaciones de Bienes Muebles e Inmuebles",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f34_g%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f34_g%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Recomendaciones_y_Atencion_en_Materia_de_Derechos_Humanos",
            "icono":"RecomendacionesAtenciónMateriaDerechosHumanos.png",
            "nombre":"35.Recomendaciones y Atención en Materia de Derechos Humanos",
            "formatos":[
                {
                        "nombre":"Recomendaciones de Derechos Humanos Emitidas por la CNDH",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f35_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f35_a%20COINHI.htm",
                },
                {
                        "nombre":"Recomendaciones de Derechos Humanos Casos Especiales",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f35_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f35_b%20COINHI.htm",
                },
                {
                        "nombre":"Las Recomendaciones de Derechos Humanos Org. Int. CNDH",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f35_c%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f35_c%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Resoluciones_y_Laudos_de_Juicios.html",
                //"url":"Transparencia.html?ver=Resoluciones_y_Laudos_de_Juicios",
            "icono":"ResolucionesLaudosJuicios.png",
            "nombre":"36.Resoluciones y Laudos de Juicios",
            "formatos":[
                {
                        "nombre":"Resoluciones y Laudos",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f36_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f36_SC.htm",
                }
            ]
        },
        {
                //"url": "https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/37.Mecanismos%20de%20Participaci%C3%B3n%20Ciudadana",
                //"url":"Transparencia.html?ver=Mecanismos_de_Participacion_Ciudadana",
            "icono":"MecanismosParticipacionCiudadana.png",
            "nombre":"37.Mecanismos de Participación Ciudadana",
            "formatos":[
                {
                        "nombre":"Mecanismos de Participación Ciudadana",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f37_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f37_a%20COINHI.htm",
                },
                {
                        "nombre":"Resultados de los Mecanismos de Participación Ciudadana",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f37_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f37_b%20COINHI.htm",
                }
            ]
        },
        {
                //"url": "https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/38.Programas%20Ofrecidos",
                //"url":"Transparencia.html?ver=Programas_Ofrecidos",
            "icono":"ProgramasOfrecidos.png",
            "nombre":"38.Programas Ofrecidos",
            "formatos":[
                {
                        "nombre":"Programas que Ofrecen",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f38_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f38_a%20COINHI.htm",
                },
                {
                        "nombre":"Tramites a los Programas que Ofrecen",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f38_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f38_b%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://s-contraloria.hidalgo.gob.mx/transparencia/48rubros/Actas_y_Resoluciones_del_Comite_de_Transparencia.html",
                //"url":"Transparencia.html?ver=/Actas_y_Resoluciones_del_Comite_de_Transparencia",
            "icono":"ActasResolucionesComiteTransparencia.png",
            "nombre":"39.Actas y Resoluciones del Comité de Transparencia",
            "formatos":[
                {
                        "nombre":"Informe de Sesiones",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f39a_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f39a_SC.htm",
                },
                {
                        "nombre":"Informe de Resoluciones",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f39b_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f39b_SC.htm",
                },
                {
                        "nombre":"Actas Integrantes del Comité",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f39c_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f39c_SC.htm",
                },
                {
                        "nombre":"Calendario de Sesiones del comité",
                        "xlsx":"http://s-contraloria.hidalgo.gob.mx/transparencia/xls/2018/a69_f39d_SC.xlsx",
                        "html":"http://s-contraloria.hidalgo.gob.mx/transparencia/htm/a69_f39d_SC.htm",
                }
            ]
        },
        {
                "url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Evaluacion_y_Encuestas_a_Programas_Financiados_con_Recursos_Publicos.html",
                //"url":"Transparencia.html?ver=Evaluacion_y_Encuestas_a_Programas_Financiados_con_Recursos_Publicos",
            "icono":"EvaluacionencuestasProgramas.png",
            "nombre":"40.Evaluacion y Encuestas a Programas Financiados con Recursos Públicos",
            "formatos":[
                {
                        "nombre":"Evaluaciones",
                        //"xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f40_a%20COINHI.xlsx",
                        //"html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f40_a%20COINHI.htm",
                        "xlsx":"http://s-finanzas.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f40_aSFP.xlsx",
                        "html":"http://s-finanzas.hidalgo.gob.mx/transparencia/htm/a69_f40_aSFP.htm",
                },
                {
                        "nombre":"Encuestas",
                        //"xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f40_b%20COINHI.xlsx",
                        //"html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f40_b%20COINHI.htm",
                        "xlsx":"http://s-finanzas.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f40_bSFP.xlsx",
                        "html":"http://s-finanzas.hidalgo.gob.mx/transparencia/htm/a69_f40_bSFP.htm",
                }
            ]
        },
        {
                //"url": "https://sedeco.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/41.Estudios%20Pagados%20con%20Recursos%20P%C3%BAblicos",
                //"url":"Transparencia.html?ver=Estudios_Pagados_con_Recursos_Publicos",
            "icono":"EstudiosPagadosRecursosPublicos.png",
            "nombre":"41.Estudios Pagados con Recursos Públicos",
            "formatos":[
                {
                        "nombre":"Estudios Pagados con Recursos Públicos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f41%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f41%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://oficialiamayor.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/42.%20Listados%20Jubilados%20y%20Pensionados",
                //"url":"Transparencia.html?ver=Listado_de_Jublidados_y_Pensionados",
            "icono":"ListadoJubiladosPencionados.png",
            "nombre":"42.Listado de Jubilados y Pensionados",
            "formatos":[
                {
                        "nombre":"Jubilados y Pensionados Leyenda",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f42_aOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f42_aOM.htm",
                },
                {
                        "nombre":"Jubilados y Pensionados Listado",
                        "xlsx":"http://oficialiamayor.hidalgo.gob.mx/transparencia/xlsx/2022/a69_f42_bOM.xlsx",
                        "html":"http://oficialiamayor.hidalgo.gob.mx/transparencia/htm/2022/a69_f42_bOM.htm",
                }
            ]
        },
        {
                //"url":"https://s-finanzas.hidalgo.gob.mx/transparencia/48rubros/Ingresos_Recibidos_por_Cualquier_Concepto.html",
                //"url":"Transparencia.html?ver=Ingresos_Recibidos_por_Cualquier_Concepto",
            "icono":"IngresosRecibidosCualquierConcepto.png",
            "nombre":"43.Ingresos Recibidos por Cualquier Concepto",
            "formatos":[
                {
                        "nombre":"Ingresos Recibidos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f43_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f43_a%20COINHI.htm",
                },
                {
                        "nombre":"Responsables de Recibir los Ingresos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f43_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f43_b%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"https://oficialiamayor.hidalgo.gob.mx/transparencia/48rubros/Donaciones_Hechas_a_Terceros.html",
                //"url":"Transparencia.html?ver=Donaciones_Hechas_a_Terceros",
            "icono":"DonacionesHechasTerceros.png",
            "nombre":"44.Donaciones Hechas a Terceros",
            "formatos":[
                {
                        "nombre":"Donaciones hechas a Terceros en Dinero",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f44_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f44_a%20COINHI.htm",
                },
                {
                        "nombre":"Donaciones Hechas a Terceros en Especie",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f44_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f44_b%20COINHI.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Catalogo_Documental_y_Guia_de_Archivos",
            "icono":"CatalogoDocumentalGuiaArchivos.png",
            "nombre":"45.Catálogo Documental y Guía de Archivos",
            "formatos":[
                {
                        "nombre":"Catálogo de Disposición y Guía de Archivos",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f45%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f45%20COINHI.htm",
                }
            ]
        },
        {
                "url": "https://s-turismo.hidalgo.gob.mx/transparencia/48rubros/Actas_de_Sesiones_Opiniones_y_Recomendaciones_de_Consejos_Consultivos.html",
                //"url":"Transparencia.html?ver=Actas_de_Sesiones_Opiniones_y_Recomendaciones_de_Consejos_Consultivos",
            "icono":"ActasSesionesOpinionesRecomendacionesConsejosConsultivos.png",
            "nombre":"46.Actas de Sesiones, Opiniones y Recomendaciones de Consejos Consultivos",
            "formatos":[
                {
                        "nombre":"Actas del Consejo Consultivo Ciudadano",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f46a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f46a%20COINHI.htm",
                },
                {
                        "nombre":"Opiniones del Consejo Consultivo Ciudadano",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f46b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f46b%20COINHI.htm",
                }
            ]
        },
        {
                "url":"https://procuraduria.hidalgo.gob.mx/Transparencia/Rubros/DetalleRubro/Solicitud%20de%20Intervecion%20de%20%20Comunicaciones",
                //"url":"Transparencia.html?ver=Solicitud_de_Intervencion_de_Comunicaciones",
            "icono":"SolicitudIntervencionComunicaciones.png",
            "nombre":"47.Solicitud de Intervencion de Comunicaciones",
            "formatos":[
                {
                        "nombre":"Intervenciones de comunicaciones",
                        "xlsx":"http://procuraduria.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f47_aPGJEH.xlsx",
                        "html":"http://procuraduria.hidalgo.gob.mx/transparencia/htm/a69_f47_aPGJEH.htm",
                },
                {
                        "nombre":"Localización Geográfica",
                        "xlsx":"http://procuraduria.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f47_bPGJEH.xlsx",
                        "html":"http://procuraduria.hidalgo.gob.mx/transparencia/htm/a69_f47_bPGJEH.htm",
                },
                {
                        "nombre":"Mensaje de Solicitudes a empresas para la intervención de comunicaciones privadas",
                        "xlsx":"http://procuraduria.hidalgo.gob.mx/transparencia/xlsx/2020/a69_f47_cPGJEH.xlsx",
                        "html":"http://procuraduria.hidalgo.gob.mx/transparencia/htm/a69_f47_cPGJEH.htm",
                }
            ]
        },
        {
                //"url":"Transparencia.html?ver=Informacion_de_Utilidad_o_Relevante",
            "icono":"InformacionUtilidadRelevante.png",
            "nombre":"48.Informacion de Utilidad o Relevante",
            "formatos":[
                {
                        "nombre":"Interés Público",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f48_a%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f48_a%20COINHI.htm",
                },
                {
                        "nombre":"Preguntas Frecuentes",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f48_b%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f48_b%20COINHI.htm",
                },
                {
                        "nombre":"Transparencia Proactiva",
                        "xlsx":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/xlsx/a69_f48_c%20COINHI.xlsx",
                        "html":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/Articulo69/htm/a69_f48_c%20COINHI.htm",
                }
            ]
        }
]

window._my_rubrosHistoricos = [
    {
        "anio" : "2023",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_23.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_23.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_23.zip"
            },/*
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_23.zip"
            },*/
        ]
    },{
        "anio" : "2022",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_22.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_22.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_22.zip"
            },
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_22.zip"
            },
        ]
    },{
        "anio" : "2021",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_21.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_21.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_21.zip"
            },
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_21.zip"
            }
        ]
    },{
        "anio" : "2020",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_20.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_20.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_20.zip"
            },
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_20.zip"
            }
        ]
    },{
        "anio" : "2019",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_19.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_19.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_19.zip"
            },
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_19.zip"
            }
        ]
    },{
        "anio" : "2018",
        "descripcion" : "Disponibilidad de los trimestres anteriores",
        "trimestres" : [
            {
                "trimestre" : "Primer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_1Trim_18.zip"
            },
            {
                "trimestre" : "Segundo Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_2Trim_18.zip"
            },
            {
                "trimestre" : "Tercer Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_3Trim_18.zip"
            },
            {
                "trimestre" : "Cuarto Trimestre",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_4Trim_18.zip"
            }
        ]
    },{
        "anio" : "2015 - 2017",
        "descripcion" : "Ejercicios Anteriores",
        "trimestres" : [
            {
                "trimestre" : "Plataforma Nacional",
                "url" : "https://consultapublicamx.inai.org.mx/vut-web/?idSujetoObigadoParametro=2131&idEntidadParametro=13&idSectorParametro=21"
            }
        ]
    },{
        "anio" : "Información Histórica 21 Rubros",
        "descripcion" : "Ejercicios Anteriores",
        "trimestres" : [
            {
                "trimestre" : "Descargar",
                "url":"https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/historico_art69/COINHI_17.zip"
            }
        ]
    }
]

window._my_ultimasNoticias = [
     /*
    {
        "imagen" : "https://sedeco.hidalgo.gob.mx/img/t_corto.jpeg",
        "url" : "http://transparenciadocs.hidalgo.gob.mx/dependencias/contraloriat/dir1/Documentos/Convocatoria_2023.pdf",
        "titulo" : "Concurso Nacional Transparencia en Corto 2023",
        "fecha" : "",
    },
   
    {
        "imagen" : "https://sedeco.hidalgo.gob.mx/img/fondo.png",
        "url" : "https://sedeco.hidalgo.gob.mx/img/fondo.pdf",
        "titulo" : "Fondo para el desarrollo económico y la competitividad empresarial",
        "fecha" : "15 de Mayo de 2023",
    },
    */
]
window._my_redes = [
    /*
    {
        "class" : "fa-brands fa-facebook-f",
        "link" : "https://www.facebook.com/coinhihgo",
        "titulo" : "Facebook",
    },{
        "class" : "fa-brands fa-instagram",
        "link" : "https://instagram.com/coin.hi",
        "titulo" : "Instagram",
    },{
        "class" : "fa-brands fa-twitter",
        "link" : "https://twitter.com/hgo_coinhi",
        "titulo" : "X",
    },
    */
]

window._my_titular = [
    {
        "nombre" : "Carlos Henkel Escorza",
        "imagen" : "https://cdn.hidalgo.gob.mx/gobierno/images/gabinete/CarlosHenkelEscorza.png",
        "funcion" : "                                                                             "
    }
]

window._my_gob_face = ""
window._my_gob_x = ""
//window._my_gob_face = "https://www.facebook.com/gobhidalgo"
//window._my_gob_x = "https://twitter.com/gobiernohidalgo"

window._my_secretaria = "Corporación Internacional Hidalgo"
window._my_icono = "https://cdn.hidalgo.gob.mx/gobierno/images/iconosSec/Economia.svg"
window._my_funciones = "Promover la captación de inversión nacional y/o extranjera; difundir las ventajas competitivas de la entidad a nivel nacional e internacional; fortalecer, gestionar y coordinar el proceso de instalación y/o ampliación de proyectos estratégicos de inversiones productivas; ser el enlace entre parques industriales, desarrolladores inmobiliarios y Gobierno del Estado para la validación de propuestas de ubicación de nuevas inversiones; así como vincular al sector empresarial a los programas de cooperación internacional en el ámbito industrial y económico, que impulsen su productividad. Contribuyendo en la generación de empleos directos y al desarrollo del estado de Hidalgo."
window._my_ubicacion = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.366726416378!2d-98.78913347816797!3d20.109348584055013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a1483f0088cd%3A0x7ca904b3622ca274!2sSecretaria+de+Desarrollo+Econ%C3%B3mico!5e0!3m2!1ses-419!2smx!4v1542311849869"
window._my_contacto = "\n\
<p>771 717 80 00 Ext. 8117<br/>Camino Real de la Plata #222, 2º Piso Local 1, Fraccionamiento Zona Plateada CP. 42084</p>\n\
<p>Pachuca de Soto, Hidalgo, México</p>\n\
"