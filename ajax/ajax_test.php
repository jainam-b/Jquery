<html>
    <head>
        <script>
            function loaddoc(){
                var xhttp=new XMLHttpRequest();
                xhttp.onreadystatechange=function(){
                    if(this.readyState==4 && this.status==200){
                        document.getElementById("d1").innerHTML=this.responseText;
                    }
                };
                xhttp.open("GET","demo_test.txt",true);
                xhttp.send();
            }
        </script>
    </head>
    <body>
        <?php echo time(); ?>
        <br>
        <div id="d1"><h2>This heading will change using normal AJAX</h2></div>
        <button onclick='loadDoc()'>Get external content</button>
    </body>
</html>