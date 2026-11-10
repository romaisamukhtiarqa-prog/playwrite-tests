CREATE TABLE IF NOT EXISTS Users (
    user_id INTEGER PRIMARY KEY,
    full_name TEXT,
    email TEXT,
    joined_date TEXT
);

CREATE TABLE IF NOT EXISTS Orders (
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    course_title TEXT,
    amount REAL,
    order_date TEXT,
    order_status TEXT
);

INSERT OR IGNORE INTO Users VALUES (101, 'Alex Mercer', 'alex@example.com', '2024-03-15');
INSERT OR IGNORE INTO Users VALUES (105, 'Sarah L.', 'sarah.l@example.com', '2025-01-10');
INSERT OR IGNORE INTO Users VALUES (108, 'David Miller', 'david@example.com', '2025-05-22');

INSERT OR IGNORE INTO Orders VALUES (5001, 105, 'Playwright Essentials', 49.99, '2025-06-12', 'Completed');
INSERT OR IGNORE INTO Orders VALUES (5002, 105, 'Advanced Test Automation', 89.99, '2025-09-01', 'Completed');
INSERT OR IGNORE INTO Orders VALUES (5003, 105, 'API Testing with Postman', 39.99, '2025-11-20', 'Completed');
INSERT OR IGNORE INTO Orders VALUES (5004, 105, 'Performance Testing 101', 59.99, '2026-02-14', 'Completed');
INSERT OR IGNORE INTO Orders VALUES (5005, 105, 'AI-Driven QA Engineering', 99.99, '2026-04-18', NULL);
INSERT OR IGNORE INTO Orders VALUES (6001, 101, 'Python for QA', 29.99, '2025-08-10', 'Completed');
INSERT OR IGNORE INTO Orders VALUES (6002, 108, 'Docker & Kubernetes', 79.99, '2026-01-05', 'Completed');