import Konva from 'konva';
import { FILTERS } from "../enums/Filters";

export const getFilterProps = (filter) => {
    const obj = {};
    switch(filter) {
        case FILTERS.BLACK_AND_WHITE: 
            obj.filters = [Konva.Filters.Grayscale];
            break;
        case FILTERS.BLUR:
            obj.filters = [Konva.Filters.Blur];
            obj.blurRadius = 5;
            break;
        case FILTERS.INVERT:
            obj.filters = [Konva.Filters.Invert];
            break;
        case FILTERS.SEPIA:
            obj.filters = [Konva.Filters.Sepia];
            break;
        default: 
            break;
    }

    return obj;

}