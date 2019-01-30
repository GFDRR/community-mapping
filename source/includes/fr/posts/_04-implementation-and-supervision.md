<div class="c-box-image">
    <img src="/images/posts/4/chapterpic-implementation-2.jpg" alt="chapterpic-implementation" />
</div>

# Mise en œuvre du Projet

Maintenant que nous avons discuté de la phase de planification et de la logistique, nous allons examiner les activités liées à l'établissement et gestion d’une campagne cartographique. Ce chapitre commence par une vue d'ensemble du processus de collecte de données sur le terrain et aborde quelques considérations. Puis il explore certaines séquences de flux de travaux typiques et les activités subséquentes que vous effectuerez dans le cadre de ce flux de travaux.

## 4.1 Flux de travail de collecte de données sur le terrain

Nous discuterons de la méthodologie de collecte de données sur le terrain (connue sous le nom de stratégie de capture de données), de la planification de projet et du flux de travail quotidien, du contrôle de la qualité et des rapports. La stratégie de capture de données est l’un des principaux éléments à prendre en compte dans un projet de cartographie. Comment votre équipe va-t-elle se préparer au travail de terrain qui l'attend? Comment vos cartographes vont-ils sortir chaque jour, recueillir des informations, revenir au bureau, et les saisir dans la base de données OpenStreetMap ? Et comment vont-ils le faire de façon efficace et précise ? Il s’agit également d’examiner soigneusement la procédure de levé de terrain et les différentes techniques de cartographie et de former aux diverses techniques de collecte de données et de cartographie envisagées.

Le côté pratique de la campagne de cartographie comprend les éléments communs suivants, qui obéissent généralement à ce flux de travaux:
<div class="c-list">
  <ul style="list-style-type: none;">
    <li>4.1.1   Définir le modèle de données</li>
    <li>4.1.2   Cartographier à distance</li>
    <li>4.1.3   Configurer le logiciel de collecte de données /formulaires et AQ</li>
    <li>4.1.4   Collecter des données sur le terrain</li>
    <li>4.1.5   Numériser/examiner les données (JOSM)</li>
    <li>4.1.6   Suivre la couverture et garantir l’AQ</li>
    <li>4.1.7   Exporter, analyser et utiliser les données</li>
    <li>4.1.8. Considérations générales en matière de logistique</li>
  </ul>
</div>


### 4.1.1 Définir le Modéle de Données

Rappelez-vous que votre modèle de données doit comprendre les éléments cartographiques que vous comptez recueillir pour étayer l'énoncé du problème développé dans le chapitre 2. À ce stade, vous devez inclure les attributs détaillés/indicateurs de ces éléments que vous avez l'intention de saisir au cours de votre travail sur le terrain.

Rappelez-vous : Le <strong>modèle de données</strong> décrit les caractéristiques géographiques devant être recueillies pour le site de l'étude, ainsi que les attributs (ou indicateurs) à collecter pour ces caractéristiques. À un niveau très élémentaire, ce modèle indique si l'équipe viendra recueillir des données sur (par exemple) les bâtiments, les infrastructures routières, les voies navigables, et les attributs ou indicateurs à recueillir en rapport avec ces caractéristiques.

### 4.1.2 Cartographier à Distance

Le chef de projet coordonnera les activités de cartographie pour localiser les infrastructures dans la zone d'étude à partir de l'imagerie satellitaire à haute résolution dans la plateforme OpenStreetMap. Les données créées au cours de l’exécution de cette tâche seront utilisées pour établir des cartes d'orientation pour les activités de collecte de données sur le terrain. Toutes les données doivent être soumises à la validation secondaire à distance avant le processus de collecte de données sur le terrain. La validation sur documents renvoie à l'exactitude de la géométrie de localisation en ce qui concerne les images disponibles, et à tel ou tel indicateur de base pouvant se déduire de ces images. Bien souvent, plusieurs activités de formation sont prévues dans le cadre du volet cartographie à distance de la campagne, et elles peuvent se concentrer aussi bien sur les compétences requises pour le volet cartographie à distance que sur la préparation du volet cartographie de terrain.

<strong>Activités de formation en cartographie à distance</strong>:
<div class="c-list">
    <ul>
        <li>Formation du personnel/de l'équipe sur les plateformes iD-editor et JOSM.</li>
        <li>Formation/Mapathon à l’intention des volontaires (étudiants ou populations locales), ou des partenaires de la ville. Ces événements portent généralement sur les outils OSM d'entrée de gamme, tels que iD-éditeur.
        <ul>
          <li>Mapathons : Les Mapathons sont des rassemblements qui réunissent les gens autour de la nécessité de créer des données cartographiques. Même si la localisation documentaire des infrastructures au sein de la zone d'étude est peut-être gérée par l'équipe du projet, il serait indiqué d'organiser un Mapathon pour faire connaître le projet et informer les partenaires sur l'ordonnancement des tâches dans la plateforme OSM. Une tâche secondaire peut être créée pour illustrer la procédure de localisation).</li></ul>
        </li>
      </ul>
</div>

