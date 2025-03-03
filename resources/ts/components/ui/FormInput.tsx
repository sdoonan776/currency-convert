import {ChangeEvent, JSX} from 'react';

interface FormInputProps {
   type: string;
   placeholder: string;
   amount: number | null | undefined;
   label: string;
}
function FormInput(props: FormInputProps): JSX.Element {
    return (
       <>
           <div className="flex flex-col">
                <label className="my-2 mx-1">{props.label}</label>
                <input className="border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 " type={props.type} placeholder={props.placeholder} onChange={(e: ChangeEvent<HTMLInputElement>) => props.amount = Number(e.target.value)}/>
           </div>
       </>
    );
}

export default FormInput;