import {Category} from '../model/category';

interface ICreateCategoryDTO{
    name: string,
    description: string;
}
export {ICreateCategoryDTO}

interface ICategoriesRepository{
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}
export {ICategoriesRepository}