import App from "./app.js";
import Model from "./model.js";

function main(){
    const model = new Model();
    new App(model);  
}

main();