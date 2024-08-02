document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate water usage
    function calculateWaterUsage(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const totalPeople = parseInt(document.getElementById("total-people").value);
        const showersPerDay = parseInt(document.getElementById("showers-per-day").value);
        const avgShowerLength = parseInt(document.getElementById("avg-shower-length").value);
        const toiletsFlushPerDay = parseInt(document.getElementById("toilets-flush-per-day").value);
        const faucetsUsagePerDay = parseInt(document.getElementById("faucets-usage-per-day").value);
        const faucetsMinutesUsage = parseInt(document.getElementById("faucets-minutes-usage").value);
        const dishwasherUsagePerWeek = parseInt(document.getElementById("dishwasher-usage-per-week").value);
        const laundryLoadsPerWeek = parseInt(document.getElementById("laundry-loads-per-week").value);
        const lawnWateringTimesPerWeek = parseInt(document.getElementById("lawn-watering-times-per-week").value);
        const lawnWateringMinutes = parseInt(document.getElementById("lawn-watering-minutes").value);
        const showerFlowRate = 2; // Example value for shower flow rate in gallons per minute
        const toiletGallonsPerFlush = 1.6; // Example value for toilet gallons per flush
        const dishwasherGallonsPerLoad = 6; // Example value for dishwasher gallons per load
        const laundryGallonsPerLoad = 8; // Example value for laundry gallons per load
        const lawnWateringGallonsPerMinute = 5; // Example value for lawn watering gallons per minute

        // Calculation for indoor water use
        const totalShowers = showersPerDay * totalPeople;
        const totalShowerGallons = totalShowers * avgShowerLength * showerFlowRate;
        const totalToiletFlushGallons = totalPeople * toiletsFlushPerDay * toiletGallonsPerFlush;
        const totalFaucetsGallons = totalPeople * faucetsUsagePerDay * faucetsMinutesUsage * 3; // Assuming 3 gallons/minute
        const totalDishwasherGallons = dishwasherUsagePerWeek * dishwasherGallonsPerLoad;
        const totalLaundryGallons = laundryLoadsPerWeek * laundryGallonsPerLoad;
        
        // Calculation for outdoor water use
        const totalLawnWateringGallons = lawnWateringTimesPerWeek * lawnWateringMinutes * lawnWateringGallonsPerMinute;
        const totalOutdoorGallons = totalLawnWateringGallons; // No other outdoor uses considered in this example
        
        // Total water usage in gallons
        const totalIndoorWaterUsageGallons = totalShowerGallons + totalToiletFlushGallons + totalFaucetsGallons + totalDishwasherGallons + totalLaundryGallons;
        const totalOutdoorWaterUsageGallons = totalOutdoorGallons;
        const totalWaterUsageGallons = totalIndoorWaterUsageGallons + totalOutdoorWaterUsageGallons;
        
        // Conversion from gallons to liters
        const totalWaterUsageLiters = totalWaterUsageGallons * 3.78541;
        
        // Display result
        alert("Total water usage: " + totalWaterUsageLiters.toFixed(2) + " liters");
    }

    // Calculate water usage when the form is submitted
    document.getElementById("water-usage-form").addEventListener("submit", calculateWaterUsage);

    // Redirect to result page when the "View Results" button is clicked
    document.getElementById("view-results").addEventListener("click", function() {
        window.location.href = "water_usage_results.html";
    });

    // Function to save water usage data to localStorage
    function saveWaterUsageToLocalStorage(data) {
        localStorage.setItem("waterUsageData", JSON.stringify(data));
    }

    // Call the function to save data when the form is submitted
    document.getElementById("water-usage-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const data = {
            totalPeople: parseInt(document.getElementById("total-people").value),
            showersPerDay: parseInt(document.getElementById("showers-per-day").value),
            avgShowerLength: parseInt(document.getElementById("avg-shower-length").value),
            toiletsFlushPerDay: parseInt(document.getElementById("toilets-flush-per-day").value),
            faucetsUsagePerDay: parseInt(document.getElementById("faucets-usage-per-day").value),
            faucetsMinutesUsage: parseInt(document.getElementById("faucets-minutes-usage").value),
            dishwasherUsagePerWeek: parseInt(document.getElementById("dishwasher-usage-per-week").value),
            laundryLoadsPerWeek: parseInt(document.getElementById("laundry-loads-per-week").value),
            lawnWateringTimesPerWeek: parseInt(document.getElementById("lawn-watering-times-per-week").value),
            lawnWateringMinutes: parseInt(document.getElementById("lawn-watering-minutes").value)
        };

        // Save data to localStorage
        saveWaterUsageToLocalStorage(data);

        // Redirect to result page
        window.location.href = "water_usage_results.html";
    });

});

