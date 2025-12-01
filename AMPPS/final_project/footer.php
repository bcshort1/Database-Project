</main>
<footer class="site-footer">
    <p>&copy; <?= date('Y'); ?> Papi's Pictures. All rights reserved.</p>
    <div class="footer-links">
        <a href="collections.php">Collections</a>
        <a href="videos.php">Videos</a>
        <?php if (photo_app_is_logged_in()): ?>
            <a href="admin/">Admin Console</a>
            <a href="admin/logout.php">Logout</a>
        <?php else: ?>
            <a href="admin/login.php">Admin Login</a>
        <?php endif; ?>
    </div>
</footer>
</body>
</html>