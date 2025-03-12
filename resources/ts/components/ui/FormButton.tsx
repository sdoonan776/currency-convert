import {JSX} from 'react';


interface FormButtonProps {
    name: string
}

function FormButton(props: FormButtonProps): JSX.Element
{
    return (
        <>
            <button className="bg-blue-400 w-full py-2 px-4 text-white transition ease-in-out duration-300 rounded mt-4 cursor-pointer hover:bg-blue-700" type="submit">
                { props.name }
            </button>
        </>
    );

}

export default FormButton;