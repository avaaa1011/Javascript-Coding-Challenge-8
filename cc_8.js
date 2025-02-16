//Task 1: Employee Salary Calculation 
function calculateSalary(baseSalary, bonus, taxRate)
    {//function will calculate the net salary with following formula 
        let netSalary = (baseSalary + bonus) - (baseSalary * taxRate) 
        return `Net Salary: $${netSalary.toFixed(2)}`; //method that will set the number value to two decimal places
    };
console.log(calculateSalary(5000,500,0.1)); //should produce test data: "Net Salary: $5000.00"
console.log(calculateSalary(7000,1000,0.15)); //should produce test data: "Net Salary: $6950.00"

//Task 2: Product Price After Discount 
const calculateDiscount = function(price, discountRate) //declaring a function
    {
        let finalPrice = price - (price * discountRate); //function that'll help calculate the final price after a discount
        return `Final Price: $${finalPrice.toFixed(2)}`; //method that will set the number value to two decimal places
    };
console.log(calculateDiscount(100, 0.2)); //test data that should produce: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); //test data that should produce: "Final Price: $212.50"

// Task 3: Arrow Function

const calculateServiceFee = (amount, serviceType) => 
    {
        let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : serviceType === "Basic" ? 0.05 : 0;
        let serviceFee = amount * feeRate;
        return `Service Fee: $${serviceFee.toFixed(2)}`;
    };
console.log(calculateServiceFee(200, "Premium"));  // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"