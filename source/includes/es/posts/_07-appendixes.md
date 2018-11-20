<div class="c-box-image">
    <img src="/images/posts/appendixes/chapterpic-appendices.jpg" alt="chapterpic-appendices">
</div>

# Apéndices

## Apéndice 1 Diseño del Modelo de Datos

El modelo de datos es un gráfico de las características y atributos de aquellas características que se planea recoger en el campo. Como se describe en el capítulo 3, diseñar el modelo de datos es un proceso para determinar, en coordinación con los colaboradores, las prioridades del proyecto. Después de haber definido un modelo de datos se debe determinar cómo se llevará a cabo la cartografía de las características con un sistema de marcado de OpenStreetMap. En OSM, las características se dibujan como puntos, líneas o polígonos y se aplican etiquetas a estas características para describir sus atributos. Las etiquetas más comunes se encuentran en el sitio Wiki OSM en <b><a href="http://wiki.openstreetmap.org/wiki/Map_Features/" target="_blank">wiki.openstreetmap.
org/wiki/Map_Features</a></b>.

OpenStreetMap utiliza un sistema de etiquetado libre. Esto significa que se puede utilizar cualquier etiqueta deseada para describir atributos. Sin embargo, es importante que los usuarios de todo el mundo acuerden convenciones de etiquetado similares para representar características y así mantener la uniformidad de datos. Por ejemplo, es por esta razón que casi todas las etiquetas están en idioma inglés. Es probable que en el sitio Wiki de OSM ya exista una convención de etiquetado para la mayoría de atributos que se deseen cartografiar. También es útil el sitio <b><a href="http://taginfo.openstreetmap.org/" target="_blank">taginfo.openstreetmap.
org</a></b>, que proporciona estadísticas acerca de las etiquetas que se usan en la base de datos OSM. En algunos casos cuando se lleva a cabo la cartografía nuevas características o atributos, puede ser necesario inventar nuevas etiquetas OSM. Es una buena idea analizar esto con la lista de correos local y enviar un mensaje a <b>tagging@openstreetmap.org</b>.

El modelo de datos a continuación (gráfico A6.1.1) diseñado para el proyecto piloto de Open Cities Daca muestra cómo se cartografiaron los atributos como etiquetas OpenStreeMap.

<b>Figura A6.1.1 Muestra de Modelo de Datos, Proyecto Open Cities Daca</b>

### SISTEMA DE ETIQUETADO OSM para <b>Open Cities Daca</b>

####1. Calles
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Streets.jpg" alt="Streets">
</div>

####2. Edificios
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Buildings.jpg" alt="Buildings">
</div>

####3. Drenaje de aguas pluviales
<b>3.1. Líneas de drenaje (ways):</b>

waterway = drain

drain:covered = {yes | no}

<b>3.2. Tapas de pozo (nodes):</b>

manhole = {drain | sewer}

####4. Fuente de agua pública

<b>4.1. Punto de Vista</b>

amenity=drinking_water

pump:active = {yes | no}

<b>4.2. Bomba de mano</b>

man_made = water_well

pump = manual

pump:active = {yes | no}

<b>4.3. Tanque elevado</b>

man_made = water_tower

<b>4.4. Tanque de reserva</b>

man_made = water_tank

####5. Baños públicos

amenity = toilets

toilets:num_chambers = # of toilets

<em>Fuente: Open Cities Daca.
Nota: OSM = OpenStreetMap</em>

## Apéndice 2 Muestra del formulario de recolección de datos

<b>Figura 6.2.1  Formulario de recolección de datos de edificios, Proyecto Open Cities Daca</b>

### Open Cities Daca - Formulario de recolección de datos de edificios

Nombre del Agrimensor: _________________________________________________________  &nbsp;

Fecha: _____________

Identificación del Reporte de Campo: _________  &nbsp; Número Sala / Bloque:  _________  &nbsp;

Identificación del Mapa del Edificio: _________

1. Información general:

1.1 Posesión #: _________

Nombre del edificio: _________________________________________________________

Nombre de la calle: ___________________________________________________________

1.2 Utilización del edificio:
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Building-Usage.jpg" alt="Building-usage">
 </div>

2.1 Cantidad de pisoss: &nbsp;&nbsp; 2.2 ¿Irregularidades verticales? &nbsp;Sí / No

2.3 ¿Tiene características antisísmicas? &nbsp; Sí / No (dirección larga / corta )

<div class="c-box-image">
    <img src="/images/posts/appendixes/6-2_Building-Characteristics.jpg" alt="Building-Characteristics">
</div>

<b>2.7 Condición física visible (grietas, humedad, deterioro): &nbsp; a) Mala &nbsp; b) Promedio &nbsp; c) Buena</b>

