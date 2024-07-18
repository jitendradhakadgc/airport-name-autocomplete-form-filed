<?php
wp_enqueue_script('jquery-ui-autocomplete');
		wp_enqueue_style('jquery-ui-css', '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
		wp_enqueue_script('custom-autocomplete', get_stylesheet_directory_uri() . '/js/custom-autocomplete.js', array('jquery', 'jquery-ui-autocomplete'), null, true);
		wp_localize_script('custom-autocomplete', 'airportsData', array(
			'json_url' => get_stylesheet_directory_uri() . '/js/airports.json'
		));
?>