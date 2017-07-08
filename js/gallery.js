
/* https://learn.jquery.com/using-jquery-core/document-ready/ */
jQuery(document).ready(function() {

		/* initialize the slider based on the Slider's ID attribute */
		jQuery('#rev_slider_1').show().revolution({

				delay: 3000,

				/* options are 'auto', 'fullwidth' or 'fullscreen' */
				sliderLayout: 'fullscreen',

				responsiveLevels: [1240, 1024, 778, 480],
				gridwidth:[1240, 1024, 778, 480],
				gridheight:[400, 768, 960, 720],

				/* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */
				visibilityLevels:[1240, 1024, 1024, 480],

				/* basic navigation arrows and bullets */
				navigation: {

						onHoverStop: 'on',

						arrows: {
								enable: true,
								style: 'gyges',
								hide_onleave: false
						},

						bullets: {
								enable: false,
								style: 'hesperiden',
								hide_onleave: false,
								h_align: 'center',
								v_align: 'bottom',
								h_offset: 0,
								v_offset: 20,
								space: 5
						}
				}
		});
});
