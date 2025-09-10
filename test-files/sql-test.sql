-- SQL Semantic Highlighting Test for Dream Purple Theme
-- This file tests various SQL constructs and syntax highlighting

-- Database and schema creation
CREATE DATABASE IF NOT EXISTS dream_purple_test
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE dream_purple_test;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS user_sessions;
DROP TABLE IF EXISTS user_profiles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

-- Create roles table
CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    permissions JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create users table with various data types
CREATE TABLE users (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    uuid CHAR(36) NOT NULL UNIQUE DEFAULT (UUID()),
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(320) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    last_login DATETIME NULL,
    login_count INT UNSIGNED DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    
    -- Constraints
    CONSTRAINT fk_users_role_id 
        FOREIGN KEY (role_id) 
        REFERENCES roles(id) 
        ON DELETE RESTRICT 
        ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_users_email (email),
    INDEX idx_users_username (username),
    INDEX idx_users_role_id (role_id),
    INDEX idx_users_active (is_active),
    INDEX idx_users_created_at (created_at)
);

-- Create user profiles table
CREATE TABLE user_profiles (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT UNSIGNED NOT NULL UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    display_name VARCHAR(200),
    bio TEXT,
    avatar_url VARCHAR(500),
    phone VARCHAR(20),
    date_of_birth DATE,
    timezone VARCHAR(50) DEFAULT 'UTC',
    language VARCHAR(10) DEFAULT 'en',
    theme_preference ENUM('light', 'dark', 'auto') DEFAULT 'auto',
    notification_settings JSON,
    metadata JSON,
    
    -- Foreign key constraint
    CONSTRAINT fk_user_profiles_user_id 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    
    -- Full-text search index
    FULLTEXT INDEX ft_user_profiles_search (first_name, last_name, display_name, bio)
);

-- Create user sessions table
CREATE TABLE user_sessions (
    id VARCHAR(128) PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    payload LONGTEXT,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    
    -- Foreign key constraint
    CONSTRAINT fk_user_sessions_user_id 
        FOREIGN KEY (user_id) 
        REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_user_sessions_user_id (user_id),
    INDEX idx_user_sessions_last_activity (last_activity),
    INDEX idx_user_sessions_expires_at (expires_at)
);

-- Insert sample data
INSERT INTO roles (name, description, permissions) VALUES
('admin', 'System Administrator', '["users.create", "users.read", "users.update", "users.delete", "roles.manage"]'),
('moderator', 'Content Moderator', '["users.read", "users.update", "content.moderate"]'),
('user', 'Regular User', '["profile.read", "profile.update"]'),
('guest', 'Guest User', '["content.read"]');

