const textInput = document.getElementById("textInput");

const listAddBtn = document.getElementById("textAdd");

const newItem = document.createElement("li");

const list =document.getElementById("list")

const todos = [];


textAdd.addEventListener("click", (event) => {
    // const count = (list.children.length + 1)
    // newItem.textContent = count + document.getElementById("textInput").value
    const newItemContent = textInput.value;
    textInput.value = "";
    
    if (newItemContent) {
      todos.push(newItemContent);
      showTodos();
      dragdrop();
      // 
  //     document.querySelectorAll("#list li").forEach(element => {
  // element.ondragstart = function () {
  //   event.dataTransfer.setData("text/plain", event.target.id)
  // };
  // element.ondragover = function () {
  //   event.preventDefault();
  //   this.getElementsByClassName.borderTop = "2px solid blue";
  // };
  // element.ondragleave = function () {
  //   this.style.borderTop = "";
  // };
  // element.ondrop = function () {
  //   event.preventDefault();
  //   let id = event.dataTransfer.getData("text/plain");
  //   let element_drag = document.getElementById(id);
  //   this.parentNode.insertBefore(element_drag, this);
  //   this.style.borderTop = "";
  // }
  //     });
      // 
    } else {
        alert("テキストボックスが空欄です")
    }

        // 
        // todos.forEach((newItem) => {
        //     // const todoItem = document.createElement('li');
        //     // const taskNumber = index + 1;
        //     const newItem = document.createElement("li")
        //     const count = (list.children.length + 1)
        //     newItem.textContent = count + document.getElementById("textInput").value
    
        //     // const count =document.getElementsByTagName("li").length;
        //     // count.textContent =  (list.children.length) + document.getElementById("textInput").value
    
        //     list.append(newItem)
        // }
        // // 
        // while (list.firstChild) {
        //     list.removeChild(list.firstChild);
        // }


        // showTodo();
        // 
    
    
        // newItem.appendchild(count)
        // 削除ボタン
        // const removeBtn = document.createElement("button")
        // removeBtn.innerText += " 削除";
        // newItem.appendChild(removeBtn)
    
        // removeBtn.addEventListener("click", (event) => {
        //     newItem.remove()
        //     // for (var i = 0; i < list.children.length; i++){
        //     //     var remItem = document.querySelector("ul")
        //     //     console.log(remItem)
        //     //     const count2 = (list.children.length+1)
        //     //     newItem.textContent = count2 + document.getElementById("textInput").value
        //     // }
        //     // const Item = document.getElementsByName("li")[0];
        //     // var newItem = Array.prototype.slice.call("newItem");
        //     // Item.array.forEach((newItem) => {
        //     //     newItem.innerText="ac"
        //     // });
        //     showTodo();
        // })
    

});

 function showTodos() {
    // ul要素内を中身を一旦空っぽにして、現在のTodoリスト一覧を再度表示する
    while(list.firstChild) {
      list.removeChild( list.firstChild );
    }

    // todosの情報を使ってTodoリストを作成
     todos.forEach((newItemContent,count) => {
         const newItem = document.createElement("li");
        //   const count = (list.children.length + 1)
         const count2 = count + 1
         
       newItem.textContent = count2 + ":" + newItemContent


      //  ドラック&ドロップ用
      newItem.setAttribute("draggable",true)
      newItem.setAttribute("id",count2)
      //  ドラック&ドロップend

       
       
        list.appendChild(newItem)

      // 新規作成したli要素に削除ボタンを付ける
        const removeBtn = document.createElement("button")
        removeBtn.innerText = " 削除";
      removeBtn.addEventListener('click', (event) => {
        remove(count);
        // newItem.removeChild()
      });
         newItem.appendChild(removeBtn);

     });
    }
          function remove(count) {
        todos.splice(count, 1);
            showTodos();
            dragdrop();
}
  



// ドラック&ドロップ
function dragdrop() {
document.querySelectorAll('#list li').forEach (elm => {
	elm.ondragstart = function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);

	};
	elm.ondragover = function (event) {
		event.preventDefault();
		this.style.borderTop = '2px solid blue';
	};
	elm.ondragleave = function () {
		this.style.borderTop = '';
	};
	elm.ondrop = function (event) {
		event.preventDefault();
		let id = event.dataTransfer.getData('text/plain');
		let elm_drag = document.getElementById(id);
		this.parentNode.insertBefore(elm_drag, this);
		this.style.borderTop = '';
  };
  ;
});
// showTodos()
}



//  document.querySelectorAll("#list li").forEach(element => {
//     element.ondragstart = function () {
//       event.dataTransfer.setData("text/plain", event.target.id)
      
//     };
//     element.ondragover = function () {
//     event.preventDefault();
//       this.getElementsByClassName.borderTop = "2px solid blue";
//     };
//     element.ondragleave = function () {
//       this.style.borderTop = "";
//     };
//     element.ondrop = function () {
//       event.preventDefault();
//       let id = dd.dataTransfer.getData("text/plain");
//       let element_drag = document.getElementById(id);
//       this.parentNode.insertBefore(element_drag, this);
//       this.style.borderTop = "";
//     }
  
  // });