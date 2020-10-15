import Vue from "vue"
import filterTime from "./filterTime"
import filterPrice from "./filterPrice"
let obj={
    filterTime,
    filterPrice
}

for(let i in obj){
    Vue.filter(i,obj[i])
}