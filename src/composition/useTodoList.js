import { ref , watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage";
export default function useTodoList(){
    const todosRef = ref(todoStorage.fetch());
    window.todosRef = todosRef; // 测试
    //当数据发生变化我们要同步到localStorage里去
    watchEffect(()=>{
      todoStorage.save(todosRef.value)
    })
    return {
        todosRef
    }
}