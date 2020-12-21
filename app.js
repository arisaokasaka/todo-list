var btn_add = document.getElementsByClassName('btn_add')[0];
var list = document.getElementsByClassName('list')[0];
var inputTodo = document.getElementsByClassName('input_text')[0];
var count = 0;
var edit_class = null;

btn_add.onclick = function addTodo(){    

    //編集モードになっている時（ボタン名が「確定」になっている時）
    if(btn_add.innerHTML == "確定") {
        if(inputTodo.value==""){
            return alert("内容を入力してください。");
        }
        document.querySelector("."+edit_class).textContent = inputTodo.value
        btn_add.innerHTML = "追加"
        inputTodo.value = "";
        return null;
    }

    //入力欄に何も入力されていない時 
    if(inputTodo.value == "") { return null; };
    
    // 各リスト（li）生成。
    var newLi = document.createElement('li');
    var eachLiClassname = "todo_" + count;
    newLi.className = "todo " + eachLiClassname;
    
    //各リストのマーク生成。 
    var icon = document.createElement('i');
    icon.className = "fas fa-circle";

    // リストの内容が入るdiv生成。div内に入力内容も格納。
    var createDiv = document.createElement("div");
    createDiv.style.display = "inline";
    var eachTodoContent = "div_" + count;
    createDiv.className = eachTodoContent;
    createDiv.appendChild(document.createTextNode(inputTodo.value));
    
    //削除ボタンの生成、削除機能の付与。
    var btn_delete = document.createElement('button');
    btn_delete.innerHTML = '削除';
    btn_delete.className = 'btn btn_delete';
    btn_delete.onclick = function todoDelete(){

        if(btn_add.innerHTML == "確定") {
            alert("確定のボタンを押してから削除してください。")
        } else {   
            var Todo_delete = document.querySelector("." + eachLiClassname);
            Todo_delete.remove();
        }
    };

    //編集ボタンの生成、クリック時に要素のクラス取得＆追加ボタンを確定ボタンに変更。
    var btn_edit = document.createElement('button');
    btn_edit.innerHTML = '編集';
    btn_edit.className = 'btn btn_edit';
    btn_edit.onclick = function todoEdit(){
        inputTodo.value = document.querySelector("."+eachTodoContent).textContent;
        edit_class = eachTodoContent;
        btn_add.innerHTML = "確定";
    };

    // ulにliを格納し、liに各要素を格納。
    list.appendChild(newLi);
    newLi.appendChild(icon);
    newLi.appendChild(createDiv);
    newLi.appendChild(btn_delete);
    newLi.appendChild(btn_edit);
    inputTodo.value = "";

    count++;
}
