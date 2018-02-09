% Converser à l'ère de l'autocomplétion
% Mathilde Buenerd, Tuteur: Nicolas Nova
% Janvier 2018

---
title: "Ma master thesis"
---

<link rel="stylesheet" href="style.css"></link>

\newpage

# Converser à lère de l'autocomplétion

_Relecture critique des caractéristiques que l'on attribue au design d'interaction (*design invisible*, *technologie calme*, *utilisabilité*), dans le cadre des systèmes d'aide à l'écriture et à la conversation, et particulièrement de l'autocomplétion_

### Mathilde Buenerd
### Tuteur : Nicolas Nova

Haute Ecole d'Art et de Design (HEAD), Genève
Master HES-SO, Media design

imprimé en février 2017

\newpage

## Remerciements

\newpage

#### Notes

Les mots en italique entre \[_crochets_] permettent de clarifier la référence à des mots anglais pour lesquels un équivalent français n'est pas évident.

Tous les liens hypertextes des articles cités sont dans la bibliographie.

Le texte est également disponible en ligne à l'adresse \
mathilde.buenerd.fr/converser-a-l-ere-de-l-autocompletion

\newpage

## Sommaire

\newpage

## Introduction

_Regime of computation_[^838a], _Age of the algorithm_[^edb8], ou encore _"logicialisation"_ de la société[^e3bd], autant de termes pour désigner un même phénomène : la place grandissante du logiciel \[_software_] dans la société, à une échelle très large et dans des domaines variés : travail, finance, relations sociales etc. Une ère dominée par la figure de l'algorithme comme structure ontologique de compréhension de l'univers.[^4bd6]

L'une des incarnations du logiciel dans la vie quotidenne concerne la multiplication des assistants personnels ou de ce qu'on pourrait nommer des _machines sociales_[^ab7d], au sens d'ordinateurs qui ont la capacité d'interagir dans un espace social traditionnellement réservé aux humains. C'est le cas des applications de messagerie (email) ou de messagerie instantanée (Messenger, Whatsapp et autres) ou encore des assistants personnels (Siri, Alexa...). Plus que de simples intermédaires, ces services impliquent de nouvelles manières d'écrire, d'échanger, et au final, de converser. Ces nouvelles manières de s'exprimer sont permises entre autres par des fonctionnalités telles que l'autocomplétion.

L'autocomplétion désigne la fonctionnalité informatique consistant à compléter les mots qu'un utilisateur a commencé à saisir. C'est une fonctionnalité majeure sur le web mais aussi dans les applications de conversation à distance. Elle devient une caractéristique incontournable dans le design de l'expérience utilisateur, en témoignent la multiplication de widgets comme [_autocomplete_](http://jqueryui.com/) du populaire jQueryUI (collection d'outils à destination des développeurs pour faciliter la création de sites internet).
Synonyme de _complètement_, _complètement automatique_ ou encore _saisie intuitive_ ou _saisie prédicitive_, le terme d'_autocomplétion_ a été choisi ici pour sa proximité avec le terme anglais _autocomplete_, largement utilisé dans le monde de la programmation informatique.

Derrière son allure insignifiante, l'autocomplétion est une fonctionnalité que l'on utilise quotidiennement et qui touche un aspect intime de notre vie : les correspondances que l'on a avec nos proches via nos appareils électroniques. En même temps, c'est aussi un exemple de technologie qu'on ne remarque pas. On rit parfois d'une suggestion inappropriée, on s'étonne (ou s'effraie) de la justesse d'une proposition qu'on avait sur le bout de la langue. Mais notre compréhension du système est généralement limitée, c'est une fonctionnalité un peu discrète (ou totalement invisible) et un peu futile (ou peu magique).

On peut être tenté de penser que l'autocomplétion est avant tout un problème technique, un problème d'ingéniérie : comment prédire les mots que l'utilisateur va dire ? L'enjeu serait avant tout d'améliorer la précision des prédictions, et c'est probablement pourquoi toutes les interfaces (Whatsapp, Messenger, Allo...) se ressemblent fortement : l'esthétique des interfaces est interchangeable; et l'expérience utilisateur est standardisée. On pourrait également penser que l'enjeu, c'est la compréhension du langage naturel par les machines. En 1950, en définissant un ordinateur intelligent comme un ordinateur capable d'_imiter_ le langage humain de manière suffisement convaincante, le test de Turing donne à la compréhension du langage une place prépondérante dans le champ d'étude que l'on appelera bientôt _intelligence artificielle_.[^00d5] Quelques années plus tard, Joseph Weizenbaum impressione le monde scientifique avec ELIZA, un programme informatique qui simule un psychothérapeute avec lequel un interlocuteur humain peut converser via un clavier.[^090c] \
À l'origine, les chercheurs supposaient que cette compréhension du langage serait possible à condition de pouvoir définir précisement le langage avec des règles. Mais la complexité de décrire l'intégralité des éléments qui consituent la langue a rapidement suscité de nombreuses désillusions[^2930], et aujourd'hui encore, nous ne discutons toujours pas quotidiennement avec des robots. Si ce champ de recherche est passionant, il ne doit pas éclipser d'autres enjeux qui sont aujourd'hui négligés, en particulier des enjeux de design d'expérience et d'interface.


#### L'autocomplétion change notre manière d'échanger

Que ce soit de manière fortuite ou délibérée, les outils modèlent notre manière de parler. Un aspect de la tranformation du langage par les algorithmes est ce que Tarleton Gillespie appelle la "négociation tacite" \[_tacit negociation_][^d3eb], c'est-à-dire le fait qu'on adapte - délibérément ou non - son comportement pour tirer parti de l'algorithme. On ajuste son phrasé pour se rendre plus intelligible par Siri, on choisit conscieusement des hashtags pour que son contenu soit affiché dans le fil d'actualité, on rédige son site web avec des termes "search engine-friendly".[^57b4]\
Parce que l'autocomplétion a un impact sur notre manière de parler et d'échanger, et que celle-ci est primordiale pour nous permettre de nous forger une vision du monde, le design de tels systèmes doit être consciencieusement réfléchi.

### Présentation du mémoire

Le design de tels systèmes, c'est-à-dire les décisions relatives à leur aspect et à l'interaction avec l'usager, se place dans le champ du design d'expérience et d'interface \[_user experience_, _user interface_]. Mais est-ce que les concepts sur lesquels s'appuit le design de l'expérience utilisateur sont adaptés au design des systèmes d'autocomplétion ?
Le présupposé est que non, c'est pourquoi, pour analyser les enjeux de l'autocomplétion, ce mémoire vise à faire une relecture critique de trois notions relatives au design d'interaction : le design invisible \[_invisible design_], la technologie calme \[_calm technology_] et la notion d'utilisabilité.

En premier lieu, il s'agira d'expliquer pourquoi l'évolution du fonctionnement technique des systèmes d'autocomplétion, notamment grâce aux algorithmes de _machine learning_, nécessitent de repenser la manière dont on les conçoit (partie 1).
Ensuite, trois idées seront développées : celles d'un design visible, perturbant et qui pousse à l'inventivité (parties 2 à 4). Au centre de ces thématiques se trouvent deux grandes questions : comment le design d'interface peut rendre intelligible comment un système fonctionne ? Comment penser des formes de technologies qui ne sont pas juste auxiliaires, mais aussi provocatrices, excitantes ?
La dernière partie sera dédiée à un questionnement plus large sur la collaboration humain-machine, et à la définition de la notion de _technologie chili_ comme alternative aux tendances évoquées dans les chapitres précédents (partie 5).
Enfin, une annexe présentera des exemples d'application des principes évoqués au cours du mémoire, dans le cadre d'une application de messagerie fictionnelle.

Ce mémoire n'est pas une contestation unilatérale des principes fondateurs de l'histoire du design, mais plutôt une invitation à sortir des caractéristiques conventionnelles qu'on attribue au design d'interaction. Ce changement de perspective est là pour réimaginer les interactions humain-machine dans une optique où l'humour, la provocation et l'excitation sont au centre des préoccupations.


\newpage


## Du système d'autocomplétion au système de recommandation

### D'une aide à la saisie vers une aide à l'écriture

Dans le champ de la téléphonie mobile, l'autocomplétion est présente depuis plusieurs années en tant qu'aide à la saisie. A la fin des années 90, la majorité des terminaux mobiles possèdent un clavier à 12 chiffres, proche de celui des cadrans téléphoniques. Il est conçu avant tout pour la saisie de numéros de téléphone et pas pour celle de textos. Pour pouvoir y saisir du texte, chaque touche possède plusieurs lettres associées (par exemple le '2' permettra aussi de saisir les lettres 'a', 'b' et 'c'), ce qui implique un problème de désambiguïsation \[_disambiguation_] lors de la saisie : comment savoir si l'utilisateur a voulu taper un 'a', un 'b' ou un 'c' ? Des méthodes d'entrée pragmatiques, comme le _mutli-press_ (presser une fois pour 'a', deux fois pour 'b', trois fois pour 'c') ou le _two-keys_ (presser 'abc' puis '1' pour 'a', 'abc' puis '2' pour 'b', etc.) sont utilisées[^6a14]. De manière plus originale, des systèmes comme le T9[^3e08] proposent d'utiliser une approche linguistique basée sur un dictionnaire comportant tous les mots de la langue[^fe98]. Bien que plusieurs lettres soient associées à une même touche, une séquence de touches ne pourra produire qu'un nombre de mots très limité[^1715]. En combinant cela au fait que certains mots sont plus fréquemment utilisés que d'autres ('tu' est beaucoup plus fréquent que 'accordéon'), on obtient un système qui permet de _prédire_ quel mot a le plus de chance d'être écrit. C'est d'ailleurs le terme de "texte prédictif" \[_predictive text_] qui est utilisé pour désigner cette technologie de complétion.

