/**
 * Função jQuery para voltar ao topo
 * @author Pedro Henrique Salomao Ventura
 * <img src="imagens/seta_topo.png" class="Top" alt="Seta topo" title="Topo do site">	
 */
$(document).ready(function(){
	// .click(function(){}); -> quando clicar no objeto identificado pela classe .Top
	$(function(){
        $('.Top').click(function(){
			//vai para o topo A TAG <body>
            $('html,body').animate({scrollTop: 0},'slow');
        });
   });
 });
 /**
 * Função jQuery para voltar ao topo
 * @author Geovana Simao Sousa
 * <img src="imagens/seta_topo.png" class="Top" alt="Seta topo" title="Topo do site">	
 */
$(document).ready(function(){
	// .click(function(){}); -> quando clicar no objeto identificado pela classe .Top
	$(function(){
        $('.Top').click(function(){
			//vai para o topo A TAG <body>
            $('html,body').animate({scrollTop: 0},'slow');
        });
   });
 });