import { ResponseModel } from "./responseModel";

export interface LinkResponseModel<T> extends ResponseModel{
    data:T[];
}