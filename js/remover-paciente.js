var pacientes = document.querySelectorAll(".paciente");

/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com duplo clique.");
        this.remove(); //AULA 7X01
    });
});
 */

 var tabela = document.querySelector("table");  //AULA 7x02
 tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");   //AULA 7x03

    setTimeout(function(){  //AULA 7x03
        event.target.parentNode.remove();
    },550);
 });