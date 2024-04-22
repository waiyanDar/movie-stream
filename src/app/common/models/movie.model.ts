import {Category} from "./category.model";
import {Cast} from "./cast.model";
import {MetaData} from "./meta.data.model";

export interface Movie {
    id: number;
    title: string;
    categories: Category[];
    casts: Cast[];
    description: string;
    length: string;
    released: Date;
    metaData: MetaData;

}
