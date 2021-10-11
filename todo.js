let todo_list = [];

let input = null;
do {
    input = prompt("What would you like to do?");
    if (input === "quit") {
        console.log("Quitting app");
        break;
    }
    else if (input === "new") {
        let new_item = prompt("What is your todo?");
        todo_list.push(new_item);
    }
    else if (input === "list") {
        console.log("TO DO LIST")
        console.log("***************");
        for (let i = 0; i < todo_list.length; i++) {
            console.log(`${i}: ${todo_list[i]}`);
        }
        console.log("***************");
    }
    else if (input === "delete") {
        let index_item = parseInt(prompt("Enter the index of the item you wish to delete"));
        let del = todo_list.splice(index_item, 1);
        console.log(`${del} has been deleted`);

    }
} while (input !== "quit" || "new" || "list" || "delete");
