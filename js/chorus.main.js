/*******************************************************************************
*
* File:chorus.main.js
*
* dependencies jQuery.js 
*
*******************************************************************************/


$(document).ready(function() {

	
	/* Language select */

	//#content_header
		//.lang-select
			//.flag
			//.lang-select-box

	//$('.lang-select-box select').selectbox();


	//selectbox start

	$('.lang-select-box select').selectbox({
		onOpen: function (inst) {
			//console.log("open", inst);
		},
		onClose: function (inst) {
			//console.log("close", inst);
		},
		onChange: function (val, inst) {
			//console.log("Change", inst)
			$('.sbSelector').removeClass().addClass('sbSelector');
			$('.sbSelector').addClass($('.lang-select-box select option:selected').val());
			$('#content_header span.flag').removeClass().addClass('flag');
			$('#content_header span.flag').addClass($('.lang-select-box select option:selected').val());
			$('div.sbHolder').hide();
			$('#content_header span.flag').show();
		},
		effect: "slide"
	});

	var obj = $('.lang-select-box select');

	obj.each(function(){

		var $this = $(this);
		$('.sbSelector').addClass($('.lang-select-box select option:selected').val());

	});

	$('body').delegate('#content_header span.flag', 'click', function(e){
		e.preventDefault();
		console.log('clicked');
		var $this = $(this);
		$this.hide();
		$('#content_header div.sbHolder').show();
		$('.lang-select-box select').selectbox("open");
	});

	

	//$('.lang-select-box select option:selected')

	// selectbox end


	/* dialog trigger events */

		$('body').delegate('a.deleteList', 'click', function(e){
		e.preventDefault();

		$('#deleteConfirmDialog').dialog(
			{ bgiframe: true,
				dialogClass: 'viewFilesDialog',
				resizable: false,
	            modal: true,
	            draggable: false,
	            buttons: {
	            	Yes: function() { 
	            	$( this ).dialog( "close" ); 
            		},
            	
	            	No: function() { 
	            	$( this ).dialog( "close" ); 
            		}
            	},
	            overlay: {
	                backgroundColor: '#000',
	                opacity: 0.5
	            }                
	        }
		);
		
		return false;
	});

	//viewFiles

	$('body').delegate('#upload-logs-tbl a.viewFiles', 'click', function(e){
		e.preventDefault();

		$('#viewFilesDialog').dialog(
			{ bgiframe: true,
				dialogClass: 'viewFilesDialog',
				resizable: false,
	            modal: true,
	            draggable: false,
	            overlay: {
	                backgroundColor: '#000',
	                opacity: 0.5
	            }                
	        }
		);
		
		return false;
	});

	//add-to-list

	$('body').delegate('.actions span.add-to-list, .options span.add-to-list', 'click', function(e){
		e.preventDefault();

		$('#addToListDialog').dialog(
			{ bgiframe: true,
				dialogClass: 'addToListDialog',
				resizable: false,
	            height: 500,
	            width: 510,
	            modal: true,
	            draggable: false,
	            title: "Save to list",
	            buttons: {
	            	Cancel: function() { 
	            	$( this ).dialog( "close" ); 
            		},
            	
	            	Save: function() { 
	            	$( this ).dialog( "close" ); 
            		}
            	},
	            overlay: {
	                backgroundColor: '#000',
	                opacity: 0.5
	            }                
	        }
		);
		
		return false;
	});

	//email

	$('body').delegate('.actions span.email, .options span.email, #concertina-container .email', 'click', function(e){
		e.preventDefault();

		$('#eMailDialog').dialog(
			{ bgiframe: true,
				dialogClass: 'eMailDialog',
				resizable: false,
	            height: 645,
	            width: 510,
	            modal: true,
	            draggable: false,
	            title: "Rights dept request",
	            buttons: [ 
	            	{
		            	text: "Send",
		            	class: 'leftButton', 
		            	click: function() { 
		            	$( this ).dialog( "close" ); 
	            		} 
	        		} 
	        	],
	            overlay: {
	                backgroundColor: '#000',
	                opacity: 0.5
	            }                
	        }
		);
		
		return false;
	});


	/* Tabbed Control Event handelers */

	$('body').delegate('.tabbed-control .tab', 'click', function(e){
		e.preventDefault();

		var $this = $(this),
			thisTab = $this.attr('id'),
			thisContent = "#" + thisTab.replace("tab","content"),
			thisParent = "#" + $this.parents('.tabbed-control').attr('id'),
			contentSelector;

			contentSelector = thisParent;
			contentSelector += ' ';
			contentSelector += thisContent;

			$(thisParent + ' a').removeClass('selected');
			$('.tabbed-content').hide();
			$('#' + thisTab + ' a').addClass('selected');
			$(contentSelector).show();

			//console.log(thisTab + ' a');

		return false;
	});

	$('body').delegate('#search-btn', 'click', function(e){
		e.preventDefault();

		$('#search-results-container').toggle();

		return false;
	});

	$('body').delegate('#advanced-search-btn', 'click', function(e){
        e.preventDefault();

        var $this = $(this),
        	thisBtn = $this.attr('id'),
        	iconSelector = '#' + thisBtn + ' i',
        	thisIcon = $(iconSelector),
        	$searchPanel = $('#advanced-search');

        	if($this.hasClass('closed')) {

        		$this.removeClass('closed').addClass('open');
        		thisIcon.removeClass('icon-plus').addClass('icon-minus');
        		$searchPanel.show();

        		console.log('true');
        	}
        	else {

        		$this.removeClass('open').addClass('closed');
        		thisIcon.removeClass('icon-minus').addClass('icon-plus');
        		$searchPanel.hide();

        		console.log('false');
        	}


        console.log(iconSelector);
		return false;
	});

	//concertina-container  header
	$('body').delegate('#concertina-container .header', 'click', function(e){
        e.preventDefault();
        var $this = $(this),
        	$thisToggle = $this.children('.toggle').children('.icon'),
        	$thisList = $this.siblings('.body');

        //console.log();

        if ($thisToggle.hasClass('icon-expand')){
        	
        	$thisToggle.removeClass('icon-expand').addClass('icon-collapse');
        	$thisList.show();
        	//console.log('true');
        }
        else {
        	
        	$thisToggle.removeClass('icon-collapse').addClass('icon-expand');
        	$thisList.hide();
        	//console.log('false');
        }



	});

	//thumb-container

	$('div.thumb-container').hover(function(e){

        $(this).children('.bubble').show();
	},
	function(e){

        $(this).children('.bubble').hide();
	});

	//lang-select-box

	$('body').delegate('.lang-select .flag', 'click', function(e){
        e.preventDefault();



	});

	/* Button Event handelers */

	$('body').delegate('button.backBtn', 'click', function(e){
        e.preventDefault();
    	history.back(1);
	});

	

	$('body').delegate('#register-btn', 'click', function(e){
        e.preventDefault();
		$('fieldset.register1').hide();
		$('fieldset.register2').show();
	});

	$('body').delegate('#forgotten-password-btn', 'click', function(e){
		e.preventDefault();

		$('#forgotten-password').hide();
		$('#confirmation-panel').show();

		//#forgotten-password
		//#confirmation-panel
		//window.location.href = "./login.html";
		return false;
	});

	$('body').delegate('#login-button', 'click', function(e){
		e.preventDefault();
		window.location.href = "./disclaimer.html";
		return false;
	});

	$('body').delegate('#cancel-btn', 'click', function(e){
		e.preventDefault();
		window.location.href = "./login.html";
		return false;
	});

	$('body').delegate('#submit-btn', 'click', function(e){
		e.preventDefault();
		window.location.href = "./registration_completed.html";
		return false;
	});

	$('body').delegate('#continue-btn', 'click', function(e){
		e.preventDefault();
		window.location.href = "./multi-function.html";
		return false;
	});



});