# Financial Calculators API

This API provides endpoints for various financial calculators, including Emergency Fund, Investment Calculator, Loan Calculator, Mortgage Calculator, Present and Future Value Calculator, and Retirement Planner.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
    - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Calculate emergency fund savings required based on monthly expenses.
- Estimate future investment value based on initial investment, monthly contributions, and interest rate.
- Determine loan repayment amounts based on principal, interest rate, and loan term.
- Calculate mortgage repayment amounts based on principal, interest rate, loan term, and down payment.
- Compute present and future values based on initial value, interest rate, and time period.
- Plan for retirement savings based on current age, retirement age, current savings, and investment return rate.

## Getting Started

### Prerequisites

- Node.js
- SQLite3

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/financial-calculators-api.git


Endpoints
POST /register: Register a new user.
POST /login: Log in an existing user.
POST /emergency-fund: Calculate emergency fund savings required.
POST /investment-calculator: Calculate future investment value.
POST /loan-calculator: Calculate loan repayment amounts.
POST /mortgage-calculator: Calculate mortgage repayment amounts.
POST /present-future-value-calculator: Calculate present and future values.
POST /retirement-planner: Plan for retirement savings.