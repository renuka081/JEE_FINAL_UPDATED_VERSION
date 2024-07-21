<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['email']) && isset($_POST['upswd1'])) {
        $email = $_POST['email'];
        $upswd1 = $_POST['upswd1'];

        if (!empty($email) && !empty($upswd1)) {
            $host = "localhost";
            $dbusername = "root";
            $dbpassword = "";
            $dbname = "auth";

            // Create connection
            $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

            if ($conn->connect_error) {
                die('Connect Error ('. $conn->connect_errno .') '. $conn->connect_error);
            } else {
                $SELECT = "SELECT email, upswd1 FROM register WHERE email = ? AND upswd1 = ? LIMIT 1";

                // Prepare statement
                $stmt = $conn->prepare($SELECT);
                $stmt->bind_param("ss", $email, $upswd1);
                $stmt->execute();
                $stmt->store_result();
                $rnum = $stmt->num_rows;

                if ($rnum == 1) {
                    header("Location:Jeeprepation.html");
                } else {
                    echo "Invalid username or password";
                    header("Location:login.html");
                }
                $stmt->close();
                $conn->close();
            }
        } else {
            echo "All fields are required";
        }
    } else {
        echo "Invalid form submission";
    }
} 
else {
    echo "Invalid request method";
}
?>
