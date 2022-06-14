const { createSlice } = require("@reduxjs/toolkit");

const purchase = createSlice({
    name: 'purchase',
    initialState: true, 
    reducers: {
        hide : () => {
            this.state = false
        }, 
        show: () => {
            this.state = true
        }
    }
})

const {reducers, actions} = purchase; 

export const {hide, show} = actions ;
export default reducers ; 