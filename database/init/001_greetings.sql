CREATE TABLE IF NOT EXISTS greetings (
    id INT NOT NULL PRIMARY KEY,
    message VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO greetings (id, message) VALUES (1, 'hello');
