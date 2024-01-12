<script>
    document.getElementById("report-button").addEventListener("click", function() {
        // Send an event to Google Analytics
        gtag('event', 'button_click', {
            'event_category': 'Report Button',
            'event_label': 'Report Now Button Clicked'
        })
    });
</script>
