var todo_count = 0;
var done_count = 0;

function delete_task(t) {
  // smaz task z 'done' listu
  t.parentNode.remove();
  done_count -= 1;
  // zapis pocet done tasku
  document.querySelector('#done_count').innerHTML = done_count;
}s2a

function done_task(t) {
  // presun task do 'done' listu
  done_count += 1;
  document.querySelector('#done_count').innerHTML = done_count;
  document.querySelector('#done').style.display = "block";
  document.querySelector('#done').innerHTML += `
    <div class="task alert alert-success">
      ${t.parentNode.querySelector('.task_text').innerHTML}
      <button class="delete close" title="click to delete" onclick="delete_task(this);">
        <i class="bi-trash text-danger"></i>
      </button>
    </div>`;
  // odstran todo task
  t.parentNode.remove();
  todo_count -= 1;
  // zapis a pripadne schovej pocet aktivnich tasku
  document.querySelector('#todo_count').innerHTML = todo_count;
}

function add_task() {
    if(document.querySelector('#new_todo').value.length == 0){
        alert("Please add some task description");
    }
    else{
        // novy task do listu
        document.querySelector('#todo').innerHTML += `
          <div class="task alert alert-primary">
            <span class="task_text">${document.querySelector('#new_todo').value}</span>
            <button class="done close" title="click to mark as done" onclick="done_task(this);">
              <i class="bi-check2-square text-success"></i>
            </button>
          </div>`;
        // zvyseni poctu tasku
        todo_count += 1;
        document.querySelector('#todo_count').innerHTML = todo_count;
        document.querySelector('#todo').style.display = "block";
    }
}
