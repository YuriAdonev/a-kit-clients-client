import {FC} from "react";
import {useSelector} from "react-redux";
import {getAnalogDescCurrentForm} from "../analog-desc.selectors";
import {AnalogDescFormStead} from "./analog-desc-form-stead";
import {AnalogDescFormPremises} from "./analog-desc-form-premises";
import {AnalogDescFormDistribution} from "./analog-desc-form-distribution";
import {AnalogDescFormCommunications} from "./analog-desc-form-communications";
import {AnalogDescFormCadastral} from "./analog-desc-form-cadastral";

export const AnalogDescForm: FC = () => {
  const currentForm = useSelector(getAnalogDescCurrentForm)

  return (
    <div className="analog-desc-form">
      <div className="analog-desc-form__wrap">
        {currentForm === 'stead' && <AnalogDescFormStead />}
        {currentForm === 'structureOfPremises' && <AnalogDescFormPremises />}
        {currentForm === 'areaDistribution' && <AnalogDescFormDistribution />}
        {currentForm === 'communications' && <AnalogDescFormCommunications />}
        {currentForm === 'cadastralNumber' && <AnalogDescFormCadastral />}
      </div>
    </div>
  )
}
