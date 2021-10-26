export default class GuGuDanNextButton{
    constructor(tag,props){
        this.$rootTag = tag;
        this.props = props;

        this.$nextBtn = this.props.makeTag('nextBtn');

        this.render();

        this.next();
    }

    makeComponent(){
        return (
            `
            <button type = "reset">다음 문제</button>
            `
        )
    }

    render(){
        this.$nextBtn.innerHTML = this.makeComponent();
    }

    next(){
        this.$nextBtn.addEventListener("click", (e) => {
            if(e.target.tagName === "BUTTON" && e.target.type === "reset"){
                this.props.setState();
            }
        })
    }
}