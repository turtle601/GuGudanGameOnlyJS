export default class GuGuDanAnswer{
    constructor(tag, props){
        this.$rootTag = tag;
        this.props = props;

        this.$answerTag = this.props.makeTag("answerTag");
        
        this.render();
    }

    makeComponent(){
        return (
            `
            <div>${this.props.state.answer}</div>
            `
        )
    }

    render(){
        this.$answerTag.innerHTML = this.makeComponent();
    }

    setState(newState){
        this.props.state = newState; 
        this.render();
    }
}