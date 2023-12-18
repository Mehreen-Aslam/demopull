<?php
// Implement logic to save data to the database (e.g., using PDO)
// Example: Insert data into a MySQL database

  $servername = "localhost";
      $username = "root";
      $password = "";
     


      $dbname = "mehreen";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $accountType = $_POST['accountType'];
    $accountNumber = $_POST['accountNumber'];
    $initialBalance = $_POST['initialBalance'];
    $currentBalance = $_POST['currentBalance'];
    $paymentAmount = $_POST['paymentAmount'];
    $interestRate = $_POST['interestRate'];

    $stmt = $conn->prepare("INSERT INTO finances (account_type, account_number, initial_balance, current_balance, payment_amount, interest_rate) 
                           VALUES (:accountType, :accountNumber, :initialBalance, :currentBalance, :paymentAmount, :interestRate)");
    
    $stmt->bindParam(':accountType', $accountType);
    $stmt->bindParam(':accountNumber', $accountNumber);
    $stmt->bindParam(':initialBalance', $initialBalance);
    $stmt->bindParam(':currentBalance', $currentBalance);
    $stmt->bindParam(':paymentAmount', $paymentAmount);
    $stmt->bindParam(':interestRate', $interestRate);

    $stmt->execute();

    echo "Data saved successfully";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
?>
