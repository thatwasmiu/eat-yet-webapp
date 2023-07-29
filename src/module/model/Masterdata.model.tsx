
type IdEntity = {
    id?: number;
}

export type Food = IdEntity & {
    name: string,
    estimateTime?: number;
    bannerUrl: string;
    totalMaxPrice?: number;
    totalMinPrice?: number;
    descr: string;
    steps: Step[];
    rate?: Rate;
    places?: FoodMarket[];
}

export type Step = IdEntity & {
    name: string;
    ingredient?: Ingredient[];
    substitutes?: Ingredient[];
    substituteMap?: IngredientMap[];
    timeEst: number;
    descr: string;
}

export type Ingredient = IdEntity & {
    name: string;
    price: number;
    rate?: Rate;
}

export type IngredientMap = {
    originalId: number;
    replacementId: number;
}

type FoodMarket = IdEntity & {
    id?: number;
    name: string;
    rate?: Rate;
}

type Rate = IdEntity & {
    name: string;
    evaluationPoint: number;
}

 

    