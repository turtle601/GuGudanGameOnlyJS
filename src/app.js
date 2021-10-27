import GuGuDanQuestion from './question.js';
import GuGuDanCategory from './category.js';
import GuGuDanAnswer from './answer.js';
import GuGuDanNextButton from './nextBtn.js';


export default class App {
    constructor(model){
        this.$target = document.querySelector("#root")

        this.model = model;
        this.state = this.model.get();
        
        this.executeComponent();
    }

    makeRandomArray(){
        this.state.first = Math.floor(1 + Math.random() * 9);
        this.state.second = Math.floor(1 + Math.random() * 9);
        this.state.answer = "";
        
        const {first, second} = this.state;
        
        const randomArray = new Array(4).fill(0).map((val) => {
            let number1 = Math.floor(1 + Math.random() * 9);
            let number2 = Math.floor(1 + Math.random() * 9);
            return number1 * number2
        })
    
        randomArray.push(first * second);
        randomArray.sort(() => Math.random() - 0.5);
        
        this.state.randomArray = randomArray;

        this.model.set(this.state);
    }

    makeTag(idName){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", idName);
        
        this.$target.appendChild(newDiv);
        
        return document.querySelector("#" + idName);
    }

    // 생성한 컴포넌트 실행 함수
    executeComponent(){
        const {state, makeRandomArray, makeTag, onSubmit, nextQuestion} = this
        if (Object.keys(state).length === 0){
            console.log(1);
            this.makeRandomArray();
        }
        
        this.guguDanQuestion = new GuGuDanQuestion(this.$target, {
            state : state,
            makeTag : makeTag.bind(this)
        })        
        
        this.guguDanCategory = new GuGuDanCategory(this.$target, {
            state : state,
            makeTag : makeTag.bind(this),
            onSubmit : onSubmit.bind(this),
        })

        this.guguDanAnswer = new GuGuDanAnswer(this.$target, {
            state : state,
            makeTag : makeTag.bind(this),
        })   

        new GuGuDanNextButton(this.$target, {
            makeTag : this.makeTag.bind(this),
            nextQuestion : this.nextQuestion.bind(this),
        });

    }

    nextQuestion(){
        this.makeRandomArray();
        
        this.guguDanQuestion.render();
        this.guguDanCategory.render();
        this.guguDanAnswer.setState(this.state);
    }

    onSubmit(){
        let { first, second } = this.state
        
        let count = 0;  // 정답이 체크된 횟수 (중복 체크 확인 변수)
        let flag = false; // 체크 된지 확인하는 변수
        const correctAnswer = first * second // 정답

        let inputTagList = document.querySelectorAll("input");
        
        [...inputTagList].slice(0,5).forEach($inputTag => {
            const {checked, dataset} = $inputTag
            if (checked === true) count += 1;
            if (checked === true && parseInt(dataset.value) === correctAnswer) flag = true;
        })
        
        // 복사 
        const copyState = {...this.state};

        if (count === 1 && flag) copyState.answer = "정답";    
        else copyState.answer = "오답";

        this.guguDanAnswer.setState(copyState);
        this.model.set(copyState);
    }
}