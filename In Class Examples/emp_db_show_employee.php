<?php
// ----------------------------------------------------------
// 1. SET DATABASE CONNECTION INFO
// ----------------------------------------------------------
$host = "localhost";   // MySQL is running locally in AMPPS
$user = "root";        // Default AMPPS MySQL username
$pass = "mysql";       // Default password (use "" if yours is blank)
$dbname = "emp_db";    // Your database name

// ----------------------------------------------------------
// 2. TRY CONNECTING TO THE DATABASE USING PDO
// ----------------------------------------------------------
try {
    // Create the DSN string (Data Source Name)
    $dsn = "mysql:host=$host;dbname=$dbname";

    // Create a PDO object = connection to MySQL
    $pdo = new PDO($dsn, $user, $pass);

    // Enable error mode so we get readable errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // If connection fails → show error
    die("❌ Connection failed: " . $e->getMessage());
}

// ----------------------------------------------------------
// 3. RUN SQL QUERY TO GET ALL EMPLOYEES
// ----------------------------------------------------------
$sql = "SELECT * FROM EMPLOYEE";     // SQL query
$stmt = $pdo->query($sql);           // Execute query and store result

// ----------------------------------------------------------
// 4. DISPLAY RESULTS IN AN HTML TABLE
// ----------------------------------------------------------
?>
<!DOCTYPE html>
<html>
<head>
    <title>Employee List</title>

    <!-- Simple styling for table -->
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #333;
            padding: 10px;
            text-align: left;
        }
        th {
            background: #eee;
        }
    </style>
</head>

<body>

<h2>List of Employees</h2>

<table>
    <tr>
        <!-- Table headings -->
        <th>Fname</th>
        <th>Minit</th>
        <th>Lname</th>
        <th>Ssn</th>
        <th>Bdate</th>
        <th>Address</th>
        <th>Sex</th>
        <th>Salary</th>
        <th>Super_ssn</th>
        <th>Dno</th>
    </tr>

    <?php
    // ----------------------------------------------------------
    // 5. LOOP THROUGH DATABASE ROWS AND PRINT EACH EMPLOYEE
    // ----------------------------------------------------------
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row['Fname'] . "</td>";
        echo "<td>" . $row['Minit'] . "</td>";
        echo "<td>" . $row['Lname'] . "</td>";
        echo "<td>" . $row['Ssn'] . "</td>";
        echo "<td>" . $row['Bdate'] . "</td>";
        echo "<td>" . $row['Address'] . "</td>";
        echo "<td>" . $row['Sex'] . "</td>";
        echo "<td>" . $row['Salary'] . "</td>";
        echo "<td>" . $row['Super_ssn'] . "</td>";
        echo "<td>" . $row['Dno'] . "</td>";
        echo "</tr>";
    }
    ?>
</table>

</body>
</html>
