import TaskVisitor from "../antlr4/TaskVisitor.js";
import { TaskModel,states } from '../Models/TaskModel.js'
export class CustomTaskVisitor extends TaskVisitor{
    visitElements(ctx){
        var result = [];

        ctx.children.forEach(element => {
            result.push(this.visit(element));
        });

        result = result.filter(element => element);

        return result;
    }

    visitTask(ctx){
        var result = new TaskModel();
        var foo = ctx.START();
        var bar = ctx.CONTENT();

        result.checkIntegrity();
        return result;
    }
}