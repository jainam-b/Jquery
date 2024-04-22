<?php
    $cities=array(
        "Delhi"=>strtotime("+5 hour 30 minutes"),
        "Moscow"=>strtotime("+3 hours"),
        "London"=>strtotime("+1 hours"),
        "Japan"=>strtotime("+9 hours"),
        "Tokelau Time"=>strtotime("+13 hours"),
    );
    //var dump=($cities);
    echo "<br>";
    echo "<table border='1' cellpadding='5'>";
    foreach($cities as $cty=>$tz){
        echo "<tr>";
        echo "<td>$cty</td>";
        echo "<td>".gmdate("D",$tz)."</td>";
        echo "<td>".gmdate("jS M Y",$tz)."</td>";
        echo "<td>".gmdate("H:i:s",$tz)."</td>";
        echo "</tr>";
    }
    

?>