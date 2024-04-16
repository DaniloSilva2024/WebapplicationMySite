const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes for Emergency Fund
app.post('/emergency-fund', (req, res) => {
    const {
        user_id,
        housing,
        utilities,
        groceries,
        transportation,
        debt,
        other,
        totalExpenses,
        months,
        emergencyFundGoal,
        progress
    } = req.body;

    db.run(`INSERT INTO EmergencyFund (user_id, housing, utilities, groceries, transportation, debt, other, totalExpenses, months, emergencyFundGoal, progress) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user_id, housing, utilities, groceries, transportation, debt, other, totalExpenses, months, emergencyFundGoal, progress],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'Emergency Fund data inserted successfully',
                id: this.lastID
            });
        });
});

// Routes for Investment Calculator
app.post('/investment-calculator', (req, res) => {
    const {
        user_id,
        initialInvestment,
        monthlyContribution,
        years,
        annualInterestRate,
        compoundFrequency
    } = req.body;

    // Handle investment calculation logic here

    res.json({
        // Response data for the client
    });
});

// Routes for Loan Calculator
app.post('/loan-calculator', (req, res) => {
    const {
        user_id,
        loanAmount,
        interestRate,
        loanTerm,
        paymentFrequency
    } = req.body;

    // Handle loan calculation logic here

    res.json({
        // Response data for the client
    });
});

// Routes for Mortgage Calculator
app.post('/mortgage-calculator', (req, res) => {
    const {
        user_id,
        loanAmount,
        interestRate,
        loanTerm,
        downPayment
    } = req.body;

    // Handle mortgage calculation logic here

    res.json({
        // Response data for the client
    });
});

// Routes for Present and Future Value Calculator
app.post('/present-future-value-calculator', (req, res) => {
    const {
        user_id,
        presentValue,
        interestRate,
        timePeriod,
        calculationType
    } = req.body;

    // Handle present and future value calculation logic here

    res.json({
        // Response data for the client
    });
});

// Routes for Retirement Planner
app.post('/retirement-planner', (req, res) => {
    const {
        user_id,
        currentAge,
        retirementAge,
        currentSavings,
        monthlyContribution,
        investmentReturnRate
    } = req.body;

    // Handle retirement planning logic here

    res.json({
        // Response data for the client
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