Bien qu'ayant pour objectif premier la désambiguïsation, le T9 introduit une méthode de saisie qui comporte des similarités avec les systèmes d'autocomplétion actuels, c'est-à-dire parier sur un mot en se basant sur des données (un dictionnaire) et des probabilités (les fréquences).

### L'autocomplétion aujourd'hui

![Type 1 : Le système cherche à trouver la fin du mot qui commence par "comm"](images/autocomplete-type1.jpg)

![Type 2 : Le système cherche à trouver le mot qui suit le mot "comment"](images/autocomplete-type1.jpg)


Aujourd'hui, on peut distinguer deux types d'autocomplétion. La première est celle qui vient compléter les mots que l'on a commencé à saisir. C'est la descendante directe de systèmes comme le T9, mais aussi des correcteurs orthographiques. Elle est plutôt une aide à la saisie, permet de limiter les fautes d'orthographe et de gagner en vitesse, notamment dans le cas des mots longs.\
La seconde est celle qui vient suggérer des mots ou des phrases complètes, en se basant sur le début de notre phrase ou de celle de notre interlocuteur. Elle est plus proche d'une aide à l'écriture, dans la mesure où elle est plus envahissante (pas besoin d'écrire les premières lettres). Ce type d'autocomplétion tente de prédire ce que l'on veut dire en se basant sur les mots déjà écrits, et sur les fréquences d'association des mots entre eux (par exemple une phrase qui commence par "Merci" a plus de chances d'être suivie de "beaucoup" que de "accordéon"). Ces fréquences sont calculées grâce à une approche statistique de la langue qui consiste à analyser des ensembles de milliers de textes appelés _corpus_.

Utiliser des statistiques et des probabilités pour prédire ou anticiper les actions de quelqu'un, c'est l'idée au centre d'un champ d'étude de l'intelligence artificielle particulièrement en vogue, le _machine learning_[^152f], qu'on peut traduire en français par _apprentissage automatique_. Ces algorithmes sont utilisés pour faire fonctionner les assistants personnels comme Siri, mais aussi pour produire des recommandations personnalisées comme on peut les avoir sur Spotify. Ces programmes cherchent à prédire un comportement futur en se basant sur une analyse statistique des comportements passés. Ils apprenent du comportement de l'usager, et évoluent en fonction de ses habitudes. Le corollaire d'une telle technique consiste en une personnalisation grandissante de l'expérience utilisateur : le programme "s'adapte" à chaque individu.

La place centrale qu'a pris la prédiction dans les systèmes d'autocomplétion fait qu'on peut les voir comme des _systèmes de recommandation pour l'écriture_. C'est-à-dire, des systèmes qui cherche à prédire la préférence d'une personne pour un mot, une phrase, un emoji ou une idée.

##### "Répondre sans taper, dans son propre style"

![Google Allo : "Répondre sans taper, dans son propre style"](images/allo-your-style.png "Respond without typing, in your style")

Un exemple-type de système de recommandation pour l'écriture, est l'application de messagerie instantanée développée par Google, Google Allo. Cette application de messagerie "intelligente" \[_smart_] suggère des réponses-type en fonction des habitudes d'écriture. Elle retient par exemple si vous êtes une personne plutôt "dac" ou "ok", et intègre des suggestions à l'intérieur même des conversations grâce à un assistant semblable à Siri. Google Allo n'est pas la seule application à aller jusqu'à suggérer des mots ou des réponses préétablies. La messagerie en ligne Gmail le fait également, tout comme Facebook.

![Réponses automatiques sur Google Allo, Gmail et Facebook](images/réponses-automatiques.jpg)

Dans le cas de ces deux dernières applications, les suggestions sont basées sur une analyse statistique des réponses écrites non pas par l'utilisateur lui-même mais par les utilisateurs en général. S'il est difficile de savoir exactement comment ces réponses sont produites, il est très probable qu'elles ne soient pas le résultat d'un algorithme autonome, car elles ne sont présentes que dans le cas de situations très standardisées, par exemple "Merci" ou "Bien reçu". Néanmoins, on peut voir dans ces nouvelles fonctionnalités une porte ouverte vers l'usage d'algorithmes de machine learning pour faire de la recommandation conversationnelle.

### Fonctionnement d'un système de recommandation

Comprendre les grands principes de fonctionnement d'un système de recommandation permet de mieux apprécier leurs spécificités, leurs contraintes et leurs avantages, et donc de pouvoir les concevoir d'un point de vue de design d'expérience. Sans entrer des détails trop pointus, on peut distinguer deux grandes catégories de système de recommandation : ceux basés sur le contenu et ceux dit "collaboratifs".[^0887] Le tableau ci-dessous présente quelques-unes de leurs caratéristiques.


| Facteur |    Filtrage basé sur le contenu        |    Filtrage collaboratif                 |
|---------|----------------------------------------|------------------------------------------|
| source des mots | l'utilisateur lui-même | d'autres utilisateurs |
| interprétabilité[^e393] | élevée | fabile |
|  | utilise des informations descriptives sur les mots : fréquence d'utilisation, synonymes, concepts relatifs | utilise des d |
| besoin de métadonnées | nécessite beaucoup de métadonnées sur les items, souvent fournies par des humains | n'a pas besoin d'informations labellisées par des humains |
| temporalité | s'adapte aux changements de comportement | s'adapte doucement aux changements de comportements, si l'utilisateur change avec le temps il aura encore des recommandations basées sur ses goûts passés |

Dans le cadre de l'autocomplétion, on pourrait par exemple différencier un système basé sur le contenu, qui recommenderait des mots liés par une relation de sens ou de syntaxe (par exemple un synonyme connu grâce à un dictionnaire) et des mots liés par un comportement collectif (par exemple des mots souvent associés par l'ensemble des utilisateurs).


### Design d'un système d'un système de recommandation

Si l'on commence à désigner les systèmes d'autocomplétion comme des systèmes de recommandation pour l'écriture, alors on peut se poser la question de comment les problèmes qui se posent actuellement aux systèmes de recommandation peuvent les impacter. Sans en faire une liste exhaustive, on peut citer trois grandes questions : celle de la régularisation de la langue, du déterminisme qu'implique un système qui s'autoalimente et la gestion délicate des données personnelles.

##### Régularisation de la langue

On adapte son langage quand on utilise des systèmes électroniques. Mais les apps de messagerie modèlent aussi notre manière de parler en retour. Se basant sur une approche statistique de la langue, l'autocomplétion peut réduire sa richesse en poussant les utilisateurs à utiliser les mots qui sont statistiquement les plus fréquents. Sans être en mesure de le prouver une transformation générale de la langue par l'autocomplétion, on peut émettre l'hypothèse d'une tendance générale vers une expression linguistique plus régulière et moins idiomatique.[^02ed] Une expression qui défavoriserait des aspects qui font partie de la richesse et la nuance de la communication : fautes d'orthographe, registre de langue familier, mots régionaux.\
Dans ce cas, la diversification de la langue peut être vue comme un enjeu de design. Par exemple en ne sanctionnant pas systématiquement les fautes d'orthographe, ou en proposant de manière délibérée des mots rares.

##### Déterminisme

> But when algorithms cross the threshold from prediction to determination, from modeling to building cultural structures, we find ourselves revising reality to accommodate their discrepancies.[^5238]

Plus on se fie à des recommandations, plus elles nous façonnent. Il y a toujours le risque que les algorithmes quittent le monde de la prédiction pour entrer dans celui de la détermination, en créant un système qui s'autoalimente. Le militant internet Eli Pariser met en garde contre le risque que les recommandations créent ce qu'il appelle une "bulle de filtre" \[_filter bubble_][^1b33]. Selon lui, le personnalisation du web, c'est-à-dire l'utilisation de l'historique de recherche et des données personnelles des usagers pour leur faire des suggestions, reviendrait à confiner chacun dans sa propre bulle culturelle et idéologique.\
On peut voir dans l'autocomplétion une opportunité pour justement élargir cette bulle culturelle. Si l'on imagine par exemple suggérer des mots désuets à des jeunes, ou bien des mots issus de l'argot des jeunes à des personnes âgées.

##### Gestion des données personnelles

Le revers de la personnalisation, c'est la collecte massive de données personnelles. Ces données sont récupérées, stockées, analysées. La question de la protection de la vie privée est donc centrale. Il faut garder un certain recul sur la personnalité des utilisateurs perçue au travers de leurs données et garder à l'esprit qu'on ne peut pas rationnaliser la personnalité d'une personne aux données collectées sur elle. Donner aux gens accès aux données collectées sur eux, et leur permettre de les modifier est donc essentiel.


#### Vers de nouvelles manières de designer

