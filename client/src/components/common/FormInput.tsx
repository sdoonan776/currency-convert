import {ChangeEvent, JSX} from 'react';

interface FormInputProps {
   type: string;
   placeholder: string;
   setAmount(amount: number): void;
}
function FormInput(props: FormInputProps): JSX.Element {
    return (
       <>
           <div>
               <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " type={props.type} placeholder={props.placeholder} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setAmount(Number(e.target.value))}/>
           </div>
       </>
    );
}

export default FormInput;