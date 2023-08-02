import { MouseEventHandler } from "react";
import { Step } from "../module/model/Masterdata.model";

export interface BtnCallBackProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface GetDataCallBackProps {
    getStepCallBack: (step : Step) => void;
    getUrlCallBack: (url : string) => void;
} 
