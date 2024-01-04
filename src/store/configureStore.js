import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// export function configureStore(){
//     return createStore(rootReducer , devToolsEnhancer) // magazayı oluşturuyor ve reducerları yapılandırıyor. devtoolsenahncer zorunlu değil, bir eklenti.
// }

const createStore  = configureStore({ // magazayı oluşturuyor ve reducerları yapılandırıyor. devtoolsenahncer zorunlu değil, bir eklenti.
    reducer:rootReducer,
    devToolsEnhancer
})

export default createStore;