"use strict";(self.webpackChunkcyberdocs=self.webpackChunkcyberdocs||[]).push([[6103],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,o(o({ref:a},d),{},{components:t})):r.createElement(g,o({ref:a},d))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4832:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:11},o="OSINT",s={unversionedId:"Recursos/conceptos_ciberseguridad/osint",id:"Recursos/conceptos_ciberseguridad/osint",title:"OSINT",description:"Tipos de OSINT",source:"@site/docs/Recursos/conceptos_ciberseguridad/osint.md",sourceDirName:"Recursos/conceptos_ciberseguridad",slug:"/Recursos/conceptos_ciberseguridad/osint",permalink:"/IFCT0109/docs/Recursos/conceptos_ciberseguridad/osint",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Libros de Jugadas de Ciberseguridad",permalink:"/IFCT0109/docs/Recursos/conceptos_ciberseguridad/cybersecurity_playbook"},next:{title:"CERT - Computer Emergency Response Team",permalink:"/IFCT0109/docs/Recursos/conceptos_ciberseguridad/cert_computer_emergency_response_team"}},l={},c=[{value:"Tipos de OSINT",id:"tipos-de-osint",level:2},{value:"Recomendaciones al utilizar t\xe9cnicas y herramientas OSINT",id:"recomendaciones-al-utilizar-t\xe9cnicas-y-herramientas-osint",level:2},{value:"Awesome List",id:"awesome-list",level:2},{value:"\ud83d\udee0 Herramientas OSINT",id:"-herramientas-osint",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"osint"},"OSINT"),(0,n.kt)("h2",{id:"tipos-de-osint"},"Tipos de OSINT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SIGINT"),": inteligencia basada en la intercepci\xf3n de se\xf1ales."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HUMINT"),": inteligencia basada en personas."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IMINT"),": inteligencia basada en im\xe1genes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ELINT"),": inteligencia basada en se\xf1ales el\xe9ctricas."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GEOINT"),": inteligencia basada en im\xe1genes satelitales de la Tierra."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FININT"),": inteligencia basada en informaci\xf3n financiera."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SOCINT"),": inteligencia basada en redes sociales.")),(0,n.kt)("h2",{id:"recomendaciones-al-utilizar-t\xe9cnicas-y-herramientas-osint"},"Recomendaciones al utilizar t\xe9cnicas y herramientas OSINT"),(0,n.kt)("p",null,"Se recomienda tomar ciertas precauciones al utilizar herramientas OSINT (Inteligencia de Fuentes Abiertas) para garantizar el respeto de la privacidad y seguridad de las personas y la informaci\xf3n recopilada. En este sentido, se sugiere:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Respetar la privacidad"),": No se debe recopilar informaci\xf3n privada o confidencial sin el consentimiento expl\xedcito de la persona afectada, lo que es de suma importancia."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verificar la informaci\xf3n"),": Antes de utilizar la informaci\xf3n recopilada para cualquier prop\xf3sito, es fundamental verificar su veracidad y relevancia para asegurar su validez."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mantener la seguridad de la informaci\xf3n"),": Para proteger la informaci\xf3n recopilada de posibles robos o brechas de datos, es necesario tomar medidas para mantener su seguridad al recopilarla y almacenarla."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conocer la legislaci\xf3n aplicable"),": Es esencial conocer las leyes y regulaciones locales, nacionales e internacionales relacionadas con la recopilaci\xf3n y el uso de informaci\xf3n p\xfablica para evitar cometer delitos o violar la privacidad de otros."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Evitar recopilar informaci\xf3n que sea sensible o confidencial")," sin el consentimiento expl\xedcito de la persona afectada. Esto incluye informaci\xf3n m\xe9dica, financiera, pol\xedtica, religiosa y sexual, entre otras."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tener cuidado al utilizar herramientas OSINT automatizadas")," que puedan violar los t\xe9rminos de servicio de las plataformas en l\xednea o infringir los derechos de autor. Algunas herramientas de OSINT pueden requerir una cuenta de usuario o una clave de API para funcionar correctamente, y es importante asegurarse de que est\xe9 autorizado a utilizarlos antes de hacerlo.")),(0,n.kt)("h2",{id:"awesome-list"},"Awesome List"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cipher387/osint_stuff_tool_collection"},"osint_stuff_tool_collection"))),(0,n.kt)("h2",{id:"-herramientas-osint"},"\ud83d\udee0 Herramientas OSINT"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Link"),(0,n.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://accountanalysis.app/"},"Accountanalysis")),(0,n.kt)("td",{parentName:"tr",align:null},"Accountanalysis es una herramienta de investigaci\xf3n OSINT enfocada en la red social Twitter. Su funci\xf3n principal es generar informes detallados sobre las caracter\xedsticas de una cuenta p\xfablica, como la cantidad de seguidores y seguidos, la frecuencia de tweets, el nivel de interacci\xf3n, los horarios de mayor actividad y los hashtags m\xe1s utilizados, entre otros aspectos.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://app.skylens.io/"},"Apps.skylens.io")),(0,n.kt)("td",{parentName:"tr",align:null},"Publicaciones con geoetiquetas de cinco redes sociales a la vez en un mapa (Twitter, YouTube, Instagram, Flickr, Vkontakte)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.maltego.com/downloads/"},"Maltego")),(0,n.kt)("td",{parentName:"tr",align:null},"Dentro del mundo OSINT, Maltego destaca como una de las herramientas m\xe1s reconocidas y potentes. Su caracter\xedstica distintiva es su uso de grafos para visualizar la informaci\xf3n, lo que posibilita la creaci\xf3n de diagramas que revelan patrones y conexiones ocultas. Asimismo, su gran capacidad se debe al amplio volumen de fuentes que utiliza.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://namechk.com/"},"Namechk")),(0,n.kt)("td",{parentName:"tr",align:null},"Namechk no solo se utiliza para comprobar la disponibilidad de un nombre de usuario en m\xfaltiples plataformas en l\xednea, sino que tambi\xe9n ofrece la posibilidad de buscar y encontrar perfiles de una persona espec\xedfica en la red. Para ello, se ingresa el nombre del usuario en cuesti\xf3n y Namechk busca en diversas plataformas en l\xednea para encontrar perfiles que coincidan con la informaci\xf3n proporcionada, presentando una lista de perfiles relevantes. Esta herramienta es de gran utilidad para investigadores, periodistas, empresas y agencias gubernamentales que buscan recopilar informaci\xf3n en l\xednea sobre un individuo, as\xed como para aquellas personas que desean encontrar perfiles en l\xednea de amigos o contactos perdidos.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/sherlock-project/sherlock#installation"},"Sherlock")),(0,n.kt)("td",{parentName:"tr",align:null},"Sherlock es una herramienta de c\xf3digo abierto escrita en Python que, al igual que Namechk, permite buscar un nombre de usuario espec\xedfico en las redes sociales m\xe1s utilizadas. Una vez realizada la b\xfasqueda, proporciona el enlace al perfil correspondiente.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seekr-osint"},"Seekrx")),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);