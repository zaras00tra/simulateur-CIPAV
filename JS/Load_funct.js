jQuery("document").on("ready", initElement());
//window.onload = SecondFunction;

// Function pour assigner les evenements
function initElement() {
   /* event_coherence_annee_simul_n_exercice = IdEvent(
      "input_annee_debut_activite",
      n_exercice_to_annee_simul,
      "onchange"
   );
   event_update_data = ClassEvent("update_globalle", display_data, "onchange");  */
   load_all_parameter();
   calcul_T1_RB_annee(2009, 25000);
}

/**** ------------------- Fonction d'evenement ----------------- *****/

function display_plus_detail() {
   alert("plus de details affichés");
}

/******* --------------- fonction associant evenement a une fonction ------------ *****/
function ClassEvent(ClassName, EventFunction, type_event) {
   var omega = document.getElementsByClassName(ClassName);
   for (var i = 0; i < omega.length; i++) {
      var x = omega[i];
      eval("x." + type_event + "= EventFunction");
   }
   return "done";
}

function IdEvent(IdName, EventFunction, type_event) {
   var lambda = document.getElementById(IdName);
   eval("lambda." + type_event + " = EventFunction");
   return "done";
}
