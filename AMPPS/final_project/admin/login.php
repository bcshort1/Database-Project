<?php
require_once __DIR__ . '/../includes/bootstrap.php';

if (photo_app_is_logged_in()) {
    header('Location: index.php');
    exit;
}

$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!photo_app_validate_csrf($_POST['csrf_token'] ?? null)) {
        $error = 'Invalid session token. Please try again.';
    } else {
        $username = trim($_POST['username'] ?? '');
        $password = $_POST['password'] ?? '';
        if (photo_app_login($username, $password)) {
            header('Location: index.php');
            exit;
        }
        $error = 'Invalid username or password.';
    }
}

$token = photo_app_csrf_token();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Papi's Pictures</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body class="admin-login">
    <form method="post" class="login-card">
        <h1>Admin Login</h1>
        <?php if ($error): ?>
            <p class="error"><?= htmlspecialchars($error); ?></p>
        <?php endif; ?>
        <label>
            <span>Username</span>
            <input type="text" name="username" required autofocus>
        </label>
        <label>
            <span>Password</span>
            <input type="password" name="password" required>
        </label>
        <input type="hidden" name="csrf_token" value="<?= $token; ?>">
        <button type="submit" class="btn primary">Sign in</button>
        <p class="login-note">
            Credentials are configured via <code>config.php</code> or environment variables.
        </p>
    </form>
</body>
</html>
