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

// Task 3: Service Fee Calculation 
const calculateServiceFee = (amount, serviceType) => 
    {//arrow function that will help determine a percentage fee based on the service type chosen 
        let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : serviceType === "Basic" ? 0.05 : 0;
        let serviceFee = amount * feeRate;
        return `Service Fee: $${serviceFee.toFixed(2)}`;
    };
console.log(calculateServiceFee(200, "Premium"));  // test data that should produce:  "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // test data that should produce: "Service Fee: $50.00"

//Task 4: Car Rental Cost Calculation 
function calculateRentalCost(days, carType, insurance = false)//function that calculates the rental costs and types
    { //defining the different types of rental cars and its costs
        let rate = carType === "Economy" ? 40 :carType === "Standard" ? 60 :carType === "Luxury" ? 100 : 0; 
        let insuranceCost = insurance ? 20 * days : 0; //Extra days will costs $20 each day
        let totalCost = (rate * days) + insuranceCost;
        return `Total Rental Cost: $${totalCost}`;
    }
    console.log(calculateRentalCost(3, "Economy", true)); // test data that should produce: "Total Rental Cost: $180"
    console.log(calculateRentalCost(5, "Luxury", false)); // test data that should produce: "Total Rental Cost: $500"
