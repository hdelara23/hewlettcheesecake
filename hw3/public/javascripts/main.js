/* main.js */
/* Name: Hewlett De Lara */
/* Email: delara23@up.edu */

$(document).ready(function () {
    // Event handler for the Order button
    $("#orderButton").click(function () {
        // Check if the Notes contain the word "vegan"
        var notes = $("#message").val().toLowerCase();
        if (notes.includes("vegan")) {
            alert("Warning: Cheesecakes contain dairy.");
        } else {
            // Get order details
            var quantity = $("#quantitySelect option:selected").text();
            var topping = $("input[name='flavor']:checked").val();

            // Create a div with a specific class for styling
            // Replace the form section with the thank you message and order details
            var orderDetails = "<div class='order-details'>Thank you! Your order has been placed.</div>" +
                "<div class='order-details'>Topping: " + topping + "</div>" +
                "<div class='order-details'>Quantity: " + quantity + "</div>" +
                "<div class='order-details'>Notes: " + notes + "</div>";

            // Replace the container with the order details
            $(".order-form-container").replaceWith(orderDetails);
        }
    });

    // Hover dropdown menu
    $(".month-widget").hover(function () {
        // Display the dropdown menu
        $(".month-options").css("display", "block");
    }, function () {
        // Hide the dropdown menu when the mouse leaves
        $(".month-options").css("display", "none");
    });

    // Handle menu item click
    $(".month-options li").click(function () {
        // Update the selected month
        var selectedMonth = $(this).text();
        $(".month-widget span").text(selectedMonth);
        // Replace the word "Jan" with the selected month
        $("h2:contains('Orders for Jan')").html(function (_, html) {
            return html.replace('Jan', selectedMonth);
        });
        // Hide the dropdown menu
        $(".month-options").css("display", "none");
    });
});