Et si l'évolution technologique était suffisement importante pour instaurer la nécessité de penser différemment la manière dont on conçoit l'expérience des systèmes basés sur des algorithmes de machine learning ? Si les enjeux centraux n'était pas tant l'intuitivité ou la facilité d'utilisation, mais la capacité à permettre la découverte ou à dépasser ses limites ?[^258b]

Alors que les possibilités offertes par ces nouveaux algorithmes sont collossales, on constate que toutes les applications de messagerie se ressemblent : elle semblent être des variations d'une même application. Designer pour l'intelligence artificielle pose un défi inédit, mais les pensées traditionnelles du design peinent à s'y attaquer.

Les causes de ce problème sont inévitablement multiples : complexité des systèmes, problèmes liés à l'interdisciplinarité. Néanmoins, plusieurs hypothèses issues de l'histoire du design peuvent se réveler problématiques : le bon design est celui qui ne se verrait pas (_design invisible_), la technologie ne devrait pas empiéter sur la vie "réelle" (_technologie calme_), le travail de designer se résumerait principalement à la résolution d'un problème.

Les trois prochains chapitres sont une relecture de ces trois caractéristiques.


\newpage


## ~~design invisible~~ => design visible

#### "La meilleure interface est... pas d'interface"

La notion de "design invisible" ou le mouvement _NoUI_ (littéralement _pas d'interface utilisateur_), nouvellement popularisés par des designers comme Golden Krishna dans son livre _The Best Interface is No Interface_[^2494], sont plusieurs termes qui désignent une même tendance : celle selon laquelle le bon design est celui qui ne se voit pas, celui qui génère le moins de friction possible avec l'utilisateur[^5f04]. Ce mouvement considère l'interface graphique \[_GUI, Graphical User Interface_] comme

Or, la multiplication des assistants personnels et la prolifération d'outils de _quantified self_ oriente de manière significative nos prises de décisions. Ces outils ne nous disent pas quoi faire, pas plus qu'ils ne décident à notre place, mais l'on se repose de plus en plus sur eux pour ordonner notre vie de tous jours. Pour cette raison, la compréhension du système par les usagers est primordiale et doit passer par une interface _visible_.

Ce mouvement est régulièrement critiqué, notamment par des personnes comme Timo Arnall[^2834] ou Dave Hall[^f0f4]. Ici, nous allons voir pourquoi ces idées sont particulièrement problématiques dans l'ère du machine learning, en prenant l'angle de deux principes liés au mouvement NoUI : prendre avantage des ordinateurs plutôt que les servir et ne pas montrer comment le système fonctionne.


\newpage


### ~~Tirer parti des ordinateurs plutôt que de les servir~~ => S'adapter à la logique computationnelle


Un des principes évoqué dans _The Best Interface is No Interface_, est celui de ne pas être  Et si, à l'inverse, encourager les usagers à s'adapter à leurs outils, c'était leur permettre de mieux les comprendre et de mettre en place les conditions nécessaires à une appropriation plus forte de la technologie par les gens qui la côtoient au quotidien ?

Pour illustrer son propos, Krishna prend l'exemple du remplissage de formulaires en ligne. Il évoque ce moment agaçant, quand on met des tirets, des espaces ou des points entre les nombres de notre numéro de téléphone, et que le système nous indique par un message d'erreur qu'il doit uniquement contenir des chiffres. Selon lui, il faut créer des systèmes qui savent reconnaître et interpréter ces "erreurs", de manière à ne pas ennuyer l'utilisateur avec des détails techniques, qui n'ont de sens que pour la machine.

+ (faire un schéma) Dans la première situation, je rentre _0635527684_, et je sais que l'ordinateur a récupéré _0635527684_. Dans le second, je pourrais rentrer _06.35.52.76.84_ et l'ordinateur récupèrerait _0635527684_.

Néanmoins, contraindre l'utilisateur à parler à l'ordinateur dans son langage, lui demander de s'adapter à son mode de compréhension, génère une connaissance plus juste de la réalité des capacités techniques des ordinateurs. Quand je rentre mon numéro de téléphone, mon ordinateur ne sait pas comment m'appeler, il associe simplement une suite de nombres à mon profil, sous le label "téléphone". M'obliger à ne pas utiliser d'espace quand je saisie mon numéro, c'est me rappeler que ce n'est pas mon numéro de téléphone que l'ordinateur comprend, mais bien une série de chiffres.

La nuance est mince, mais contribue à alimenter une incompréhension de la technologie par les gens qui l'utilisent pourtant au quotidien. Or, une technologie incomprise génère de la frustration et restreint la créativité. Une étude conduite par Erika Shehan Poole et al montre que les problèmes posés par une mauvaise compréhension de la technologie incluent : de mauvaises suppositions sur les risques d'adoption de cette technologie; des attentes en terme de bénéfices qui sont en décalage avec la réalité des possibilités techniques; des difficultés à trouver des solutions quand intervient un problème avec celle-ci[^4c7e]. Il cite l'exemple d'une personne qui pensait que les RFID étaient des traqueurs de position. Cette croyance populaire (que les auteurs nomment en anglais _folk theories_) le faisait s'inquiéter que des vendeurs ou des organisations gouvernementales utilisent des technologies basées sur le RFID pour l'espionner. Cette situation illustre comment un malentendu sur son fonctionnement peut avoir des conséquences considérables sur l'adoption d'une technologie. L'étude conclue également que, même s'ils portent en eux de sérieuses inquiétudes face aux nouvelles technologies, les participants étaient généralement réticents à faire remonter publiquement leurs doutes. Une des raisons avancée est qu'ils doutent de leur possibilité d'avoir leur mot à dire dans une évolution technologique qu'ils perçoivent comme inévitable.

> By removing our knowledge of the glue that holds the systems that make up the infrastructure together, it becomes much more difficult, if not impossible, to begin to understand how we are constructed as subjects, what types of systems are brought into place (legal, technical, social, etc.) and where the possibilities for transformation exist.[^724f]

Sur le même sujet, Matt Ratto souligne qu'une incompréhension de la technologie rend difficile, voir impossible une réflexion sur les possibilités de transformation de celle-ci. En ne montrant pas le fonctionnement d'un système, on retire aux gens leur abilité à le comprendre, le critiquer et le reconfigurer, c'est-à-dire leur abilité à imaginer que les choses soient différentes. Vu sous cet angle, le design "invisible" participe à creuser un fossé entre les professionnels qui créent des ces objets électroniques et les personnes qui les utilisent. On voit que les conclusions que l'étude témoignent d'un imaginaire technologique très limité chez les usagers (mauvaise estimation des possibilités techniques, difficulté d'improviser en cas de problème). Dans ce contexte, donner les clés de compréhension d'un système en demandant une adaptation des usagers à la logique computationnelle rendrait possible un renouvellement de cet imaginaire. Les objets électroniques et les logiciels ne devraient pas être vus uniquement comme complexes (même s'ils le sont indéniablement), ni comme une matière figée, mais au contraire comme des entités en permanente évolution, questionnables, et qui peuvent être modelées de manière collaborative.[^a674]


\newpage


### ~~Ne pas en dire trop sur comment le système fonctionne~~ => Dire clairement comment le système fonctionne

> As systems increasingly record our personal activity and data, invisibility is exactly the wrong model.[^4080]

Dans un système de recommandation, le comportement du programme est déterminé par la récupération et l'analyse des données personnelles. Ces données "personnelles" peuvent être les informations que l'on saisis soi-même sur ses profils de réseaux sociaux, comme l'âge, le lieu de vie ou la profession. Elles peuvent aussi être des indications sur le comportement d'utilisation, par exemple les personnes avec lesquelles on parle souvent, ou encore les heures de fréquentation d'une application. Ces données comportementales, nous avons tendance à oublier que nous les cédons gracieusement contre la gratuité de services comme Google ou Facebook.[^9b65] Or, elles permettent de cerner des aspects intimes de notre vie. On ne sait pas exactement comment les algorithmes de ces services fonctionneent, il est donc difficile d'estimer quelles informations sont vraiment sensibles. Mais de telles quantités de données peuvent traduire plus qu'on ne pourrait l'imaginer. L'écrivaine Joanne McNeil évoque par exemple comment les "souhaits d'anniversaire" \[_birthday wishes_] sur Facebook pourraient être des indicateurs de la proximité affective que l'on a avec un "ami".[^a058] Ces conclusions sont difficilement vérifiables, et pourtant elles sont loin d'être improbables, dans la mesure où cette proximité est une information qui peut rapporter de l'argent. Je suis plus attentive à une annonce pour des cadeaux à l'approche de l'anniversaire de mon meilleur ami, comme je le serais plus à l'approche des fêtes de fin d'année. Et pour une entreprise qui gagne de l'argent grâce à la vente d'espace publicitaire, c'est une information qui vaut de l'argent.

Dès lors, on peut interpréter de la même manière les fonctions de réponse automatique (que l'on peut considérer comme une forme d'autocomplétion) inclues dans Gmail (image ci-contre). Dans la situation (réelle) présentée ici, quelle différence de sens y a-t-il réellement entre "I don't have it." et "I don't, sorry.", si ce n'est que la première est plus sèche, et la seconde plus aimable ? Si je choisis la première, mon interlocuteur sera-t-il interprété comme un collègue que je n'apprécie pas trop ? Et si je choisis la deuxième, sera-t-il considéré comme une personne avec laquelle j'ai des relations amicales ?

