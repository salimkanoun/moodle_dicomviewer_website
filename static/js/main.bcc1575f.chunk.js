(this.webpackJsonpdocu_moodle=this.webpackJsonpdocu_moodle||[]).push([[0],{14:function(e,t,s){},22:function(e){e.exports=JSON.parse('{"Header":{"subtitle":"A plugin for the Learning Management System Moodle!"},"Navbar":["Why?","How it work?","How to use?","About"],"Why":{"title":"Why?","introduction":"The DicomViewer plugin is available on the Moodle online learning platform (LMS).","viewerTitle":"It offers the possibility of viewing DICOM studies using two viewers:","conclusion":["The main purpose of this plugin is to provide remote access to DICOM study viewers to medical students in a known environment. This will promote learning in a context of online studies.","Teachers will then be able to share DICOM studies with their students."],"quote":"DicomViewer is an educational tool to improve the transmission of knowledge."},"Work":{"title":"How it work?","introduction":["The DicomViewer plugin includes the 2 DICOM study viewers in their static distribution.","Your Orthanc server is used to host your DICOM studies which will be called by our DicomViewer plugin."],"body":"It is recommended to use a reverse proxy linking your Orthanc server and your moodle site (such as Traefik, Apache, Ngnix).","legend":"The plugin DicomViewer with a reverse proxy"},"Use":{"title":"How to use?","part1":{"title":"General instructions","body":["As you would with any other activity plugin, you need to download it from the official moodle repository via the page "," and install it in your moodle."," You must have an Orthanc server at your disposal to securely host DICOM studies."],"legend":"Plugin parameters to configure on moodle"},"part2":{"title":"Parameters to configure","body":"Once installed, you need to configure the following plugin settings in the site administration:","list":{"element":["Expected origin message. The original message allowed corresponding to dynamic actions and triggered by another web page using \\"window.postMessage()\\".","Dicom web root. Root path of the DICOM web server.","Wado Uri Root. Address for Wado Uri Root.","Qido Root. Address for Qido Root.","Wado Root. Address for Wado Root."],"default":[" By default : https://mymoodle.com"," By default : https://mymoodle.com/dicom-web (if you use a reverse proxy)"," By default a relative path : /wado"," By default a relative path : /dicom-web"," By default a relative path : /dicom-web"]}},"part3":{"title":"Uses","body":["Add the desired DICOM study on the Orthanc server and retrieve its StudyInstanceUID.","Creation of the activity in a courses Moodle.","Added a name for the activity, the number of the StudyInstanceUID to study and a potential description.","The 2 viewers are now accessible for this DICOM study and ready to use."],"legend":["Adding the Viewer DICOM Image activity to a moodle course","Parameters to configure for the activity","Result of the creation of the activity"]},"part4":{"title":"Result of the 2 viewers on Moodle","legend":["OHIF viewer display","StoneWebViewer viewer display"]},"part5":{"title":"Tips on setting up a reverse proxy","body":"The two viewers call the address myadress.com/dicom-web, in order to retrieve the DICOM study, which is why it may be necessary to redirect requests sent to /dicom-web using a proxy to the Orthanc server."}},"About":{"title":"About","body":"Plugin created as part of a traineeship in \\"DUT Informatique Ann\xe9e Sp\xe9ciale\\" at IUCT Oncopole by:","person1":"Julien Bedia | Trainee","person2":"Salim Kanoun | Tutor","year":"Year "}}')},26:function(e){e.exports=JSON.parse('{"Header":{"subtitle":"Un plugin pour le syst\xe8me de gestion de l\'apprentissage Moodle !"},"Navbar":["Pourquoi ?","Comment il fonctionne ?","Comment l\'utiliser ?","\xc0 propos"],"Why":{"title":"Pourquoi ?","introduction":"Le plugin DicomViewer est disponible sur la plateforme d\'apprentissage en ligne (LMS) Moodle.","viewerTitle":"Il offre la possibilit\xe9 de visualiser les \xe9tudes DICOM \xe0 l\'aide de deux visionneuses :","conclusion":["L\'objectif principal de ce plugin est de fournir un acc\xe8s \xe0 distance aux visionneuses d\'\xe9tudes DICOM pour les \xe9tudiants en m\xe9decine dans un environnement connu. Cela favorisera l\'apprentissage dans un contexte d\'\xe9tudes en ligne.","Les enseignants pourront alors partager les \xe9tudes DICOM avec leurs \xe9l\xe8ves."],"quote":"DicomViewer est un outil p\xe9dagogique pour am\xe9liorer la transmission des connaissances."},"Work":{"title":"Comment il fonctionne ?","introduction":["Le plugin DicomViewer inclut les 2 visionneuses d\'\xe9tude DICOM dans leur distribution statique.","Votre serveur Orthanc est utilis\xe9 pour h\xe9berger vos \xe9tudes DICOM qui seront appel\xe9es par notre plugin DicomViewer."],"body":"Il est recommand\xe9 d\'utiliser un reverse proxy reliant votre serveur Orthanc et votre site moodle (tel que Traefik, Apache, Ngnix).","legend":"Le plugin DicomViewer avec un reverse proxy"},"Use":{"title":"Comment l\'utiliser","part1":{"title":"Instructions g\xe9n\xe9rales","body":["Comme vous le feriez avec n\'importe quel autre plugin d\'activit\xe9, vous devez le t\xe9l\xe9charger depuis le r\xe9f\xe9rentiel officiel de moodle via la page "," et installez-le dans votre moodle."," Vous devez disposer d\'un serveur Orthanc pour h\xe9berger en toute s\xe9curit\xe9 les \xe9tudes DICOM."],"legend":"Param\xe8tres du plugin \xe0 configurer sur moodle"},"part2":{"title":"Param\xe8tres \xe0 configurer","body":"Une fois install\xe9, vous devez configurer les param\xe8tres du plugin suivants dans l\'administration du site :","list":{"element":["Message d\'origine attendu. Le message d\'origine autoris\xe9 correspondant \xe0 des actions dynamiques et d\xe9clench\xe9 par une autre page Web utilisant \\"window.postMessage()\\".","Dicom web root. Chemin racine du serveur Web DICOM.","Wado Uri Root. Adresse pour Wado Uri Root.","Qido Root. Adresse pour Qido Root.","Wado Root. Adresse pour Wado Root."],"default":[" Par d\xe9faut : https://mymoodle.com"," Par d\xe9faut : https://mymoodle.com/dicom-web (si vous utilisez un reverse proxy)"," Par d\xe9faut un chemin relatif : /wado"," Par d\xe9faut un chemin relatif : /dicom-web"," Par d\xe9faut un chemin relatif : /dicom-web"]}},"part3":{"title":"Utilisations","body":["Ajoutez l\'\xe9tude DICOM souhait\xe9e sur le serveur Orthanc et r\xe9cup\xe9rez son StudyInstanceUID.","Cr\xe9ation de l\'activit\xe9 dans un cours Moodle.","Ajout d\'un nom pour l\'activit\xe9, du num\xe9ro StudyInstanceUID \xe0 \xe9tudier et d\'une description potentielle.","Les 2 viewers sont d\xe9sormais accessibles pour cette \xe9tude DICOM et pr\xeats \xe0 l\'emploi."],"legend":["Ajout de l\'activit\xe9 Viewer DICOM Image \xe0 un cours moodle","Param\xe8tres \xe0 configurer pour l\'activit\xe9","R\xe9sultat de la cr\xe9ation de l\'activit\xe9"]},"part4":{"title":"R\xe9sultat des 2 visionneuses sur Moodle","legend":["Affichage de la visionneuse OHIF","Affichage de la visionneuse StoneWebViewer"]},"part5":{"title":"Conseils sur la configuration d\'un proxy inverse","body":"Les deux viewers appellent l\'adresse myadress.com/dicom-web, afin de r\xe9cup\xe9rer l\'\xe9tude DICOM, c\'est pourquoi il peut \xeatre n\xe9cessaire de rediriger les requ\xeates envoy\xe9es \xe0 /dicom-web \xe0 l\'aide d\'un proxy vers le serveur Orthanc."}},"About":{"title":"\xc0 propos","body":"Plugin r\xe9alis\xe9 dans le cadre d\'un stage en DUT Informatique Ann\xe9e Sp\xe9ciale \xe0 l\'IUCT Oncopole par : ","person1":"Julien Bedia | Stagiaire","person2":"Salim Kanoun | Tuteur","year":"Ann\xe9e "}}')},62:function(e,t,s){"use strict";s.r(t);var i=s(1),r=s.n(i),a=s(13),n=s.n(a),o=(s(33),s(34),s(15)),c=s(68),l=s(66),d=s(67);function u(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var j=function(){var e=Object(i.useState)(u()),t=Object(o.a)(e,2),s=t[0],r=t[1];return Object(i.useEffect)((function(){function e(){r(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s},b=s.p+"static/media/background.ee628329.jpg",p=s(26),m=s(22),h=m;function g(){return h}var x=s(0);var O=function(e){var t,s;return console.log(e.language),Object(x.jsx)(l.a,{className:"bg-dark text-light align-items-center text-center",style:(t=j().height,s=j().width,{backgroundImage:"url(".concat(b,")"),backgroundSize:"100%",backgroundRepeat:"no-repeat",height:t+"px",width:s+"px"}),children:Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{style:{marginLeft:"35%",marginRight:"35%",background:"rgba(63, 61, 86, 0.55)",padding:"2rem 3rem"},children:[Object(x.jsx)("h2",{id:"targetHeader",style:{padding:"1rem 2rem",fontSize:"2rem",fontWeight:"bold",transition:"1s"},onMouseEnter:function(){document.getElementById("targetHeader").style.fontSize="2.5rem"},onMouseLeave:function(){document.getElementById("targetHeader").style.fontSize="2rem"},children:"Dicom Viewer"}),Object(x.jsx)("p",{style:{fontSize:"1rem"},children:g().Header.subtitle})]})})})},f=s(69),A=s(70);var y=function(e){return Object(x.jsxs)(f.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",className:"fixed-top",bg:"dark",children:[Object(x.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(f.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-center",children:Object(x.jsxs)(A.a,{className:"mr-auto text-center",children:[Object(x.jsx)(A.a.Link,{href:"#why",children:g().Navbar[0]}),Object(x.jsx)(A.a.Link,{href:"#work",children:g().Navbar[1]}),Object(x.jsx)(A.a.Link,{href:"#use",children:g().Navbar[2]}),Object(x.jsx)(A.a.Link,{href:"#about",children:g().Navbar[3]})]})})]})};s(14);var v=function(e){return Object(x.jsxs)(l.a,{id:"about",className:"bg-dark text-light padding",children:[Object(x.jsxs)(d.a,{md:"3",className:"text-center",children:[Object(x.jsx)("h2",{children:g().About.title}),Object(x.jsx)("div",{className:"StyleBorder",children:"  "}),Object(x.jsx)("i",{className:"fas fa-user-cog mt-3 StyleIcon"})]}),Object(x.jsxs)(d.a,{md:"9",className:"align-items-center",children:[Object(x.jsxs)("p",{children:[g().About.body,Object(x.jsx)("br",{}),g().About.person1,Object(x.jsx)("br",{}),g().About.person2]}),Object(x.jsxs)("p",{children:[g().About.year," 2021"]})]})]})};var w=function(e){return Object(x.jsxs)(l.a,{id:"why",className:"padding bg-light text-dark",children:[Object(x.jsxs)(d.a,{md:"3",className:"text-center",children:[Object(x.jsxs)("h2",{children:[" ",g().Why.title]}),Object(x.jsx)("div",{className:"StyleBorder",children:"  "}),Object(x.jsx)("i",{className:"far fa-question-circle mt-3 StyleIcon"})]}),Object(x.jsx)(d.a,{md:"9",className:"align-items-center text-left",children:Object(x.jsxs)("p",{children:[Object(x.jsxs)("div",{children:[g().Why.introduction,Object(x.jsx)("br",{}),g().Why.viewerTitle,Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Open Healt Imaging Foundation  (OHIF)"}),Object(x.jsx)("li",{children:"Stone web viewer"})]}),g().Why.conclusion[0],Object(x.jsx)("br",{}),g().Why.conclusion[1]]}),Object(x.jsx)("div",{style:{fontSize:"120%",marginTop:"1rem",fontStyle:"italic"},children:g().Why.quote})]})})]})},I=s(71),U=s.p+"static/media/configurationMoodle.ab851a6e.png",N=s.p+"static/media/addActivity.7f85db0d.png",D=s.p+"static/media/settingsActivity.11658d67.png",M=s.p+"static/media/resultActivity.9f09febf.png",S=s.p+"static/media/ohifViewer.47179f0a.png",k=s.p+"static/media/stoneViewer.5de4e601.png";var C=function(e){var t={fontSize:"105%",fontStyle:"italic"},s={width:"70%",height:"70%",borderRadius:"10px",border:"2px solid black"};return Object(x.jsxs)(l.a,{id:"use",className:"bg-light text-dark padding",children:[Object(x.jsxs)(d.a,{md:"3",className:"text-center ",children:[Object(x.jsx)("h2",{children:g().Use.title}),Object(x.jsx)("div",{className:"StyleBorder",children:"  "}),Object(x.jsx)("i",{className:"fas fa-laptop-code mt-3 StyleIcon"})]}),Object(x.jsxs)(d.a,{md:"9",className:"align-items-center text-left",children:[Object(x.jsx)("h3",{children:g().Use.part1.title}),Object(x.jsxs)("p",{children:[g().Use.part1.body[0],Object(x.jsx)("a",{href:"#use",children:"https://moodle.org/plugins/#####"}),g().Use.part1.body[1],Object(x.jsx)("br",{}),g().Use.part1.body[2]]}),Object(x.jsx)("h3",{className:"pt-4",children:g().Use.part2.title}),Object(x.jsx)("p",{children:g().Use.part1.body}),Object(x.jsxs)(I.a,{className:"text-center",children:[Object(x.jsx)(I.a.Caption,{className:"text-center p-3",children:g().Use.part1.legend}),Object(x.jsx)(I.a.Image,{src:U,style:s,alt:"Image configuration plugin on moodle",fluid:!0})]}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("h6",{className:"pt-2",children:Object(x.jsx)("strong",{children:"Stone Web Viewer"})}),Object(x.jsxs)("li",{children:[g().Use.part2.list.element[0],Object(x.jsx)("span",{style:t,children:g().Use.part2.list.default[0]})]}),Object(x.jsxs)("li",{children:[g().Use.part2.list.element[1],Object(x.jsx)("span",{style:t,children:g().Use.part2.list.default[1]})]}),Object(x.jsx)("h6",{className:"pt-2",children:Object(x.jsx)("strong",{children:"OHIF Viewer"})}),Object(x.jsxs)("li",{children:[g().Use.part2.list.element[2],Object(x.jsx)("span",{style:t,children:g().Use.part2.list.default[2]})]}),Object(x.jsxs)("li",{children:[g().Use.part2.list.element[3],Object(x.jsx)("span",{style:t,children:g().Use.part2.list.default[3]})]}),Object(x.jsxs)("li",{children:[g().Use.part2.list.element[4],Object(x.jsx)("span",{style:t,children:g().Use.part2.list.default[4]})]})]}),Object(x.jsx)("h3",{className:"pt-4",children:g().Use.part3.title}),Object(x.jsxs)("p",{children:[g().Use.part3.body[0],Object(x.jsx)("br",{}),g().Use.part3.body[1],Object(x.jsx)("br",{}),Object(x.jsxs)(I.a,{className:"text-center p-3",children:[Object(x.jsx)(I.a.Caption,{className:"text-center",children:g().Use.part3.legend[0]}),Object(x.jsx)(I.a.Image,{src:N,style:s,alt:"Image add plugin dicomviewer on courses on moodle",fluid:!0})]}),Object(x.jsx)("br",{}),g().Use.part3.body[2],Object(x.jsx)("br",{}),Object(x.jsxs)(I.a,{className:"text-center p-3",children:[Object(x.jsx)(I.a.Caption,{className:"text-center",children:g().Use.part3.legend[1]}),Object(x.jsx)(I.a.Image,{src:D,style:s,alt:"Image settings on dicomviewer activity on moodle",fluid:!0})]}),Object(x.jsx)("br",{}),g().Use.part3.body[3],Object(x.jsx)("br",{}),Object(x.jsxs)(I.a,{className:"text-center p-3",children:[Object(x.jsx)(I.a.Caption,{className:"text-center",children:g().Use.part3.legend[2]}),Object(x.jsx)(I.a.Image,{src:M,style:s,alt:"Image result of the activity",fluid:!0})]})]}),Object(x.jsx)("h3",{className:"pt-4",children:g().Use.part4.title}),Object(x.jsxs)(I.a,{className:"text-center p-2",children:[Object(x.jsx)(I.a.Caption,{className:"text-center",children:g().Use.part4.legend[0]}),Object(x.jsx)(I.a.Image,{src:S,style:s,alt:"Image result of the activity",fluid:!0})]}),Object(x.jsxs)(I.a,{className:"text-center p-2",children:[Object(x.jsx)(I.a.Caption,{className:"text-center",children:g().Use.part4.legend[1]}),Object(x.jsx)(I.a.Image,{src:k,style:s,alt:"Image result of the activity",fluid:!0})]}),Object(x.jsx)("p",{}),Object(x.jsx)("h3",{className:"pt-4",children:g().Use.part5.title}),Object(x.jsx)("p",{children:g().Use.part5.body})]})]})},R=s.p+"static/media/diagramme.f0cd091d.svg";var T=function(e){return Object(x.jsxs)(l.a,{id:"work",className:"bg-dark text-light padding",children:[Object(x.jsxs)(d.a,{md:"3",className:"text-center",children:[Object(x.jsx)("h2",{children:g().Work.title}),Object(x.jsx)("div",{className:"StyleBorder",children:"  "}),Object(x.jsx)("i",{className:"fas fa-network-wired mt-3 StyleIcon"})]}),Object(x.jsxs)(d.a,{md:"9",className:"align-items-center text-left",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:[g().Work.introduction[0],Object(x.jsx)("br",{}),g().Work.introduction[1]]}),Object(x.jsx)("p",{children:g().Work.body})]}),Object(x.jsx)("br",{}),Object(x.jsxs)(I.a,{children:[Object(x.jsx)(I.a.Image,{src:R,style:{borderRadius:"10px"},alt:"Diagram reverse proxy",fluid:!0}),Object(x.jsx)(I.a.Caption,{className:"text-center",style:{fontSize:"1.5rem"},children:g().Work.legend})]})]})]})},W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAFzg2AAAADMbd+UAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAFfSURBVEhL7ZRBckMhDMXS3P/QBT8BNtj8zLTTVbVpkJ+ya17vnC8HaidLKQKcPGfK9oDzYk/ZpTAZxJRNCTMRUgYXGBo+5WygDJSB6qyUWwfj4NDBuJRDA7HBsYGYKboKOwzmZE95pjDZ0ihLwkxpUDf80FIvHnDTH6buGcmktt2v1A6BXJsl1efb9wemnimHhXSD92TY18OXdzCDYUeKnsgCboAsUskJFnB5KufAC9SLvwG5ABchlaVSG9wMmSSVOeDakThTiQTuDb2PVO8MBg29fzOd6HA5/acdHW4pf5EO+fpS/r/+TXou8OWhpeNLdqTLw+3HFF3520+4bOXbh5XuG2yh26eeXlseA0mzlzTFTS39vPVDpZ+2YUY65DVmMjZ7emkZHOk6FDHHBmKl7pbEHDoYn4Z7qFEGquPTsMlhaIT0sWUmYnqPmQz2tI45L840jzl5srRDYaAi7/c3osoVNxXlmzUAAAAASUVORK5CYII=";var B=function(){window.addEventListener("scroll",(function(e){window.pageYOffset>window.innerHeight?document.getElementById("arrow").style.visibility="visible":document.getElementById("arrow").style.visibility="hidden"}));var e={position:"fixed",top:"90%",left:"90%",transform:"translate(-50%, -50%)",backgroundImage:"url(".concat(W,")"),backgroundSize:"100%",backgroundRepeat:"no-repeat",height:"50px",width:"50px",cursor:"pointer",visibility:"hidden"};return Object(x.jsx)(l.a,{children:Object(x.jsx)("a",{href:"#root",id:"arrow",className:"arrow",onMouseEnter:function(){document.getElementById("arrow").style.backgroundImage="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQAAAPj5+lzg2AAAAIiVoscAAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7BAAAOwQG4kWvtAAABa0lEQVRIS+3UzU5rMQxG0cJ5/3cmtncSJ/6hg4oRe3Lb+FtCuhK8nrwvF093GUUccfJFyjbEeXdTdmlMZidlU8bMOiiDJoaap5y1bxdPGlNpU24SxMVBYu4ohxHrK44jwKI8V1BisOxNmaUxuSiPbMqYmTHKE4MmhoqU8sC5jekHKF85usaNTzvGB+XkGqfSGrXPkaqMlrmjHHbIygq1T4HiJF5mgEV5XqEs3mYmKoqZ8UomCorY8W6ZeF72L4/E3sfFMpNR1mfcNDMJZXvHVTITKcsY95GZQNklMRiZ+SRdAY7/HzLzTyVkQ6vf9IaaKH9f/4ZGi4wUMGj1Y5EV7f6YIgNl3v0JN1jRcdj0tupGfJ0xHgehreXLjKlcGprGdNH3LUNFRt+1zMxAp20xE2SgjWUQ6LYF5jgCbOpsgjlIzD098KF50phKnh42j6F20F8tM+ukPWYyu2mNOe8izTEnX0YlhMbT2fP8AORMGpNp+8WRAAAAAElFTkSuQmCC",")")},onMouseLeave:function(){document.getElementById("arrow").style.backgroundImage="url(".concat(W,")")},style:e})})};var V=function(e){var t=Object(i.useState)("EN"),s=Object(o.a)(t,2),r=s[0],a=s[1],n=["FR","EN"];return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)(c.a,{fluid:!0,children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(c.a,{children:[Object(x.jsx)("label",{className:"text-dark",style:{position:"fixed",top:"4rem",right:"2rem",height:"26px",width:"50px"},children:Object(x.jsx)("form",{children:Object(x.jsxs)("select",{value:r,name:"language",onChange:function(e){a(e.target.value),function(e){switch(e){case"FR":h=p;break;default:h=m}}(e.target.value)},children:[Object(x.jsx)("option",{value:n[0],children:"FR"}),Object(x.jsx)("option",{value:n[1],children:"EN"})]})})}),Object(x.jsx)(O,{}),Object(x.jsx)(w,{}),Object(x.jsx)(T,{}),Object(x.jsx)(C,{}),Object(x.jsx)(v,{}),Object(x.jsx)(B,{})]})})})]})};n.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bcc1575f.chunk.js.map