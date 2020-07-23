// Importation de tout les parametres
function load_all_parameter() {
   alert("chargement des parametres");
}

//  NOMBRE DE TRIMESTRE COTISE
//  --- Prendre les smics horaires et calculer les CA minimum pour 1 trimestres

//  --- Comparer le CA au nombre de trimestre

//   DROIT RETRAITE
//  --- Retraite de base
//  --- ---Calcul T1
function calcul_T1_RB_annee(annee, CA_annee) {
   alert(`calcul_T1_RB_${annee}`);

   T1_RB_2009 = Math.min(
      T1maxpoint_2009,
      (CA_2009 / T1_2009) * T1maxpoint_2009
   );
   alert(T1_RB_2009);
}
function calcul_T2_RB_annee(annee, CA_annee) {
   alert(`calcul_T2_RB_${annee}`);

   T2_RB_2009 = Math.max(
      0,
      Math.min(T2maxpoint_2009, (CA_2009 / T2_2009) * T2maxpoint_2009)
   );
   alert(T2_RB_2009);
}

//  --- ---Calcul T2
//  --- ---Calcul RB

//  --- Retraite de complémentaire
