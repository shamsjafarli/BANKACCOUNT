const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const showBtn = document.querySelector("#showBtn")
const moneyInput = document.querySelector("#moneyInput")
const balanceEl = document.querySelector("#balanceEl")
const listTable = document.querySelector("#listTable")



// let balance = 0;

// function add(m) {
//     balance += m;     //!bunlarn yerine object yarada bilerk qewwweng
// }

// function spend(m) {
//     balance -= m;
// }

// function showBalance() {
//     console.log(balance)
// }

























const bankAccount = {
    balance: 0,
    limit: 2000,
    date: new Date(),
    hesabat: [],






    add: function (m) {


        if (this.balance >= this.limit || m <= 0 || !m) {
            console.log("limit")   //!balans limitden boyukdurse balansı artırma
            return;
        }



        this.balance += m;

        const history = {
            type: "Cash",
            created: this.date,
            amount: m,
        }
        this.hesabat.push(history)


        return this.balance;  //!balansı artırandan sonra gostersin bize
    },

    spend: function (m) {//! xercleyen zaman
        const checkValid = () => {   //!checkvalid adnda funks yaratdı ifle yoxladı sehvlik varsa inv yoxsa balansdan cıxdu
            if (this.balance <= m) {
                console.log("invalid balance");   //!balans 0dan kiçikdirse edeleri gosterme
                return;
            };

            this.balance -= m;


            // const date = new Date();  bunu yuxarıdada yaza bilersen

            const history = {
                type: "Withdraw",
                created: this.date,
                amount: m,
            }

            //!melumat blokudu
            this.hesabat.push(history)
        }

        checkValid()    //!spend metodu içnde cagırdı

        return this.balance;//!spend metodu içinde balansı gosterdi
    },

    showBalance: function () {
        const handleMotor = () => {
            console.log(this.balance);
            console.log(this.hesabat);
        }

        handleMotor()
        return this.balance;
    },

};

incrementBtn.addEventListener("click", function () {
    const value = moneyInput.value;
    bankAccount.add(+value);
    console.log(this.balance)
    moneyInput.value = "";
});

decrementBtn.addEventListener("click", function () {
    const value = moneyInput.value;
    bankAccount.spend(+value);
    moneyInput.value = "";

});

showBtn.addEventListener("click", function () {
    // const result = bankAccount.showBalance()
    // balanceEl.innerHTML = result
    balanceEl.innerHTML = bankAccount.balance

    //!balanceel span id sidir.

    const newContent = bankAccount.hesabat.map(
        (item, index) => `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${item.type}</td>
    <td class="text-${item.type == "Cash" ? "success" : "danger"}">${item.type == "Cash" ? "+" + item.amount : "-" + item.amount}</td>
    <td> ${new Date().toLocaleDateString('en-GB')}</td> 
</tr>
  `
    ).join("")

    listTable.innerHTML = newContent;

    ;
})




// add(100); //!yuxardakı vara 100 add edrk
// spend(100);//!yuxarda balnsda artıq 100 var bizde 2cidefe cagrb 100verende 200 olur
// showBalance()



