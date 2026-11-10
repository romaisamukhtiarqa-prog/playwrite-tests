import sqlite3

# Lab database create karna
conn = sqlite3.connect('mindbridge_lab.db')
cursor = conn.cursor()

# Users Table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Users (
    user_id INTEGER PRIMARY KEY,
    full_name TEXT,
    email TEXT,
    joined_date TEXT
)
''')

# Orders Table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Orders (
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    course_title TEXT,
    amount REAL,
    order_date TEXT,
    order_status TEXT
)
''')

# Sample Users Data
users = [
    (101, 'Alex Mercer', 'alex@example.com', '2024-03-15'),
    (105, 'Sarah L.', 'sarah.l@example.com', '2025-01-10'),
    (108, 'David Miller', 'david@example.com', '2025-05-22')
]
cursor.executemany('INSERT OR IGNORE INTO Users VALUES (?,?,?,?)', users)

# Sample Orders Data (Lab scenario: Sarah has 5 orders, latest has empty status)
orders = [
    (5001, 105, 'Playwright Essentials', 49.99, '2025-06-12', 'Completed'),
    (5002, 105, 'Advanced Test Automation', 89.99, '2025-09-01', 'Completed'),
    (5003, 105, 'API Testing with Postman', 39.99, '2025-11-20', 'Completed'),
    (5004, 105, 'Performance Testing 101', 59.99, '2026-02-14', 'Completed'),
    (5005, 105, 'AI-Driven QA Engineering', 99.99, '2026-04-18', None),
    (6001, 101, 'Python for QA', 29.99, '2025-08-10', 'Completed'),
    (6002, 108, 'Docker & Kubernetes', 79.99, '2026-01-05', 'Completed')
]
cursor.executemany('INSERT OR IGNORE INTO Orders VALUES (?,?,?,?,?,?)', orders)

conn.commit()
conn.close()
print("mindbridge_lab.db database successfully created!")