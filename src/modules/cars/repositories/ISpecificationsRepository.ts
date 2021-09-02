import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}
export {ICreateSpecificationDTO};

interface ISpecificationsRepository{
    create({name, description}: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}
export { ISpecificationsRepository };
