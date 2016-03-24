$('document').ready(function() {
	$(function() {
	    var dialog, form,
	 
	    recipename = $( "#recipename" ),
	    ing1 = $( "#ingredient1" ),
	    ingqty1 = $( "#ingqty1" ),
	    ing2 = $( "#ingredient2" ),
	    ingqty2 = $( "#ingqty2" );
	    ing3 = $( "#ingredient3" ),
	    ingqty3 = $( "#ingqty3" );
	    ing4 = $( "#ingredient4" ),
	    ingqty4 = $( "#ingqty4" );
	    ing5 = $( "#ingredient5" ),
	    ingqty5 = $( "#ingqty5" );
	    ing6 = $( "#ingredient6" ),
	    ingqty6 = $( "#ingqty6" ),
	    instruct = $("#instruct");
	

		function addRecipe() {
			$("#accordion4").append( 
				"<div class='group'>" +
				"<h3>" + recipename.val() + "</h3>" +
				"<div>" +
					"<table>" +
						"<tbody>" +
							"<tr>" +
							   	"<td>" + ing1.val() + "</td>" +
	          					"<td>" + ingqty1.val() + "</td>" +
	        				"</tr>" +
							"<tr>" +
							   	"<td>" + ing2.val() + "</td>" +
	          					"<td>" + ingqty2.val() + "</td>" +
	        				"</tr>" +
	        				"<tr>" +
							   	"<td>" + ing3.val() + "</td>" +
	          					"<td>" + ingqty3.val() + "</td>" +
	        				"</tr>" +
	        				"<tr>" +
							   	"<td>" + ing4.val() + "</td>" +
	          					"<td>" + ingqty4.val() + "</td>" +
	        				"</tr>" +
	        				"<tr>" +
							   	"<td>" + ing5.val() + "</td>" +
	          					"<td>" + ingqty5.val() + "</td>" +
	        				"</tr>" +
	        				"<tr>" +
							   	"<td>" + ing6.val() + "</td>" +
	          					"<td>" + ingqty6.val() + "</td>" +
	        				"</tr>" +
	        			"</tbody>"	+
	    			"</table>" +
					"<p>" + instruct.val() + "</p>" +
				"</div>" +
				"</div>");
			dialog.dialog( "close" );
			$(document).on('submit', $(function() {
		          $( '#accordion4' ).accordion( "refresh" );
		  	}));
		};
	
	    dialog = $( "#dialog-form" ).dialog({
	      autoOpen: false,
	      height: 530,
	      width: 440,
	      modal: true,
	      buttons: { "Add New Recipe": addRecipe, Cancel: function() {
	          dialog.dialog( "close" );
	        }
	      },
	      close: function() {
	        form[ 0 ].reset();
	      }
	    });
	 
	    form = dialog.find( "form" ).on( "submit", function( event ) {
	      event.preventDefault();
	      addRecipe();
	    });
	 
	    $( "#newrecipe" ).button().on( "click", function() {
	      dialog.dialog( "open" );
	    });	
   		
	});
	$(function() {
	    $( "#accordion, #accordion2, #accordion3, #accordion4" )
	      .accordion({
	        header: "> div > h3"
	      }, {
	      collapsible: true
	    }, {active: false})
	      .sortable({
	        axis: "y",
	        handle: "h3",
	        stop: function( event, ui ) {
	          // IE doesn't register the blur when sorting
	          // so trigger focusout handlers to remove .ui-state-focus
	          ui.item.children( "h3" ).triggerHandler( "focusout" );
	 
	          // Refresh accordion to handle new order
	          $( this ).accordion( "refresh" );
	        }
	      });
	 	$( "#recipetabs" ).tabs({active: 0}, {collapsible: true}, {disabled: []});
		
	});
})