Observaciones:


## Apéndice 3 Muestra de formulario de autorización de recolección de datos

La siguiente carta (Figura 6.3.1) fue adaptada de EUROSHA, un proyecto piloto de la Unión Europea en Burundi, la República Centroafricana, Chad y Kenia Para ver más ejemplos, ingresar a <b><a href="http://wiki.openstreetmap.org/wiki/Import/GettingPermission" target="_blank">http://wiki.openstreetmap.org/wiki/Import/GettingPermission</a></b>.

<b>Figura 6.3.1 Muestra de carta de solicitud de licencia de datos</b>

Nosotros, los abajo firmantes, ………………………………………………………………………… otorgamos a la Fundación OpenStreetMap, en las condiciones que se estipulan a continuación, una licencia mundial, libre de regalías, no exclusiva, perpetua e irrevocable para realizar cualquier acto que tenga restricción por derechos de autor, derechos de base de datos o cualquier derecho que se relacione con cualquier cosa dentro de los Contenidos, sea en el medio original o cualquier otro. Estos derechos incluyen explícitamente el uso comercial y no excluyen cualquier campo de actividades. Estos derechos incluyen, sin limitación, el derecho de sublicenciar el trabajo a través de múltiples niveles de sublicenciatarios y demandar por cualquier violación de derecho de autor directamente relacionada con los derechos de OSMF en virtud de estos términos. Al punto que se permita en virtud de las leyes locales aplicables y las convenciones de derechos de autor, también renunciamos y/o acordamos no hacer valer contra OSMF o sus licenciatarios cualquier derecho moral que podamos tener en los Contenidos.

