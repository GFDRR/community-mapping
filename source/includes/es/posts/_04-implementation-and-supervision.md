<div class="c-box-image">
    <img src="/images/posts/4/chapterpic-implementation-2.jpg" alt="chapterpic-implementation" />
</div>

# Implementación y supervisión

Luego de haber explicado la etapa de planeamiento y logística del proyecto, vamos a considerar las actividades que se desempeñarán durante un proyecto de cartografía. Vamos a analizar la metodología de recolección de datos (conocida como la estrategia de captura de datos), programación del proyecto y el flujo de trabajo diario, control de calidad y reportes.

## 4.1 Recolección de datos
Una consideración importante en un proyecto de cartografía es la estrategia de recolección de datos. ¿Cómo saldrán los cartógrafos todos los días, recolectarán la información, regresarán a la oficina y la ingresarán a la base de datos de OpenStreetMap? ¿Cómo harán estas tareas de manera efectiva y precisa?

Lamentablemente, no hay una sola receta para una estrategia perfecta de recolección de datos. Hay demasiadas variables: el área sobre la cual se está elaborando el mapa, el modelo de datos, los recursos disponibles, etc. No obstante, podemos recomendar algunos métodos que han sido exitosos en el pasado.

Vamos a asumir que los cartógrafos están usando Field Papers y cualquier formulario de medición adicional necesario para elaborar el mapa. Asumimos esto porque, como se señaló en el capítulo sobre diseño del proyecto, se pueden crear Field Papers incluso cuando no hay imágenes disponibles. Por el momento vamos a omitir las metodologías que no se basan en papeles, como el uso de GPS y dispositivos móviles. Por supuesto que usted puede incluirlas en su proceso cuando lo diseñe.


### 4.1.1 Creación de mapas de referencia

Todos los días, los equipos de cartografía saldrán al campo con pizarras, bolígrafos y papeles. Antes de empezar el trabajo de campo, hay que hacer algunos preparativos. Los cartógrafos tienen que saber dónde van, cómo orientarse cuando estén ahí y cómo usar las características existentes del mapa para posicionar de forma correcta las nuevas.

Para fines de orientación, se puede proveer a los equipos de cartografía con imágenes aéreas impresas en color. Esto puede ser un poco costoso, pero las imágenes son una gran ayuda para ubicar lugares en el terreno, sobre todo en zonas densas. Además, los mapas impresos también sirven para que los equipos se orienten, especialmente si la información existente incluye nombres de calles y puntos importantes de referencia.

Una vez que los cartógrafos estén orientados en el campo (entiendan dónde están y puedan relacionar su ubicación con las posiciones en las imágenes impresas y del mapa de base), estarán listos para recolectar las características nuevas. Por lo general, esto se realiza con una combinación de Field Papers y formularios de medición. (Como se indica en la sección 2.4, los Field Papers son mapas OSM impresos que sirven de boceto para que los cartógrafos dibujen características nuevas sobre el mapa).


#### 4.1.1.1 Trazados en imágenes

Trazar líneas y polígonos sobre las imágenes es una excelente manera de producir información de base antes de ir al campo. Como suele ser fácil identificar carreteras sobre las imágenes, el trazado hará que las carreteras estén disponibles sobre el mapa de base impreso.

Supongamos que está recolectando atributos de edificios. Si los cartógrafos dibujan los edificios antes de ir al campo, pueden imprimir Fiel Papers que ya tienen todos los polígonos de los edificios marcados. Luego pueden recolectar los atributos fácilmente, al enumerar los edificios en el Field Paper y completar el formulario de medición marcado con el mismo número.


#### 4.1.1.2 Elaboración de mapas de referencia y Field Papers

En cualquier proyecto, debe haber un responsable de generar mapas de referencia y Field Papers. Los gerentes pueden realizar esta tarea o bien delegarla individualmente a cada equipo de cartógrafos. De ser posible, se recomienda que esta tarea la hagan los gerentes, porque llevarán un registro de las áreas sobre las que cada equipo elabora un mapa y pueden asegurarse de que estén siempre equipados con los papeles apropiados. Crear e imprimir Field Papers puede consumir algo de tiempo todos los días, se recomienda tener esto en cuenta cuando se programan las actividades.

### 4.1.2 Definición de las áreas de elaboración de mapas diarias

