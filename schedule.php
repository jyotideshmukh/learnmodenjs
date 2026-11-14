<?php

// Function to check if bookings are possible
function areBookingsPossible($arrival, $departure, $n, $k) {
    $ans = [];

    // Create a common vector with both arrivals and departures
    for ($i = 0; $i < $n; $i++) {
        $ans[] = [$arrival[$i], 1];   // 1 for arrival
        $ans[] = [$departure[$i], 0]; // 0 for departure
    }

    // Sort the array by time (the first element in each sub-array)
    usort($ans, function($a, $b) {
        return $a[0] - $b[0];
    });

    $curr_active = 0;
    $max_active = 0;

    // Process each event in sorted order
    foreach ($ans as $event) {
        // If it's an arrival, increment the current active guests count
        if ($event[1] == 1) {
            $curr_active++;
            $max_active = max($max_active, $curr_active);
        } else {
            // If it's a departure, decrement the current active guests count
            $curr_active--;
        }
    }

    // Return true if the max active guests at any instant are less than or equal to available rooms
    return $k >= $max_active;
}

// Test data
$arrival = [1, 3, 5];
$departure = [2, 6, 8];
$n = count($arrival);
$k = 1;  // Number of available rooms

fgghfhhfhf

// Check if booking is possible and print result
if (areBookingsPossible($arrival, $departure, $n, $k)) {
    echo "Yes";
} else {
    echo "No";
}

?>
