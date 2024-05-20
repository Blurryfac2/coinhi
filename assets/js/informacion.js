const _my_anos = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
const _my_anos_dos = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
const _my_inicial = 2014
const _my_final = 2023
const _my_trimestre = 1
window._my_informacion = [
    {
        nombre: 'Armonización contable',
        enlace: 'armonizacion',
        ruta: 'http://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/armonizacion/',
        inicial: _my_inicial,
        final: _my_final,
        trimestre: _my_trimestre,
        anos: _my_anos_dos,
        modal: 1,
        sub: [
            {
                titulo: 'Información contable',
                carpeta: 'contable/',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Estado de actividadessss',
                        archivo: 'EdoActividades.pdf',
                    },{
                        nombre: 'Estado de situación financiera',
                        archivo: 'EdoSitFinanciera.pdf',
                    },{
                        nombre: 'Estado de variación en la hacienda pública',
                        archivo: 'VariacionHacPubl.pdf',
                    },{
                        nombre: 'Estado de cambios en la situación financiera',
                        archivo: 'EdoCambSitFinan.pdf',
                    },{
                        nombre: 'Estado de flujos de efectivo',
                        archivo: 'EdoFlujoEfe.pdf',
                    },{
                        nombre: 'Informe sobre pasivos contingentes',
                        archivo: 'InfPasContigentes.pdf',
                    },{
                        nombre: 'Notas a los estados financieros',
                        archivo: 'Notas.pdf',
                    },{
                        nombre: 'Estado analítico del activo',
                        archivo: 'EdoAnaActivo.pdf',
                    },{
                        nombre: 'Estado analítico de la deuda y otros pasivos',
                        archivo: 'EdoAnaDeuyOtrosPas.pdf',
                    },
                ],
            },{
                titulo: 'Información presupuestaria',
                carpeta: 'presupuestaria/',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Estado analitico de ingresos',
                        archivo: 'EdoAnaIng.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. administrativa',
                        archivo: 'EdoAnaPreEgreClaAdm.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. económica',
                        archivo: 'EdoAnaEjePreEgreClaEco.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. por objeto de gasto',
                        archivo: 'EdoAnaPreEgClaObjGas.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. funcional',
                        archivo: 'EdoAnaEjePreEgreClaFun.pdf',
                    },{
                        nombre: 'Endeudamineto neto',
                        archivo: 'EndNeto.pdf',
                    },{
                        nombre: 'Interes de la deuda',
                        archivo: 'IntDeuda.pdf',
                    },{
                        nombre: 'Indicadores de postura fiscal',
                        archivo: 'IndPosFis.pdf',
                    },
                ],
            },{
                titulo: 'Información programática',
                carpeta: 'programatica/',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Gasto por categoría programática',
                        archivo: 'GastCatProg.pdf',
                    },{
                        nombre: 'Programas y proyectos de inversión',
                        archivo: 'ProgProInv.pdf',
                    },{
                        nombre: 'Indicadores de resultado',
                        archivo: 'IndRes.pdf',
                    },
                ],
            },{
                titulo: 'Inventario de bienes muebles e inmuebles',
                carpeta: 'bienes/',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Relación de bienes muebles que componen el patrimonio',
                        archivo: 'BienesMuebles.pdf',
                    },{
                        nombre: 'Relación de bienes inmuebles que componen el patrimonio',
                        archivo: 'BieInm.pdf',
                    },{
                        nombre: 'Relación de cuentas bancarias productivas específicas',
                        archivo: 'Ctas_Bancarias.pdf',
                    },{
                        nombre: 'Relación de esquemas bursátiles y de coberturas financieras',
                        archivo: 'Esquemas%20Bursatiles.pdf',
                    },
                ],
            },{
                titulo: 'Título quinto anual',
                carpeta: 'Titulo%20Quinto/Anual/',
                tipo: 'Anual',
                temas: [
                    {
                        nombre: 'Calendario de egresos',
                        archivo: 'Calendario%20de%20Egresos.pdf',
                    },{
                        nombre: 'Calendario de ingresos',
                        archivo: 'Calendarizado%20de%20Ingresos.pdf',
                    },{
                        nombre: 'Difusión ciudadana',
                        archivo: 'Difusion%20Ciudadana.pdf',
                    },{
                        nombre: 'Egreso por Objeto del Gasto',
                        archivo: 'Egreso%20por%20Objeto%20del%20Gasto.pdf',
                    },{
                        nombre: 'Iniciativa de Ley',
                        archivo: 'Iniciativa%20de%20Ley.pdf',
                    },
                ],
            },{
                titulo: 'Título quinto trimestral',
                carpeta: 'Titulo%20Quinto/Trimestral/',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Ejercicio y destino del gasto',
                        archivo: 'Eje_Destino_Gasto.pdf',
                    },{
                        nombre: 'Información de obligaciones pagadas',
                        archivo: 'Info_Obligaciones_Pagadas.pdf',
                    },{
                        nombre: 'Montos pagados por apoyos y subsidios',
                        archivo: 'Montos_Pagados_Ayudas_Subsidios.pdf',
                    },{
                        nombre: 'Programas con recursos concurrentes',
                        archivo: 'Programa_Recursos_Concurrentes.pdf',
                    },
                ],
            },
        ],
    },{
        nombre: 'Cuenta pública',
        enlace: 'cuenta',
        ruta: 'http://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/armonizacion/',
        inicial: _my_inicial,
        final: 2022,
        trimestre: _my_trimestre,
        anos: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014],
        indicador: 'CTA',
        modal: 1,
        sub: [
            {
                titulo: 'Información contable',
                carpeta: 'contable/',
                tipo: 'Anual',
                temas: [
                    {
                        nombre: 'Estado de actividades',
                        archivo: 'EdoAct.pdf',
                    },{
                        nombre: 'Estado de situación financiera',
                        archivo: 'EdoSitFin.pdf',
                    },{
                        nombre: 'Estado de variación en la hacienda pública',
                        archivo: 'EdoVarHacPub.pdf',
                    },{
                        nombre: 'Estado de cambios en la situación financiera',
                        archivo: 'EdoCamSitFin.pdf',
                    },{
                        nombre: 'Estado de flujos de efectivo',
                        archivo: 'EdoFluEfe.pdf',
                    },{
                        nombre: 'Informe sobre pasivos contingentes',
                        archivo: 'InfPasCon.pdf',
                    },{
                        nombre: 'Notas a los estados financieros',
                        archivo: 'Notas.pdf',
                    },{
                        nombre: 'Estado analítico del activo',
                        archivo: 'EdoAnaAct.pdf',
                    },{
                        nombre: 'Estado analítico de la deuda y otros pasivos',
                        archivo: 'EdoAnaDeuYOP.pdf',
                    },
                ],
            },{
                titulo: 'Información presupuestaria',
                carpeta: 'presupuestaria/',
                tipo: 'Anual',
                temas: [
                    {
                        nombre: 'Estado analitico de ingresos',
                        archivo: 'EdoAnaIng.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. administrativa',
                        archivo: 'EdoAnaPreEgreClaAdm.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. económica',
                        archivo: 'EdoAnaPreEgreClaEco.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. por objeto de gasto',
                        archivo: 'EdoAnaPreEgreClaObjGto.pdf',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. funcional',
                        archivo: 'EdoAnaPreEgreClaFun.pdf',
                    },{
                        nombre: 'Endeudamineto neto',
                        archivo: 'EndNeto.pdf',
                    },{
                        nombre: 'Interes de la deuda',
                        archivo: 'IntDeu.pdf',
                    },{
                        nombre: 'Indicadores de postura fiscal',
                        archivo: 'IndPosFis.pdf',
                    },
                ],
            },{
                titulo: 'Información programática',
                carpeta: 'programatica/',
                tipo: 'Anual',
                temas: [
                    {
                        nombre: 'Gasto por categoría programática',
                        archivo: 'GtoCatProg.pdf',
                    },{
                        nombre: 'Programas y proyectos de inversión',
                        archivo: 'ProProInv.pdf',
                    },{
                        nombre: 'Indicadores de resultado',
                        archivo: 'IndRes.pdf',
                    },
                ],
            },{
                titulo: 'Inventario de bienes muebles e inmuebles',
                carpeta: 'bienes/',
                tipo: 'Anual',
                temas: [
                    {
                        nombre: 'Relación de bienes muebles que componen el patrimonio',
                        archivo: 'BienesMuebles.pdf',
                    },{
                        nombre: 'Relación de bienes inmuebles que componen el patrimonio',
                        archivo: 'BienesInmuebles.pdf',
                    },{
                        nombre: 'Relación de cuentas bancarias productivas específicas',
                        archivo: 'CuentasBancarias.pdf',
                    },{
                        nombre: 'Relación de esquemas bursátiles y de coberturas financieras',
                        archivo: 'EsquemasBursatiles.pdf',
                    },
                ],
            },
        ],
    },{
        nombre: 'Disciplina financiera',
        enlace: 'disciplina',
        ruta: 'http://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/armonizacion/disciplina/',
        inicial: 2018,
        final: _my_final,
        trimestre: _my_trimestre,
        anos: [2023, 2022, 2021, 2020, 2019, 2018],
        indicador: 'DF',
        modal: 1,
        sub: [
            {
                titulo: 'Información trimestral',
                tipo: 'Trimestral',
                temas: [
                    {
                        nombre: 'Balance presupuestario',
                        archivo: 'BalancePresupuestario.xls',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. funcional',
                        archivo: 'EdoAnaIngresosDetallados.xls',
                    },{
                        nombre: 'Informe analítico de la deuda pública y otros pasivos',
                        archivo: 'InfAnaDeuyOtrosPas.xls',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. de serv. personales',
                        archivo: 'EdoAnaEjePreEgreClaSerPer.xls',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. objeto gasto',
                        archivo: 'EdoAnaEjePreEgreClaObjGto.xls',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. administrativa',
                        archivo: 'EdoAnaEjePreEgreClaAdm.xls',
                    },{
                        nombre: 'Edo. analítico del ej. del pres. de egr.: Clasif. funcional',
                        archivo: 'EdoAnaEjePreEgreClaFun.xls',
                    },{
                        nombre: 'Estado de situación financiera detallado',
                        archivo: 'EdoSitFinanciera.xls',
                    },{
                        nombre: 'Informe sobre estudios actuariales',
                        archivo: 'InfActuariales.xls',
                    },{
                        nombre: 'Informe analítico de obligaciones diferentes de financiamientos',
                        archivo: 'InfAnaObDifFin.xls',
                    },{
                        nombre: 'Proyecciones de egresos',
                        archivo: 'ProyeccionesEgre.xls',
                    },{
                        nombre: 'Proyecciones de ingresos',
                        archivo: 'ProyeccionesIng.xls',
                    },{
                        nombre: 'Resultados de egresos',
                        archivo: 'ResultadosEgre.xls',
                    },{
                        nombre: 'Resultados de ingresos',
                        archivo: 'ResultadosIng.xls',
                    },{
                        nombre: 'Guía de cumplimiento de la ley de disciplina financiera',
                        archivo: 'GuiaCumplimiento.xls',
                    },{
                        nombre: 'Proyecto presupuesto 2023',
                        archivo: 'Proyecto_Presupuesto23.pdf',
                        modal: 1,
                    },
                ],
            },
        ],
    },{
        nombre: 'Documentos de referencia',
        enlace: 'documentos',
        ruta: 'http://transparenciadocs.hidalgo.gob.mx/ENTIDADES/COINHI/2022/pdf/',
        inicial: _my_inicial,
        final: _my_final,
        trimestre: _my_trimestre,
        anos: _my_anos,
        modal: 0,
        sub: [
            {
                titulo: 'Aprobación de Egreso',
                temas: [
                    {
                        nombre: 'Aprobación del Ingreso',
                        archivo: 'ingreso_2022.pdf',
                    },{
                        nombre: 'Aprobación del Egreso',
                        archivo: 'egreso_2022.pdf',
                    },
                ],
            },{
                titulo: 'Evaluaciones de Transparencia',
                temas: [
                    {
                        nombre: 'Primer Trimestre',
                        archivo: 'Evaluacion_1.pdf',
                    },{
                        nombre: 'Segundo Trimestre',
                        archivo: 'Evaluacion_2.pdf',
                    },{
                        nombre: 'Tercer Trimestre',
                        archivo: 'Evaluacion_3.pdf',
                    },{
                        nombre: 'Cuarto Trimestre',
                        archivo: 'Evaluacion_4.pdf',
                    },
                ],
            },{
                titulo: 'Sistema de Evaluación Contable (SEVAC)',
                temas: [
                    {
                        nombre: 'Primer Trimestre',
                        archivo: 'SEVAC_1Trim.pdf',
                    },{
                        nombre: 'Segundo Trimestre',
                        archivo: 'SEVAC_2Trim.pdf',
                    },{
                        nombre: 'Tercer Trimestre',
                        archivo: 'SEVAC_3Trim.pdf',
                    },{
                        nombre: 'Cuarto Trimestre',
                        archivo: 'SEVAC_4Trim.pdf',
                    },
                ],
            },{
                titulo: 'Plan Anual de Desarrollo Archivístico (PADA)',
                temas: [
                    {
                        nombre: 'Plan anual',
                        archivo: 'PADA.pdf',
                    },
                ],
            },{
                titulo: 'Informe Anual de Cumplimiento PADA',
                temas: [
                    {
                        nombre: 'Informe anual',
                        archivo: 'PADA_ANUAL.pdf',
                    },
                ],
            },{
                titulo: 'Programa Anual de Evaluación',
                temas: [
                    {
                        nombre: 'Primer Trimestre',
                        archivo: 'PAE_1Trim.pdf',
                    },{
                        nombre: 'Segundo Trimestre',
                        archivo: 'PAE_2Trim.pdf',
                    },{
                        nombre: 'Tercer Trimestre',
                        archivo: 'PAE_3Trim.pdf',
                    },{
                        nombre: 'Cuarto Trimestre',
                        archivo: 'PAE_4Trim.pdf',
                    },
                ],
            },{
                titulo: 'Ley General de Contabilidad Gubernamental',
                temas: [
                    {
                        nombre: 'Manual de Contabilidad',
                        archivo: 'Manual_Contabilidad.pdf',
                    },
                ],
            },{
                titulo: 'Planeación aplicable',
                temas: [
                    {
                        nombre: 'Plan Estatal de Desarrollo',
                        archivo: 'PED.pdf',
                    },
                ],
            },
        ],
    },
]