!["Salut Mathilde, est-ce que tu as le fichier indesign en format idml ?" -> "Oui, le voici !" | "Non, je ne l'ai pas." | "Je ne l'ai pas, désolé."](images/réponse-auto-gmail.png)

On pourrait aller encore plus loin et spéculer sur ce qui pourrait être connu de nous dans le cas de l'analyse de conversations privées sur une application comme Messenger. La fréquence des contacts, l'utilisation de mots particuliers ou de smileys sont autant de facteurs qui pourraient permettre d'obtenir avec précision la nature de la relation entre deux personnes (familiale, amicale, amoureuse...).

Ces compagnies ne communiquent pas exactement sur _comment_ elles les utilisent nos données, et pourtant c'est grâce à elles qu'elles gagnent de l'argent. De ce point de vue, être en mesure de pouvoir les consulter, connaître leurs implications, les modifier et les supprimer de manière simple répond à une question d'éthique.

#### Donner le contrôle sur les données personnelles

> Autrement dit, il importe, pour les designers, de travailler l'ensemble de la "chaîne de transformations" des données afin de ne pas dissocier l'organisation des informations brutes (qui est déjà une forme ou un schéma logique) de la façon dont ces connaissances seront rendues consultables à l'écran.[^ddd0]

insi, il faut donner de la visibilité à toute cette _chaîne de transformation_ des données, c'est-à-dire leur parcours depuis leur choix, leur interprétation, leur utilisation dans l'expérience et leur consultation pour l'utilisateur final. C'est une nécessité pour ne pas placer le design comme un acte de polissage, comme un décor qui viendrait s'imposer sur un système technique complexe. Le téléphone mobile est d'une part un objet dont le fonctionnement technique est un mystère pour des milliers d'utilisateurs, et son interface est d'autre part une couche d'abstraction encore supplémentaire. Si cette opacité n'est assurément pas involontaire, et peut s'expliquer entre autres par des considérations commerciales, elle pourrait s'estomper grâce à un design qui fait de la donnée personnelle une entité visible, accessible et modifiable.



### ~~La magie de l'invisibilité~~ => La nécessité de visibilité

Les modèles statistiques utilisés par les algorithmes de machine learning permettent, par l'analyse de grandes quantités de données, de percevoir des corrélations invisibles pour un humain ordinaire. Ces liens mystérieux fascinent, bien qu'ils ne soient pas une source de connaissance explicable. A titre d'exemple, on peut penser aux "pics de rupture" appuyés sur les mises à jour de statut Facebook, qui montrent clairement une hausse au début du printemps et deux semaines avant Noël.[^5ee2] Il faut malgré tout garder à l'esprit que cette connaissance n'est pas forcément juste et indiscutable et que cela peut parfois se réveler problématique.

#### Permettre de déceler les dysfonctionnements

Pour illustrer cette problématique, on peut se pencher sur une étude exposant le problème posé par une faible intelligibilité des modèles basés sur du machine learning. "L'intelligibilité" correspond à la capacité à comprendre pourquoi le système prend une décision. \
Cette étude se place dans le cadre de services de santé. Son but était de concevoir un modèle capable de déterminer les patients avec une haute probabilité de décès (PDD) par pneumonie de manière à les hospitaliser, et traiter ceux avec une faible probabilité en consultation externe.[^a3fa] Deux modèles sont envisagés : un basé sur des réseaux de neurones \[_neural networks_], avec une précision plus élevée mais jugé trop risqué, et un second, basé sur des règles, moins précis, et qui sera finalement choisi.
Sans entrer dans des détails techniques[^32da], ce second modèle permet explicitement, contrairement au premier, de voir les relations entre entre chaque valeur analysée et la PDD associée. Il révèle par exemple que, statistiquement, être asthmatique est corrélé avec un faible niveau de PDD. À première vue, c'est une observation illogique. En fait, il s'avère que les patients atteints de pneumonie avec des antécédents asthmatiques sont généralement directement envoyés en unité de soins intensifs. Comme le pronostic pour ces patients est meilleur que la moyenne, leur chance de survie l'est également. Ainsi, la corrélation existe, mais il n'y pas de lien de causalité. Malgré sa puissance de calcul, l'analyse statistique ne permet pas de faire la différence entre une réelle bonne performance du système médical et une supposée robustesse de la santé du patient. Si le modèle basé sur le réseau de neurones avait été choisi, il aurait pu délibérement suggérer d'envoyer un patient asthmatique en consultation externe au lieu des urgences. Cet exemple illustre la nécessité de ne pas avoir une confiance absolue dans des algorithmes dont on n'est pas en mesure de comprendre le fonctionnement.

Dans un système d'autocomplétion basé sur du machine learning, une dérive pourrait par exemple se trouver si le système se mettait à associer... _trouver un exemple de ce type de problème dans le cadre du système d'autocomplétion_

Si une vigilance lors du développement des systèmes est indispensable, effectuer une "médiation technique" avec l'utilisateur final peut aussi être pertinente. En énonçant clairement comment les suggestions sont produites, on peut permettre de relativiser des résultats inappropriés, incompris ou erronés.[^fc8b]

<!-- ![Gestionnaire de données personnelles](images/gestion-donnees.png) -->


\newpage

<!-- ### 3. ~~Dogme de l'interface _naturelle_~~