Todos los días, se enviarán equipos de cartógrafos a distintas partes del área seleccionada. Por consiguiente, una de las primeras tareas será determinar cómo se ven esas unidades más pequeñas de cada área. Por ejemplo, supongamos que cada par de cartógrafos saldrá a hacer mediciones de campo durante cuatro horas todos los días. Esto significa que tendrá que proveerles los recursos (Field Papers, formularios de medición y mapas de referencia) para cubrir un área que se estima llevará alrededor de cuatro horas relevar. También tendrá que darles papeles para un área adyacente de un tamaño similar, sobre la que podrán empezar a trabajar si la primera área lleva menos de cuatro horas.

Como se muestra en la figura 4.1, puede subdividir el área meta de dos maneras: creando una malla o definiendo áreas con límites naturales. En términos de tiempo de preparación, es más fácil usar el sistema de malla, ya que puede imprimir una malla grande de Papeles de Campo, y asignar un papel a cada equipo de cartografía cada día. Por otro lado, desde una perspectiva de inspección, parece mucho más lógico seguir límites ya existentes como carreteras y mapearlo todo en un bloque establecido. Este modo de organización de áreas puede requerir más preparación, pero resultará más eficiente a largo plazo.


Figura 4.1 Opciones para subdividir un área de cartografía diario
a. Malla de zona
<div class="c-box-image">
    <img src="/images/posts/4/4-1-a-2.jpg" alt="4-1a" />
</div>
b. Subdivisión de área por límites naturales, como bloques limitados por carretera
<div class="c-box-image">
    <img src="/images/posts/4/4-1-b-2.jpg" alt="4-21b" />
