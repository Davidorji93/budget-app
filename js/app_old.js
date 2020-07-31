class Budget {
	constructor(_desc, _amount, _type) {
		this.desc = _desc;
		this.amount = _amount;
		this.type = _type;
		this.allBudgets = [];
	}

	addBudget() {
		// a create the budget
		const budget = {
			desc: this.desc,
			amount: this.amount,
			type: this.type
		};

		// b check if there are budgets inside the localStorage
		if (localStorage.getItem("budgets")) {
			this.allBudgets = JSON.parse(localStorage.getItem("budgets"));
		}

		this.allBudgets.unshift(budget);

		// d. add  all budgets to the localStorage
		localStorage.setItem("budgets", JSON.stringify(this.allBudgets));

		// 2. reload the contents from the localStorage
		UI.loadBudgets();

		// 3. close the modal
		const closeBtn = document.getElementById("closeModalBtn");
		closeBtn.click();
	}
}

class UI {
	static loadBudgets() {
		// console.log(JSON.parse(localStorage.getItem("budgets")));
		if (localStorage.getItem("budgets")) {
			// 1. get budgets out from localStorage
			const budgets = JSON.parse(localStorage.getItem("budgets"));

			// 2. load budgets into items parent
			const items = document.querySelector(".items");

			let budgetsHTML = "";
			let x = 1;
			budgets.forEach(budget => {
				budgetsHTML += `<li class="${budget.type} item">
							<div class="row text-capitalize mb-3">
								<div class="col-sm-1"><span>${x}</span></div>
								<div class="col-sm-6"><span>${budget.desc}</span></div>
								<div class="col-sm-3"><span>July 25th</span></div>
								<div class="col-sm-2"><span>&#x20a6;${budget.amount}</span></div>
							</div>
							<!-- edit and delete btns -->
							<div class="icons">
								<span><i class="fa fa-edit text-success mr-2"></i></span>
								<span><i class="fa fa-trash text-tomato"></i></span>
							</div>
            </li>`;
				x++;
			});

			items.innerHTML = budgetsHTML;
			console.log(JSON.parse(localStorage.getItem("budgets")));
		}
	}
}
// App Logic
window.addEventListener("DOMContentLoaded", e => {
	UI.loadBudgets();
});

const submitForm = document.getElementById("submitItem");

// add budget
submitForm.addEventListener("submit", e => {
	e.preventDefault();

	const form = e.target;
	const desc = form.querySelector("#desc").value;
	const amount = form.querySelector("#amount").value;
	const type = form.querySelector("#type").value;

	let budget = new Budget(desc, amount, type);

	budget.addBudget();
});