Il est important de tenir compte de la logistique pour toute formation, que ce soit à l’intention d'une équipe interne ou du grand public. Choses à considérer:
<div class="c-list">
    <ul>
        <li><strong>Connexion Wi-Fi</strong>: Même si votre lieu de formation dispose d’une connexion Wi-Fi, il est nécessaire de tester sa capacité à accueillir le nombre de participants attendus. Il faut envisager d'utiliser des boosters ou des points d’accès pour compléter le Wi-Fi, ou comme dispositif de secours.</li>
        <li><strong>Ordinateurs</strong>: Vos locaux sont-ils équipés de machines que vous pouvez utiliser, ou vos participants sont-ils censés apporter chacun sa propre machine ? Dans ce dernier cas, ils devront alors apporter une souris d’ordinateur et s'assurer qu'ils ont suffisamment d'espace sur le disque dur pour les installations requises.</li>
        <li><strong>Espace</strong>: Quel type de salle sera disponible, et quel est en sera la configuration ? Y a-t-il suffisamment de tables et de chaises pour vos participants?</li>
        <li><strong>Énergie électrique</strong>: Vous aurez besoin d'un nombre suffisant de prises de courant pour recharger les ordinateurs portables et d’autres appareils. Des barrettes d'alimentation et des rallonges supplémentaires sont aussi une excellente idée. Dans certains cas, un groupe électrogène supplémentaire et/ou une autre source d'alimentation en électricité peut peut-être nécessaire pendant la durée de l'atelier.</li>
      </ul>
</div>

### 4.1.3 Configurer le logiciel de collecte de données /formulaires et AQ

Une fois les modèles de données sont terminés, ils doivent être convertis en des formes pouvant être utilisées par des logiciels de collecte de données comme OpenDataKit (ODK), OpenMapKit (OMK), ou Kobo Collect utilisables sur des appareils mobiles tels que les téléphones ou les tablettes.
La formation sur le terrain concernant à l’utilisation d’appareils mobiles et la lecture de cartes sera nécessaire pour l'équipe de levé. Cela comprend la formation sur les détails du modèle de données (pour l’identification et la classification des caractéristiques). La création de formulaires à partir de modèles de données et à l'aide d'outils mobiles de collecte de données sera couverte plus loin dans ce chapitre.

### 4.1.4 Collecter des données sur le terrain

Parmi les nombreuses considérations logistiques du volet collecte des données sur le terrain de la campagne de cartographie, on peut citer:
<div class="c-list">
    <ul>
        <li><strong>La participation des parties prenantes</strong>: Les projets sont encouragés à adopter une approche collaborative dans le cadre du processus de collecte de données, ce qui comprend la consultation des intervenants sur la nature des données recueillies et les modalités de collecte, et l’implication parties prenantes dans le processus de collecte. Par exemple, dans certains projets, les étudiants sont associés aux résidents locaux pour recueillir des données. Une partie prenante est un groupe qui peut affecter les résultats d'un projet ou en être affecté. L’implication des parties prenantes telles que les membres de la communauté ou des étudiants locaux, dans la planification de la collecte des données, ou dans les équipes qui procèdent effectivement à la collecte des données permet non seulement à l'équipe de terrain d’avoir une plus grande prise sur la communauté, mais de créer des opportunités et de renforcer les capacités au sein de la communauté participante. En unissant les forces, il est plus facile de faire en sorte que les données restent pertinentes et à jour, et d'éviter la duplication des efforts. Les données deviennent plus utiles et sont plus utilisées lorsque plusieurs groupes savent qu’elles existent et qu’ils sont associés dans la collecte collaborative des données en question.</li>
        <li><strong>Autorisation des autorités du district et/ou d'autres responsables</strong>: Dans de nombreux cas, les équipes de cartographie auront besoin de se munir d’une lettre d'autorisation ou d'une autre forme de permission de la part des autorités locales pour asseoir leur crédibilité et réduire les conflits potentiels qui pourraient naître au cours de la collecte des données sur le terrain. Nous recommandons que les équipes demandent cette lettre aux autorités compétentes dès que possible afin de réduire le risque de voir les activités de cartographie retardées.</li>
        <li><strong>Essais pilotes</strong>: Diviser la zone d'étude en zones de levé pouvant être couvertes par une équipe de 2 en une demi-journée. Tester la taille de ces zones. Former l'équipe de prospection à l’utilisation de l'instrument de topographie (équipement/app/carte), procéder à une petite collecte de données pilote pendant 1 à 2 jours. Utiliser les commentaires de l'équipe pour affiner l'instrument, et éventuellement la procédure sur le terrain (y compris la taille de la zone retenue). Note : En fonction du temps qu’il fait dans votre ville, il est probablement souhaitable de limiter la cartographie sur le terrain à une demi-journée d'activité, pendant qu’il fait frais (mais durant les heures diurnes). Le reste de la journée peut être mis à profit pour consolider les données.</li>
        <li><strong>Programme de collecte de données sur le terrain</strong>: Après l’essai pilote, vous devriez avoir une idée plus précise du nombre de bâtiments ou de la superficie que vous pouvez cartographier en une journée. Cela vous permettra de calculer le nombre de jours que prendra la cartographie, et à votre équipe de surveiller le processus de collecte de données sur le terrain. Lors d’élaborer ce programme, assurez-vous que vous avez tenu compte des jours fériés éventuels, de la densité des bâtiments/caractéristiques (les zones denses pouvant prendre plus de temps celles qui le sont moins), des conditions météorologiques (la saison des pluies ou la canicule pouvant ralentir le travail des équipes), et d'autres circonstances qui pourraient avoir une incidence sur le programme en question.</li>
        <li><strong>Gestion des équipes sur le terrain</strong>: Il faudra réfléchir à la façon dont vous allez gérer les cartographes sur le terrain. Comment allez-vous superviser la qualité des données recueillies et vous assurer que les cartographes couvrent entièrement les zones qui leur ont été attribuées? Comment les cartographes vont-ils communiquer entre eux et avec les chefs d'équipe lorsqu'ils ont des questions ou des soucis ? Souvent, la formule qui marche le mieux pour la gestion des opérations sur le terrain consiste à faire exécuter le travail par des petits groupes de 3 à 5 cartographes, avec un superviseur. Ces superviseurs devront contrôler régulièrement les cartographes et communiquer avec les chefs d'équipe.</li>
        <li><strong>Sûreté et sécurité</strong>: Pour les opérations de terrain, la clé de la sécurité et de la sécurité effectives est la création d'une culture de la sécurité. Chaque membre du personnel et chaque bénévole est responsable de sa propre sécurité et sûreté, et celle d'autres membres de l'équipe. Les équipes doivent discuter des risques posés par les activités de terrain, de ce qu’il y a lieu de faire pour les éviter, et de la façon de les atténuer.</li>
      </ul>
