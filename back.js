(function(){
var N={"index":"Accueil","trajet":"Trajet","programme":"Programme","gite":"Gîte","station":"Station","activites":"Activités","restaurants":"Restaurants","parkings":"Parkings","navettes":"Navettes","forfaits":"Forfaits","materiel":"Matériel","photos":"Photos","repas-midi":"Repas du midi","repas-soir":"Repas du soir","sensations":"Sensations"};
var here=location.pathname.split("/").pop().replace(".html","")||"index";
var last=null;try{last=sessionStorage.getItem("fredo_cur");sessionStorage.setItem("fredo_cur",here);}catch(e){}
function go(){var b=document.querySelectorAll("[data-back]");if(!b.length)return;
var name=null,url=null,ref=document.referrer;
try{var u=new URL(ref);if(u.origin===location.origin){var k=u.pathname.split("/").pop().replace(".html","")||"index";if(N[k]&&k!==here){name=N[k];url=k+".html";}}}catch(e){}
if(!name&&last&&N[last]&&last!==here){name=N[last];url=last+".html";}
if(!name)return;
for(var i=0;i<b.length;i++){(function(a){
 a.setAttribute("href",url);var s=a.querySelector("span");if(s){s.textContent=name;}else{var t=a.lastChild;if(t&&t.nodeType===3)t.nodeValue=name;}
 a.addEventListener("click",function(e){if(history.length>1){e.preventDefault();history.back();}});
})(b[i]);}}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",go);else go();
})();

/* PDF : en ligne si réseau, sinon copie enregistrée */
(function(){var D="https://www.lesorres.com/sites/default/files/documents/";
var L={};L[D+"les-orres-1650-station-2026-2027-bd.pdf"]="plan-station.pdf";L[D+"les-orres-1800-station-2026-2027-bd.pdf"]="plan-1800.pdf";L[D+"plan-des-pistes-les-orres-2025-26-complet-bd.pdf"]="plan-pistes.pdf";L[D+"horaires-navettes-gratuites-orres-2026-2027.pdf"]="horaires-navettes.pdf";
document.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("a"):null;if(!a)return;var l=L[a.href];if(!l||navigator.onLine!==false)return;e.preventDefault();window.open(l,"_blank")||(location.href=l);},true);
})();
