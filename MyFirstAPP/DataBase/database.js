const sqlite3 = require('sqlite3').verbose();

// Open database connection
const db = new sqlite3.Database(':memory:');

// Create tables
db.serialize(() => {
    // Create Emergency Fund table
    db.run(`CREATE TABLE IF NOT EXISTS EmergencyFund (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    housing REAL,
    utilities REAL,
    groceries REAL,
    transportation REAL,
    debt REAL,
    other REAL,
    totalExpenses REAL,
    months INTEGER,
    emergencyFundGoal REAL,
    progress TEXT
  )`);

    // Create Investment Calculator table
    db.run(`CREATE TABLE IF NOT EXISTS InvestmentCalculator (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    investmentYear INTEGER,
    maturityYear INTEGER,
    principal REAL,
    annualInterestRate REAL,
    taxRate REAL,
    result TEXT
  )`);

    // Create Loan table
    db.run(`CREATE TABLE IF NOT EXISTS Loan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    principal REAL,
    annualInterestRate REAL,
    termYears INTEGER,
    result TEXT
  )`);

    // Create Mortgage table
    db.run(`CREATE TABLE IF NOT EXISTS Mortgage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    principal REAL,
    annualInterestRate REAL,
    periodYears INTEGER,
    result TEXT
  )`);

    // Create Present and Future Value table
    db.run(`CREATE TABLE IF NOT EXISTS PresentFutureValue (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    calculationType TEXT,
    presentYear INTEGER,
    futureYear INTEGER,
    principal REAL,
    annualInterestRate REAL,
    result TEXT
  )`);

    // Create Retirement Plan table
    db.run(`CREATE TABLE IF NOT EXISTS RetirementPlan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    desiredRetirementAge INTEGER,
    annualIncome REAL,
    housingCost REAL,
    utilitiesCost REAL,
    groceriesCost REAL,
    healthcareCost REAL,
    transportationCost REAL,
    travelCost REAL,
    hobbiesCost REAL,
    debt REAL,
    savings REAL,
    socialSecurity REAL,
    result TEXT
  )`);
});

module.exports = db;