(Rapport entre l'intuitivité et l'idée d'interface naturelle)

\newpage -->


## ~~technologie calme~~ => technologie perturbante

La notion de "technologie calme" \[_calm technology_] est introduite en 1995 par Mark Weiser et John Seely Brown dans le texte _Designing Calm Technology_[^f25b]. Ces deux figures, occupant alors des postes à responsabilité au XEROX Parc, et notamment Weiser, considéré comme le père de l'informatique ubiquitaire, font le constat que les technologies de l'information, de plus en plus présentes, sont envahissantes et accaparent trop l'attention. Contre cette tendance, ils expriment leur souhait d'une technologie calme, c'est-à-dire qui n'accapare pas explicitement l'attention de l'utilisateur, et se situe en périphérie de celui-ci.

Mais les auteurs ne proposent pas tant de limiter la place des systèmes informatiques dans la vie quotidienne, ils proposent d'atténuer leur présence en les rendant moins perceptibles. Ils ne questionne pas tant l'envahissement de la technologie, mais sa visibilité.

Nous verrons tout d'abord pourquoi l'idée d'un technologie qui serait en périphérie n'est pas adaptée à la collecte massive des données personnelles qu'impliquent les logiciels basés sur du machine learning. Puis pourquoi mettre l'utilisateur dans une situation contraignante est une opportunité - et même une nécessité - pour profiter des qualités intrinsèques aux algorithmes. Enfin nous expliquerons comment une technologie un peu _étrange_ peut être à l'origine d'une expérience utilisateur plus attrayante.


\newpage

### ~~Technologie d'arrière-plan/périphérie~~

#### _Fais ce que je dis, pas ce que je fais_

Une notion au centre de la _calm technology_ est celle de "périphérie". Weiser recommande de concevoir des objets électroniques qui sont présents de manière ambiante[^3b2a], et qui s'approprient le moins possible l'attention explicite de l'utilisateur. Une illustration de cette idée est celle du thermostat, qui une fois configuré ne nécessite plus d'intervention pour maintenir la température souhaitée. \
La personnalisation, dans le sens de l'adaptation d'un système aux habitudes de l'utilisateur, élément clé des systèmes de recommandation, repose précisément sur cette idée. Ces derniers se nourrissent de notre comportement quotidien implicite, comme retenir les mots utilisés fréquement pour nous les proposer par la suite, ou encore identifier les contacts desquels nous sommes le plus proches pour nous suggérer qui est en ligne. Toujours en quête de métadonnées à analyser, ils considèrent des actions inconscientes comme des choix manifestes.

> In other words, **how are we to deal with** a common problem faced by parents who often say to their children, **“Don’t do what I do; do what I say”**? Obviously while learning by observation is a good way to learn about things in the world and actions to take in certain contexts, it is not enough to actually know why you are taking an action, or when you should take an action.[^188b]

Cependant, comme le souligne Hendler dans son ouvrage sur ce qu'il appelle les "machines sociales", que ce soit par manque d'expérience ou par erreur de jugement, on est tous amené à faire des actions que l'on n'approuve pas tout à fait ou que l'on ne considère pas comme nous représentant réellement. Entre ce que je suis, ce que je fais, et ce que je voudrais être, il y a des écarts qui peuvent être lourds de signification. Or la personnalisation ne prend pas en compte ces contradictions qui font partie du comportement humain. Le système voit ainsi ses utilisateurs sous une identité simplifiée, caricaturale, pour des raisons qui peuvent être au mieux techniques, au pire foncièrement idéologiques[^a8fe]. C'est là un des enjeux de la personnalisation : comment faire le tri entre les actions qui sont signifiantes et celles qui ne le sont pas, et qui peuvent même être contradictoires avec la personnalité réelle d'un individu. \

C'est pourquoi un point primordial à prendre en considération est celui Cela impose de ne plus avoir une personnalisation entièrement autonome, mais guidée par l'utilisateur lui-même. Il s'agit donc de promouvoir des systèmes hybrides, qui combinent les données collectées avec les injonctions explicites de l'utilisateur final. C'est là que se situe vraiment l'opportunité de la personnalisation. Non pas dans l'adaptation "en arrière plan", mais dans le fait de donner à chacun la possibilité d'avoir explicitement le contrôle qu'il souhaite sur les systèmes qu'il utilise.

<!-- Si le machine learning permet des systèmes qui peuvent apprendre et donc évoluer sans nécessiter d'être reprogrammé, un système n'a pas besoin d'être entièrement autonome. On peut se perdre en idéalisant notre vision de la technologie. -->


\newpage

### ~~Une technologie qui fait _juste_ ce qu'on lui demande~~ / Une technologie qui nous pousse un petit peu

Weiser défend l'idée que les objets électroniques ne devraient pas gêner des tâches pour lesquelles ils ne sont pas mandatés. Mais si au contraire on considérait qu'elle peut nous pousser un petit peu en lui laissant de l'espace pour intervenir justement là où on ne l'attend pas ?

Tout designer a déjà entendu cette maxime à un moment de son parcours : _les contraintes sont créatives_. Ne pas avoir un outil parfaitement adapté peut être agaçant, mais peut aussi pousser à l'ingéniosité et générer des usages inattendus. Les contraintes obligent à sortir de ses habitudes et à imaginer des moyens créatifs de les contourner. Des créations d'Oulipo au Conditional Design du Studio Moniker[^7444], de nombreux artistes et designers se sont appropriés la contrainte comme processus de création.
Converser par messagerie, c'est avant tout écrire, une activité créative qui a toutes les raisons d'être réceptive à la contrainte.\
Dans son projet [_100x1000_](https://web.archive.org/web/20120214194015/http://www.stanford.edu/dept/HPS/Haraway/CyborgManifesto.html), l'artiste Sterling Crispin propose d'écrire un court texte de cent mots avec uniquement les mille mots les plus courants de la langue anglaise. Si la personne saisis un mot qui ne fait pas partie de ce corpus, il est effacé aussitôt. Son programme donne un protocole d'écriture qu'il serait épineux de suivre avec des moyens traditionnels comme une liste imprimée de mots à vérifier. _100x1000_ permet une forme d'écriture qui ne serait pas envisageable sans l'outil informatique, il en tire donc pleinement parti.

<!-- #### Principe : Une technologie qui nous pousse un petit peu
-> Image : Mots interdits / Par exemple interdiction d'utiliser des mots trops courants -->


\newpage


## ~~utilisabilité~~ => inventivité

L'_utilisabilité_ peut se définir par la capacité d'un objet à être utilisé de manière efficace (atteindre le but prévu), efficiente (atteindre ce but avec un effort minimal) et générer une satisfaction de l'utilisateur (être agréable à utiliser).[^0f35]

C'est un concept central dans l'histoire du design : le but du design est de résoudre un problème et la qualité d'un design se mesurerait à la l'efficacité avec laquelle l'objet atteint ce but.

Nous verrons d'abord pourquoi cette quête de l'efficacité n'est pas toujours pertinente dans le champ de la communication interpersonnelle, puis pourquoi il faut se méfier de vouloir utiliser la technologie comme une réponse à des problèmes humains.

\newpage

### ~~La quête de l'efficacité~~

Si le design doit répondre à un objectif d'efficacité, alors on peut se poser la question de la signification de "communiquer efficacement". De nombreux outils nous font miroiter un "discours optimisé" : [_Ginger_](http://www.gingersoftware.com/fr) promet à l'usager "d'écrire mieux et plus vite", [_Hemingway_](http://www.hemingwayapp.com/) aide à produire une écriture "claire et audacieuse", l'extension [_Grammarly_](https://www.grammarly.com/) s'engage à la rendre "claire, efficace et sans erreur".

![Grammarly souligne les mots "problématiques"](images/grammarly.jpg)

Cette dernière, _Grammarly_, est une application et une extension pour navigateur qui souligne en temps réel les fautes d'orthographe, de grammaire et de style. Ces corrections stylistiques incluent par exemple la limitation des répétitions et la proposition de mots plus percutants \[_compelling_]. Utilisée comme extension, elle peut superviser tout ce que l'on écrit sur le web, des emails aux statuts sur les réseaux sociaux. Chaque mot "problématique" est souligné, et une explication sur le problème qu'il pose est accessible au survol. L'extension se revendique comme un assistant pour l'écriture, promettant de la rendre plus claire et communicative.

> En fait la clarté est un attribut purement rhétorique, elle n’est pas une qualité générale du langage, possible dans tous les temps et dans tous les lieux, mais seulement l’appendice idéal d’un certain discours, celui-là même qui est soumis à une intention permanente de persuasion. \[...] Bien écrire – désormais seul signe du fait littéraire – c’est naïvement changer un complément de place, c’est mettre un mot “en valeur”, en croyant obtenir par là un rythme “expressif”. Or l’expressivité est un mythe : elle n’est que la convention de l’expressivité.[^b1d6]

Le problème de l'optimisation promise par ces applications, c'est qu'elle pousse à la standardisation en ramenant toutes les formes d'écriture (email, statut) vers un mode argumentaire. Comme l'explique Barthes, la notion même de clarté ou d'expressivité d'un discours n'est pas une propriété fondamentale du langage. C'est une propriété héritée de la rhétorique, qui occulte d'autres aspects de la communication, par exemple la spontanéité. La "bonne manière de parler" est simplement une convention, qu'il est souvent bon de connaitre, mais qui ne devrait pas être vue comme un but en soi. Ces applications ont aussi une tendance à induire une confusion entre la forme et le contenu. Elles présentent le contenu comme une matière maléable qui peut se mouler dans des formes préétablies.[^82d2]

Si l'argument de la "communication efficace" n'est pas univoque, doit-on pour autant se désespérer de trouver un intérêt à la conversation assistée par ordinateur ? La réponse se trouve peut-être dans la capacité d'un logiciel à mettre en place des protocoles d'écriture originaux.


> Because 'tis better to have written and lost, than never to have written at all.

[_The Most Dangerous Writing App_](http://www.themostdangerouswritingapp.com/) est une application web qui a pour but d'aider à maintenir un rythme d'écriture soutenu. L'usager paramètre un temps d'écriture (par exemple cinq minutes), durant lesquelles il doit écrire en permanance. S'il arrête de saisir du texte pendant plus de cinq secondes, tout le texte déjà tapé s'efface et est définitivement perdu. Par un protocole un peu radical et presque un peu sadique, l'application met en place une situation d'écriture inédite. C'est définitivement un outil de productivité, proposant une expérience d'écriture gamifiée. Il permet de trouver des manières d'écrire qui ne seraient permises par un logiciel de traitement de texte standard. Il souligne qu'en voulant résumer le design à la résolution littérale d'un problème existant, on perd de vue les possibilités créatives offertes par les objets électroniques.












\newpage

### ~~Des expériences pleines de bonnes intentions ("Means well")~~

#### _La prison des espérances homogènes_[^12b9]

On voit apparaître dans la multiplicité des objets connectés, de nombreux produits qui se targuent de vouloir régler des problèmes profonds. Simples gadgets ou objets techniques complexes, leur point commun est que leurs auteurs sont pleins de bonnes intentions, ils viennent avec une sincère volonté de résoudre un problème. Mais être bien intentionné n'est pas suffisant pour régler des problèmes complexes, et ces projets finissent souvent par être maladroits, embarassants, voir dangereux.[^5496]
Pour illustrer cela, on peut comparer deux projets qui s'inscrivent dans le même champ d'action : l'assistance à la conversation.

Le premier projet vient du laboratoire d'_effective computing_ (littérelement _information efficace_) du MIT Media Lab, _MACH, My Automated Conversation coacH_[^7a0f], "mon coach automatisé pour la conversation". C'est un système qui a pour but d'améliorer sa posture et sa manière de parler lors des conversations en face-à-face. L'expérience consiste à converser avec un personnage 3D qui répond et réagit en temps réel. Il peut également prendre des initiatives comme interrompre une personne qui serait trop bavarde. Après la discussion, le logiciel fournit un bilan détaillé de l'interaction, en s'appuyant sur des graphiques qui retracent dans le temps un bilan des éléments non-verbaux : la fréquence des sourires, des hochements de tête, des modulations de la voix; et verbaux : la quantité de "mots faibles" (très, bien, en fait...), le débit de parole.

![Bilan graphique de la conversation avec MACH](images/mach-analytics.png "Bilan graphique de la conversation avec MACH")

Le logiciel fournit les objectifs à atteindre pour améliorer sa performance et permet de comparer les différentes sessions d'entraînement pour voir son amélioration (ses progrès). Le projet est présenté comme un véritable assistant, notamment avec [des vidéos avant/après](https://www.youtube.com/watch?v=CHVNOiCT8vA) qui illustrent les réussites du dispositif.

Le second projet, [_us+_](http://lauren-mccarthy.com/us), par les artistes Lauren McCarthy et Kyle McDonald, est une application de vidéoconférence Google Hangouts. Son objectif affiché est d'_optimiser_ la conversation en analysant les expressions faciales et le contenu linguistique grâce à des algorithmes permettant d'extraire des tendances comportementales comme la positivité, l'agressivité ou la féminité. Cette analyse est retransmise en direct à l'utilisateur avec des graphiques en barres. En plus de cette visualisation, l'application affiche des notifications qui donnent des conseils comme "Tu parles beaucoup trop", et peut effectuer des actions concrètes comme couper le son (voir image).
![Interface de us+, "On t'a coupé le son parce que tu as déjà trop parlé"](images/interface-us-plus.jpg "Interface de us+")

Avec un même objectif affiché et s'appuyant sur des études scientifiques similaires (analyse des sentiments, comparaison des temps de parole) ces deux projets illustrent deux manières d'aborder le sujet sensible de _l'amélioration_ des compétences sociales grâce à la technologie. Le premier se revendique comme une solution presque thérapeutique pour les gens qui ont des difficultés avec les relations sociales, dans des contextes aussi vastes qu'un entretien d'embauche ou un rendez-vous galant[^dd06]. Derrière ce projet se trouve une vision du comportement humain comme étant rationnel, quantifiable et contrôlable grâce à des paramètres. Comme dans un jeu de gestion, on doit atteindre son but (communiquer mieux) en ajustant différents facteurs. Sauf que les règles qui régissent le "monde réel" sont plus complexes, plus imprévisibles, et espérons-le, moins déterministes que celles d'un jeu vidéo. À l'inverse, _us+_ se présente comme un outil ironique, soulignant la dépendance que l'on a envers des logiciels hors de notre champ de compréhension, et ce même dans des aspects intimes de notre vie comme dans nos communications informelles.[^d60b] C'est un projet qui est là pour poser la question ouverte de la place et les limites que l'on souhaite donner à des logiciels qui ont un contrôle grandissant sur la gestion de notre vie quotidienne. C'est l'opposition entre une vision qui se pose la question du _comment_ et une autre qui se pose celle du _pourquoi_.



\newpage


## Vers de nouvelles formes de collaboration humain-machine

Au cours des trois chapitres précédents, nous avons vu pourquoi l'algorithmisation des conversations par l'autocomplétion nécessite de mettre en place des stratégies de design différentes. Pour résumer, ces stratégies s'articulent autour de trois points.
+ Un design _visible_
  + L'élimination de toute forme de friction n'est pas un but.
  + L'interface doit présenter de manière ostensible le parcours des données de l'usager.
  + La présence de décisions basées sur des algorithmes doit être explicitement énoncée.
+ Un design _subversif_
  + Un usager ne se résume pas à une entité unique. Le design doit prendre en compte ses personnalités multiples.
  + La présence de contrainte dans le parcours utilisateur doit être vue comme une opportunité pour proposer une expérience originale.
+ Un design qui pousse à _l'inventivité_
  + L'exploitation des caractéristiques des algorithmes est autant valable que la résolution d'un problème.
  + Une approche critique de la technologie doit primer sur une approche naïve.

L'imaginaire que l'on associe aux "assistants personnel" est fortement influencé par une vision anthropomorphique de l'intelligence artificielle. On considère qu'un ordinateur intelligent est un ordinateur qui se comporte comme un humain : qui est capable de parler, écrire, être émotif. Mais les appareils électroniques peuvent avoir un intérêt au-delà de cette image de l'humain "augmenté". On peut voir l'autocomplétion non pas comme un assistant mais comme un _outil créatif_.


### La technologie en tant qu'outil créatif d'expression et non en temps qu'assistant

Ces principes doivent nous amener à regarder les objets électroniques sous un regard qui n'est pas celui de l'assistant personnel. Est-on obligé de penser l'assistance sous l'angle d'une visée utilitariste ? N'y aurait-il pas des alternatives ?

La relation que l'on a avec un assistant est une relation hérarchique, il nous est subordonné. Il est celui auquel on délègue une tâche, qu'on est souvent en mesure de réaliser, mais qu'on n'a pas envie de faire. On peut émettre l'hypothèse qu'il faut repenser cette relation humain-machine, pour la voir plutôt comme une forme de collaboration.

On peut voir dans les machines des opportunités pour penser et s'exprimer différement et non pas comme un assistant qui là pour nous permettre d'augmenter notre productivité. La clé de voûte de la relation humain-machine ne doit pas être la productivité mais l'inventivité.
Pour pouvoir profiter de ces qualités qui sont au-delà même de ce qu'on peut imaginer,

Comme dans une équipe, le succès d'une collaboration réside dans la compréhension mutuelle entre les deux équipiers. Elle peut passer, comme nous l'avons vu dans la partie 2, par une interface qui laisse transparaître le fonctionnement du système. Mais elle peut aussi passer par le fait d'avoir des logiciels aisément configurables et reconfigurables. C'est-à-dire privilégier des formes de logiciel qui soient modulaires et paramétrables, permettant des possibilités d'utilisation exponentielles. Par _modulaire_ j'entends un logicel sur lequel on peut venir des greffer d'autre petits logiciels, de manière enrichir ses fonctionnalités. Par _paramétrable_ j'entends des possibilités de configuration étendues. Ces deux directions encouragent une diversité des fonctionnalités en laissant aux utilisateurs eux-mêmes la possibilité de personnaliser leurs outils.

### Le modèle des extensions

Un modèle qui tire parti de cela est celui des extensions \[_addons_] pour navigateurs (Firefox ou Google Chrome par exemple). Une extension est un petit programme que l'on peut utiliser pour enrichir les fonctionnalités d'un navigateur. Ce n'est pas un logiciel ni une application en soit, mais un module que l'on peut greffer sur un logiciel existant pour étendre ses fonctions. Certaines extensions sont officielles et grand public (bloqueurs de publicité, calendriers, traducteurs). D'autres ressemblent plus à de petits _hacks_[^e149], par exemple _I'm not robot captcha clicker_ valide automatiquement le captcha pour faire gagner quelques secondes, ou bien _Disable Ctrl-Q_ empêche de fermer accidentellement son navigateur avec le raccourci clavier 'ctrl+Q'. D'autres enfin sont explicitement des projets artistiques, voir activitistes, par exemple [loveMachine](http://lovemachine.cc/), qui envoie un "j'aime" à toutes les publications disponibles dans le fil d'actualité de Facebook pour ne plus être touché efficacement par les publicités ciblées.\
Les extensions peuvent provenir de sources variées, de développeurs professionnels comme amateurs, et sont donc porteuses d'une diversité impossible à trouver dans un logiciel classique.


### L'importance d'avoir des logiciels paramètrables et modulaires

> Ainsi, ce que dénonce David M. Berry, c’est bien le développement de certains types de machines (programmes) avec lesquelles nous ne pouvons strictement rien faire, ou peu faire, ou ne rien faire qui n’ait déjà été anticipé – des machines qui « rendent service » de façon si parfaitement programmée qu’aucune marge de manoeuvre ne sera possible, mettant ainsi en défaut toute conduite technique. Contre l’automatisation issue des sciences comportementales, il nous faut donc oeuvrer à rechercher et à créer des « marges d’indétermination » au sein de nos rapports aux machines."[^a022]

Si l'on commence à penser une application non pas comme un logiciel parfaitement conçu, à utiliser selon des critères prédéfinis, mais comme une base pouvant être étendue à l'infini par l'utilisateur, alors on laisse une place à des usages originaux et inventifs. On laisse aussi la place à



|    Etat actuel                         |    Etat futur                            |
|----------------------------------------|------------------------------------------|
| quelques fonctionnalités activées en permanence | beaucoup de fonctionnalités activables/désactivables |
| une interface pour tout le monde       | une interface par conversation/contextes |
| fonctionnalités permanentes            | fonctionnalités interchangeables         |
| monolithique                           | modulaire                                |
| utilisable                             | configurable                             |
| quelques grosses fonctionnalités       | ensemble de micro-fonctionnalités        |



### Vers une technologie _chili_

> Maybe you want _chili technology_, maybe you actually think that technology is something **a bit exciting that should push you a little bit. Not just being in the background and do just what you want to do**, but sometimes, come in your life and have a kind of **unexpected effect**.[^2bb8]

<!-- Le piment est rouge, il est visible.
Le piment est fort, il est perturbant.
Le piment ramène une saveur que lui seul possède, il pousse à l'inventivité. -->

La manière dont on parle du design est déjà une manière d'orienter les décisions des designers lors de la conception d'objets et d'expériences. Ce terme de _technologie chili_, comme une forme de technologie qui ne viendrait pas tant résoudre un problème mais pour pimenter la vie de tous les jours. Cette technologie chili s'articule autour de trois idées :

#### Une interface visible
L'interface n'est ni une couche de décoration, ni une couche de facilitation. C'est un élément qui doit donner les clés de compréhension d'un système.

#### Une expérience perturbante
Un logiciel doit montrer qu'il est là. L'utilisateur doit avoir conscience d'utiliser un système automatisé, pour pouvoir en tirer parti au maximum et ne pas être frustré lorsqu'il ne fonctionne pas.

#### Un objectif : pousser à l'inventivité
L'objectif d'une application ne doit pas être vu sous l'angle utopique de rendre le monde meilleur, mais sous celui de créer un espace pour proposer des modes de pensée qui ne sont pas accessibles par un humain. Créer un espace littéral et intellectuel pour la pensée associative, la curiosité et la créativité.


\newpage


## Annexe : Et si... ?

Durant ce mémoire, j'ai développé plusieurs principes qu'ils me semblent utiles de garder à l'esprit quand on conçoit l'expérience et l'interface d'un système d'autocomplétion.

En parallèle, en temps que designer, il me paraissait important d'illustrer ces principes par des exemples d'application concrets. Cette annexe présente une petite collection d'interfaces fictionnelles, qui tirent parti des algorithmes de machine learning, en se plaçant dans la lignée de la technologie chili.


\newpage

### Gestionnaire de personnalité

![Et si... la personnalité n'était pas une chose figée dont il s'agirait de saisir l'exactitude, mais comme quelque chose de maléable, qui peut changer en fonction du moment de la journée ou même de la personne avec laquelle on parle ? Et si on donnait la possibilité à chacun de modeler sa personnalité en fonction de son humeur ?](images/principe-gestionnaire-humeur.png "")

\newpage

### Ecrire dans le style de...

![Et si... on pouvait écrire dans le style de quelqu'un d'autre ?](images/write-in-the-style-of.png "")

\newpage



## Bibliographie


Arnall, Timo. 2013. « No to NoUI ». Elastic Space (blog). 13 mars 2013. http://www.elasticspace.com/2013/03/no-to-no-ui.

Barthes, Roland. 1953. Le Degré zéro de l’écriture. Le Seuil.

Caruana, Rich, Yin Lou, Johannes Gehrke, Paul Koch, Marc Sturm, et Noemie Elhadad. 2015. « Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital 30-day Readmission ». In Proceedings of the 21th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 1721–1730. KDD ’15. New York, NY, USA: ACM. https://doi.org/10.1145/2783258.2788613.

Christie, Alex. 2017. « Smooth Talk - Proofreading Apps Gloss over the Meaning of Our Words ». Real Life (blog). 2 novembre 2017. http://reallifemag.com/smooth-talk/.

Emerging-Technology-Hype-Cycle-for-2017_Infographic_R6A.jpg (Image JPEG, 1500 × 1269 pixels) - Redimensionnée (65%). s. d. Consulté le 9 février 2018. https://blogs.gartner.com/smarterwithgartner/files/2017/08/Emerging-Technology-Hype-Cycle-for-2017_Infographic_R6A.jpg.

Finn, Ed. 2017. What algorithms want : Imagination in the age of computing. Cambridge, Mass: The MIT Press.

« Frederic Kaplan “Beyond Robotics” Lift07 EN) ». 2009. Vimeo. 2009. https://vimeo.com/6453775.

Girardin, Fabien. 2016. « Experience Design in the Machine Learning Era ». Fabien Girardin (blog). 9 décembre 2016. https://medium.com/@girardin/experience-design-in-the-machine-learning-era-e16c87f4f2e2.

Grover, Dale L., Martin T. King, et Clifford A. Kushler. 1998. Reduced keyboard disambiguating computer. US5818437 (A), issued 6 octobre 1998. https://worldwide.espacenet.com/publicationDetails/biblio?FT=D&date=19981006&DB=&locale=en_EP&CC=US&NR=5818437A&KC=A&ND=1.

Hall, David. 2017. « NoUI and the Danger of Invisible Design ». David Hall (blog). 12 juillet 2017. http://davehall.io/noui-danger-invisible-design/.

Hendler, James, et Alice M. Mulvehill (auth.). 2016. Social Machines: The Coming Collision of Artificial Intelligence, Social Networking, and Humanity. 1ʳᵉ éd. Apress.

Kaplan, Frederic. 2014. « Linguistic Capitalism and Algorithmic Mediation ». Representations 127 (1): 57‑63. https://doi.org/10.1525/rep.2014.127.1.57.

Krishna, Golden. 2015. The best interface is no interface: the simple path to brilliant technology. San Francisco, Calif.: New Riders.

Lalwani, Mona. 2016. « The next Wave of AI Is Rooted in Human Culture and History ». Engadget (blog). 16 août 2016. https://www.engadget.com/2016/08/16/the-next-wave-of-ai-is-rooted-in-human-culture-and-history/.

L’Obs. s. d. « Gérard Berry : « L’ordinateur est complètement con » ». Consulté le 9 février 2018. https://www.nouvelobs.com/rue89/rue89-le-grand-entretien/20160826.RUE7684/gerard-berry-l-ordinateur-est-completement-con.html.

« MACH-My Automated Conversation coacH ». s. d. Consulté le 9 février 2018. http://hoques.com/MACH.htm.

Manny. 2017. « The Business Case for Machine Learning Interpretability ». Fast Forward Labs Blog (blog). 2 août 2017. http://blog.fastforwardlabs.com/2017/08/02/business-interpretability.html.

Manovich, Lev. 2001. The language of new media. A Leonardo book. Cambridge, Mass. ; London: The MIT Press.

Masure, Anthony. 2016. « Subjectivités computationnelles et consciences appareillées ». Multitudes, nᵒ 62 (avril): 87‑96. https://doi.org/10.3917/mult.062.0087.

Maurer, Luna, Edo Paulus, Jonathan Puckey, et Roel Wouters. s. d. « Conditional Design - Conditional Design ». Consulté le 9 février 2018. https://conditionaldesign.org/manifesto/.

McNeil, Joanne. s. d. « The Internet of Things Will Ruin Birthdays ». Consulté le 9 février 2018. https://medium.com/message/the-internet-of-things-will-ruin-birthdays-8a5b781abb6b.

McQuillan, Dan. 2017. « Data Science as Machinic Neoplatonism ». Philosophy & Technology, août, 1‑20. https://doi.org/10.1007/s13347-017-0273-3.

« “Means Well” Technology and the Internet of Good Intentions ». 2015. Thingclash. 15 août 2015. http://www.thingclash.com/blog/2015/8/15/means-well-technology-and-the-network-of-good-intentions.

Pariser, Eli. 2011. The Filter Bubble: What the Internet Is Hiding from You. Penguin Press HC, The.

Poole, Erika Shehan, Christopher A. Le Dantec, James R. Eagan, et W. Keith Edwards. 2008. « Reflecting on the Invisible: Understanding End-user Perceptions of Ubiquitous Computing ». In Proceedings of the 10th International Conference on Ubiquitous Computing, 192–201. UbiComp ’08. New York, NY, USA: ACM. https://doi.org/10.1145/1409635.1409662.

Ratto, Matt. 2007. « Ethics of Seamless Infrastructures : Resources and Future Directions ». International Review of Information Ethics 8 (8): 20‑27.

Sheret, Matthew. 2017. « Making It Clear When Machines Make Decisions ». Projects By If Blog (blog). 20 avril 2017. https://projectsbyif.com/blog/making-it-clear-how-machines-make-decisions.

Silfverberg, Miika, I. Scott MacKenzie, et Panu Korhonen. 2000. « Predicting Text Entry Speed on Mobile Phones ». In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, 9–16. CHI ’00. New York, NY, USA: ACM. https://doi.org/10.1145/332040.332044.

« The Original Hacker’s Dictionary ». s. d. Consulté le 9 février 2018. http://www.dourish.com/goodies/jargon.html.

Thornton, Pip. 2017. « Subprime Language: The Changing Value of Words in an Age of Digital Linguistic Capitalism ». RESEARCH VALUES 2018 (blog). 4 décembre 2017. https://researchvalues2018.wordpress.com/2017/12/04/subprime-language-the-changing-value-of-words-in-an-age-of-digital-linguistic-capitalism/.

Turing, A. M. 1950. « Computing Machinery and Intelligence ». Mind 59 (236): 433‑60.

« US+ ». s. d. 21st Century Digital Art. Consulté le 9 février 2018. http://www.digiart21.org/art/us.

Weiser, Mark, et John Seely Brown. 1995. « Designing Calm Technology ». 21 décembre 1995. http://www.ubiq.com/hypertext/weiser/calmtech/calmtech.htm.

Weizenbaum, Joseph. 1981. Puissance de l’ordinateur et raison de l’homme: du jugement au calcul. Ed. d’informatique.


\newpage

Imprimé à la HEAD - Genève, sur du papier ..., avec le caractères typographiques ...

Ce texte est également disponible en ligne sur le site internet mathildebuenerd.fr.



[^2bb8]: Kaplan, Frederic. 2007. « Beyond Robotics ». Lift07. Vimeo. 8 février 2007. https://vimeo.com/6453775. 21:26.

[^4c7e]: Poole, Erika Shehan, Christopher A. Le Dantec, James R. Eagan, et W. Keith Edwards. 2008. « Reflecting on the Invisible: Understanding End-user Perceptions of Ubiquitous Computing ». In Proceedings of the 10th International Conference on Ubiquitous Computing, 192–201. UbiComp ’08. New York, NY, USA: ACM.

[^a674]: Finn, 2017, p. 7.

[^d3eb]: Gillespie (ed.), Tarleton, Pablo J. Boczkowski (ed.), et Kirsten A. Foot (ed.). 2014. Media Technologies: Essays on Communication, Materiality, and Society. 1st éd. Inside Technology. The MIT Press. p. 184.

[^4bd6]: Finn, 2017, p. 21.

[^5238]: Finn, 2017, p. 50.

[^e3bd]: Citton, Yves. 2015. « Herméneutique et (re)médiation : vers des études de media comparés ? » Critique, nᵒ 817‑818 (juin): 569‑81.

[^f0f4]: Hall, David. 2017. « NoUI and the Danger of Invisible Design ». David Hall (blog). 12 juillet 2017.

[^724f]: Ratto, Matt. 2007. « Ethics of Seamless Infrastructures : Resources and Future Directions ». International Review of Information Ethics 8 (8): 20‑27.

[^ab7d]: Hendler, James, et Alice M. Mulvehill (auth.). 2016. Social Machines: The Coming Collision of Artificial Intelligence, Social Networking, and Humanity. 1ʳᵉ éd. Apress. p. 10

[^f25b]: Weiser, Mark, et John Seely Brown. 1995. « [Designing Calm Technology](http://www.ubiq.com/hypertext/weiser/calmtech/calmtech.htm) ». 21 décembre 1995.

[^a8fe]: On peut penser par exemple à Mark Zuckerberg, qui déclarait en 2011 à David Kirkpatrick dans _The Facebook Effect_ (Simon & Schuster) qu'avoir deux identités était un exemple de "manque d'intégrité".

[^7a0f]: « MACH-My Automated Conversation coacH ». Consulté le 9 février 2018. http://hoques.com/MACH.htm

[^dd06]: [Explication des motivations derrière le projet](https://www.youtube.com/watch?v=l3ztu9shfMg), par leurs auteurs.

[^d60b]: Critique plus approfondie d'us+, « [US+](http://www.digiart21.org/art/us) ». s. d. 21st Century Digital Art. Consulté le 9 février 2018.

[^12b9]: « [“Means Well” Technology and the Internet of Good Intentions](http://www.thingclash.com/blog/2015/8/15/means-well-technology-and-the-network-of-good-intentions) ». 2015. Thingclash. 15 août 2015.

[^1b33]: Pariser, Eli. 2011. The Filter Bubble: What the Internet Is Hiding from You. Penguin Press HC, The.

[^258b]: Pour une analyse plus détaillée des liens entre design d'expérience et machine learning, voir Girardin, Fabien. 2016. « Experience Design in the Machine Learning Era ». Medium (blog). 9 décembre 2016.

[^5f04]: On peut également citer The Invisible Computer de Don Norman, publié en 1998.

[^188b]: Hendler et Mulvehill, 2016

[^3b2a]: C'est la vision à la base de la notion d'informatique ubiquitaire, que Weiser a contribué à définir et populariser. Voir http://www.ubiq.com/hypertext/weiser/UbiHome.html

[^e393]: La capacité à comprendre quels critères ont déterminé une suggestion.

[^57b4]: L'optimisation délibérée des contenus pour les rendre plus facilement indexables par un algorithme n'est que l'aspect le plus visible de cette négociation tacite. Parmi d'autres aspects Gillepsie cite l'utilisation de hashtags populaires non-relatifs au contenu pour se faire remarquer, ou encore les utilisateurs que P2P qui font exprès des fautes de frappes pour "cacher" un contenu illégal.

[^fe98]: Grover, Dale L., Martin T. King, et Clifford A. Kushler. 1998. Reduced keyboard disambiguating computer. US5818437 (A), 6 octobre 1998.

[^6a14]: Pour un historique plus détaillé des différentes méthodes de disambiguation, voir Silfverberg, Miika, I. Scott MacKenzie, et Panu Korhonen. 2000. « Predicting Text Entry Speed on Mobile Phones ». In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, 9–16. CHI ’00. New York, NY, USA: ACM.

[^1715]: On estime à à peine 5% la probabilité d'erreur de prédiction grâce à cette approche linguistique (Silfverberg, MacKenzie, et Korhonen 2000).

[^3e08]: _"text on 9 keys"_, basé sur les travaux de Scott Minneman et développé par Tegic Communications Inc. à la fin des années 90. On peut aussi citer l'iTap (Motorola) ou la technologie LetterWise qui ont une approche assez similaire.

[^02ed]: Kaplan, Frederic. 2014. « Linguistic Capitalism and Algorithmic Mediation ». Representations 127 (1): 57‑63. Voir aussi l'extension de la métaphore financière par Pip Thornton, qui parle de la possible création d'un "langage subprime". Thornton, Pip. 2017. « Subprime Language: The Changing Value of Words in an Age of Digital Linguistic Capitalism ». RESEARCH VALUES 2018 (blog). 4 décembre 2017.

[^a3fa]: Caruana, et al. 2015. « Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital 30-day Readmission ». In Proceedings of the 21th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 1721–1730. KDD ’15. New York, NY, USA: ACM. Pour une analyse de cette étude voir Manny. 2017. « The Business Case for Machine Learning Interpretability ». Fast Forward Labs (blog). 2 août 2017.

[^7444]: Maurer, Luna, Edo Paulus, Jonathan Puckey, et Roel Wouters. s. d. « Conditional Design Manifesto ».

[^0f35]: Selon la norme ISO 9241-11. Voir sur Wikipédia https://fr.wikipedia.org/wiki/Utilisabilité

[^e149]: Un hack est une solution rapide, bricolée mais ingénieuse pour contourner un problème. Voir « The Original Hacker’s Dictionary ». s. d. Consulté le 9 février 2018. http://www.dourish.com/goodies/jargon.html.

[^2834]: Arnall, Timo. 2013. « No to NoUI ». Elastic Space (blog). 13 mars 2013.

[^00d5]: Turing, A. M. 1950. « Computing Machinery and Intelligence ». Mind 59 (236): 433‑60.

[^090c]: Weizenbaum, Joseph. 1981. Puissance de l’ordinateur et raison de l’homme : du jugement au calcul. Ed. d’informatique., pp. 121-133.

[^2930]: Weizenbaum, 1981. pp. 5-11.

[^5496]: Par exemple [LegalFling](https://motherboard.vice.com/en_us/article/paqvn7/dont-fuck-anybody-who-wants-to-get-your-consent-uploaded-to-the-blockchain-legalfling-app), une app qui utilise la technologie de la blockchain pour gérer le consentement à avoir une relation sexuelle.

[^152f]: En 2017, "machine learning" et "deep learning" (une méthode spécifique d'application du machine learning) étaient tout en haut du "pic des attentes exagérées" \[_peak of inflated expectations_] du [Gartner Hype Cycle](https://blogs.gartner.com/smarterwithgartner/files/2017/08/Emerging-Technology-Hype-Cycle-for-2017_Infographic_R6A.jpg).

[^0887]: En pratique, ces systèmes sont généralement hybrides, ils mélangent ces deux approches.

[^9b65]: "Nous recueillons des informations sur les personnes et les groupes avec lesquels vous êtes en contact, ainsi que la manière dont vous interagissez avec eux (par exemple, les personnes avec qui vous communiquez le plus ou encore les groupes au sein desquels vous aimez vous exprimer)", "Nous recueillons également des informations concernant la manière dont vous utilisez nos Services, telles que \[...] la fréquence et la durée de vos activités." Voir la [_Politique d’utilisation des données_](https://www.facebook.com/privacy/explanations) de Facebook.

[^a058]: McNeil, Joanne. 2014. « The Internet of Things Will Ruin Birthdays ». Medium (blog). 28 juillet 2014.

[^4080]: Arnall, 2013.

[^5ee2]: Voir la [datavisualisation](https://informationisbeautiful.net/2010/peak-break-up-times-on-facebook/) de David McCandless & Lee Byron.

[^ddd0]: Masure, Anthony. 2016. « Subjectivités computationnelles et consciences appareillées ». Multitudes, nᵒ 62 (avril): 87‑96.

[^fc8b]: Pour une analyse plus détaillée, et des propositions concrètes sur comment rendre visible le fait qu'une décision est automatisée, Voir Sheret, Matthew. 2017. « [Making It Clear When Machines Make Decisions](https://projectsbyif.com/blog/making-it-clear-how-machines-make-decisions) ». Projects By If Blog (blog). 20 avril 2017.

[^32da]: Explication plus approfondie de pourquoi des réseaux de neurones sont opaques par nature : McQuillan, Dan. 2017. « Data Science as Machinic Neoplatonism ». Philosophy & Technology, août, 1‑20.

[^b1d6]: Barthes, Roland. 1953. Le Degré zéro de l’écriture. Le Seuil.

[^82d2]: Pour une analyse plus détaillée des systèmes de correction, voir Christie, Alex. 2017. « [Smooth Talk - Proofreading Apps Gloss over the Meaning of Our Words](http://reallifemag.com/smooth-talk/) ». Real Life (blog). 2 novembre 2017.

[^a022]: Masure, 2016.

[^838a]: Hayles, N. Katherine. 2005. My Mother Was a Computer: Digital Subjects and Literary Texts. 1ʳᵉ éd. University Of Chicago Press.

[^edb8]: Finn, Ed. 2017. What algorithms want : Imagination in the age of computing. Cambridge, Mass: The MIT Press.

[^2494]: Krishna, Golden. 2015. The best interface is no interface: the simple path to brilliant technology. San Francisco, Calif.: New Riders.