Concedemos a OSMF que solo puede usar o sublicenciar nuestros Contenidos como parte de una base de datos y únicamente en virtud de los términos de una o más de las siguientes licencias:  ODbL 1.0 para la base de datos y DfCL 1.0 para los contenidos individuales de la base de datos; CC-BY-SA 2.0, o cualquier otra licencia gratuita y abierta (por ejemplo, <b><a href="http://www.opendefinition.org/okd/" target="_blank">http://www.opendefinition.org/okd/</a></b>) como pueda escogerse ocasionalmente mediante un voto de la membresía de OSMF y aprobado por lo menos por 2/3 votos de mayoría de los contribuyentes activos.

Permitimos a OSMF que nos mencione o cite al propietario del derecho de autor de conformidad con nuestros deseos o los del titular de los derechos de autor. La cita aparecerá en la siguiente página <b><a href="http://wiki.openstreetmap.org/
wiki/Attribution" target="_blank">http://wiki.openstreetmap.org/
wiki/Attribution</a></b>.

Ofrecemos a OSMF los siguientes datos:
…………………………………………………………………………………………………………………………
…………………………………………………………………………………………………………………………
…………………………………………………………………………………………………………………………
…………………………………………………………………………………………………………………………
………………………………………………………

Elaborado en ………………………………, el …………………………… en duplicado.


Firma del donante:  Firma del beneficiario

(Precedida por las palabras manuscritas «leído y aprobado»)

<em>Fuente: Proyecto EUROSHA</em>


## Apéndice 4 Muestra del informe del proyecto

Es una buena idea proporcionar resúmenes del informe de progreso cada dos a cuatro semanas durante un proyecto de cartografía. Pueden ser breves, documentos de 1 a 2 páginas que destaquen cualquier noticia o cambio en el diseño del proyecto, el progreso de las actividades y las métricas sobre la recolección de datos y control de calidad. La muestra a continuación sugiere el contenido que estos resúmenes pueden incluir.

### Actualización del Open Cities - 1 de julio, 2014
I. Avances en el proyecto
Un breve párrafo que resuma los nuevos avances del proyecto. Por ejemplo, se puede registrar aquí cualquier cambio inesperado en el proyecto, sea positivo o negativo. En otras palabras, cualquier noticia del proyecto, tales como reuniones con colaboradores clave, actividades de cartografía y ajustes en el diseño del proyecto.
<p><div class="c-list">
    <ul>
        <li>las viñetas</li>
        <li>son buenas</li>
        <li>para documentar el progreso</li>
        <li>de una forma simple</li>
    </ul>
</div></p>

II. Progreso de las actividades de cartografía
Un mapa sencillo producido con el software GIS puede brindar una explicación visual rápida del progreso.
<div class="c-box-image">
    <img src="/images/posts/appendixes/6-4.jpg" alt="6-4">
 </div>
 <em>Los edificios terminados se superponen en la zona objetivo.</em>

III. Recopilación de datos y parámetros de control de calidad
<div class="c-box-image">
    <img src="/images/posts/appendixes/Ap4_Data-Collection-and-Quality-Control-Metrics.jpg" alt="Data-Collection-and-Quality-Control-Metrics">
</div>

## Apéndice 5 Modelo de carta de apoyo para los cartógrafos

<div class="c-box-image">
    <img src="/images/posts/appendixes/6-5_Government-of-Nepal.jpg" alt="Sample-Letter-of-Support-for-Mappers-from-Govt-of-Nepal">
</div>

<em>Fuente: Open Cities Katmandú</em>

## Apéndice 6 Lista de control de planificación del proyecto Open Cities

A continuación, una lista de control que se puede seguir al planear un proyecto de cartografía. Esta lista es útil para tener en cuenta los diversos factores que son parte del desarrollo de un proceso eficiente y efectivo.

<div class="c-box">
  <p><b>Sensibilización de colaboradores</p></b>
<p><div class="c-list">
    <ul>
        <li>Identifique a los colaboradores pertinentes en el gobierno, el entorno académico y en la sociedad civil</li>
        <li>Reúnase con colaboradores potenciales para tratar la asistencia y las áreas de colaboración</li>
        <li>Comunique las metas del proyecto con la comunidad de OpenStreetMap y reúnase con cartógrafos locales</li>
    </ul>
</div></p>
  <p><b>Delimitación del ámbito de trabajo</p></b>
<p><div class="c-list">
    <ul>
        <li>Obtenga un mapa que contenga los límites del área objetivo</li>
        <li>Estime la cantidad de características en el área a incluir en el mapa, tales como caminos, edificios, etc.</li>
        <li>Redacte su modelo de datos</li>
        <li>Elabore el modelo de datos para las etiquetas de OpenStreetMap</li>
        <li>Fije un marco aproximado de tiempo para completar la recolección de datos, incluya los días festivos que afectarán la labor</li>
    </ul>
</div></p>
  <p><b>Creación del equipo</p></b>
<p><div class="c-list">
    <ul>
        <li>Defina una estructura de gerencia</li>
        <li>Determine las fuentes de su personal y cómo será compensado</li>
        <li>Contrate personal</li>
    </ul>
</div></p>
  <p><b>Evaluación de recursos</p></b>
<p><div class="c-list">
    <ul>
        <li>Haga un listado de los datos digitales y en papel ya disponibles</li>
        <li>Decida si importará algún dato; de ser así, cree un plan de acción y fije un plazo</li>
        <li>Cree un mapa donde aparezcan las partes de su área objetivo donde no hay imágenes disponibles</li>
        <li>Decida si utilizará dispositivos GPS, teléfonos inteligentes o ambos; de ser así, adquiéralos</li>
        <li>Confirme que los datos de base necesarios están disponibles en Field Papers</li>
    </ul>
</div></p>
  <p><b>Logística</p></b>
<p><div class="c-list">
    <ul>
        <li>Identifique dónde trabajará su personal</li>
        <li>Asegúrese de que haya una buena conexión a internet</li>
        <li>Elabore una lista del equipo que necesita y adquiéralo</li>
    </ul>
</div></p>
</div></p>
  <p><b>Capacitación</p></b>
<p><div class="c-list">
    <ul>
        <li>Identifique quién dirigirá la capacitación y qué material se tratará</li>
        <li>Recopile los materiales de capacitación necesarios, elabore un manual de capacitación</li>
        <li>Determine un sitio para realizar la capacitación  (puede ser dónde se encuentra la oficina del proyecto)</li>
        <li>Elabore un programa de capacitación</li>
    </ul>
</div></p>
  <p><b>Recopilación de datos</p></b>
<p><div class="c-list">
    <ul>
        <li>Cree e imprima mapas de consulta</li>
        <li>Divida el área objetivo en bloques de cartografía diarios; enumere y haga una hoja de cálculo de estadísticas donde a cada bloque cuente con su propia fila</li>
        <li>Cree e imprima formularios de recolección de datos</li>
        <li>Cree e imprima un manual de capacitación para la recolección de datos</li>
        <li>Fije un horario de trabajo diario</li>
        <li>Cree un programa detallado de implementación del proyecto de control de calidad</li>
        <li>Determine los métodos para supervisar la calidad de los datos, e inclúyalos en el programa del proyecto y en el horario diario.</li>
        </ul>
</div></p>
  <p><b>Presentación de informes</p></b>
<p><div class="c-list">
    <ul>
        <li>Determine qué métricas incluir en los reportes del proyecto</li>
        <li>Agregue tareas al programa para asegurar la recopilación y documentación regular de las métricas</li>
        <li>Ingrese cada día las estadísticas en una hoja de cálculo</li>
    </ul>
</div></p>
</div>