</div>
<em>Fuente: Imágenes del panel "a" de [Field Papers](http://www.fieldpapers.org)</em>

Es aconsejable dividir el área meta desde un primer momento.  Si es posible, antes del trabajo de campo, aunque necesitará tener loa datos de carretera. Si no, puede reservar algo de tiempo en los primeros días para que los equipos de topografía cartografíen todas las carreteras, lo cual facilitará la división del área total en áreas de cartografía diario.

Cuando lo haya hecho, sabrá cuántos de estos "bloques" se encuentran su área meta y podrá estimar el tiempo y el personal que necesitará para la cartografía. Digamos, por ejemplo, que tiene un área meta que subdivide en 20 bloques, un ejemplo parcial de lo mostrado en la figura 4.2. Entonces, estima que se tardará unas cuatro horas en cartografiar y dos en editar cada bloque, lo cual implica que necesitará un par de cartógrafos para capear un bloque cada día. Si cuenta con dos equipos de cartografía, medir el área meta entera le llevará 20 días de trabajo; si cuenta con dos equipos de cartografía, le llevará 10 días de trabajo, y así sucesivamente.


Figura 4.2 Ejemplo de un área meta con "bloques" en Dhaka, Bangladesh
<div class="c-box-image">
    <img src="/images/posts/4/4-2-2.jpg" alt="4-2" />
</div>
<em>Fuente: OpenStreetMap</em>

¿Cómo afrontar este flujo de trabajo? Dé un bloque para cartografiar a cada equipo cada mañana.  Imprima Papeles de Campo que cubran las áreas a cartografiar y dibuje un límite alrededor de un área específica o explíquesela directamente. Deles formularios adicionales (formularios topográficos, si los usa) y los mismos materiales con un cuadrado adyacente donde puedan cartografiar si les sobra tiempo. (Por esta razón, como se explica en la caja 4.1, los equipos deben contar con encargos de bloque que no sean adyacentes el uno al otro todos los días).

Los equipos vuelven a la oficina por la tarde y comienzan la edición. El gerente estará presente para aclarar cualquier duda sobre la cartografía y la edición y para asegurarse de que todo se suba a OSM sin problemas. El proceso se repite al día siguiente, lo cual asegura que el área meta se cartografíe en el tiempo previsto.

<div class="c-box">
    <span class="box-title"><b>Recuadro 4.1 Cartografiar bloques no adyacentes</b></span>
    <p>Se aconseja no encargar cartografiar bloques adyacentes a distintos equipos el mismo día. Al hacerlo aumentaría la probabilidad de conflictos de edición, lo cual sucede cuando dos equipos intentan editar las mismas características al mismo tiempo.  Al encargar bloques no adyacentes a cada equipo, los equipos de cartografía pueden continuar la actividad si finalizan un bloque antes de lo previsto.  Por ello, es mejor organizar las actividades de cartografía diariamente siguiendo un patrón de ajedrez, como el mostrado en la figura B4.1.1.</p>
    Figura B4.1.1. Ejemplo de cartografía de cuadrados no adyacentes en Guagua, Pámpana, Filipinas
    <div class="c-box-image">
        <em>Fuente: Datos de OpenStreetMap</em>
    </div>
</div>

### 4.1.3 Recolección de datos de campo

Veamos más de cerca la primera mitad del trabajo de cartografía: recolección de datos de campo, o cartografía de campo. Supongamos que el día de trabajo se divide en dos, la primera mitad para cartografía de campo y la segunda para edición. Por supuesto, este horario puede modificarse dependiendo de las necesidades del proyecto.

Cada equipo de cartografía necesitará los materiales de cartografía necesarios cada día y las indicaciones sobre dónde cartografiar. Los materiales exactos con los que contará cada equipo de cartografía varían según los recursos disponibles y la metodología del proyecto. Como mínimo, cada equipo de cartografía necesitará los siguientes suministros:

<div class="c-list">
    <ul>
        <li>Papel de campo del área del día</li>
        <li>Formularios de cartografía (si son necesarios) para la recolección de atributos</li>
        <li>Tableta sujetapapeles para guardar los papeles y escribir sobre ella</li>
        <li>Bolígrafo</li>
        <li>(Opcional) Mapa impreso que muestre imágenes de satélite a color para la orientación</li>
    </ul>
</div>

El objetivo de esta metodología de cartografía es dibujar características en el Papel de Campo y marcarlas con números que las identifiquen. Después, en un folio aparte, los cartógrafos pueden anotar los atributos de cada característica.  En el caso de las mediciones detalladas, como una cartografía de construcción, se puede incluir un formulario para que rellenen los cartógrafos por cada edificio para asegurar que los atributos se estén recolectando por orden.

### 4.1.4 Elaboración de formularios de cartografía

Los equipos de cartografía deben contar con suficientes formularios todos los días. Un buen formulario de cartografía ha de ser simple, claro y organizado. Como se muestra en la figura 4.3, en el formulario se han de rellenar el nombre del topógrafo, la fecha, el número de identificación (ID) de la parte del área meta que están cartografiando, un número de identificación del Papel de Campo correspondiente al formulario y un número de identificación para la característica específica que están cartografiando.

El resto de los formularios deben reflejar todos los atributos que se están recolectando como parte de su modelo de datos (tratado previamente en la sección 2.2.3). Es decir, por cada atributo en el modelos de datos, el formulario debe tener un campo para rellenar. Para los atributos que solo pueden tener valores dentro de un rango (por ejemplo, de «pésimo» a «óptimo»), es aconsejable incluir casillas de verificación o de opciones en el formulario Los formularios de cartografía deben explicarse minuciosamente en la segunda parte del entrenamiento de proyecto, en el que se incluye la identificación de características. Los cartógrafos necesitarán practicar para identificar los diferentes atributos incluidos en el modelo de datos y para aprender a rellenar los formularios correctamente.


### 4.1.5 Ingreso de datos (edición)

El segundo componente del trabajo de cartografía es el ingreso de datos. Normalmente, los equipos salen a cartografiar por la mañana, vuelven a la oficina, y editan por la tarde.  Se trata de un proceso suave, aunque si no cuenta con el espacio equipamiento necesario para que cada equipo se pueda instalar y editar al mismo tiempo, deberá aplicar soluciones creativas, como hacer que la mitad de los equipos cartografíen por la tarde y editen por la mañana.

Es mejor que se ingresen los datos el mismo día en que han sido recolectados o, como mucho, el día siguiente. Aunque los cartógrafos van anotando las características y rellenando los formularios durante la recolección de datos, a veces recuerdan bastante información solo por haber observado el área, y esa información se preserva mejor si se edita poco después de la recolección de datos. (Véase el recuadro 4.2 sobre ajustes personalizados, que pueden ayudar a los cartógrafos a añadir características a los mapas). Por ello, es mejor que los cartógrafos sean los que se encarguen de la edición, en vez de dividir los trabajos de edición y cartografía, aunque este sistema se ha llevado a cabo con cierto éxito previamente.

Introducir los datos justo después de la recolección y asegurarse de que los cartógrafos se involucren en el proceso ayuda a mantener un flujo de información eficiente y preciso desde el campo de trabajo hasta la base de datos OSM. Asegúrese de que los formularios de cartografía y los Papeles de Campo se archiven correctamente, en caso de que necesite recuperarlos al revisar los datos.


<div class="c-box">
    <span class="box-title"><b>Recuadro 4.2. Ajustes personalizados</b></span>
    <p>Muy probablemente, los cartógrafos usen el software offline JOSM o el editor en línea iD durante la edición. Debido a que probablemente use un modelo de datos personalizado, querrá añadir un menú personalizado al software de edición para añadir las características específicas que los cartógrafos han recolectado. Esto se puede hacer creando un archivo de ajustes personalizados, que implementa un menú que facilita la inclusión de las etiquetas OSM correctas.</p>

    <p>You can read more about creating custom presets here at
    <b><a href="http://learnosm.org/en/editing/creating-presets/" target="_blank">http://learnosm.org/en/editing/creating-presets/</a></b>.
    HOT has created an easy-to-use visual editor for creating presets files, available at
    <b><a href="http://visualtags.hotosm.org/" target="_blank">http://visualtags.hotosm.org/</a></b>
</div>

Figura 4.3 Formulario de cartografía de construcción de muestra
<div class="c-box-image">
    <img src="/images/posts/4/4-3-2.jpg" alt="4-3" />
</div>

### 4.1.6 Programación de tareas de proyecto

La fase de implementación se verá beneficiada por un horario de proyecto claro. Deberá crear una línea de tiempo de ejemplo durante el diseño del proyecto (como se ha visto en la sección 2.2.5). Los horarios incluirán más detalle a medida que los componentes del proyecto se vayan definiendo más claramente.

De todas las tareas que forman parte de un proyecto de cartografía, algunas de las que parecen más simples pueden ser las más problemáticas. Por ejemplo, si desea importar data, esta es una tarea crucial, ya que el trabajo de recolección de datos no podrá comenzar hasta que este haya acabado. Si da dos semanas para la importación de datos y se tarda cuatro, el resto de tareas, y por tanto el proyecto entero, se verán retrasados Algunas de las tareas igualmente importantes son la finalización del modelo de datos y la instalación de fuentes de imágenes alternativas, si se utilizan. Encárguese de estas tareas desde el comienzo y asigne bastante tiempo para completarlas.

Los gerentes también han de hacer horarios claros tanto para ellos mismo como para el resto de los cartógrafos durante la fase de implementación.  Es aquí cuando la meticulosidad de la fase de diseño del proyecto para definir claramente el área meta y el modelo de datos facilita el ritmo del proyecto. Los gerentes deben dividir el área del proyecto en bloques de cartografía diario, enumerarlos y asignárselos cada día a los equipos de cartografía. El tamaño de los bloques puede variar: durante las primeras semanas de un proyecto piloto, se va volviendo más claro qué área puede cubrir un equipo en un día.  Una vez comprendido esto, será más fácil calcular cuántos equipos y cuántos días se necesitarán para completar la actividad de cartografía.

La organización de la actividad de cartografía es importante para completar el trabajo diario, pero también se ha de tener en cuenta el tiempo necesario para los apeadores para la preparación de informes y logística. Por ejemplo, si el gerente supervisa cuatro equipos de cartografía, un día cualquiera sería así:

<div class="c-list">
    <ul>
        <li><b>8–9 a.m.</b> Asignar cada equipo de cartografía a un bloque no trabajado del área meta. Crear e imprimir Papeles de Campo para cada equipo. Conseguir los formularios de recolección de datos y añadirlos a las carpetas o tablas sujetapapeles de los equipos de cartografía.</li>
        <li><b>9 a.m.</b> Reunirse con los equipos de cartografía. Explicar a cada equipo dónde se encuentra su área y cómo llegar. Entregar el papeleo y enviar a los equipos al campo.</li>
        <li><b>9 a.m.–medio día</b> Acompañar a cada uno de los equipos de cartografía al campo para ayudarles y asesorar su trabajo.</li>
        <li><b>Medio día–1 p.m.</b> Almuerzo</li>
        <li><b>1–4 p.m.</b> Reunirse con los equipos de cartografía en la oficina y organizarles en los ordenadores para la edición. Ayudar a los equipos con cualquier duda sobre el proceso de edición. Al principio del proyecto especialmente, revisar las ediciones de cada equipo antes de que las suban al OpenStreetMap. Hacer una lista de errores comunes y explicárselos a todos con ayuda de un proyector.</li>
        <li><b>4–5 p.m.</b> Organizar el papeleo del día y empezar a preparar el día siguiente. Archivar los formularios y Papeles de Campo completados para un futuro. Marcar las áreas completadas en el mapa del proyecto. Reunirse con los otros gerentes para tratar cualquier problema surgido.</li>
    </ul>
</div>

## 4.2 Desafíos comunes

Existen algunas amenazas comunes que cualquier proyecto de cartografía deberá afrontar. Es mejor identificar estas potenciales amenazas desde un principio y diseñar planes de seguridad por si algo fuese mal.

### 4.2.1 Obstáculos

Entre las principales amenazas para un proyecto de cartografía se encuentran los obstáculos que resultan en una pérdida de tiempo y trabajo. Por ejemplo, si está importando datos de una agencia gubernamental, pero no puede comenzar a la cartografía hasta que haya finalizado la importación, asegúrese de asignar suficiente tiempo anticipado a la adquisición de datos, atención de permiso para usarlos e importarlos.

Debe identificar desde un principio si hay una semana de festivos religiosos un mes después de que haya comenzado el proyecto y nadie acudirá al trabajo. Deberá pensar en algún modo de conectar a la plantilla si la conexión a Internet no es estable. Otros obstáculos comunes son la disponibilidad de hardware (por ejemplo, contar con suficientes ordenadores para los equipos de cartografía) o la capacidad de imprimir suficientes Papeles de Campo y formularios de cartografía para abastecer a los cartógrafos.

### 4.2.2 Gestión del tiempo

Muchas veces se pierde tiempo donde no creíamos. Cada vez se va perdiendo más tiempo y ralentizando el proyecto.  Una manera común de perder el tiempo es durante las reuniones matutinas. Una o dos personas de cada 10 siempre llegan tarde. No permita que estos retrasos paren el ritmo de trabajo de los demás y pruebe a implantar una regla de puntualidad. También se pierde tiempo con la logística – por ejemplo, imprimiendo Papeles de Campo, preparando los ordenadores y usando Internet. Lleve estos procesos a cabo con fluidez para ahorrar tiempo y energía.

Además, el transporte puede quitarle tiempo a los trabajadores. Asegúrese de añadir tiempo para el transporte en el horario de los trabajadores. No puede esperar que un equipo cartografíe durante cuatro horas seguidas si necesitan una hora para ir y volver del área de cartografía. Piense en maneras más rápidas de acceso. Por ejemplo, se puede permitir a los equipos de cartografía llevarse el equipo de recolección de datos a casa y dirigirse directamente al sitio de trabajo por la mañana. Por supuesto, esta opción requiere que confíe en que empezarán a trabajar con puntualidad.


### 4.2.3 Cansancio

Aquellos cartógrafos que recolecten datos todos los días pueden acabar cansándose.  Es trabajo físicamente demandante y puede, a veces, sentirse monótono. Generalmente los cartógrafos hacen un mejor trabajo si mantienen su entusiasmo. Encontrar formas de mantenerlos motivados puede ayudar mucho, por ejemplo, variando en ocasiones el trabajo, proporcionando capacitaciones frecuentes para aprender nuevas cosas y ofreciendo incentivos por buen trabajo.

## 4.3 Control de Calidad

Uno de los trabajos principales del administrador es asegurar el control de calidad de los datos que se están recabando y registrando en OpenStreetMap. El control de calidad involucra tres tareas principales:
<div class="c-list">
    <ul>
        <li>Verificación diaria de datos</li>
        <li>Re-inspección</li>
        <li>Análisis de datos</li>
    </ul>
</div>

### 4.3.1 Verificación diaria de datos

La forma más inmediata de asegurar la calidad es permaneciendo en contacto cercano con los equipos de cartografía, llevando registro de sus ediciones, y discutiendo preguntas e inquietudes cuando surgen.

Las nuevas ediciones y adiciones deben ser revisadas y validadas diariamente o al menos semanalmente. Esta es una importante tarea de supervisión porque captar los errores y malas prácticas de edición desde el principio significa que pueden corregirse y que los editores aprenden a hacer las cosas de forma apropiada. Los administradores deben ser altamente competentes con el software JOSM, usando las herramientas de validación y búsqueda para examinar los datos del proyecto. (El recuadro 4.3 discute algunas de estas herramientas.) Los aspectos claves a revisar son

<div class="c-list">
    <ul>
        <li><b>Topología</b> (tales como superponer edificios o relaciones incorrectas);</li>
        <li><b>Etiquetado</b> errores (etiquetas con faltas de ortografía o combinaciones clave-valor mal utilizadas); y</li>
        <li><b>Integridad de los datos</b> (si todos los atributos en los modelo de datos han sido recolectados o no).</li>
    </ul>
</div>

Los gerentes deben estar siempre disponibles durante las horas de edición para responder preguntas y verificar si hay errores. Cada día deben revisar el trabajo de sus cartógrafos y discutir cualquier error con ellos. También deben revisar errores comunes usando el proyector para que todos puedan aprender y beneficiarse.

<div class="c-box">
    <span class="box-title"><b>Recuadro 4.3 Herramientas de Garantía de Calidad OSM</b></span>
    <p>Muchas herramientas pueden ayudar a los usuarios OSM a verificar errores en los datos. La herramienta de validación JOSM le permite correr un análisis y verificar si hay errores antes de cargar los cambios. Una herramienta en línea llamada KeepRight (<b><a href="http://keepright.at/" target="_blank">keepright.at</a></b>) proporciona un análisis similar y puede ayudarle a encontrar y corregir errores. Para una lista completa y actualizada de herramientas de aseguramiento de calidad, visite
    <b><a href="wiki.openstreetmap.org/wiki/Quality_assurance" target="_blank">wiki.openstreetmap.org/wiki/Quality_assurance</a></b>
</div>

### 4.3.2 Re-inspección

Otro método de control de calidad es llevar a cabo inspecciones secundarias a intervalos regulares. Un día cada semana o dos, del 5 al 10 por ciento del trabajo completado debe ser re-investigado. Los equipos de investigación pueden re-investigar el trabajo uno del otro, o, de ser posible, sus administradores mas experimentados pueden encargarse de las revisiones.

Las áreas seleccionadas para la re-investigación deben seleccionarse al azar de diferentes áreas, aunque al menos un área muestra debe tomarse de cada equipo de cartografía a través del curso del proyecto. El proceso de re-investigación involucra recabar los mismos datos dos veces, comparar esos grupos de datos, y buscar errores. Por ejemplo, si usted está mapeando edificios y se han cartografiado 1,000 edificios, un re-investigador podría cubrir de 50 a 100 de esos edificios. Basados en el porcentaje de error que encuentre, puede extrapolar el porcentaje probable de error en toda la investigación.

Quantum GIS. Dicho software permite consultas y análisis avanzados de los datos para responder preguntas como estas:

<div class="c-list">
    <ul>
        <li>¿A qué características les faltan etiquetas de atributos?</li>
        <li>¿Dónde se ven los valores fuera de lo común?</li>
        <li>¿Dónde hay nombres mal escritos?</li>
    </ul>
</div>

Información mas detallada sobre control de calidad y análisis de datos puede encontrarse en el documento "Revisión de Datos3 de OSM" de HOT. Para averiguar mas sobre revisiones de calidad llevadas a cabo después de la finalización del proyecto, consulte el registro "Comunidades científicas" en la tabla 2.1 sobre recursos de colaboración.

La re-investigación tiene tres funciones principales:
<div class="c-list">
    <ul>
        <li>Les da a sus equipos de cartografía la oportunidad de verificar y corregir errores en su trabajo.</li>
        <li>Permite a los administradores encontrar errores recurrentes que cometen los equipos de cartografía y discutirlos con los equipos para mejorar su trabajo en el futuro.</li>
        <li>Proporciona una métrica importante para el reporte del proyecto: el porcentaje de error. Un margen de error de 5 por ciento o menos será probablemente aceptable, aunque, por supuesto, usted debe procurar la mayor exactitud posible.</li>
    </ul>
</div>

### 4.3.3 Análisis de datos

Al igual que la re-investigación ayuda a mejorar el proceso de recolección de datos, analizar los datos en JOSM mejora el proceso de edición. Otra forma de analizar los datos es a través de un análisis GIS, que puede beneficiar tanto la recolección como la edición de los datos.

Es una buena idea revisar regularmente (una o dos veces al mes) los datos proyectados en software GIS tal como

## 4.4 Reporte

La mayoría de los proyectos de cartografía tienen un patrocinador financiero y socios que estarán interesados en reportes del proyecto. Dependiendo del largo del proyecto, los reportes pueden emitirse a varios intervalos, y definitivamente incluirán un reporte final del proyecto.

¿Con qué frecuencia deben presentarse reportes? Por supuesto, esto dependerá de los requisitos de los donantes, pero para proyectos de seis meses o menos, una buena regla general es entregar un reporte intermedio y un reporte final, así como reportes breves del progreso de la cartografía cada dos a cuatro semanas.

Para proyectos mas largos, usted puede desear entregar reportes intermedios trimestralmente.

Los reportes intermedios y final deberán incluir evaluación extensiva del proyecto a la fecha. Deben resumir las actividades y resultados del proyecto, incluyendo sociedades, actividades de cartografía, y el progreso de recolección de datos. Las lecciones aprendidas y los cambios al diseño del proyecto original también deben detallarse. Además, estos reportes son el lugar apropiado para documentar los resultados de sus procesos de control de calidad, particularmente el nivel estimado de exactitud de los datos y su metodología de verificación de errores.

Los mas frecuentes reportes intermedios breves no necesitan ser tan detallados. El propósito de estas actualizaciones regulares es reportar sobre el progreso de la cartografía y mantener métricas sobre la velocidad de recolección de datos. Por ejemplo, si el proyecto principalmente involucra desarrollar recolección de datos, usted querrá reportar e número de edificios cartografiados cada semana, el tiempo anticipado de finalización, la tasa de cartografía por día, y así. Esto ayudará a evaluar cómo se desarrolla su proceso de recolección de datos con el paso del tiempo.

Las consultas GIS pueden ayudarle a proporcionar buenas métricas. Estas consultas pueden responder preguntas tales como estas:

<div class="c-list">
    <ul>
        <li>¿Qué porcentaje del área objetivo se ha mapeado?</li>
        <li>¿Cuántos edificios han sido mapeados?</li>
        <li>¿Cuál es el número promedio de edificios que un equipo de cartografía completa cada día?</li>
        <li>¿Cuál es el tiempo estimado para terminar?</li>
    </ul>
</div>

Para una muestra de reporte del proyecto, vea el Apéndice 6.1.

<div class="c-box">
    <span class="box-title"><b>Recuadro 4.4 Lista de Verificación de Implementación del Proyecto</b></span>
    <p>Durante la fase de implementación, deben completarse las siguientes tareas:</p>
    <p><b>La recolección de datos</p></b>
    <div class="c-list">
        <ul>
            <li>Crear e imprimir mapas de consulta</li>
            <li>Dividir el área objetivo en bloques diarios de cartografía; enumerar y hacer una hoja de cálculo de estadísticas, proporcionando a cada bloque su propia fila</li>
            <li>Crear e imprimir formularios de investigación</li>
            <li>Crear e imprimir el manual de capacitación de la investigación</li>
            <li>Hacer un horario diario de trabajo</li>
            <li>Crear un programa detallado de implementación del proyecto</li>
        </ul>
    </div>
</div>

<p><b>Control de Calidad</b></p>

<div class="c-list">
    <ul>
        <li>Determinar métodos para monitorear la calidad de los datos, e incluir estos tanto en su programa del proyecto como en el horario diario</li>
    </ul>
</div>
<p><b>Presentación de informes</p></b>
<div class="c-list">
    <ul>
        <li>Determinar qué métricas incluir en los reportes del proyecto</li>
        <li>Agregar tareas al programa para asegurar que las métricas se recaben y documenten regularmente</li>
        <li>Mantener estadísticas cada día en una hoja de cálculot</li>
    </ul>
</div>
