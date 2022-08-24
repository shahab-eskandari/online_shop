const formatter = new Intl.NumberFormat(
    undefined,
    {currency: "USD", 
    style: 'currency'}   
)

export function formatCurrency(number: number){
    return formatter.format(number);
}