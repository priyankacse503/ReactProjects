import { createSlice } from '@reduxjs/toolkit';

const initialexpenseState = {
    products: [],
    totalExpenses: 0,
    darkThemeEnabled: false,   
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialexpenseState,
    reducers: {
        replaceExpense(state,action) {
            state.products = action.payload.products;
            state.totalExpenses = +action.payload.totalExpenses;
            state.darkThemeEnabled = action.payload.darkThemeEnabled;   
        },
        getData(state, action) {
            const newExpense = action.payload;
            state.totalExpenses = +state.totalExpenses + (+newExpense.amount);
            state.darkThemeEnabled=state.darkThemeEnabled;
            // const existingExpense=state.products.find(expense=>expense.category=== newExpense.category);
            state.products.push({
                id: newExpense.id,
                amount: newExpense.amount,
                description: newExpense.description,
                category: newExpense.category,
                quantity: 1,
            })
           
            //state.totalQuantity++;
            /*if(!existingExpense){
             state.products.push({
                 id:newExpense.id,
                 amount:newExpense.amount,
                 description:newExpense.description,
                 category:newExpense.category,
                 quantity:1,
                 IndividualExpenses:+newExpense.amount,
                 //TotalExpenses:+newExpense.amount
                }) 
                state.totalExpenses=+state.totalExpenses+(+newExpense.amount);
               
            } else{
            
                 existingExpense.quantity++;
                 existingExpense.IndividualExpenses=+existingExpense.IndividualExpenses+(+newExpense.amount);
                 //state.IndividualExpenses=+state.IndividualExpenses+(+newExpense.amount);
                 state.totalExpenses=+state.totalExpenses+(+existingExpense.IndividualExpenses)-(+newExpense.amount);
                 //existingExpense.TotalExpenses=+existingExpense.TotalExpenses+(+existingExpense.IndividualExpenses)-existingExpense.TotalExpenses;
                 
            }    */
        },
        removeExpense(state, action) {
            const id = action.payload.id;
            console.log(id);
            const amount = action.payload.amount;
            console.log(amount)
            state.products = state.products.filter(product => product.id !== id);
            //axios.delete(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses/${id}.json`)
            state.totalExpenses = +state.totalExpenses - (+amount)
            /*const id=action.payload;
            console.log(id);
            
            state.products=state.products.filter(product=>product.id !== id);
            axios.delete(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses/${id}.json`)        
        },*/
        },
        theme(state) {
            state.darkThemeEnabled = !state.darkThemeEnabled;
        },
        editExpense(state,action){
            const {id,amount,description,category}=action.payload;
            const existingExpense=state.products.find((expense)=>expense.id===id);
            if(existingExpense){
                existingExpense.amount=amount;
                existingExpense.description=description;
                existingExpense.category=category;
            }
            state.totalExpenses=+state.totalExpenses + (+amount);
        },
        editExpenseUpdate(state,action){
            const updatedTotalExpenses=action.payload;
            state.totalExpenses=+state.totalExpenses - (+updatedTotalExpenses);
        }
    }
});


export const expenseactions = expenseSlice.actions;
export default expenseSlice.reducer;