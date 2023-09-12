import List from "../models/list"
import { getLocalStorage } from "../models/storage";
import format from "date-fns/format";
import sortTodos from "./sortTodos";

const generateHomeList = () => {
    const localStorage = getLocalStorage();
    const homeList = [];
    let today = new List("Today");
    let week = new List("This week");
    let month = new List("This month");
    let year = new List("This year");

    let rawDate = new Date();

    let todayDate = format(rawDate, 'yyyyMMdd');
    let currentYear = format(rawDate, 'y');
    let currentMonth = format(rawDate, "M");
    let currentWeek = format(rawDate, 'w');

    for (let i in localStorage) {
        for (let j in localStorage[i].todos) {
            let date = localStorage[i].todos[j].dueDate;
            let dateD = format(Date.parse(date), 'yyyyMMdd');
            let dateW = format(Date.parse(date), 'w');
            let dateM = format(Date.parse(date), 'M');
            let dateY = format(Date.parse(date), 'y');

            if (dateD === todayDate) {
                today.todos.push(localStorage[i].todos[j]);
            }
            else if (dateW === currentWeek && dateY === currentYear) {
                week.todos.push(localStorage[i].todos[j]);
            }
            else if (dateM === currentMonth && dateY === currentYear) {
                month.todos.push(localStorage[i].todos[j]);
            }
            else if (dateY === currentYear) {
                year.todos.push(localStorage[i].todos[j]);
            }
        }
    }

    sortTodos(today);

    homeList.push(today, week, month, year);

    return homeList;
}

export default generateHomeList;