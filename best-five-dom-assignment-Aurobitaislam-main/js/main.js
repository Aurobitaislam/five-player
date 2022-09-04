function selectionPlayer(element){
    const player = element.parentNode.children[1].innerText;
    const allPlayer = document.getElementById("list-player");
    const list = document.querySelectorAll('ol li');

        if (list.length < 5) {
            const li = document.createElement('li');
            li.innerText = player;
            allPlayer.appendChild(li);
        }
        else{
            alert("Sorry! You already selected five player")
        }
}




function getElementPriceValue(prices) { 
    const totalPlayer = document.getElementById(prices); 
    const totalPlayerPriceString = totalPlayer.value; 
    const totalPlayerPrice = parseInt(totalPlayerPriceString); 
 
    return totalPlayerPrice; 
} 
 
function getElementPrice(prices) { 
    const totalPlayer = document.getElementById(prices); 
    const totalPlayerPriceString = totalPlayer.innerText; 
    const totalPlayerPrice = parseInt(totalPlayerPriceString); 
 
    return totalPlayerPrice; 
} 
 
 
 
function getElementText(totalPrices, values) { 
    const totalPlayer = document.getElementById(totalPrices); 
    totalPlayer.innerText = values; 
} 
document.getElementById('calculate').addEventListener('click', function() { 
    const totalExpenses = getElementPriceValue('amount'); 
    const totalExpensesPlayer = totalExpenses * 5; 
    getElementText('total', totalExpensesPlayer); 
 
}); 
 
 
document.getElementById('calculate-total').addEventListener('click', function() { 
    const totalExpensesOfPlayer = getElementPrice('total'); 
 
    const managerBudget = getElementPriceValue('manager'); 
    const coachBudget = getElementPriceValue('coach'); 
 
    const calculationOfTotalBudget = totalExpensesOfPlayer + managerBudget + coachBudget; 
 
    getElementText('total-calculation', calculationOfTotalBudget); 
 
})