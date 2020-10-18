import React, {useState} from "react";

const AddCity = (props) => {

    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(value);
        setValue('');
    };

    return (
        <div className="add-city">
            <form onSubmit={(e) => onSubmit(e)}>
                <label
                    htmlFor="city"
                >
                    Enter city name:
                </label>
                <input
                    name="city"
                    id="city"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e)}
                />
                 <button
                    type="submit"
                 >
                    Save
                 </button>
            </form>
        </div>
    )
};

export default AddCity;