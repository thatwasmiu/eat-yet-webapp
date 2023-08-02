
type IdEntity = {
    id?: number;
}

export type Food = IdEntity & {
    name: string,
    estimateTime?: number;
    bannerUrl: string | undefined;
    totalMaxPrice?: number;
    totalMinPrice?: number;
    descr: string;
    steps: Step[];
    rate?: Rate;
    places?: MarketPlace[];
}

export type Step = IdEntity & {
    name: string;
    ingredientList?: Ingredient[];
    substitutes?: Ingredient[];
    substituteList?: IngredientMap[];
    timeEst: number | undefined;
    descr: string;
}

export type Ingredient = IdEntity & {
    name: string;
    price: number | undefined;
    descr: string;
    bannerUrl: string;
    rate?: Rate;
}

export type IngredientMap = {
    originalId: number;
    replacementId: number;
}

export type MarketPlace = IdEntity & {
    id?: number;
    name: string;
    rate?: Rate;
}

export type Rate = IdEntity & {
    name: string;
    evaluationPoint: number;
}

 

    