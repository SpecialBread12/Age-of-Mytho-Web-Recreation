var finVignetteRBO;
var boutonBalancierRBO;

finVignetteRBO = document.getElementById("fin-vignette-rbo");
boutonBalancierRBO = document.getElementById("bouton-balancier-rbo");

boutonBalancierRBO.addEventListener('click', balancerTexteFinVignetteRBO);

function balancerTexteFinVignetteRBO(event){
    if(boutonBalancierRBO.ouvert){
    event.preventDefault();
    finVignetteRBO.style.display="none";
    boutonBalancierRBO.innerHTML = 'voir plus';
    boutonBalancierRBO.ouvert = false;
}
else{
    event.preventDefault();
    finVignetteRBO.style.display = "block";
    boutonBalancierRBO.innerHTML = 'voir moins';
    boutonBalancierRBO.ouvert = true;
}
}
