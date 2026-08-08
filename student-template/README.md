# Coding Test - Student Instructions

This test evaluates your skills in backend development, database queries, frontend React components, CI/CD pipelines, and AI prompt engineering.

---

## 📋 Test Overview

- **Total Questions**: 5 (Choose ANY 3 to complete)
- **Recommended Time**: 45 minutes
- **Submission**: Push your code to your GitHub repository before time ends
- **Scoring**: Your top 3 completed questions will be graded

### Question Breakdown

| # | Topic | Points |
|---|-------|--------|
| 1 | Backend API (Python Flask OR Java Spring Boot) | 25 |
| 2 | Database (SQL + MongoDB) | 20 |
| 3 | Frontend (React Component) | 20 |
| 4 | CI/CD & GitHub Actions | 15 |
| 5 | Prompt Engineering (AI) | 20 |

**Important**: You only need to complete **3 out of 5** questions. Choose the ones that match your strengths!

---

## 🚀 Getting Started with GitHub Codespaces

### Step 1: Fork This Repository
1. Click the **Fork** button at the top-right of this repository
2. This creates a copy in YOUR GitHub account
3. All your work will be saved there

### Step 2: Open in GitHub Codespaces (Recommended)
**This is the easiest way - no local setup needed!**

1. Go to your forked repository on GitHub
2. Click the green **Code** button
3. Select the **Codespaces** tab
4. Click **Create codespace on main**
5. Wait ~30 seconds for the environment to load with all tools pre-installed

✅ **You'll get:**
- VS Code running in your browser
- Python 3.11, Java 17, Node.js 18 pre-installed
- PostgreSQL and MongoDB clients ready
- All extensions configured
- Direct commit/push to your repository

### Alternative: Use VS Code Locally
If you prefer working locally:
```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/erp-coding-test.git
cd erp-coding-test
# Install dependencies
pip install -r requirements.txt
```

---

## 📝 Questions

### QUESTION 1: Backend API – Choose Python or Java

**Context:** You are building an ERP Inventory Module with a PostgreSQL table `inventory` containing: `id (UUID)`, `product_name (VARCHAR)`, `quantity (INT)`, `reorder_level (INT)`, `last_updated (TIMESTAMP)`.

**Task:** Create a REST API endpoint `GET /api/inventory/alerts` that returns all products where `quantity <= reorder_level`.

**Expected JSON Format:**
```json
[{"id": "...", "product_name": "Widget", "quantity": 5, "reorder_level": 10}]
```

**Files to Complete:**
- **Python (Flask):** Edit `backend/python/app.py` - Complete the `get_alerts()` function
- **Java (Spring Boot):** Edit `backend/java/InventoryController.java` - Complete the `getAlerts()` method

*Choose ONE language only.*

---

### QUESTION 2: Database – SQL + NoSQL

**Context:** Your ERP has:
- SQL `orders` table: `order_id`, `customer_id`, `total_amount`, `order_date`
- MongoDB `order_audit` collection: `{order_id, old_status, new_status, changed_by, timestamp}`

**Tasks:**

1. **SQL (10 pts):** Write a query to find the **top 5 customers** by total order value for year 2025.
   - File: `database/queries.sql`

2. **MongoDB (10 pts):** Find all audit entries for `order_id = "ORD-1001"` where status changed from `"PENDING"` to `"SHIPPED"`.
   - File: `database/queries.mongodb`

---

### QUESTION 3: Frontend – React Dashboard Widget

**Context:** A React component shell exists. The backend API `/api/inventory/alerts` returns low-stock items.

**Task:**
- Fetch data from `/api/inventory/alerts` using `fetch()` inside `useEffect`
- Display results in a **table** with columns: Product Name, Quantity, Reorder Level
- If empty array, show: `<p>All inventory levels are healthy.</p>`

**File to Complete:** `frontend/Dashboard.jsx`

---

### QUESTION 4: CI/CD & GitHub Actions

**Context:** Your repository needs automated testing on every push.

**Task:** Create a GitHub Actions workflow that:
- Triggers on `push` to `main` branch
- Runs `npm install` and `npm run build` for frontend
- Runs `python -m pytest` (Python) OR `mvn test` (Java) for backend

**File to Create/Edit:** `ci-cd/deploy.yml`

---

### QUESTION 5: Prompt Engineering

**Context:** Your PM wants a **"Supplier Performance"** widget showing:
- On-time delivery percentage per supplier
- Average response time to purchase orders  
- Color-coded status (Green/Yellow/Red)

**Task:** Write a detailed AI prompt to generate this React component. Your prompt must include:
- Component name: `SupplierPerformance`
- Expected props/API data structure
- UI layout (cards or table)
- Color-coding logic

**File to Complete:** `prompt.txt`

---

## ✅ Submission Checklist

Before time ends, ensure:
- [ ] You have forked the repository to YOUR GitHub account
- [ ] You have completed exactly 3 questions (or more if you want options)
- [ ] All your code is committed (`git commit -m "my solution"`)
- [ ] All commits are pushed to `main` branch (`git push origin main`)
- [ ] Your GitHub repository is public (so graders can access it)

---

## 🎯 Scoring Rules

- Each question is graded independently
- If you complete more than 3 questions, your **top 3 scores** count
- Final score = Sum of your best 3 question scores