-- Insert sample users
INSERT INTO users (username, email, password_hash, role_id, is_active, email_verified) VALUES
('admin_user', 'admin@dreampurple.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, TRUE, TRUE),
('moderator_user', 'moderator@dreampurple.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, TRUE, TRUE),
('john_doe', 'john.doe@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, TRUE, TRUE),
('jane_smith', 'jane.smith@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, TRUE, FALSE),
('guest_user', 'guest@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 4, FALSE, FALSE);

-- Insert user profiles
INSERT INTO user_profiles (user_id, first_name, last_name, display_name, bio, timezone, language, theme_preference, notification_settings) VALUES
(1, 'Admin', 'User', 'System Administrator', 'System administrator for Dream Purple theme testing.', 'UTC', 'en', 'dark', '{"email": true, "push": true, "sms": false}'),
(2, 'Moderator', 'User', 'Content Moderator', 'Content moderator helping maintain quality.', 'America/New_York', 'en', 'dark', '{"email": true, "push": true, "sms": true}'),
(3, 'John', 'Doe', 'Johnny', 'Software developer passionate about VS Code themes.', 'Europe/London', 'en', 'auto', '{"email": true, "push": false, "sms": false}'),
(4, 'Jane', 'Smith', 'Jane', 'UI/UX designer with an eye for beautiful themes.', 'Asia/Tokyo', 'ja', 'light', '{"email": false, "push": true, "sms": false}'),
(5, 'Guest', 'User', 'Guest', 'Temporary guest user account.', 'UTC', 'en', 'auto', '{"email": false, "push": false, "sms": false}');

-- Complex SELECT queries demonstrating various SQL features

-- Basic SELECT with WHERE clause
SELECT u.id, u.username, u.email, r.name as role_name
FROM users u
INNER JOIN roles r ON u.role_id = r.id
WHERE u.is_active = TRUE
ORDER BY u.created_at DESC;

-- SELECT with JOINs and aggregation
SELECT 
    r.name AS role_name,
    COUNT(u.id) AS user_count,
    COUNT(CASE WHEN u.is_active THEN 1 END) AS active_users,
    COUNT(CASE WHEN u.email_verified THEN 1 END) AS verified_users,
    AVG(u.login_count) AS avg_login_count,
    MAX(u.last_login) AS last_user_login
FROM roles r
LEFT JOIN users u ON r.id = u.role_id
GROUP BY r.id, r.name
HAVING user_count > 0
ORDER BY user_count DESC;

-- Complex query with subqueries and window functions
SELECT 
    u.username,
    u.email,
    up.display_name,
    u.login_count,
    RANK() OVER (ORDER BY u.login_count DESC) AS login_rank,
    LAG(u.login_count) OVER (ORDER BY u.created_at) AS prev_user_logins,
    CASE 
        WHEN u.login_count > 100 THEN 'Heavy User'
        WHEN u.login_count > 10 THEN 'Regular User'
        WHEN u.login_count > 0 THEN 'Light User'
        ELSE 'New User'
    END AS user_category,
    (SELECT COUNT(*) FROM users WHERE role_id = u.role_id) AS role_user_count
FROM users u
LEFT JOIN user_profiles up ON u.id = up.user_id
WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
    AND u.is_active = TRUE
ORDER BY u.login_count DESC, u.created_at ASC;

-- CTE (Common Table Expression) example
WITH user_stats AS (
    SELECT 
        role_id,
        COUNT(*) as total_users,
        AVG(login_count) as avg_logins,
        MAX(created_at) as latest_signup
    FROM users 
    WHERE deleted_at IS NULL
    GROUP BY role_id
),
role_summary AS (
    SELECT 
        r.name,
        us.total_users,
        us.avg_logins,
        us.latest_signup,
        CASE 
            WHEN us.total_users > 10 THEN 'Popular'
            WHEN us.total_users > 5 THEN 'Moderate'
            ELSE 'Limited'
        END as popularity
    FROM roles r
    INNER JOIN user_stats us ON r.id = us.role_id
)
SELECT * FROM role_summary
ORDER BY total_users DESC;

-- UPDATE statements with various conditions
UPDATE users 
SET last_login = NOW(), 
    login_count = login_count + 1
WHERE username = 'john_doe';

UPDATE user_profiles 
SET notification_settings = JSON_SET(
    notification_settings, 
    '$.email', true,
    '$.push', false
)
WHERE user_id IN (
    SELECT id FROM users 
    WHERE role_id = (SELECT id FROM roles WHERE name = 'user')
);

-- DELETE with JOIN
DELETE us FROM user_sessions us
INNER JOIN users u ON us.user_id = u.id
WHERE us.expires_at < NOW()
   OR u.is_active = FALSE;

-- Advanced queries with JSON functions
SELECT 
    u.username,
    up.notification_settings,
    JSON_EXTRACT(up.notification_settings, '$.email') AS email_notifications,
    JSON_EXTRACT(up.notification_settings, '$.push') AS push_notifications,
    JSON_KEYS(up.notification_settings) AS notification_types
FROM users u
INNER JOIN user_profiles up ON u.id = up.user_id
WHERE JSON_EXTRACT(up.notification_settings, '$.email') = true;

-- Full-text search example
SELECT 
    up.user_id,
    up.first_name,
    up.last_name,
    up.display_name,
    up.bio,
    MATCH(up.first_name, up.last_name, up.display_name, up.bio) 
        AGAINST('developer theme' IN NATURAL LANGUAGE MODE) AS relevance_score
FROM user_profiles up
WHERE MATCH(up.first_name, up.last_name, up.display_name, up.bio) 
      AGAINST('developer theme' IN NATURAL LANGUAGE MODE)
ORDER BY relevance_score DESC;

-- Stored procedure example
DELIMITER //

CREATE PROCEDURE GetUsersByRole(
    IN role_name VARCHAR(50),
    IN limit_count INT DEFAULT 10,
    OUT total_count INT
)
BEGIN
    DECLARE role_id_var INT;
    
    -- Get role ID
    SELECT id INTO role_id_var 
    FROM roles 
    WHERE name = role_name;
    
    -- Get total count
    SELECT COUNT(*) INTO total_count
    FROM users 
    WHERE role_id = role_id_var AND is_active = TRUE;
    
    -- Return limited results
    SELECT 
        u.id,
        u.username,
        u.email,
        up.display_name,
        u.created_at
    FROM users u
    LEFT JOIN user_profiles up ON u.id = up.user_id
    WHERE u.role_id = role_id_var 
        AND u.is_active = TRUE
    ORDER BY u.created_at DESC
    LIMIT limit_count;
END //

DELIMITER ;

-- Function example
DELIMITER //

CREATE FUNCTION GetUserFullName(user_id BIGINT) 
RETURNS VARCHAR(200)
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE full_name VARCHAR(200);
    
    SELECT CONCAT_WS(' ', up.first_name, up.last_name)
    INTO full_name
    FROM user_profiles up
    WHERE up.user_id = user_id;
    
    RETURN COALESCE(full_name, 'Unknown User');
END //

DELIMITER ;

-- Trigger example
DELIMITER //

CREATE TRIGGER update_user_timestamp
    BEFORE UPDATE ON users
    FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

DELIMITER ;

-- View creation
CREATE VIEW active_users_view AS
SELECT 
    u.id,
    u.username,
    u.email,
    r.name AS role_name,
    up.display_name,
    up.first_name,
    up.last_name,
    u.last_login,
    u.login_count,
    u.created_at
FROM users u
INNER JOIN roles r ON u.role_id = r.id
LEFT JOIN user_profiles up ON u.id = up.user_id
WHERE u.is_active = TRUE 
    AND u.deleted_at IS NULL;

-- Index creation for performance
CREATE INDEX idx_users_composite ON users (is_active, email_verified, role_id);
CREATE INDEX idx_user_profiles_name ON user_profiles (first_name, last_name);

-- Analyze table performance
ANALYZE TABLE users, user_profiles, roles, user_sessions;

-- Show table information
SHOW CREATE TABLE users;
DESCRIBE user_profiles;
SHOW INDEX FROM users;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON dream_purple_test.* TO 'app_user'@'localhost';
GRANT SELECT ON dream_purple_test.active_users_view TO 'readonly_user'@'%';

-- Transaction example
START TRANSACTION;

INSERT INTO users (username, email, password_hash, role_id) 
VALUES ('new_user', 'new@example.com', 'hashed_password', 3);

SET @new_user_id = LAST_INSERT_ID();

INSERT INTO user_profiles (user_id, first_name, last_name, display_name)
VALUES (@new_user_id, 'New', 'User', 'New User');

COMMIT;

-- Error handling example
DELIMITER //

CREATE PROCEDURE SafeCreateUser(
    IN p_username VARCHAR(255),
    IN p_email VARCHAR(320),
    IN p_password_hash VARCHAR(255),
    IN p_role_id INT,
    OUT p_user_id BIGINT,
    OUT p_error_message VARCHAR(500)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGNOSTICS CONDITION 1
            p_error_message = MESSAGE_TEXT;
        ROLLBACK;
        SET p_user_id = NULL;
    END;
    
    START TRANSACTION;
    
    INSERT INTO users (username, email, password_hash, role_id)
    VALUES (p_username, p_email, p_password_hash, p_role_id);
    
    SET p_user_id = LAST_INSERT_ID();
    SET p_error_message = NULL;
    
    COMMIT;
END //

DELIMITER ;

-- Cleanup (commented out for safety)
-- DROP PROCEDURE IF EXISTS GetUsersByRole;
-- DROP FUNCTION IF EXISTS GetUserFullName;
-- DROP TRIGGER IF EXISTS update_user_timestamp;
-- DROP VIEW IF EXISTS active_users_view;
-- DROP DATABASE IF EXISTS dream_purple_test;