</div>

<!--
Figure 4.1 Options for Subdividing a Daily Mapping Area
a. Gridding an area
<div class="c-box-image">
    <img src="/images/posts/4/4-1-a-2.jpg" alt="4-1a" />
</div>
b. Subdividing an area by natural boundaries, such as blocks bounded by roads
<div class="c-box-image">
    <img src="/images/posts/4/4-1-b-2.jpg" alt="4-21b" />
</div>
<em>Source: Imagery in panel “a” from [Field Papers](http://www.fieldpapers.org)</em>

It is a good idea to divide the target area early in the project. If possible, do this before fieldwork begins, though you will need to have existing road data. Otherwise, you might set aside some time in the first few days for survey teams to simply map all of the roads, which will then make it easier to divide the total area into daily mapping areas.

Once you do this, you will know how many of these “blocks” are in your target area, and you can estimate exactly the time and staff you will need to survey it all. Let’s say, for example, that you have a target area that you then subdivide into 20 blocks, a partial example of which is shown in figure 4.2. You then estimate that each block will take about four hours to survey and a couple of hours to edit, which means it will take one pair of mappers to map one block every day. If you have one mapping team, it will take 20 workdays to map the entire target area; if you have two mapping teams, it will take 10 workdays, and so on.

Figure 4.2 Example of a "Blocked" Target Area in Dhaka, Bangladesh
<div class="c-box-image">
    <img src="/images/posts/4/4-2-2.jpg" alt="4-2" />
</div>
<em>Source: OpenStreetMap</em>

How would you manage this workflow? Each morning, you would give each team a block to map. You print out Field Papers that cover the areas they are supposed to map and draw a boundary around the specific area or explain it to them directly. Give them additional forms (survey forms, if you are using them) and the same materials for an adjacent square where they can map if they have extra time. (For this reason, as box 4.1 explains, teams should receive block assignments that are not adjacent to each other on any given day.)

In the afternoon, the teams will return to the office and begin editing. The manager will be there to answer questions about surveying and editing and to ensure that everything gets uploaded to OSM without problems. The next day, the process will repeat, thus ensuring that the target area is mapped in the expected time.

<div class="c-box">
    <span class="box-title"><b>Box 4.1 Mapping Nonadjacent Blocks</b></span>
    <p>It is recommended that adjacent blocks are not given to different teams to map on the same day. To do so would increase the likelihood of editing conflicts, which occur when two teams try to edit the same features at the same time. The assignment of nonadjacent blocks to each team also allows your mappers to continue mapping if their block takes less time than they expect. For these reasons, it is better to organize daily mapping activities following a checkerboard pattern, as shown in figure B4.1.1. </p>
    Figure B4.1.1 Sample Mapping of Nonadjacent Squares in Guagua, Pampanga, Philippines
    <div class="c-box-image">
        <em>Source: Data from OpenStreetMap</em>
    </div>
</div> -->

### 4.1.5 Numériser/réexaminer les données (JOSM)

Pendant ou après la collecte de données sur le terrain, les équipes les passent au crible et procèdent à leur toilettage à l’aide de l’application JOSM. Le fait d'examiner les données avant de les téléverser garantit la qualité de ce qui est partagé. Après le toilettage, toutes les données sont téléversées dans OSM. 

### 4.1.6 Suivre la couverture et garantir l’AQ

L'assurance de la qualité et le contrôle de qualité constituent le processus par lequel les cartographes vérifient les données pour s'assurer que toutes les informations téléchargées sur OSM répondent à des normes élevées aux fins d'utilisation. Ils peuvent et doivent être effectués à toutes les étapes d'une campagne de cartographie. Il existe plusieurs outils qui permettent de garantir l'assurance de la qualité des données pendant l’opération de toilettage et de téléchargement des données, ainsi que de surveillance des données après le chargement. Ces outils seront abordés à la section 4.3.

### 4.1.7 Exportation, utilisation et analyse de données

Après téléchargement sur OpenStreetMap, toutes les données recueillies pendant la cartographie de terrain peuvent être téléchargées, analysées et utilisées par les particuliers et les organisations. De nombreux outils tels que Hot Export permettent de télécharger des données sur OpenStreetMap. Et des logiciels libres tels que QGIS permettent aux utilisateurs d'analyser ces données et de s’en servir gratuitement pour créer des cartes. Ces outils et processus seront abordés ultérieurement.

### 4.1.8 Considérations générales en matière de logistique

La gestion de la logistique des opérations de terrain comporte plusieurs volets. Réfléchissez à la façon dont votre équipe agira sur les volets suivants. 

<div class="c-list">
  <ul>
    <li><strong>Espace de travail / réunion</strong>: Le besoin et les spécifications d'un espace de travail ou de réunion varient d'un projet à l'autre. Certains projets de cartographie de terrain nécessitent une base centrale accessible pendant toute la journée et dotée d’une connexion Wi-Fi, tandis que d'autres ont été gérés à partir de campements.</li>
    <li><strong>Matériel</strong>: Des volumes de travaux différents nécessiteront différents types de matériel. Par exemple, les logiciels Open Data Kit (ODK) et Kobo sont compatibles avec la plupart des appareils Androïde, mais le logiciel OMK exige des spécifications élevées.</li>
      <ul>
        <li>Quel type d'appareils mobiles utilisez-vous pour recueillir des données ? (Téléphones mobiles, tablettes, appareils GPS, etc.)</li>
        <li>Tous les membres de l'équipe ont-ils accès à des appareils de collecte de données?</li>
        <li>Tous les membres de l'équipe ont-ils accès à des ordinateurs (portables) ? Ou alors l'équipe compte-t-elle travailler suivant un système de roulement?</li>
      </ul>
    <li><strong>Transport</strong>:
      <ul>
        <li>Comment les cartographes vont-ils se déplacer sur le terrain?</li>
        <li>Le volume des travaux et la taille de la superficie objet des travaux sont-ils si importants que les cartographes auront besoin d'un moyen de transport au-delà de la zone parcourue à pied?</li>
        <li>Si les équipes/cartographes ont besoin de transport motorisé,
          <ul>
            <li>Quels sont les types de transport disponibles?
            <li>Quels sont les types de transport sont sûrs au regard du contexte et des circonstances?
            <li>Ce type de transport comporte-t-il des coûts associés? (cest-à-dire honoraires du chauffeur, frais de location, carburant)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Gestion du temps</strong>: La gestion rationnelle du temps consiste notamment à se fixer des objectifs clairs et réalistes (c’est-à-dire la superficie que chaque membre de l'équipe doit cartographier chaque jour en tenant compte de la fatigue, la météo, et d'autres complications), à créer des listes de contrôle et de tâches (c.-à-d. ce que les équipes sont censées faire chaque jour avant et après la descente sur le terrain), à établir des programmes de travail et à changer de comportement lorsque ceux-ci n’ont pas été respectés, à observer régulièrement des pauses et à entretenir une bonne communication entre les membres de l'équipe.</li>
  </ul>
</div>

## 4.2 Conception d’un instrument d’enquête

Dans ce section, nous étudierons les principes de base de la conception d’un instrument d’enquête pour compléter vos activités de collecte de données. Nous examinerons également certains des logiciels et matériels que vous pouvez utiliser pour réaliser votre enquête sur le terrain.

### 4.2.1 Qu’est-ce qu’une enquête?

D’un point de vue géographique, une enquête est une activité menée sur le terrain dans le but de recueillir des informations détaillées sur l’environnement physique. En général, l’opération consiste à effectuer un travail de cartographie à un niveau de détail impossible à obtenir à partir de l’imagerie aérienne. Ce travail est nécessaire pour établir une carte détaillée et précise. Le terme « enquête » peut également s’appliquer à la méthode de recherche permettant de recueillir des informations sur les caractéristiques, les comportements et/ou les attitudes d’une population en posant une série de questions standard à un échantillon d’individus. Le terme « enquête » décrit le processus lui-même, tandis que la série de questions — ou le questionnaire — est considérée comme un " instrument ou un outil ".

#### Qu’est-ce qu’un instrument d’enquête?
Les instruments d’enquête sont essentiellement des outils qui permettent aux cartographes de recueillir des données géospatiales sur le terrain. Une variété d’outils peut être utilisée pour la cartographie de terrain, des outils papier (cartes et questionnaires en format papier) au GPS simple en passant par les smartphones et les tablettes à fonction GPS. Les applications mobiles de collecte de données telles que OpenDataKit, OpenMapKit et KoBoCollect améliorent les méthodes traditionnelles fondées sur l’utilisation du GPS et du papier. Dans de nombreux cas, ces outils nous aident à recueillir simultanément des données géographiques et des données d’attributs.

La plupart des outils à base d’applications présentés dans ce chapitre rendent compte des caractéristiques géospatiales des données en :

enregistrant localement les coordonnées GPS des caractéristiques en question et en permettant à l’utilisateur d’ajouter des attributs au moment de l’enregistrement, ou 
permettant à l’utilisateur d’ajouter des attributs détaillés aux caractéristiques existantes (par exemple des bâtiments, des routes, des voies navigables, des caractéristiques dignes d’intérêt) sur une carte numérique, en interagissant avec cette carte sur un appareil portatif pendant qu’il se trouve sur le terrain.

### 4.2.2 Élaboration de questions d’enquête

Que vous envisagiez de procéder à une inscription sur papier ou une saisie numérique des attributs, vous devez élaborer un questionnaire qui cadre avec le modèle de données que vous avez conçu.

#### 4.2.2.1 Règles empiriques efficaces pour l’élaboration de questionnaires

Il existe quelques règles simples pour élaborer des questions d’enquête. Ces règles s’appliquent même dans les cas où les réponses attendues ou l’éventail des données à recueillir peuvent sembler simples ou évidents:

<div class="c-list">
    <ul>
        <li><strong>Faire simple</strong>: Une question ne devrait pas soulever d’autres questions. Les questions doivent être formulées clairement. Soyez bref, simple et précis.</li>
        <li><strong>Pas de questions à double sens</strong>: Ne posez pas de questions à double sens — en d’autres termes, ne posez pas de questions qui touchent plusieurs sujets, mais ne donnent qu’une seule possibilité de réponse. Si des questions de suivi sont nécessaires pour les mêmes caractéristiques de carte, il est possible d’utiliser la logique de saut : la logique de saut trace une trajectoire personnalisée où se succèdent des questions qui varient en fonction des réponses précédentes.</li>
        <li><strong>N’utilisez pas un jargon institutionnel ou universitaire</strong>: Ne présumez pas que les participants (ou les collecteurs de données) sont initiés au jargon de votre secteur d’activité. Bien qu’un terme puisse être fréquemment utilisé par votre organisation ou qu’il est employé dans des publications universitaires, il peut avoir peu de sens pour le grand public, voire aucun. N’oubliez pas que nos équipes d’enquête peuvent être choisies au sein de la population locale.</li>
        <li><strong>Tous les termes doivent être clairement définis</strong>: S’il est important d’utiliser des termes spécifiques dans le cadre de l’enquête, assurez-vous que votre formation propose une définition et une description appropriées du terme et explique son utilisation. Cela doit également être réitéré dans les notes de terrain ou à travers une note reliée à la question.</li>
        <li><strong>Pas de questions orientées</strong>: Les questions orientées sont des questions qui incitent subtilement la personne interrogée à répondre dans un sens donné. Ou, des questions dont la formulation est trop hypothétique, comme : « Quel est votre niveau de scolarité ? », ou « Quel emploi exercez-vous ? » Vous ne savez pas si le répondant a un emploi ou s’il a suivi un enseignement de type classique. Ce problème se pose davantage lorsqu’on s’adresse directement aux répondants, plutôt que dans des situations où un enquêteur fait une observation directe concernant une infrastructure.</li>
        <li><strong>Évitez des formulations négatives</strong>: L’utilisation de mots négatifs dans les questions sème la confusion dans les esprits. Par exemple : « N’avez-vous pas ? » ou « Ne croyez-vous pas ? ». Cette formulation est tendancieuse et laisse supposer la réponse. Posez clairement une question permettant d’obtenir une réponse objective par oui ou par non.</li>
        <li><strong>N’utilisez pas de termes biaisés ou chargés d’émotion dans vos questions</strong>: Il est bon de vérifier les termes que vous employez et vos choix de formulation auprès d’un représentant de la communauté avant d’aller sur le terrain.</li>
      </ul>
</div>

Un ensemble d’instructions claires et une formation adéquate sont toujours nécessaires si les enquêteurs remplissent seuls le questionnaire ou si celui-ci sera administré par une personne ne faisant pas partie de votre équipe immédiate de chercheurs. Il est important d’expérimenter le produit et de tester votre questionnaire auprès d’un membre de la communauté locale. N’oubliez pas qu’il peut y avoir deux niveaux d’interprétation ici : celui de votre enquêteur et celui de la personne interrogée (si cela s’applique aux données à recueillir). Cela crée au moins une, voire deux possibilités d’interprétation erronée.

#### 4.2.2.2 Style de réponse aux questions

<strong>Les questions fermées</strong> appellent une liste de réponses acceptables. Les listes de contrôle, les questions à choix multiples, les questions de type vrai ou faux et les échelles mobiles sont autant de motifs de réponses fermées. Les répondants ou les enquêteurs peuvent trouver plus facile de répondre à une question lorsque différentes options sont proposées, et il est plus simple et moins fastidieux d’interpréter et d’analyser les réponses obtenues dans une telle situation. De telles réponses peuvent être servir à établir des statistiques, et sont plus faciles à interpréter et à analyser, mais ne fournissent pas de détails, manquent de profondeur et ne donnent pas d’avis personnel. Les questions à réponses fermées sont essentielles pour se conformer aux prescriptions concernant les modèles de données relatifs à la construction de bases de données SIG. L’utilisation d’options à choix multiples permet un balisage cohérent, et on peut toujours sélectionner l’option « autre » qui laisse une certaine marge de manœuvre.

<strong>Les questions ouvertes</strong> permettent aux personnes interrogées de répondre avec leurs propres mots. Ce procédé offre plusieurs avantages, les répondants pouvant approfondir leurs réponses et émettre des avis critiques inattendus. Parfois, les réponses aux questions ouvertes peuvent être difficiles à interpréter et s’étaler sur de nombreuses catégories, ce qui en complique l’analyse. Aux fins de l’identification des caractéristiques, les questions ouvertes rendent presque impossible une catégorisation appropriée, et l’ajout d’une option « autre » à la fin d’un éventail de choix fermé est un bon compromis.

#### 4.2.2.3 Processus de collecte de Données

Le processus de collecte de données commence par la traduction des modèles de données en des formulaires lisibles par des logiciels de collecte de données tels que OpenDataKit ou KoboCollect. Pour chaque type de logiciel, ce processus peut prendre des formes diverses — construction de formulaires Excel dans un tableur ou utilisation de constructeurs en ligne. Une fois remplis, ces formulaires sont téléchargés vers des appareils mobiles de collecte de données. Sur le terrain, les cartographes ouvrent les applications lorsqu’ils trouvent un élément qu’ils souhaitent cartographier. Les coordonnées géospatiales et les données d’attributs sont recueillies et sauvegardées dans l’appareil. Après la collecte, les équipes examinent les données dans JOSM avant de les télécharger vers OSM. Kobo fournit un environnement supplémentaire où les équipes peuvent agréger et analyser les données brutes sur Kobo Toolbox.

Vous devez choisir votre méthode de travail et les outils qui y sont associés en fonction des ressources dont vous disposez. Si le choix d’une méthode fortement numérique dépasse le budget dont vous disposez pour le matériel ou les possibilités de formation de vos bénévoles, vous devez vous organiser en conséquence. Les opérations de cartographie peuvent être exclusivement basées sur du papier (par exemple les documents utilisés sur le terrain et les questionnaires en format papier) ; sur l’association d’outils papier et numériques (par exemple les documents utilisés sur le terrain et les applications de collecte de données ou les outils GPS) ; ou sur des outils exclusivement numériques (par exemple OpenDataKit/OpenMapKit). Chaque combinaison présente des avantages et des inconvénients liés aussi bien au coût, à la facilité de mise en place et d’apprentissage qu’à la réduction des erreurs et au contrôle de la qualité.

<strong>Type 1: Méthode Papier</strong>

Pour la collecte des données OSM, une méthode de collecte de données basée sur du papier nécessite généralement de recourir à un Atlas de Field Papers (pour vérifier l’existence et le positionnement des caractéristiques cartographiées sur le terrain) et un questionnaire sur papier pour recueillir les attributs des éléments cartographiés.
Avantages:
  <div class="c-list">
    <ul>
        <li>Facilité d’apprentissage</li>
        <li>Besoins de technologie limités</li>
        <li>Mise en place relativement facile et démarrage aisé du travail de cartographie</li>
    </ul>
  </div>

Inconvénients:
<div class="c-list">
  <ul>
      <li>Grande quantité de données à saisir après la phase de collecte</li>
      <li>Marge d’erreur plus élevée/précision plus faible des données</li>
      <li>Limitation possible de la quantité de données pouvant être recueillie</li>
  </ul>
</div>

<strong>Type 2: Méthode Papier + Numérique</strong>

L’association d’une méthode papier et numérique nécessite généralement l’utilisation d’un Atlas de Field Papers et d’un appareil GPS, l’enregistrement de points de repère avec un appareil GPS et l’inscription des données de terrain sur du papier pour un rapprochement ultérieur à l’aide d’ordinateurs en vue du contrôle de la qualité et du téléchargement vers OSM.

Avantages:
<div class="c-list">
  <ul>
      <li>Facilité d’apprentissage</li>
      <li>Besoin moins élevé d’accès aux outils technologiques</li>
      <li>Mise en place relativement facile et démarrage aisé du travail de cartographie</li>
      <li>Limitation possible de la quantité de données pouvant être recueillie</li>
  </ul>
</div>

Inconvénients:
<div class="c-list">
  <ul>
      <li>Quantité de données importante/modérée à saisir après la collecte</li>
      <li>Marge d’erreur modérée/précision modérée des données</li>
  </ul>
</div>

<strong>Type 3: Méthode Numérique</strong>

Une méthode de travail exclusivement numérique s’appuie uniquement sur des appareils mobiles (téléphones, tablettes) pour la collecte de données de terrain qui peuvent être directement transférées vers des ordinateurs à des fins de contrôle de la qualité et de téléchargement vers OSM. Différentes applications peuvent ainsi être utilisées:
<div class="c-list">
  <ul>
      <li>ODK ou Kobo uniquement</li>
      <li>OpenDataKit + OpenMapKit</li>
      <li>QField</li>
  </ul>
</div>

Une méthode de travail exclusivement numérique peut présenter les avantages et les inconvénients suivants, selon les applications utilisées:

Avantages:
<div class="c-list">
  <ul>
      <li>Marge d’erreur plus faible/précision plus élevée des données collectées</li>
      <li>Possibilité de recueillir une plus grande quantité de données</li>
      <li>Réduction des tâches de saisie de données/du contrôle de qualité nécessaire après la collecte des données</li>
  </ul>
</div>

Inconvénients:
<div class="c-list">
  <ul>
      <li>Formation plus intensive/difficile à dispenser</li>
      <li>Accès aux outils technologiques requis pour les processus</li>
      <li>Mise en place potentiellement gourmande en main-d’œuvre et compétences</li>
  </ul>
</div>

#### 4.2.2.4. Outils numériques largement utilisés
<div class="c-list">
  <ul>
      <li><strong>Open Data Kit (ODK)</strong> est un ensemble d’outils gratuits et libres d’accès qui permettent aux organisations de créer, mettre en place et gérer des solutions mobiles de collecte de données. ODK Collect fait partie d’ODK. C’est une application Android qui remplace les formulaires papier utilisés dans la collecte de données d’enquêtes. Il s’accommode d’un large éventail de types de questions et réponses, et est conçu pour bien fonctionner sans connexion réseau. Des formulaires peuvent être créés à l’aide d’un tableur (comme Excel ou LibreCalc) ou en utilisant ODK Form Builder.
        <ul>
          <li><a href="https://docs.opendatakit.org/collect-intro/" target="_blank">Introduction to ODK</a></li>
          <li><a href="https://docs.opendatakit.org/getting-started/" target="_blank">Getting Started With ODK</a></li>
          <li><a href="http://xlsform.org/en/#what-is-an-xlsform?" target="_blank">Introduction to XLSForm</a></li>
        </ul>
      </li>
      <br>
      <li><strong>OpenMapKit (OMK)</strong> est une extension d’ODK Collect qui se lance directement à partir d’ODK Collect lorsqu’une question de type OSM est activée dans une enquête standard. C’est ce qui permet d’accéder aux fonctionnalités OSM et de créer et d’éditer des onglets OSM. La principale différence entre ODK et OMK est qu’avec OpenMapKit, les utilisateurs peuvent baliser des polygones — comme des bâtiments — qui existent déjà dans OSM au lieu d’être réduits à ajouter des données aux points GPS. Les formulaires pour OMK sont légèrement modifiés par rapport aux formulaires ODK dans le but d’intégrer le schéma de balisage OSM et doivent être construits à l’aide d’un tableur (comme Excel ou LibreCalc).
        <ul>
          <li><a href="http://openmapkit.org/docs_odkformsforomk.html" target="_blank">Creating Surveys in OMK</a></li>
        </ul>
      </li>
      <br>
      <li><strong>KoBoCollect et Kobo Toolbox</strong> sont pratiquement semblables à ODK Collect et construits par-dessus la plateforme ODK. Des formulaires peuvent être créés en recourant à un constructeur de formulaires en ligne. KoboCollect intègre un tableau de bord permettant d’analyser et de gérer les données en vue de générer des cartes et des rapports.
        <ul>
          <li><a href="https://www.humanitarianresponse.info/en/applications/kobotoolbox" target="_blank">Overview of Kobo Collect and Features</a></li>
        </ul>
      </li>
      <br>
      <li><strong>QField</strong> est le complément mobile de QGIS qui vous permet de transférer vos projets QGIS de l’environnement bureautique vers le terrain. Il fonctionne à l’aide du GPS et est compatible avec l’installation QGIS pour ordinateur de bureau ; la préparation du projet peut commencer sur la version pour ordinateur de bureau. Il est pleinement opérationnel hors connexion, mais avec des capacités de synchronisation. Les utilisateurs peuvent ajouter de nouveaux points à une base de données existante ou modifier les attributs de caractéristiques existantes (points, lignes ou polygones). QField est un projet Open Source dont le code source est disponible sur github.
      <ul>
        <li><a href="https://www.qfield.org" target="_blank">QField: Efficient field work built for QGIS</a></li>
      </ul>
    </li>
    <br>
    <li><strong>Maps.Me</strong> est une application mobile qui permet aux utilisateurs d’utiliser et d’explorer OpenStreetMap hors connexion. En plus de la navigation, les utilisateurs peuvent utiliser Maps.Me pour recueillir des données et les télécharger vers OSM lorsque la connexion est établie. Maps.Me limite les ajouts aux données ponctuelles sur OSM et dispose d’un choix restreint de balises pouvant être utilisées.
      <ul>
        <li><a href="https://maps.me" target="_blank">Maps.me: Mobile offline maps</a></li>
      </ul>
    </li>
  </ul>
</div>

## 4.3 L’Assurance de la Qualité et le Contrôle de la Qualité

L’assurance de la qualité et le contrôle de la qualité (également connus comme le « nettoyage des données ») désignent le processus par lequel les cartographes et les contributeurs d’OpenStreetMap d’une manière générale procèdent à des vérifications pour s’assurer que toutes les informations téléchargées sur OSM respectent des normes d’utilisation strictes et pour éviter des actes de vandalisme. Comme OpenStreetMap est une plateforme gratuite et ouverte que n’importe qui peut utiliser et à laquelle tout le monde peut apporter des modifications, il est essentiel pour la pérennité du libre accès aux données et d’OSM que chacun participe au processus d’assurance et de contrôle de la qualité — de la collecte d’informations sur le terrain à la préservation à long terme des données existantes sur OSM en passant par le nettoyage desdites données.

Alors que l’assurance et le contrôle de la qualité peuvent et doivent être effectués à toutes les étapes d’une campagne de cartographie, nous allons examiner différents outils qui contribuent à assurer la qualité des données et procéder au nettoyage et téléchargement de ces dernières après la collecte sur le terrain. Ces outils sont également utiles pour le suivi des informations téléchargées en ce qu’ils aident les agents chargés de la validation à déceler et résoudre des problèmes courants tels que:
<div class="c-list">
    <ul>
        <li>Des noms de lieux mal orthographiés ou mal formatés</li>
        <li>L’utilisation incorrecte des balises</li>
        <li>Des bâtiments superposés ou en double</li>
        <li>Des routes et chemins piétonniers non reliés à un réseau routier</li>
        <li>Des éléments dont le nom devrait se trouver dans un autre champ (arbres, bâtiments, etc.).</li>
    </ul>
</div>

### 4.3.1 Processus de contrôle de qualité (collecte de données après le champ)

Processus de contrôle de la qualité (après la collecte de données sur le terrain). Le processus d’assurance et de contrôle de la qualité est un travail d’équipe qui fait intervenir de nombreuses tâches et responsabilités. Les cartographes doivent vérifier leurs données, par exemple, en ajoutant des fichiers de terrain à JOSM, en les synchronisant avec les données OSM existantes, puis en parcourant les informations recueillies sur le terrain pour y rechercher des erreurs avant tout téléchargement vers OSM. Si tous les cartographes vérifient leurs données, il est important de confier à un membre de l’équipe ayant une solide expérience de JOSM la tâche particulière de contrôler les contributions des autres afin de rechercher des erreurs qui auraient échappé à ceux-ci et d’émettre des avis sur leur travail de vérification. Cet exercice est particulièrement important pour les cartographes qui commencent à utiliser JOSM, car ils peuvent améliorer leurs compétences en matière d’assurance de la qualité et les erreurs peuvent être détectées suffisamment tôt.

Le processus de rapprochement des informations de terrain avec les données OSM dépend de la méthode de de collecte retenue. Des mesures supplémentaires et des précautions particulières devront être prises, selon la combinaison d’outils utilisée.

#### 4.3.1.1 Méthode Papier

Avec une méthode de travail basée sur l’utilisation du papier, les informations recueillies sur le terrain devront être saisies manuellement dans OpenStreetMap. Cela pourrait nécessiter le téléchargement de Field Papers afin que toutes les notes de terrain et les modifications apportées à la carte puissent être transférées vers OSM. Si des cartes ou des questionnaires supplémentaires en format papier ont été utilisés pour identifier des balises ou des attributs relatifs à l’infrastructure cartographiée, les équipes auront besoin d’employer des méthodes fiables pour enregistrer ces données. Une méthode basée sur du papier comporte une part relativement importante de tâches manuelles et est sujette aux erreurs humaines. Par conséquent, les équipes qui l’emploient ont besoin d’un système de rapprochement des données qui inclut des vérifications rigoureuses et une supervision par des membres de l’équipe de niveau avancé.

#### 4.3.1.2 Méthode Papier + Numérique

Les cartographes qui emploient des méthodes de travail mixtes seront confrontés aux mêmes contraintes que ceux utilisant uniquement du papier. Cependant, en plus, ils peuvent avoir à charger sur JOSM les points GPS collectés et télécharger des données d’OSM dans le but de fusionner les sources. Si des points ont été identifiés pour des caractéristiques de polygone dans OSM (c’est-à-dire que les informations sur les bâtiments ont été enregistrées avec les points GPS correspondants), les balises utilisées devront être copiées et collées sur le polygone existant avant la suppression des nœuds.

#### 4.3.1.3 Méthode Numérique

La méthode de travail numérique exige que les cartographes ouvrent les fichiers de données de terrain dans JOSM et téléchargent des informations d’OSM dans le but de fusionner ces deux ensembles. Si des points sont identifiés pour des caractéristiques de polygone dans OSM (c’est-à-dire que les informations sur les bâtiments sont collectées sous forme de points dans ODK), les balises utilisées devront être copiées et collées sur le polygone existant avant la suppression des nœuds. Si les cartographes utilisent des applications d’enquête numériques comme OpenDataKit ou Kobo Collect, qui ne se synchronisent pas directement avec le modèle de données d’OSM (à l’instar d’OpenMapKit), ils devront mettre au point un système de rapprochement des données permettant de transférer toutes les informations pertinentes d’OSM vers la plateforme. Bien que tous ces outils soient numériques, le rapprochement des données collectées à l’aide de ceux-ci n’est pas complètement automatique.

### 4.3.2 Outils de contrôle de la qualité dans JOSM

Ce sont des outils intégrés dans JOSM ainsi que des modules d’extension supplémentaires pouvant faciliter le contrôle de la qualité des données pendant le processus de téléchargement. (Certains d’entre eux peuvent également jouer un rôle dans le processus de validation consécutif aux activités de télécartographie).

<div class="c-list">
    <ul>
        <li><strong>L’outil de filtre</strong> (Filters) est un outil intégré qui vous permet de désactiver, de masquer, de sélectionner et de mettre en relief certains groupes d’objets selon des paramètres personnalisés et flexibles. Cet outil vous aidera à repérer et éviter les erreurs courantes et à analyser les données.</li>
        <li><strong>L’outil de validation</strong> (Validation Tool) est un autre outil intégré qui analysera les données pour y rechercher les erreurs courantes et alertera sur les informations potentiellement problématiques.</li>
        <li><strong>Le module d’extension</strong> (Todo List) permet aux utilisateurs d’analyser systématiquement les données qui doivent être téléchargées et de suivre l’avancement des travaux de nettoyage. Ce module doit être téléchargé au préalable. Visiter cette page pour apprendre à installer des modules d’extension dans JOSM, ensuite télécharger le module d’extension « Todo List ».</li>
        <li><strong>MapCSS Paint Style</strong> est un outil avancé d’assurance de la qualité dans JOSM qui peut servir à déceler visuellement des erreurs telles que des balises manquantes et des défaillances du réseau routier. Il est possible d’importer les styles actuels de MapCSS. Cependant, avec une formation, les équipes de contrôle de la qualité peuvent créer leurs propres styles MapCSS correspondant à leur modèle de données.</li>
    </ul>
</div>

### 4.3.3 Vérifier la Qualité du Téléchargement: OSMCha

OSMCha ou OpenStreetMap Changeset Analyzer est un outil conçu pour analyser les téléchargements et les modifications des données OSM, principalement dans le but de prévenir des modifications erronées et des actes de vandalisme touchant les informations cartographiques. Cet outil propose des filtres par nom d’utilisateur, localisation, dates de téléchargement et d’autres caractéristiques de métadonnées. OSMCha est utile pour suivre les progrès accomplis par les équipes de nettoyage et téléchargement des données.

## 4.4 Comportements à adopter sur le terrain

Lorsque vous intervenez sur le terrain, soyez poli et échangez avec les résidents et les autres personnes que vous pourriez rencontrer. Il est important de penser à ce vous ressentiriez si un étranger s’approchait de votre domicile pour recueillir des informations. Tâchez de vous présenter lorsque vous trouvez quelqu’un sur place et expliquez brièvement la raison de votre présence AVANT de commencer à recueillir des données. Il peut même être utile de montrer aux personnes intéressées comment vous procédez et les outils que vous utilisez.

Le fait d’avoir une lettre d’autorisation émanant d’une autorité compétente peut désamorcer les tensions éventuelles. En plus de la lettre, les cartographes de terrain devraient arborer des tenues convenables pour des professionnels (bien qu’adaptées au travail de terrain) et, si possible, porter des éléments d’identification comme des gilets ou des chapeaux assortis, ou au minimum un insigne. Si la population locale manifeste des inquiétudes quant à votre présence, restez calme et patient. Si une discussion s’envenime, retirez-vous en toute sécurité — il vaut mieux ne pas recueillir de données que de créer un problème de sécurité ou de perdre la confiance des résidents. 

Avant de descendre sur le terrain, il peut être utile pour les cartographes de s’entraîner entre eux à présenter le projet et leur motivation et de s’exercer à gérer des situations impliquant des membres de la communauté réticents ou difficiles.

Carrying a permission letter from an appropriate authority can relieve tensions that may arise. In addition to carrying a permission letter, field mappers should dress professionally (although appropriate for field work), and if possible, wear designation such as matching vests, hats, or at minimum, have identification badges. If there is concern from local residents as to your presence, be calm and patient. If a discussion escalates, safely remove yourself - it's better to not collect data than to create a safety issue or lose the trust of local residents.

Prior to entering the field, it can be helpful for field mappers to practice introducing the project and their purpose with each other, as well as practicing handling scenarios with reluctant or difficult community members.
