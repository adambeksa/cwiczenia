function loadApp() {

    // Create the flipbook

    $('.flipbook').turn({
        // Width

        width:922,

        // Height

        height:600,

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true

    });
}


$(document).ready(function () {
    loadApp()
})