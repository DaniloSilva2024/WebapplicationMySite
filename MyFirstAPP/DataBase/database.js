const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    // Create Users table
    db.run(`CREATE TABLE IF NOT EXISTS Users (
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL
    )`);

    db.serialize(() => {
        // Create EmergencyFund table
        db.run(`CREATE TABLE IF NOT EXISTS EmergencyFund (
      emergency_fund_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      housing REAL,
      utilities REAL,
      groceries REAL,
      transportation REAL,
      debt REAL,
      other REAL,
      totalExpenses REAL,
      months INTEGER,
      emergencyFundGoal REAL,
      progress REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

        // Create InvestmentCalculator table
        db.run(`CREATE TABLE IF NOT EXISTS InvestmentCalculator (
      investment_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      initialInvestment REAL,
      monthlyContribution REAL,
      annualInterestRate REAL,
      years INTEGER,
      futureValue REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

        // Create Loan table
        db.run(`CREATE TABLE IF NOT EXISTS Loan (
      loan_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      principal REAL,
      annualInterestRate REAL,
      loanTerm INTEGER,
      monthlyPayment REAL,
      totalPayments REAL,
      totalInterest REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

        // Create Mortgage table
        db.run(`CREATE TABLE IF NOT EXISTS Mortgage (
      mortgage_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      principal REAL,
      annualInterestRate REAL,
      loanTerm INTEGER,
      monthlyPayment REAL,
      totalPayments REAL,
      totalInterest REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

        // Create PresentAndFutureValue table
        db.run(`CREATE TABLE IF NOT EXISTS PresentAndFutureValue (
      pfv_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      presentValue REAL,
      annualInterestRate REAL,
      years INTEGER,
      futureValue REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

        // Create RetirementPlan table
        db.run(`CREATE TABLE IF NOT EXISTS RetirementPlan (
      retirement_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      currentAge INTEGER,
      annualIncome REAL,
      percentageSaved REAL,
      retirementAge INTEGER,
      retirementSavingsGoal REAL,
      monthlySavingsRequired REAL,
      yearsToRetirement INTEGER,
      retirementBalance REAL,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);
    });


    // Route to register a new user
    app.post('/register', async (req, res) => {
        const { username, email, password } = req.body;

        // Additional validation
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Username, email, and password are required." });
        }

        try {
            // Hash the password
            const passwordHash = await bcrypt.hash(password, 10);

            // Insert user data into the Users table
            db.run(`INSERT INTO Users (username, email, password_hash) VALUES (?, ?, ?)`,
                [username, email, passwordHash],
                function (err) {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.json({
                        message: 'User registered successfully',
                        user_id: this.lastID
                    });
                });
        } catch (error) {
            return res.status(500).json({ error: "Failed to register user." });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
