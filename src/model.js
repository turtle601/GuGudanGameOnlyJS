export default class Model{
    

    get(){
        const guguDanState = JSON.parse(localStorage.getItem("guguDan"));
        return (guguDanState === null) ? {} : guguDanState;
    }

    set(newState){
        localStorage.setItem("guguDan", JSON.stringify(newState));
    }
}
