import react from "react";
import { Collapse } from "react-collapse";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
const AccordionItem=({open,toggle,title,desc})=>
{
return(
    <div className="pt-[10px]">
        <div className="bg-white py-5 px-4 flex justify-between items-center cursor-pointer" onClick={toggle}>
<p className="text-2xl font-semibold">{title}</p>
<div>
    {open?<AiOutlineMinus/>:<AiOutlinePlus/>}
</div>

        </div>
        <Collapse isOpened={open}>
            <div className="bg-white px-8 pb-4">
                {desc}
            </div>
        </Collapse>
     
    </div>
)
};

export default AccordionItem;