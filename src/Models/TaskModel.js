export class TaskModel{
    task = null;
    state = null;
    constructor(){}

    checkIntegrity(...params) {
        params.forEach(property => {
            if(!this[property]) throw `Parameter ${property} was not set` ;
        });
    }
}

export const states = {
    STATELESS:0,
    MARKED:1,
    UNMARKED:2
}