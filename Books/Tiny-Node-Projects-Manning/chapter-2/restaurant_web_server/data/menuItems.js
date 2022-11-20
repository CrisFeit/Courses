function formatCurrency(item) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(item)
}


export default [
    {
        name: "Broccoli Pie",
        description: "A green pie with an earthy crust",
        cost: formatCurrency(12.99),
    },
    {
        name: "Eggplant Smoothie",
        description: "A purple shake with an earthy quake",
        cost: formatCurrency(5.99),
    },
    {
        name: "Watermelon Sushi",
        description: "A red roll with atmospheric sweetness",
        cost: formatCurrency(8.99),
    },
]