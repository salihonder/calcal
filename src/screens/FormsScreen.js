import MeasureText from "../components/MeasureText";
import SelectBox from "../components/SelectBox";


const FormsScreen = () => <div id="forms">
    <MeasureText label="Age" />
    <MeasureText label="Height" kgcm="cm" />
    <MeasureText label="Weight" kgcm="kg" />
    <SelectBox />
</div>

export default FormsScreen;