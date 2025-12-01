<?php
require_once __DIR__ . '/../includes/bootstrap.php';
photo_app_logout();
header('Location: login.php');
exit;
