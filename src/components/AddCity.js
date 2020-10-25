import React, {useState} from "react";
import {Button} from "react-bootstrap";

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
            <form
                onSubmit={(e) => onSubmit(e)}
                className="add-city__form"
            >
                <label
                    htmlFor="city"
                    className="add-city__form_label"
                >
                    Enter city name:
                </label>
                <input
                    name="city"
                    id="city"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e)}
                    className="add-city__form_input form-control"
                />
                <Button
                    variant="primary"
                    disabled={value === ''}
                    type="submit"
                    className="add-city__form_submit"
                >
                    Save
                </Button>
            </form>
        </div>
    )
};

export default AddCity;