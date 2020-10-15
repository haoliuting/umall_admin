import Vue from "vue"
import filterTime from "./filterTime"
let obj={
    filterTime
}
for(let i in obj){
    Vue.filter(i,obj[i])
}