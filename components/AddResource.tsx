'use client';
import { useState } from "react";
import Overlay from "./Overlay";
import AddResourceForm from "./AddResourceForm";
import AddResourceBtn from "./AddResourceBtn";

const AddResource = () => {
    const [openForm, setOpenForm] = useState(false);

  return (
    <>
        <div className='flex justify-end'>
            
           <AddResourceBtn setOpenForm={setOpenForm} />

        </div>

        <div className={`w-12/13 flex flex-row justify-center
                        fixed top-8 z-30
                        ${openForm? '' : 'opacity-0 pointer-events-none'} duration-200 ease-out`}
        >

            <AddResourceForm openForm={openForm} setOpenForm={setOpenForm}/>

        </div>

        <Overlay statefulVar={openForm} func={setOpenForm}/>
    </>
  )
}

export default AddResource