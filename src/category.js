export default class GuGuDanCategory{
    constructor(tag, props){
        this.$rootTag = tag;
        this.props = props;

        this.$categoryTag = this.props.makeTag("categoryTag");

        this.render();

        this.checkboxEvent();
        // this.nextEvent();
    }
    
    makeComponent(){
        const {randomArray} = this.props.state;

        const category = randomArray
            .map((randomArrayItem, idx) => {
                return (
                    `
                        <input
                            data-id = ${idx} 
                            data-value = ${randomArrayItem} 
                            type = "checkbox"
                        >
                        ${randomArrayItem}
                        </input>
                    `
                )
            }).join(" ");

        return (
            `
            <form>
                ${category}
                <input type = "submit" />
            </form>
            `
        )
    }

    render(){
        this.$categoryTag.innerHTML = this.makeComponent();
    }

    checkboxEvent(){
        this.$categoryTag.addEventListener("submit", (e) => {
            e.preventDefault();
            this.props.onSubmit();
        })
    }
}
