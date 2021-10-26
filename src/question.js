export default class GuGuDanQuestion{
    constructor(tag, props){
        this.$rootTag = tag;
        this.props = props;

        this.$questionTag = this.props.makeTag("questionTag");
        this.render();
    }

    makeComponent(){
        const {first, second} = this.props.state;
        return `<div>${first} X ${second}?</div>`
    }

    render(){
        this.$questionTag.innerHTML = this.makeComponent();
    }
}