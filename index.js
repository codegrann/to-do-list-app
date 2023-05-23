let addButton = document.querySelector("#addBtn");
addButton.addEventListener("click", addTask);


function addTask() {
    let input = document.querySelector("#addText");
    let tasks = document.querySelector("#tasks");



 let checkButtons = document.querySelectorAll(".check");
         checkButtons.forEach((checkButton) => {
             checkButton.onclick = function () {
                 if(checkButton.checked==true){
                    checkButton.nextElementSibling.style.color="red";
                    checkButton.nextElementSibling.style.textDecoration="line-through";
                }
                else{
                    checkButton.nextElementSibling.style.color="black";
                }
             }
         }
         
         )



    if (input.value.length == 0) {
        alert("Please enter title of your task to continue.")

    }
    else {
        let enterDate = prompt("Enter due date: yyyy-mm-dd");
        let userDate = new Date(enterDate)
        let today = new Date();
        let daysLeft = (userDate - today) / (24 * 60 * 60 * 1000);
        if (daysLeft < 0) {
            daysLeft = 0;
        }
        // else if(daysLeft<3){
        //     document.querySelectorAll(".remove").forEach((deleteButton)=>{
        //         deleteButton.nextElementSibling.style.color="red";
        //     })
        // }




        tasks.innerHTML += `
        <div class="taskEach">
          <input type="checkbox" class="check">
          <input type="text" class="task taskText" value="${input.value}" readonly>
          <button class="button edit">edit</button>
          <button class="remove button">&times;</button>
          
          <p>${Math.ceil(daysLeft)} days left</p>
        </div> 
        `;
        input.value = "";



         // Handling checkbox
         let checkButtons = document.querySelectorAll(".check");
         checkButtons.forEach((checkButton) => {
             checkButton.onclick = function () {
                 if(checkButton.checked==true){
                    // checkButton.nextElementSibling.style.color="red";
                    checkButton.nextElementSibling.style.textDecoration="line-through";
                }
                else{
                    // checkButton.nextElementSibling.style.color="black";
                    checkButton.nextElementSibling.style.textDecoration="none";
                }
             }
         }
         
         )
 

        // EDITING A TASK

        let editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editButton) => {
            editButton.onclick = function () {
                input.value = editButton.previousElementSibling.value;
                // editButton.parentNode.remove();
            }
        })

        // DELETING A TASK

        let deleteButtons = document.querySelectorAll(".remove");
        deleteButtons.forEach((deleteButton) => {
            deleteButton.onclick = () => {
                deleteButton.parentNode.remove();

            }
        }
        )

       

    }
}

