export class Recipe {
    constructor(nm, desc, ing, st) {
        this.name = nm;
        this.description = desc;
        this.ingredients = [ing];
        this.steps = [st]
    }
}